import React from 'react';
import {headerItems, closeMenu} from "./header-items";

export const Content = () => {
    return (
    <section className = "content">
        <HeaderContent />
    </section>);
}

function HeaderContent() {
    return (
        <>
            <div className = "main-game-item-wrapper">
                <GameItem icon = "fa fa-atom" game = {undefined} description = "---Select a Game---" 
                itemClass = "main-game-item" operation = {openMenu}/>
            </div>
            <div className = "game-items">
                {headerItems.map((item) => {
                    let game, description = undefined;
                    if (item.hasOwnProperty("game"))
                        game = item.game;
                    else
                        description = item.description;
                    return (
                        <GameItem icon = {item.icon} game = {game} description = {description}
                        itemClass = {item.itemClass} operation = {item.operation} />
                    );
                })}
            </div>
        </>
    );
}

function GameItem(props) {
    const {icon, game, description, itemClass, operation} = props;
    let title;
    if (game !== undefined)
        title = game;
    else 
        title = description;
    return (
        <div className = {itemClass} onClick = {operation}>
            <i className = {icon}></i>
            <h3 className = "item-title">{title}</h3>
            <i className = {icon}></i>
        </div>
    );
}

function openMenu() {
    if (document.querySelector(".game-items").getAttribute("display") === "none") 
        document.querySelector(".game-items").setAttribute("display", "flex");
    else
        closeMenu();
}

function MainContent() {

}

function FooterContent() {
    
}