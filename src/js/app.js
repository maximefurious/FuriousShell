let textarea = document.getElementById('commande');
const result = document.getElementById('result');

const commande = [{
        name: 'help',
        description: 'Affiche la liste des commandes disponibles',
    },
    {
        name: 'clear',
        description: 'Efface le contenu de la console',
    },
    {
        name: 'profile',
        description: 'Affiche le profil de l\'utilisateur',
    },
    {
        name: 'contact',
        description: 'Affiche les informations de contact',
    },
    {
        name: 'about',
        description: 'Affiche les informations sur le site',
    },
    {
        name: 'github',
        description: 'Affiche le lien vers le github',
    },
]


const prompt = 'maximefurious@BestTerminalEver <span class="light-blue">~/Desktop></span>';

const texteProfile = ` 
Hello, 

Je m'appelle maxime, j'ai 18 ans et je suis actuellement en 1ère année de BUT Informatique à l'IUT de Lannion.
Dans la vie j'aime bien m'amuser, être curieux et surtout découvrir de nouvelle chose !
Parce que le bien être c'est une chose mais profité de sa vie en est une autre !

Je vous souhaite une excellente visite de mon site web sous le thème d'un terminal Ubuntu !
et à bientôt !
`;

textarea.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (textarea.value === 'help') {
            result.innerHTML += `<span class="green">${prompt}</span> help<br>`;
            commande.forEach(help => {
                result.innerHTML += `<p><span class="red">${help.name} : </span>${help.description}</p>`;
            });
            resetCursor();
        } else if (textarea.value === 'clear') {
            clear();
        } else if (textarea.value === 'profile') {
            result.innerHTML += `<span class="green">${prompt}</span> profile<br><img src="img/profile.jpg" alt="profile"><br>`;
            resetCursor();
        } else if (textarea.value === 'contact') {
            result.innerHTML += `<p><span class="green">${prompt}</span> contact<br>Email: <a href="mailto:maxime.boujeant@gmail.com">maxime.boujeant@gmail.com</a></p>`;
            resetCursor();
        } else if (textarea.value === 'about') {
            result.innerHTML += `<p><span class="green">${prompt}</span> about<br>Site créé par Maxime Boujeant</p>`;
            resetCursor();
        } else if (textarea.value === 'github') {
            result.innerHTML += `<span class="green">${prompt}</span> github<br><a href="https://github.com/maximefurious"> Github </a><br>`;
            resetCursor();
        } else if (textarea.value === '') {
            result.innerHTML += `<span class="green">${prompt}</span><br>`;
            resetCursor();
        } else {
            result.innerHTML += `<span class="green">${prompt}</span> Commande inconnue<br>`;
            resetCursor();
        }
    }
});

function clear() {
    textarea.value = "";
    result.innerHTML = "";
}

function resetCursor() {
    textarea.value = "";
}

const title = document.querySelector('pre');

const txt1 = "         ____   ____";
const txt2 = "        /' --;^/ ,-_\\     \\ | /       __  ___           _                ______           _";
const txt3 = "       / / --o\\o-\\  \\\\   --(_)--     /  |/  /___ __  __(_)___ ___  ___  / ____/_  _______(_)___  __  _______";
const txt4 = "      /-/-/|o|-|\\-\\\\|\\\\   / | \\     / /|_/ / __ `/ |/_/ / __ `__ \\/ _ \\/ /_  / / / / ___/ / __ \\/ / / / ___/";
const txt5 = "       '`  ` |-|   `` '            / /  / / /_/ /> < / / / / / / /  __/ __/ / /_/ / /  / / /_/ / /_/ (__  ) ";
const txt6 = "             |-|                  /_/  /_/\\__,_/_/|_/_/_/ /_/ /_/\\___/_/    \\__,_/_/  /_/\\____/\\__,_/____/";
const txt7 = "             |-|O";
const txt8 = "             |-(\\,__";
const txt9 = "          ...|-|\\--,\\_....";
const txt10 = "      ,;;;;;;;;;;;;;;;;;;;;;;;;,.";
const txt11 = "~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
const txt12 = "~;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,  ______   ---------   _____     ------";

const texte = [
    txt1,
    txt2,
    txt3,
    txt4,
    txt5,
    txt6,
    txt7,
    txt8,
    txt9,
    txt10,
    txt11,
    txt12
];

for (let index = 0; index < 12; index++) {
    let txt = texte[index];
    title.innerHTML += `<span>${txt}<br></span>`
}