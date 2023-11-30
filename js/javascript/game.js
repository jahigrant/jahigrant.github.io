
function game() {
    const element = (

        <div className="p-0 m-0">
            <div id="game-container">
                <div id="game-gui"></div>
            </div>
        </div>

    );
    ReactDOM.render(
        element,
        document.getElementById('game_component')
    );
}

game();




