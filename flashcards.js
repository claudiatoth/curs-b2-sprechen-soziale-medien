// ============================================
// FLASHCARDS - Sprechen B2: Soziale Medien (Eltern vs. Jugendliche)
// Claudia Toth · 32 carduri
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === Platforme & acțiuni (5) ===
    { de: "die Plattform / das soziale Netzwerk", ro: "platforma / rețeaua socială · TikTok, Instagram, Facebook etc.", audio: "audio/letters/plattform.wav" },
    { de: "der Beitrag / der Post", ro: "postarea · ce încarci pe profilul tău", audio: "audio/letters/beitrag.wav" },
    { de: "der Follower", ro: "urmăritorul · cine te urmărește pe rețea", audio: "audio/letters/follower.wav" },
    { de: "scrollen", ro: "a derula · a parcurge feed-ul fără sfârșit", audio: "audio/letters/scrollen.wav" },
    { de: "die Nachricht schreiben", ro: "a scrie un mesaj · variantă FORMALĂ pentru chatten", audio: "audio/letters/nachricht-schreiben.wav" },

    // === PRO adolescent (6) ===
    { de: "mit Freunden in Kontakt bleiben", ro: "a păstra legătura cu prietenii · argument cheie al adolescentului", audio: "audio/letters/in-kontakt-bleiben.wav" },
    { de: "sich vernetzen", ro: "a se conecta / a face networking · vocabular de carieră B2", audio: "audio/letters/sich-vernetzen.wav" },
    { de: "kreativ sein", ro: "a fi creativ · TikTok, YouTube — platformă pentru exprimare proprie", audio: "audio/letters/kreativ-sein.wav" },
    { de: "Trends folgen", ro: "a urmări trenduri · cuvânt cheie al culturii adolescente", audio: "audio/letters/trends-folgen.wav" },
    { de: "sich selbst darstellen", ro: "a se exprima public / a-și face un brand · Selbstdarstellung", audio: "audio/letters/selbst-darstellen.wav" },
    { de: "Alle meine Freunde haben das!", ro: "Toți prietenii mei au asta! · replica clasică a adolescentului", audio: "audio/letters/alle-freunde.wav" },

    // === CONTRA părinte (8) ===
    { de: "die Sucht", ro: "dependența · cea mai mare îngrijorare a părinților", audio: "audio/letters/sucht.wav" },
    { de: "süchtig sein nach...", ro: "a fi dependent de... · süchtig + nach + Dat.", audio: "audio/letters/suechtig-nach.wav" },
    { de: "die Bildschirmzeit", ro: "timpul pe ecran · termen oficial al cercetărilor pediatrice", audio: "audio/letters/bildschirmzeit.wav" },
    { de: "die Schule leidet darunter", ro: "școala are de suferit din cauza asta · structura passiv leiden + darunter", audio: "audio/letters/schule-leidet.wav" },
    { de: "der Datenschutz", ro: "protecția datelor · termen juridic UE — GDPR", audio: "audio/letters/datenschutz.wav" },
    { de: "das Cybermobbing", ro: "cyberbullying-ul · fenomen tot mai dese în rândul adolescenților", audio: "audio/letters/cybermobbing.wav" },
    { de: "der ständige Vergleich", ro: "compararea constantă · efectul Instagram pe self-esteem", audio: "audio/letters/staendiger-vergleich.wav" },
    { de: "das Selbstwertgefühl leidet", ro: "stima de sine are de suferit · efect documentat al rețelelor", audio: "audio/letters/selbstwertgefuehl.wav" },

    // === Reguli & limite (5) ===
    { de: "die Bildschirmzeit begrenzen", ro: "a limita timpul pe ecran · cea mai concretă regulă a părintelui", audio: "audio/letters/zeit-begrenzen.wav" },
    { de: "handyfreie Zonen", ro: "zone fără telefon · de exemplu la masă, în dormitor", audio: "audio/letters/handyfrei.wav" },
    { de: "vor dem Schlafen ausschalten", ro: "a opri înainte de somn · ecrane = mai puțin somn de calitate", audio: "audio/letters/vor-schlafen.wav" },
    { de: "Hausaufgaben zuerst", ro: "temele întâi · regula clasică MAI ÎNTÂI MUNCA APOI DISTRACȚIA", audio: "audio/letters/hausaufgaben-zuerst.wav" },
    { de: "die Eltern-Kontrolle / die Kindersicherung", ro: "controlul parental / restricționarea · setări pe telefon/computer", audio: "audio/letters/eltern-kontrolle.wav" },

    // === Soluții & compromis (4) ===
    { de: "einen Kompromiss finden", ro: "a găsi un compromis · cuvânt cheie B2 pentru negociere", audio: "audio/letters/kompromiss.wav" },
    { de: "das Vertrauen aufbauen", ro: "a construi încrederea · alternativă mai matură la control strict", audio: "audio/letters/vertrauen.wav" },
    { de: "einen Digital-Detox machen", ro: "a face un detox digital · weekend/vacanță fără telefoane", audio: "audio/letters/digital-detox.wav" },
    { de: "bewusst und maßvoll nutzen", ro: "a folosi conștient și cu măsură · obiectivul realist al educației", audio: "audio/letters/bewusst-nutzen.wav" },

    // === Expresii pentru dialog (4) ===
    { de: "Ich mache mir große Sorgen um dich.", ro: "Îmi fac mari griji pentru tine. · replica deschidere PĂRINTE", audio: "audio/letters/sorgen-um-dich.wav" },
    { de: "Du verstehst das nicht!", ro: "Tu nu înțelegi! · replica clasică ADOLESCENT", audio: "audio/letters/du-verstehst-nicht.wav" },
    { de: "Lass uns einen Kompromiss finden.", ro: "Hai să găsim un compromis. · invitație la negociere matură", audio: "audio/letters/lass-uns-kompromiss.wav" },
    { de: "Was hältst du davon, wenn...?", ro: "Ce părere ai dacă...? · introducere propunere concretă", audio: "audio/letters/was-haeltst-du.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint">Click oriunde pentru a vedea traducerea</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" id="prev-btn" onclick="prevCard()">← Anterior</button>
            <button class="flashcard-btn" id="next-btn" onclick="nextCard()">Următor →</button>
        </div>
    `;
    showCard(0);
}

function showCard(index) {
    currentCardIndex = index;
    const card = flashcardsData[index];
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    document.getElementById('card-num').textContent = index + 1;
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === flashcardsData.length - 1;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) showCard(currentCardIndex + 1);
}

function prevCard() {
    if (currentCardIndex > 0) showCard(currentCardIndex - 1);
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(() => {});
}

buildFlashcards();
