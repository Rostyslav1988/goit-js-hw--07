"use strict"

const categoryList = document.querySelector("ul");

const categories = categoryList.children;
console.log(`В списке ${categories.length} категории.`);

console.log(categories);

[...categories].forEach((li) => {
    const title = li.querySelector('h2');
    console.log(`Категория: ${title.textContent}`);
    const others = li.querySelector("ul");
    const children = others.children;
    console.log(`Количество элементов ${children.length}`);
});