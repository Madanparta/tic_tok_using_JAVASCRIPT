const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart-btn");
let currentPlayer = "X";
let gameWon = false;

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!cell.textContent && !gameWon) {
            cell.textContent = currentPlayer;
            gameWon = checkWin();
            if (gameWon) {
                alert(`Player ${currentPlayer} wins!`);
            } else if ([...cells].every(cell => cell.textContent !== "")) {
                alert("It's a draw!");
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

restartButton.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = "lightgray";
    });
    gameWon = false;
    currentPlayer = "X";
});

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]           // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = "#98FB98";
            cells[b].style.backgroundColor = "#98FB98";
            cells[c].style.backgroundColor = "#98FB98";
            return true;
        }
    }
    return false;
}
