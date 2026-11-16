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
link: "https://www.mediafire.com/file/ze3m0ea4ysjtwm2/Silent+Hill+-+Arabic+Dialogues+and+Documents+v1.1.iso/file?action=check&dkey=f95bw6l5znx&r=1931"
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
link: "https://www.mediafire.com/file/c41nov7v93p01qh/Manhunt_2_ara_Uncensored.iso/file?action=check"
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
description: "عِش مغامرة كريتوس في رحلة مليئة بالأسرار والتحديات.",
link: "https://sto.romsfast.com/PSP-Complete/Redump/God%20of%20War%20-%20Ghost%20of%20Sparta%20(Asia)%20(EnZhKo).zip?e=1794944707&s=8uK-7sUNzk-2ooe7vmRvLNrmagMlx89dKzWiDknm6T8"
},

"gta-vice-city-stories": {
name: "Grand Theft Auto: Vice City Stories",
arabicName: "جاتا فايس سيتي ستوريز",
year: "2006",
image: "images/gta-vice-city-stories.jpg",
screenshots: [
"images/gta-vice-city-1.jpg",
"images/gta-vice-city-2.jpg",
"images/gta-vice-city-3.jpg"
],
description: "عِش مغامرة مثيرة في مدينة فايس سيتي، واستكشف عالم اللعبة المفتوح. 🔑 كلمة سر فك الضغط: bySadiqGaming",
link: "https://download2277.mediafire.com/39otgcj3bilgEdeavu0qd0mzjOcsXWOYwQI7ItKNOCvhVwhI5EL-Tx7Hii9loQrILzZvUkObr-VvUirKeGac0DCMRg69MXrqdRQUkYm8dHrzh5JGBvHsXupre1IZwOuxafMWmvfcpf1UzIEu2dVn40yAlwuT893SIoqwDyAnMZB8KA/nux995d9ytc8spf/bySadiqGaming.rar"
},

"fifa-14": {
name: "FIFA 14",
arabicName: "فيفا 14",
year: "2013",
image: "images/fifa-14.jpg",
screenshots: [],
description: "استمتع بتجربة كرة قدم ممتعة مع FIFA 14، واختر فريقك المفضل وخض المباريات.",
link: "https://sto.romsfast.com/PSP-Complete/Redump/FIFA%2014%20(Europe).zip?e=1794863373&s=PcpZ3vh6X3BqJqJG_WdKxmRBIedMBX3u_1_u_NmGPLI"
},

"pes-2013": {
name: "PES 2013",
arabicName: "بيس 2013",
year: "2012",
image: "images/pes-2013.jpg",
screenshots: [],
description: "عِش أجواء كرة القدم مع PES 2013، واستمتع بالمباريات والفرق والبطولات.",
link: "https://dfiley.com/download/ZmHnF73oqTBXtzr/qLQ3669ZL1319/Pes%202013%20PPSSPP%20ISO%20Zip%20File%20English%20Download.7z"
},

"efootball-2024": {
name: "eFootball 2024 PSP",
arabicName: "إي فوتبول 2024",
year: "2024",
image: "images/efootball-2024.jpg",
screenshots: [],
description: "نسخة معدلة من ألعاب كرة القدم لتعمل على محاكي PPSSPP.",
link: "https://sto.romsfast.com/Mods/PSP/PES%202024/PES%2024%20%20PPSSPP%20-%20PS5%20Iso%20Save%20Data%20Textures.rar?e=1794863574&s=IYbJblL8GyBLP41IoaTjy-lInmyW_GNHhkB-jG056Go"
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
<p>${game.description}</p>  <div class="game-gallery">  
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
