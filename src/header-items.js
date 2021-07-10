const headerItems = [
    {
        id: 0,
        icon: "fa fa-chess-king",
        game: "Game 1",
        itemClass: "game-item",
        operation: selectGame
    },
    {
        id: 1,
        icon: "fa fa-chess-knigt",
        game: "Game 2",
        itemClass: "game-item",
        operation: selectGame
    },
    {
        id: 2,
        icon: "fa fa-times-circle",
        description: "Close Menu",
        itemClass: "closing-item",
        operation: closeMenu
    }
]

function selectGame(e) {
    console.log(e.target.querySelector(".item-title").innerHTML);
}

export function closeMenu() {
    document.querySelector(".game-items").setAttribute("display", "none");
}

export default headerItems;