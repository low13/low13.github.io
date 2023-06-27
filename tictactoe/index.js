const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll(".cell");
const playagain = document.querySelector(".play-again");
let current_player = "X";

const check_win = () => {
    return winning_combinations.some(combination => {
        return combination.every(index => {
            const cell = cells[index];
            return cell.classList.contains(current_player);
        });
    });
};

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        let tie = true;
        if (cell.classList.contains("X") || cell.classList.contains("O") || playagain.style.display == "block") return;
        cell.classList.add(current_player);

        if (check_win(current_player)) {
            document.querySelector(".player").textContent =
                `Player ${current_player == "X" ? "1" : "2"} won the game!`
                playagain.style.display = "block";
                return;
        }

        cells.forEach(cell => {
            if (!cell.classList.contains("X") && !cell.classList.contains("O")) {
                tie = false;
            }
        });

        if (tie) {
            document.querySelector(".player").textContent = "It's a tie!"
            playagain.style.display = "block";
            return;
        }

        current_player = current_player == "X" ? "O" : "X";
        document.querySelector(".player").textContent =
            `Player ${current_player == "X" ? "1" : "2"}'s turn`;
    });
});

playagain.addEventListener("click", () => {
    playagain.style.display = "none";
    cells.forEach(cell => {
        cell.classList.remove("X");
        cell.classList.remove("O");
        current_player = "X";
        document.querySelector(".player").textContent = "Player 1's turn";
    });
});