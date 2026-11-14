const gamesDetails = {
    "silent-hill": {
        name: "Silent Hill: Shattered Memories",
        arabicName: "سايلنت هيل: الذكريات المحطمة",
        year: "2009",
        image: "images/silent-hill.jpg",
        description: "رحلة رعب وغموض في مدينة سايلنت هيل، حيث تتغير الأحداث حسب اختياراتك."
    },

    "manhunt-2": {
        name: "Manhunt 2",
        arabicName: "مانهنت 2",
        year: "2007",
        image: "images/manhunt-2.jpg",
        description: "لعبة إثارة وتشويق تدور حول الهروب وكشف أسرار غامضة."
    },

    "assassins-creed-bloodlines": {
        name: "Assassin's Creed: Bloodlines",
        arabicName: "أساسنز كريد: سلالات الدم",
        year: "2009",
        image: "images/assassins-creed-bloodlines.jpg",
        description: "انطلق في مغامرة أكشن وتسلل مع ألتاير في عالم أساسنز كريد."
    }
};

const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");
const game = gamesDetails[gameId];
const details = document.getElementById("gameDetails");

if (game) {
    details.innerHTML = `
        <img src="${game.image}" alt="${game.arabicName}">
        <h1>${game.arabicName}</h1>
        <h3>${game.name}</h3>
        <p>سنة الإصدار: ${game.year}</p>
        <p>${game.description}</p>
        <a href="index.html">العودة إلى الألعاب</a>
    `;
} else {
    details.innerHTML = "<h2>اللعبة غير موجودة</h2><a href='index.html'>العودة للرئيسية</a>";
}
