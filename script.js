/* =========================================
 Import the necessary modules
=========================================== */
import menuItems from "./data.js";

/* ==========================================
Render Menu Items
============================================= */
const menuContainer = document.querySelector(".menu")
const menuHtml = menuItems.map(function(menu){
    let {name, description, price, image, alt} = menu
    return `
        <div class="menu-item">
            <div class="item-details">
                <div class="menu-item-img">
                    <img src="${image}" alt="${alt}">
                </div>                    
                <div class="item-description">
                    <h2 class="menu-item-title" id="${name.toLowerCase()}">${name}</h2>
                    <p class="menu-item-description">${description}</p>
                    <p class="menu-item-price">${price}</p> 
                </div>
            </div>
            <button class="btn">
                    <i class="hgi hgi-stroke hgi-plus-sign" data-add="${name.toLowerCase()}"></i>
            </button>
            
        </div>
    ` 
}).join("")

menuContainer.innerHTML = menuHtml



// Render Menu Items


/*  */