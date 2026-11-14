const games = [
    {
        name: "Silent Hill: Shattered Memories",
        arabicName: "سايلنت هيل: الذكريات المحطمة",
        category: "arabic",
        year: "2009",
        image: "images/silent-hill.jpg",
        link:  "https://www.mediafire.com/file/ze3m0ea4ysjtwm2/Silent+Hill+-+Arabic+Dialogues+and+Documents+v1.1.iso/file?action=check&dkey=5uiibu5f59e&r=1554"
    },
    {
        name: "Manhunt 2",
        arabicName: "مانهنت 2 - النسخة العربية",
        category: "arabic",
        year: "2007",
        image: "images/manhunt-2.jpg",
        link:  "https://www.mediafire.com/file/c41nov7v93p01qh/Manhunt_2_ara_Uncensored.iso/file?action=check"
    },
    {
        name: "Assassin's Creed: Bloodlines",
        arabicName: "أساسنز كريد: سلالات الدم",
        category: "action",
        year: "2009",
        image: "images/assassins-creed-bloodlines.jpg",
        link:  "https://disk.yandex.com/d/BJ7fgQuh7Xoh5Q"
    }
];

const grid = document.getElementById("gamesGrid");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".categories button");

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

    if (filtered.length === 
