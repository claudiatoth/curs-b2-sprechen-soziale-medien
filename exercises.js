// ============================================
// EXERCIȚII - Sprechen B2: Soziale Medien (Eltern vs. Jugendliche)
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'der Beitrag', correct: 'postarea', accept: ['postarea', 'postare', 'postul', 'mesajul postat'] },
    { id: 'b', de: 'scrollen', correct: 'a derula', accept: ['a derula', 'derula', 'a scrola', 'scrola'] },
    { id: 'c', de: 'die Sucht', correct: 'dependența', accept: ['dependența', 'dependenta', 'dependență', 'adicția'] },
    { id: 'd', de: 'die Bildschirmzeit', correct: 'timpul pe ecran', accept: ['timpul pe ecran', 'timp pe ecran', 'timpul petrecut pe ecran'] },
    { id: 'e', de: 'das Cybermobbing', correct: 'cyberbullying-ul', accept: ['cyberbullying-ul', 'cyberbullying', 'cybermobbing', 'cybermobbingul', 'hărțuirea online', 'hartuirea online'] },
    { id: 'f', de: 'der Datenschutz', correct: 'protecția datelor', accept: ['protecția datelor', 'protectia datelor'] },
    { id: 'g', de: 'einen Kompromiss finden', correct: 'a găsi un compromis', accept: ['a găsi un compromis', 'a gasi un compromis', 'a găsi compromis', 'a gasi compromis'] },
    { id: 'h', de: 'das Vertrauen aufbauen', correct: 'a construi încrederea', accept: ['a construi încrederea', 'a construi increderea', 'a construi incredere'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'platforma / rețeaua socială', correct: 'die Plattform / das soziale Netzwerk', accept: ['die plattform', 'plattform', 'das soziale netzwerk', 'soziale netzwerk', 'die plattform das soziale netzwerk'] },
    { id: 'b', ro: 'urmăritorul', correct: 'der Follower', accept: ['der follower', 'follower'] },
    { id: 'c', ro: 'a fi dependent de telefon', correct: 'süchtig nach dem Handy sein', accept: ['süchtig nach dem handy sein', 'suechtig nach dem handy sein', 'süchtig sein nach handy', 'suechtig sein nach handy'] },
    { id: 'd', ro: 'a limita timpul pe ecran', correct: 'die Bildschirmzeit begrenzen', accept: ['die bildschirmzeit begrenzen', 'bildschirmzeit begrenzen'] },
    { id: 'e', ro: 'compararea constantă', correct: 'der ständige Vergleich', accept: ['der ständige vergleich', 'ständige vergleich', 'der staendige vergleich', 'staendige vergleich'] },
    { id: 'f', ro: 'a construi încrederea', correct: 'das Vertrauen aufbauen', accept: ['das vertrauen aufbauen', 'vertrauen aufbauen'] },
    { id: 'g', ro: 'a face un detox digital', correct: 'einen Digital-Detox machen', accept: ['einen digital-detox machen', 'digital-detox machen', 'einen digital detox machen', 'digital detox machen'] },
    { id: 'h', ro: 'controlul parental', correct: 'die Eltern-Kontrolle', accept: ['die eltern-kontrolle', 'eltern-kontrolle', 'die eltern kontrolle', 'die kindersicherung', 'kindersicherung'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#6b7280; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția (substantive cheie)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Jugendliche verbringen oft mehrere Stunden täglich auf ____ wie TikTok und Instagram.', translation: 'Adolescenții petrec deseori mai multe ore pe zi pe platforme ca TikTok și Instagram.', correct: 'Plattformen', accept: ['plattformen', 'sozialen netzwerken'] },
    { id: 'b', sentence: 'Anna hat schon über 5000 ____ auf Instagram.', translation: 'Anna are deja peste 5000 de urmăritori pe Instagram.', correct: 'Follower', accept: ['follower'] },
    { id: 'c', sentence: 'Viele Eltern haben Angst, dass ihre Kinder ____ nach dem Handy werden.', translation: 'Mulți părinți se tem că copiii lor devin dependenți de telefon.', correct: 'süchtig', accept: ['süchtig', 'suechtig'] },
    { id: 'd', sentence: 'Die ____ der Jugendlichen liegt bei durchschnittlich 4 Stunden pro Tag.', translation: 'Timpul pe ecran al adolescenților este în medie 4 ore pe zi.', correct: 'Bildschirmzeit', accept: ['bildschirmzeit'] },
    { id: 'e', sentence: 'Wenn ich zu viel scrolle, leidet meine ____ in der Schule.', translation: 'Dacă derulez prea mult, suferă concentrarea mea la școală.', correct: 'Konzentration', accept: ['konzentration'] },
    { id: 'f', sentence: 'Der ständige ____ mit anderen ist schlecht für das Selbstwertgefühl.', translation: 'Compararea constantă cu alții este rea pentru stima de sine.', correct: 'Vergleich', accept: ['vergleich'] },
    { id: 'g', sentence: 'Wir müssen ____ Regeln festlegen, damit es funktioniert.', translation: 'Trebuie să stabilim reguli comune ca să funcționeze.', correct: 'gemeinsame', accept: ['gemeinsame', 'gemeinsam'] },
    { id: 'h', sentence: 'Beim Essen sollte das Handy ____ sein.', translation: 'La masă telefonul ar trebui să fie oprit.', correct: 'ausgeschaltet', accept: ['ausgeschaltet', 'aus'] },
    { id: 'i', sentence: 'Ein ____ am Wochenende ist gesund — kein Handy, nur reale Aktivitäten.', translation: 'Un detox digital la sfârșit de săptămână este sănătos — fără telefon, doar activități reale.', correct: 'Digital-Detox', accept: ['digital-detox', 'digital detox'] },
    { id: 'j', sentence: 'Eltern müssen das ____ ihrer Kinder schützen — Datenschutz ist wichtig.', translation: 'Părinții trebuie să protejeze intimitatea copiilor lor — protecția datelor este importantă.', correct: 'Privatleben', accept: ['privatleben', 'privatsphäre', 'privatsphaere'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează propoziția cu cuvântul potrivit din vocabular.</strong><br>
            Folosește substantivele/verbele învățate. Atenție la genul și forma corectă.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="cuvântul potrivit...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Reconstruiește dialogul (Părinte vs. Adolescent)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Mutter: Du, ich mache mir große ____ — du bist nur noch am Handy.', translation: 'Mamă: Tu, îmi fac mari griji — ești numai pe telefon.', correct: 'Sorgen', accept: ['sorgen'] },
    { id: 'b', sentence: 'Tochter: Aber Mama, alle meine ____ haben das! Ich verpasse alles!', translation: 'Fiică: Dar mamă, toți prietenii mei au asta! Ratez totul!', correct: 'Freunde', accept: ['freunde'] },
    { id: 'c', sentence: 'Mutter: Hast du an deine ____ gedacht? Deine Noten sind schlechter geworden.', translation: 'Mamă: Te-ai gândit la școală? Notele tale s-au înrăutățit.', correct: 'Schule', accept: ['schule'] },
    { id: 'd', sentence: 'Tochter: Du ____ das nicht! Auf Instagram findet mein soziales Leben statt.', translation: 'Fiică: Tu nu înțelegi! Pe Instagram se desfășoară viața mea socială.', correct: 'verstehst', accept: ['verstehst'] },
    { id: 'e', sentence: 'Mutter: An deiner ____ würde ich weniger scrollen und mehr schlafen.', translation: 'Mamă: În locul tău, eu aș derula mai puțin și aș dormi mai mult.', correct: 'Stelle', accept: ['stelle'] },
    { id: 'f', sentence: 'Tochter: Lass mir wenigstens etwas ____! Ich bin 15, kein Kind mehr!', translation: 'Fiică: Lasă-mi măcar puțină libertate! Am 15 ani, nu mai sunt copil!', correct: 'Freiheit', accept: ['freiheit'] },
    { id: 'g', sentence: 'Mutter: Du hast recht. Lass uns einen ____ finden.', translation: 'Mamă: Ai dreptate. Hai să găsim un compromis.', correct: 'Kompromiss', accept: ['kompromiss'] },
    { id: 'h', sentence: 'Tochter: ____ hältst du davon, wenn ich nach 22 Uhr das Handy ausschalte?', translation: 'Fiică: Ce părere ai dacă opresc telefonul după 22:00?', correct: 'Was', accept: ['was'] },
    { id: 'i', sentence: 'Mutter: Das klingt gut. Beim Essen bleibt das Handy in der ____.', translation: 'Mamă: Sună bine. La masă telefonul rămâne în sertar/zona dedicată.', correct: 'Schublade', accept: ['schublade', 'tasche', 'box', 'zone'] },
    { id: 'j', sentence: 'Tochter: Einverstanden. ____ können wir das gemeinsam besprechen — ohne Streit.', translation: 'Fiică: De acord. Așa putem să discutăm împreună — fără ceartă.', correct: 'So', accept: ['so'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Dialog: Mamă (părinte) ↔ Fiică (adolescent) — negociere pentru reguli realiste.</strong><br>
            Completează cuvântul lipsă pentru a reconstrui dialogul natural.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="cuvântul lipsă...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Expresia potrivită pentru rolul/funcția dată
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'PĂRINTE — vrei să exprimi grijă: „Ich mache mir große ____ um dich."', translation: 'Îmi fac mari griji pentru tine.', correct: 'Sorgen', accept: ['sorgen'] },
    { id: 'b', sentence: 'PĂRINTE — vrei să sugerezi politicos: „An ____ Stelle würde ich weniger scrollen."', translation: 'În locul tău, eu aș derula mai puțin.', correct: 'deiner', accept: ['deiner'] },
    { id: 'c', sentence: 'ADOLESCENT — vrei să te aperi: „Du ____ das nicht!"', translation: 'Tu nu înțelegi!', correct: 'verstehst', accept: ['verstehst'] },
    { id: 'd', sentence: 'ADOLESCENT — invoci grupul: „Aber alle meine ____ haben das!"', translation: 'Dar toți prietenii mei au asta!', correct: 'Freunde', accept: ['freunde'] },
    { id: 'e', sentence: 'ADOLESCENT — ceri încredere: „____ mir mal!"', translation: 'Ai încredere în mine!', correct: 'Vertrau', accept: ['vertrau'] },
    { id: 'f', sentence: 'AMBII — propui compromis: „Lass uns einen ____ finden."', translation: 'Hai să găsim un compromis.', correct: 'Kompromiss', accept: ['kompromiss'] },
    { id: 'g', sentence: 'AMBII — introduci propunere concretă: „Was hältst du ____, wenn ich nach 22 Uhr offline gehe?"', translation: 'Ce părere ai dacă mă deconectez după 22:00?', correct: 'davon', accept: ['davon'] },
    { id: 'h', sentence: 'AMBII — concluzie matură: „Wir können das ____ besprechen — ohne Streit."', translation: 'Putem să discutăm asta împreună — fără ceartă.', correct: 'gemeinsam', accept: ['gemeinsam'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Folosește expresia potrivită pentru rolul (PĂRINTE / ADOLESCENT / AMBII) și funcția dată.</strong><br>
            Aceste expresii sunt esențiale pentru a structura un dialog argumentat la nivel B2.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="expresia potrivită...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
