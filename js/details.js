const gamesDetails = {
    "silent-hill": {
        name: "Silent Hill: Shattered Memories",
        arabicName: "سايلنت هيل: الذكريات المحطمة",
        year: "2009",
        image: "images/silent-hill.jpg",
screenshots: [
    "images/silent-hill-1.jpg",
    "images/silent-hill-2.jpg"
],
        description: "رحلة رعب وغموض في مدينة سايلنت هيل، حيث تتغير الأحداث حسب اختياراتك.",
        link: "https://www.mediafire.com/file/ze3m0ea4ysjtwm2/Silent+Hill+-+Arabic+Dialogues+and+Documents+v1.1.iso/file?action=check&dkey=5uiibu5f59e&r=1554"
    },

    "manhunt-2": {
        name: "Manhunt 2",
        arabicName: "مانهنت 2 - النسخة العربية",
        year: "2007",
        image: "images/manhunt-2.jpg",
        description: "لعبة إثارة وتشويق تدور حول الهروب وكشف أسرار غامضة.",
        link: "https://www.mediafire.com/file/c41nov7v93p01qh/Manhunt_2_ara_Uncensored.iso/file?action=check"
    },

    "assassins-creed-bloodlines": {
        name: "Assassin's Creed: Bloodlines",
        arabicName: "أساسنز كريد: سلالات الدم",
        year: "2009",
        image: "images/assassins-creed-bloodlines.jpg",
        description: "انطلق في مغامرة أكشن وتسلل مع ألتاير في عالم أساسنز كريد.",
        link: "https://disk.yandex.com/d/BJ7fgQuh7Xoh5Q"
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
        <div class="game-gallery">
    <h2>صور من داخل اللعبة</h2>
    ${game.screenshots ? game.screenshots.map(img => `
        <img src="${img}" alt="صورة من اللعبة">
    `).join("") : ""}
</div>

        <a href="${game.link}" target="_blank" rel="noopener noreferrer">
            تحميل اللعبة
        </a>

        <br><br>
        <a href="index.html">العودة إلى الألعاب</a>
    `;
} else {
    details.innerHTML = `
        <h2>اللعبة غير موجودة</h2>
        <a href="index.html">العودة للرئيسية</a>
    `;
}
