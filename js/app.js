const games = [
    {
        id: "silent-hill",
        name: "Silent Hill: Shattered Memories",
        arabicName: "سايلنت هيل: الذكريات المحطمة",
        category: "arabic",
        year: "2009",
        image: "images/silent-hill.jpg",
        link: "https://www.mediafire.com/file/ze3m0ea4ysjtwm2/Silent+Hill+-+Arabic+Dialogues+and+Documents+v1.1.iso/file?action=check&dkey=5uiibu5f59e&r=1554"
    },
    {
        id: "manhunt-2",
        name: "Manhunt 2",
        arabicName: "مانهنت 2 - النسخة العربية",
        category: "arabic",
        year: "2007",
        image: "images/manhunt-2.jpg",
        link: "https://www.mediafire.com/file/c41nov7v93p01qh/Manhunt_2_ara_Uncensored.iso/file?action=check"
    },
    {
        id: "assassins-creed-bloodlines",
        name: "Assassin's Creed: Bloodlines",
        arabicName: "أساسنز كريد: سلالات الدم",
        category: "action",
        year: "2009",
        image: "images/assassins-creed-bloodlines.jpg",
        link: "https://disk.yandex.com/d/BJ7fgQuh7Xoh5Q"
    },
{
    id: "god-of-war-ghost-of-sparta",
    name: "God of War: Ghost of Sparta",
    arabicName: "جود أوف وور: شبح سبارتا",
    category: "action",
    year: "2010",
    image: "images/god-of-war-ghost-of-sparta.jpg",
            link: "https://sto.romsfast.com/PSP-Complete/Redump/God%20of%20War%20-%20Ghost%20of%20Sparta%20(Asia)%20(EnZhKo).zip?e=1794832433&s=ET5VMWhO9GatPnkVTT-XD3ZIocXpKL03nCYb3Z8K4Ik"
    },
    {
            
        id: "gta-vice-city-stories",
        name: "Grand Theft Auto: Vice City Stories",
        arabicName: "جاتا فايس سيتي ستوريز",
        category: "action",
        year: "2006",
        image: "images/gta-vice-city-stories.jpg",
        link: "https://www.mediafire.com/file/nux995d9ytc8spf/bySadiqGaming.rar/file?dkey=t7h7ymgoyja&r=1223#"
    },
    {
        id: "fifa-14",
        name: "FIFA 14",
        arabicName: "فيفا 14",
        category: "sport",
        year: "2013",
        image: "images/fifa-14.jpg",
        link: "https://sto.romsfast.com/PSP-Complete/Redump/FIFA%2014%20(Europe).zip?e=1794863373&s=PcpZ3vh6X3BqJqJG_WdKxmRBIedMBX3u_1_u_NmGPLI"
    },
    {
        id: "pes-2013",
        name: "PES 2013",
        arabicName: "بيس 2013",
        category: "sport",
        year: "2012",
        image: "images/pes-2013.jpg",
        link: "https://sto.romsfast.com/PSP-Complete/Redump/PES%202013%20-%20Pro%20Evolution%20Soccer%20(Europe)%20(EnNlSvRuTr).zip?e=1794863211&s=_jA2nz-OZ6Ya3w4-9BRXlVpHJJq21jF-SyvVtwZHJng"
    },
    {
        id: "efootball-2024",
        name: "eFootball 2024 PSP",
        arabicName: "إي فوتبول 2024",
        category: "sport",
        year: "2024",
        image: "images/efootball-2024.jpg",
        link: "https://sto.romsfast.com/Mods/PSP/PES%202024/PES%2024%20%20PPSSPP%20-%20PS5%20Iso%20Save%20Data%20Textures.rar?e=1794863574&s=IYbJblL8GyBLP41IoaTjy-lInmyW_GNHhkB-jG056Go"
    }
];

function startWebsite() {
    const grid = document.getElementById("gamesGrid");
    const search = document.getElementById("search");
    const buttons = document.querySelectorAll(".categories button");

    if (!grid || !search) return;

    let selectedCategory = "all";

    function displayGames() {
        const query = search.value.toLowerCase();

        const filtered = games.filter(game => {
            const matchesSearch =
                game.name.toLowerCase().includes(query) ||
                game.arabicName.includes(query);

            const matchesCategory =
                selectedCategory === "all" ||
                game.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        grid.innerHTML = "";

        if (filtered.length === 0) {
            grid.innerHTML = "<p>لا توجد ألعاب مطابقة للبحث.</p>";
            return;
        }

        filtered.forEach(game => {
            const card = document.createElement("article");
            card.className = "game-card";

            card.innerHTML = `
                <img src="${game.image}"
                     alt="${game.name}"
                     onerror="this.src='https://placehold.co/400x550/121625/ffffff?text=PSP+GAME'">

                <div class="game-info">
                    <h3>${game.name}</h3>
                    <p>${game.arabicName}</p>
                    <p>سنة الإصدار: ${game.year}</p>

                    <a href="game.html?id=${game.id}">تحميل اللعبة</a>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    search.addEventListener("input", displayGames);

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");

            selectedCategory = button.dataset.category;
            displayGames();
        });
    });

    displayGames();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startWebsite);
} else {
    startWebsite();
                }
