import React, {useState} from 'react';
import {headerItems} from "./header-items";

export const Content = () => {
    return (
    <section className = "content">
        <HeaderContent />
    </section>);
}

function HeaderContent() {
    const [displayItemsState, displayItems] = useState({display: false});
    const closeMenu = () => {
        displayItems({display: false});
    }
    const openMenu = () => {
        if (displayItemsState.display === false)
            displayItems({display: true});
        else
            closeMenu();
    }

    /* Temporary operation */

    const logOperation = (e) => {
        if (e !== undefined && e !== null) {
            if (e.target.tagName === "DIV")
                console.log(e.target.querySelector(".item-title").innerHTML);
            else if (e.target.tagName === "H3")
                console.log(e.target.innerHTML);
            else
                console.log(e.target.parentElement.querySelector(".item-title").innerHTML);
        }
        else
            console.log("Something wrong!");
    }

    return (
        <>
            <div className = "main-game-item-wrapper">
                <GameItem icon = "fa fa-atom" game = {undefined} description = "---Select a Game---" 
                itemClass = "main-game-item" operation = {openMenu}/>
            </div>
            { displayItemsState.display && <GameItems closeMenu = {closeMenu} logOperation = {logOperation}/> }
        </>
    );
}

function GameItems(props) { 
    let {closeMenu, logOperation} = props;
    return (
        <div className = "game-items">
            {headerItems.map((item) => {
                let game, description, operation = undefined;
                if (item.hasOwnProperty("game"))
                    game = item.game;
                else
                    description = item.description;
                if (item.itemClass === "game-item") 
                    operation = logOperation;
                else
                    operation = closeMenu;
                return (
                    <GameItem key = {item.id} icon = {item.icon} game = {game} description = {description}
                    itemClass = {item.itemClass} operation = {operation}/>
                );
            })}
        </div>
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

function MainContent() {

}

function FooterContent() {
    
}