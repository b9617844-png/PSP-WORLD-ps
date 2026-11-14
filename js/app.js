const games = [
{
name: "Silent Hill: Shattered Memories",
arabicName: "سايلنت هيل: الذكريات المحطمة",
category: "arabic",
year: "2009",
image: "images/silent-hill.jpg",
link: "#"
},
{
name: "Manhunt 2",
arabicName: "مانهنت 2 - النسخة العربية",
category: "action",
year: "2007",
image: "images/manhunt-2.jpg",
link: "#"
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

if (filtered.length === 0) {
    grid.innerHTML = "<p>لا توجد ألعاب مطابقة للبحث.</p>";
    return;
}

filtered.forEach(game => {
    grid.innerHTML += `
        <article class="game-card">
            <img src="${game.image}"
                 alt="${game.name}"
                 onerror="this.src='https://placehold.co/400x550/121625/ffffff?text=PSP+GAME'">

            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.arabicName}</p>
                <p>سنة الإصدار: ${game.year}</p>

                <a href="${game.link}"
                   target="_blank"
                   rel="noopener noreferrer">
                   زيارة المصدر الخارجي
                </a>
            </div>
        </article>
    `;
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
