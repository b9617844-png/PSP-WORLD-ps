const gamesDetails = {
"silent-hill": {
name: "Silent Hill: Shattered Memories",
arabicName: "سايلنت هيل: الذكريات المحطمة",
year: "2009",
image: "images/silent-hill.jpg",
screenshots: [
"images/silent-hill-1.jpg",
"images/silent-hill-2.jpg",
"images/silent-hill-3.jpg"
],
description: "رحلة رعب وغموض في مدينة سايلنت هيل، حيث تتغير الأحداث حسب اختياراتك.",
link: "https://download2388.mediafire.com/xx3u67krnw3gkfj5enxuGgSVkP-NE_OewMAMmNcBleBtuoS-IqWVyItFQLkQz-fCL0hDldZPQxXPkbbvow2A-88yN7UHdRHdqmE6EkNykGeV2aEg51Z0YWeF2GUOy6Fa9uoKm4hdj4iNIX47bDbE5F0ZFpH3uo3TmqtlV255eXvnmg/ze3m0ea4ysjtwm2/Silent+Hill+-+Arabic+Dialogues+and+Documents+v1.1.iso"
},

"manhunt-2": {
    name: "Manhunt 2",
    arabicName: "مانهنت 2 - النسخة العربية",
    year: "2007",
    image: "images/manhunt-2.jpg",
    screenshots: [
        "images/manhunt-2-1.jpg",
        "images/manhunt-2-2.jpg",
        "images/manhunt-2-3.jpg"
    ],
    description: "لعبة إثارة وتشويق تدور حول الهروب وكشف أسرار غامضة.",
    link: "https://www.mediafire.com/file/c41nov7v93p01qh/Manhunt_2_ara_Uncensored.iso/file?action=check&dkey=z8cs582kqtv&r=798"
},

"assassins-creed-bloodlines": {
    name: "Assassin's Creed: Bloodlines",
    arabicName: "أساسنز كريد: سلالات الدم",
    year: "2009",
    image: "images/assassins-creed-bloodlines.jpg",
    screenshots: [
        "images/assassins-creed-1.jpg",
        "images/assassins-creed-2.jpg",
        "images/assassins-creed-3.jpg"
    ],
    description: "انطلق في مغامرة أكشن وتسلل مع ألتاير في عالم أساسنز كريد.",
    link: "https://disk.yandex.com/d/BJ7fgQuh7Xoh5Q"
},

"god-of-war-ghost-of-sparta": {
    name: "God of War: Ghost of Sparta",
    arabicName: "جود أوف وور: شبح سبارتا",
    year: "2010",
    image: "images/god-of-war-ghost-of-sparta.jpg",
    screenshots: [
    "images/god-of-war-1.jpg",
    "images/god-of-war-2.jpg",
    "images/god-of-war-3.jpg"
],
    screenshots: [],
    description: "عِش مغامرة كريتوس في رحلة مليئة بالأسرار والتحديات.",
    link: "https://sto.romsfast.com/PSP-Complete/Redump/God%20of%20War%20-%20Ghost%20of%20Sparta%20(Asia)%20(EnZhKo).zip?e=1794832433&s=ET5VMWhO9GatPnkVTT-XD3ZIocXpKL03nCYb3Z8K4Ik"
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
    details.innerHTML = '<h2>اللعبة غير موجودة</h2> <a href="index.html">العودة للرئيسية</a>';
}
