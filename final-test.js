// ============================================
// TEST FINAL - Sprechen B2: Soziale Medien (Eltern vs. Jugendliche)
// Claudia Toth · 15 întrebări
// ============================================

function normalizeTestAnswer(str) {
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
        .replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // === 4× Vocabular cheie ===
    { type: 'luckentext', category: '📝 Vocabular', question: 'Tradu în germană:', sentence: 'timpul pe ecran', translation: 'Hint: Bildschirm + Zeit', accept: ['die bildschirmzeit', 'bildschirmzeit'], correct: 'die Bildschirmzeit', explanation: 'die Bildschirmzeit — termen oficial pentru timpul petrecut zilnic pe ecrane. Indicator cheie folosit de pediatri.' },
    { type: 'multiple', category: '📝 Vocabular', question: 'Ce înseamnă „der Follower"?', options: ['prietenul', 'cititorul', 'urmăritorul (pe rețea)', 'comentatorul'], correct: 'urmăritorul (pe rețea)', explanation: 'der Follower = persoană care urmărește profilul tău pe social media. Substantiv masculin împrumutat din engleză.' },
    { type: 'luckentext', category: '📝 Vocabular', question: 'Tradu în germană:', sentence: 'dependența', translation: 'Hint: substantiv feminin terminat în -t', accept: ['die sucht', 'sucht'], correct: 'die Sucht', explanation: 'die Sucht — cuvântul cheie al îngrijorărilor părintești. Combinații: Handysucht, Internetsucht, Spielsucht.' },
    { type: 'multiple', category: '📝 Vocabular', question: 'Ce înseamnă „der Datenschutz"?', options: ['stocarea datelor', 'protecția datelor', 'pierderea datelor', 'transferul datelor'], correct: 'protecția datelor', explanation: 'der Datenschutz — termen juridic UE (GDPR). Esențial pentru orice discuție despre intimitate online.' },

    // === 4× PRO/CONTRA (perspectivă inter-generațională) ===
    { type: 'multiple', category: '⚖️ PRO/CONTRA', question: 'Care e argument tipic PRO al adolescentului?', options: ['Die Schule leidet darunter.', 'Cybermobbing ist ein Problem.', 'Alle meine Freunde haben das!', 'Du sollst weniger scrollen.'], correct: 'Alle meine Freunde haben das!', explanation: 'Cea mai frecventă replică a adolescentului — invocă grupul de prieteni ca argument decisiv.' },
    { type: 'multiple', category: '⚖️ PRO/CONTRA', question: 'Care e îngrijorare tipică a părintelui?', options: ['Du sollst mehr posten.', 'Mehr Follower wären gut.', 'Du verbringst zu viel Zeit am Handy.', 'TikTok ist toll.'], correct: 'Du verbringst zu viel Zeit am Handy.', explanation: 'Replica tipică a părintelui — focus pe Bildschirmzeit, prima îngrijorare cantitativă.' },
    { type: 'luckentext', category: '⚖️ PRO/CONTRA', question: 'Completează îngrijorarea părintelui:', sentence: 'Der ständige ____ mit anderen schadet dem Selbstwertgefühl.', translation: 'Compararea constantă cu alții dăunează stimei de sine.', accept: ['vergleich'], correct: 'Vergleich', explanation: 'Efect documentat al rețelelor sociale: ständiger Vergleich (mai ales Instagram) → reduce Selbstwertgefühl.' },
    { type: 'multiple', category: '⚖️ PRO/CONTRA', question: 'Care e o regulă tipică propusă de părinți?', options: ['Beim Essen das Handy benutzen.', 'Vor dem Schlafen das Handy ausschalten.', 'Mehr TikTok schauen.', 'Keine Regeln nötig.'], correct: 'Vor dem Schlafen das Handy ausschalten.', explanation: 'Regula cheie: ecranele înainte de somn = mai puțin somn de calitate. Recomandată de toți pediatrii.' },

    // === 4× Expresii pentru dialog ===
    { type: 'multiple', category: '💬 Expresii dialog', question: 'PĂRINTE: cum exprimi cel mai natural îngrijorare?', options: ['Egal!', 'Ich mache mir große Sorgen um dich.', 'Mach was du willst.', 'Kein Problem.'], correct: 'Ich mache mir große Sorgen um dich.', explanation: 'Formulă B2 clasică: sich Sorgen machen um + Akkusativ. Deschiderea diplomatică a unui dialog despre limite.' },
    { type: 'luckentext', category: '💬 Expresii dialog', question: 'ADOLESCENT — cere libertate:', sentence: 'Lass mir wenigstens etwas ____!', translation: 'Lasă-mi măcar puțină libertate!', accept: ['freiheit'], correct: 'Freiheit', explanation: 'Argumentul autonomiei — folosește „wenigstens" (măcar) pentru a cere minimul acceptabil.' },
    { type: 'multiple', category: '💬 Expresii dialog', question: 'AMBII — cum propui un compromis?', options: ['Es ist mir egal.', 'Lass uns einen Kompromiss finden.', 'Ich gewinne immer.', 'Du musst gehorchen.'], correct: 'Lass uns einen Kompromiss finden.', explanation: '„Lass uns + Infinitiv" = invitație la acțiune comună. Cuvântul cheie Kompromiss = soluție matură B2.' },
    { type: 'luckentext', category: '💬 Expresii dialog', question: 'Completează propunerea concretă:', sentence: 'Was hältst du ____, wenn ich nach 22 Uhr offline gehe?', translation: 'Ce părere ai dacă mă deconectez după 22:00?', accept: ['davon'], correct: 'davon', explanation: '„Was hältst du davon, wenn...?" = formulă fixă pentru a propune o idee. Pronume da- + von (de la halten).' },

    // === 3× Aplicare în context ===
    { type: 'multiple', category: '🎯 Context', question: 'Care e replica naturală a adolescentului la „Du verbringst zu viel Zeit am Handy"?', options: ['Du hast recht, Mama.', 'Mama, du verstehst das nicht — alle meine Freunde sind dort!', 'Egal.', 'Ich gehe schlafen.'], correct: 'Mama, du verstehst das nicht — alle meine Freunde sind dort!', explanation: 'Reacție tipică inter-generațională: apărarea identității prin grupul de prieteni. Combinație clasică „du verstehst das nicht" + „alle meine Freunde".' },
    { type: 'luckentext', category: '🎯 Context', question: 'Completează soluția compromis:', sentence: 'Wir können das ____ besprechen — ohne Streit.', translation: 'Putem să discutăm asta împreună — fără ceartă.', accept: ['gemeinsam'], correct: 'gemeinsam', explanation: '„gemeinsam besprechen" = discuție matură, fără autoritarism. Cuvânt cheie B2 pentru rezolvare diplomatică.' },
    { type: 'multiple', category: '🎯 Context', question: 'Care e abordarea matură pentru un părinte îngrijorat?', options: ['Ein totales Handy-Verbot durchsetzen.', 'Das Handy konfiszieren.', 'Gemeinsam Regeln festlegen und Vertrauen aufbauen.', 'Den Internet-Anschluss kündigen.'], correct: 'Gemeinsam Regeln festlegen und Vertrauen aufbauen.', explanation: 'Educație matură B2: Verbote (interdicții) au efect contraproductiv → folosește Vertrauen + Kompromiss + gemeinsame Regeln.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre vocabularul Soziale Medien (Eltern vs. Jugendliche) + expresii dialog B2.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 8-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => { if (r.value === userAnswers[index].answer) r.checked = true; });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) finishTest();
    else { currentQuestionIndex++; showQuestion(currentQuestionIndex); scrollToTest(); }
}
function prevQuestion() {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); scrollToTest(); }
}
function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k];
        const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none';
    r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la vocabular</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la vocabular</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) { t.classList.add('active'); if (a) a.classList.add('rotated'); }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
