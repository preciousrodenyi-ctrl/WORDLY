const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");

// BETTER: use existing div in HTML instead of creating one
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const word = input.value.trim();

    // ✅ handle empty input
    if (!word) {
        resultDiv.innerHTML = `<p class="error">Please enter a word</p>`;
        return;
    }

    resultDiv.innerHTML = "Loading...";

    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!res.ok) throw new Error();

        const data = await res.json();
        const entry = data[0];

        // ✅ phonetic
        const phonetic = entry.phonetic || "N/A";

        // ✅ audio safe check
        let audioSrc = "";
        if (entry.phonetics && entry.phonetics.length > 0) {
            const audioObj = entry.phonetics.find(p => p.audio);
            if (audioObj) audioSrc = audioObj.audio;
        }

        // 🔊 auto-play
        if (audioSrc) {
            new Audio(audioSrc).play();
        }

        // ✅ meanings
        let meaningsHTML = "";
        entry.meanings.forEach(meaning => {
            meaningsHTML += `
                <div class="meaning-block">
                    <h3>${meaning.partOfSpeech}</h3>
                    ${meaning.definitions.slice(0,2).map(def => `
                        <p>👉 ${def.definition}</p>
                        ${def.example ? `<p class="example">💡 ${def.example}</p>` : ""}
                    `).join("")}
                </div>
            `;
        });

        // ✅ synonyms
        let synonyms = [];
        entry.meanings.forEach(m => {
            if (m.synonyms) synonyms.push(...m.synonyms);
        });

        const synonymsHTML = synonyms.length
            ? `<p><strong>Synonyms:</strong> ${synonyms.slice(0,5).join(", ")}</p>`
            : `<p>No synonyms available</p>`;

        resultDiv.innerHTML = `
            <div class="word">${entry.word}</div>
            <div class="phonetic">/${phonetic}/</div>

            ${audioSrc ? `<audio controls src="${audioSrc}"></audio>` : ""}

            ${meaningsHTML}
            ${synonymsHTML}

            <button onclick="saveWord('${entry.word}')">⭐ Save</button>
        `;

    } catch {
        resultDiv.innerHTML = `<div class="error">Word not found 😢</div>`;
    }
});


// ✅ SAVE WORD FEATURE
function saveWord(word) {
    let saved = JSON.parse(localStorage.getItem("savedWords")) || [];

    if (!saved.includes(word)) {
        saved.push(word);
        localStorage.setItem("savedWords", JSON.stringify(saved));
    }

    alert("Saved!");
}