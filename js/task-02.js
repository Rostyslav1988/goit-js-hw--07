"use strict"

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  const ulElement = document.querySelector('#ingredients');

  const listIngredients = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
  ulElement.innerHTML = listIngredients;

  console.log(listIngredients)