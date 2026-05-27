// ============================================
// VOCABULAR - Sprechen B2: Soziale Medien (Technologie & Internet)
// Tema: Eltern vs. Jugendliche — câtă internet/rețele sociale pentru adolescenți?
// Claudia Toth · Vocabular bilingv pentru dialog pe perechi B2
// ============================================

const theoryHTML = `
    <!-- 0: Intro + roluri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Tema dialogului + roluri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="theory-box">
                <h4>📱 Tema: „Wie viel Internet und soziale Medien für Jugendliche?"</h4>
                <p>Adolescenții din Germania petrec în medie <strong>3-5 ore pe zi</strong> pe telefon (TikTok, Instagram, YouTube, gaming). Părinții se îngrijorează: dependență, mai puțin somn, scăderea performanței școlare, Cybermobbing. Adolescenții se apără: „toți prietenii mei sunt acolo", „acolo se întâmplă viața mea".</p>
                <p>Voi sunteți <strong>părinte și adolescent (mamă/tată ↔ fiică/fiu de 14-16 ani)</strong> care discutați la masă despre folosirea telefonului și a rețelelor sociale. Părintele propune reguli, adolescentul își apără libertatea. Încercați să găsiți un compromis.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>👥 Roluri</h4>
                <table class="grammar-table">
                    <tr><th>Cursant</th><th>Rol</th><th>Argumente principale</th></tr>
                    <tr><td><strong>Cursant A</strong></td><td>👨‍👩 <strong>Părintele</strong> (Mutter/Vater)</td><td>îngrijorat de Bildschirmzeit, somn, școală, Cybermobbing, falsche Vorbilder, Datenschutz · propune reguli + limite</td></tr>
                    <tr><td><strong>Cursant B</strong></td><td>🧑‍🎓 <strong>Adolescentul</strong> (Sohn/Tochter)</td><td>„alle meine Freunde haben das", se simte autonom, vrea libertate, beneficiile (Vernetzung, kreativ sein, Karriere ca Influencer)</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>📌 Ce conține acest material</h4>
                <ul style="margin-left: 18px;">
                    <li>7 secțiuni de vocabular bilingv DE → RO (~60 termeni)</li>
                    <li>5 exerciții de fixare (traducere DE↔RO + completare + dialog părinte↔copil)</li>
                    <li>32 flashcards cu pronunție Hedda</li>
                    <li>Test final cu 15 întrebări mixte</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔤 Tipologia vocabularului B2 — Sg/Pl orientativ</h4>
                <p>La nivelul B2, substantivele din tabelele de mai jos sunt majoritar <strong>concepte digitale</strong> sau <strong>fenomene sociale</strong>. Iată tipologia:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>Concepte sg tantum</strong>: <em>das Internet, die Privatsphäre, die Anonymität, die Vernetzung, die Digitalisierung</em></li>
                    <li><strong>Substantive concrete cu plural</strong>: <em>der Beitrag · die Beiträge</em> · <em>der Kommentar · die Kommentare</em> · <em>das Profil · die Profile</em> · <em>der Algorithmus · die Algorithmen</em> · <em>der Follower · die Follower</em> (pl identic)</li>
                    <li><strong>Substantive deja la plural</strong>: <em>die sozialen Medien, die Fake News</em></li>
                    <li><strong>Colocații verbale</strong>: „einen Beitrag posten", „in der Bubble leben" — formule fixe</li>
                </ul>
                <p style="margin-top: 8px;">Pentru substantivele concrete noi, verifică pluralul pe <a href="https://de.pons.com/deklination/deutsch" target="_blank" style="color: #047857;">PONS</a> — la examenul B2, precizia gen+plural face diferența.</p>
            </div>
        </div>
    </div>

    <!-- 1: Platforme & acțiuni de bază -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📱 2. Platforme & acțiuni de bază</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Plattform / das soziale Netzwerk</strong></td><td>platforma / rețeaua socială</td></tr>
                    <tr><td><strong>das Profil</strong></td><td>profilul</td></tr>
                    <tr><td><strong>der Beitrag / der Post</strong></td><td>postarea</td></tr>
                    <tr><td><strong>posten / hochladen</strong></td><td>a posta / a încărca</td></tr>
                    <tr><td><strong>liken</strong></td><td>a da like</td></tr>
                    <tr><td><strong>kommentieren</strong></td><td>a comenta</td></tr>
                    <tr><td><strong>teilen</strong></td><td>a distribui / share</td></tr>
                    <tr><td><strong>der Follower / die Followerin</strong></td><td>urmăritorul / urmăritoarea</td></tr>
                    <tr><td><strong>jemandem folgen</strong></td><td>a urmări pe cineva</td></tr>
                    <tr><td><strong>scrollen</strong></td><td>a derula</td></tr>
                    <tr><td><strong>der Stream / streamen</strong></td><td>transmisia / a difuza live</td></tr>
                    <tr><td><strong>chatten / die Nachricht schreiben</strong></td><td>a sta pe chat / a scrie un mesaj</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Cum folosești la dialog</h4>
                <p>Pentru a deschide subiectul (părinte): <em>„Du verbringst Stunden damit zu scrollen und Posts zu liken. Was bringt dir das eigentlich?"</em> (Petreci ore în șir derulând și dând like-uri. Ce-ți aduce asta de fapt?)</p>
            </div>
        </div>
    </div>

    <!-- 2: PRO Cursant B (adolescent) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>✨ 3. PRO adolescent — argumentele lui Cursant B</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #d1fae5;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>mit Freunden in Kontakt bleiben</strong></td><td>a păstra legătura cu prietenii</td></tr>
                    <tr><td><strong>sich vernetzen</strong></td><td>a se conecta / a face networking</td></tr>
                    <tr><td><strong>sich informieren</strong></td><td>a se informa</td></tr>
                    <tr><td><strong>kreativ sein / sich kreativ ausdrücken</strong></td><td>a fi creativ / a se exprima creativ</td></tr>
                    <tr><td><strong>Trends folgen / Trends entdecken</strong></td><td>a urmări trenduri / a descoperi trenduri</td></tr>
                    <tr><td><strong>sich selbst darstellen</strong></td><td>a se exprima public / a-și face un brand</td></tr>
                    <tr><td><strong>Karrieremöglichkeiten (Influencer, YouTuber)</strong></td><td>oportunități de carieră (influencer, youtuber)</td></tr>
                    <tr><td><strong>Spaß haben / sich entspannen</strong></td><td>a se distra / a se relaxa</td></tr>
                    <tr><td><strong>Alle meine Freunde haben das!</strong></td><td>Toți prietenii mei au asta!</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model (adolescent)</h4>
                <p><em>„Aber Mama, alle meine Freunde sind auf TikTok — wenn ich nicht dabei bin, verpasse ich alles, was wir morgen in der Schule besprechen!"</em></p>
                <p style="color:#6b7280; font-style:italic;">Dar mamă, toți prietenii mei sunt pe TikTok — dacă nu sunt și eu acolo, ratez tot ce vom discuta mâine la școală!</p>
            </div>
        </div>
    </div>

    <!-- 3: CONTRA Cursant A (părinte) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⚠️ 4. CONTRA părinte — îngrijorările lui Cursant A</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #fef3c7;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Sucht / süchtig sein nach...</strong></td><td>dependența / a fi dependent de...</td></tr>
                    <tr><td><strong>die Bildschirmzeit</strong></td><td>timpul petrecut pe ecran</td></tr>
                    <tr><td><strong>die Schule leidet darunter</strong></td><td>școala are de suferit din cauza asta</td></tr>
                    <tr><td><strong>weniger Schlaf bekommen</strong></td><td>a dormi mai puțin</td></tr>
                    <tr><td><strong>der Datenschutz / die Privatsphäre</strong></td><td>protecția datelor / intimitatea</td></tr>
                    <tr><td><strong>das Cybermobbing</strong></td><td>cyberbullying-ul</td></tr>
                    <tr><td><strong>falsche Vorbilder</strong></td><td>modele negative</td></tr>
                    <tr><td><strong>der ständige Vergleich mit anderen</strong></td><td>compararea constantă cu alții</td></tr>
                    <tr><td><strong>das Selbstwertgefühl leidet</strong></td><td>stima de sine are de suferit</td></tr>
                    <tr><td><strong>Fake News / Falschinformationen</strong></td><td>știri false / informații greșite</td></tr>
                    <tr><td><strong>FOMO — Angst, etwas zu verpassen</strong></td><td>FOMO — frica de a rata ceva</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model (părinte)</h4>
                <p><em>„Ich mache mir große Sorgen — du schläfst zu wenig, deine Noten sind schlechter geworden, und du vergleichst dich ständig mit den anderen auf Instagram."</em></p>
                <p style="color:#6b7280; font-style:italic;">Îmi fac mari griji — dormi prea puțin, notele tale s-au înrăutățit, și te compari constant cu alții pe Instagram.</p>
            </div>
        </div>
    </div>

    <!-- 4: Reguli & limite (perspectiva părintelui) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📏 5. Reguli & limite — ce propune părintele</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #dbeafe;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Bildschirmzeit begrenzen</strong></td><td>a limita timpul pe ecran</td></tr>
                    <tr><td><strong>handyfreie Zonen (beim Essen)</strong></td><td>zone fără telefon (la masă)</td></tr>
                    <tr><td><strong>vor dem Schlafen das Handy ausschalten</strong></td><td>a opri telefonul înainte de somn</td></tr>
                    <tr><td><strong>Hausaufgaben zuerst, dann Handy</strong></td><td>temele întâi, apoi telefonul</td></tr>
                    <tr><td><strong>kein Handy in der Schule</strong></td><td>fără telefon la școală</td></tr>
                    <tr><td><strong>die Eltern-Kontrolle / die Kindersicherung</strong></td><td>controlul parental / restricționarea pentru copii</td></tr>
                    <tr><td><strong>klare Regeln vereinbaren</strong></td><td>a stabili reguli clare</td></tr>
                    <tr><td><strong>das Vertrauen aufbauen</strong></td><td>a construi încrederea</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Soluții & compromis -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🤝 6. Soluții & compromis — calea de mijloc</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>einen Kompromiss finden</strong></td><td>a găsi un compromis</td></tr>
                    <tr><td><strong>gemeinsam Regeln festlegen</strong></td><td>a stabili reguli împreună</td></tr>
                    <tr><td><strong>offen miteinander reden</strong></td><td>a vorbi deschis unul cu celălalt</td></tr>
                    <tr><td><strong>ohne Verbote, mit Verständnis</strong></td><td>fără interdicții, cu înțelegere</td></tr>
                    <tr><td><strong>kritisches Denken lehren</strong></td><td>a învăța gândirea critică</td></tr>
                    <tr><td><strong>einen Digital-Detox machen</strong></td><td>a face un detox digital</td></tr>
                    <tr><td><strong>bewusst und maßvoll nutzen</strong></td><td>a folosi conștient și cu măsură</td></tr>
                    <tr><td><strong>das Vorbild der Eltern</strong></td><td>exemplul părinților</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Capcană tipică</h4>
                <p>Mulți părinți folosesc INTERDICȚIA totală (das Verbot) — și aceasta funcționează adesea contraproductiv (efectul „fructul oprit"). Cuvintele cheie B2 pentru o abordare matură: <strong>Vertrauen, Kompromiss, gemeinsam, bewusst</strong>.</p>
            </div>
        </div>
    </div>

    <!-- 6: Expresii pentru dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💬 7. Expresii utile pentru dialog părinte ↔ adolescent</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Părintele exprimă îngrijorare & oferă sfaturi</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Ich mache mir große Sorgen um dich.</strong></td><td>Îmi fac mari griji pentru tine.</td></tr>
                    <tr><td><strong>Du verbringst zu viel Zeit am Handy.</strong></td><td>Petreci prea mult timp pe telefon.</td></tr>
                    <tr><td><strong>Hast du an deine Schule gedacht?</strong></td><td>Te-ai gândit la școală?</td></tr>
                    <tr><td><strong>An deiner Stelle würde ich...</strong></td><td>În locul tău, eu aș...</td></tr>
                    <tr><td><strong>Du musst auch andere Dinge tun.</strong></td><td>Trebuie să faci și alte lucruri.</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Adolescentul se apără</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Aber alle meine Freunde haben das!</strong></td><td>Dar toți prietenii mei au asta!</td></tr>
                    <tr><td><strong>Du verstehst das nicht!</strong></td><td>Tu nu înțelegi!</td></tr>
                    <tr><td><strong>Lass mir wenigstens etwas Freiheit!</strong></td><td>Lasă-mi măcar puțină libertate!</td></tr>
                    <tr><td><strong>Vertrau mir mal!</strong></td><td>Ai încredere în mine!</td></tr>
                    <tr><td><strong>Das ist meine Welt!</strong></td><td>Asta e lumea mea!</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #dbeafe;">
                <h4>Spre compromis</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Lass uns einen Kompromiss finden.</strong></td><td>Hai să găsim un compromis.</td></tr>
                    <tr><td><strong>Was hältst du davon, wenn...?</strong></td><td>Ce părere ai dacă...?</td></tr>
                    <tr><td><strong>Wir können das gemeinsam besprechen.</strong></td><td>Putem să discutăm asta împreună.</td></tr>
                    <tr><td><strong>Ich verstehe deine Bedenken / deine Sicht.</strong></td><td>Înțeleg îngrijorările tale / punctul tău de vedere.</td></tr>
                    <tr><td><strong>Zusammenfassend lässt sich sagen...</strong></td><td>În concluzie se poate spune...</td></tr>
                </table>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
