
const boardWinner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 3, 5],
]


export function checkWinner(board) {

    return boardWinner.some(([a, b, c]) => {
        //  return board[a - 1] && board[a - 1] === board[b - 1] && board[a - 1] === board[c - 1];
        return board[a - 1] === '⭕' && board[b - 1] === '⭕' && board[c - 1] === '⭕' ||
            board[a - 1] === '❌' && board[b - 1] === '❌' && board[c - 1] === '❌'
    });
}
