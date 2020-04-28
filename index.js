function addColumn() {
    const board = document.getElementsByClassName("board_canvas")[0];

    // language=HTML
    var newColumn = `<div class="board_column">
            <div class="column_name">Column name</div>
            <div class="card_container">
                <button class="column_button" onclick="add_cell()">Add Card</button>
            </div>
        </div>`;

    board.innerHTML += newColumn;
}