const searchInput = document.querySelector(".search");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    gameCards.forEach(function (card) {
        const gameName = card.querySelector("h2").textContent.toLowerCase();

        if (gameName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});function filterGames(category) {
    gameCards.forEach(function (card) {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}.featured {
    background: #171d2b;
    border-radius: 15px;
    overflow: hidden;
    margin: 25px 0;
}

.featured img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.featured-content {
    padding: 20px;
}

.featured-content span {
    color: #00ff88;
    font-weight: bold;
}

.featured-content h2 {
    font-size: 26px;
    margin: 10px 0;
}

.featured-content p {
    color: #cccccc;
}

.featured-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 13px 20px;
    background: #00ff88;
    color: #000;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
}