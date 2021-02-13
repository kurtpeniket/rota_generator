import { controller } from './controller.js';
import { randomise } from './randomise.js';

const operatorsList = document.getElementById('operator-ul');
const generate = document.getElementById('generate');
const table = document.getElementById('table');
const add = document.getElementById('add');
const exportBtn = document.getElementById('export');
const operators = ['Kurt', 'Josh', 'Jack', 'Tim'];

operators.forEach((element) => {
  operatorsList.insertAdjacentHTML('beforebegin', `<li class="list-group-item">${element}</li>`);
});


const getNewInstance = () => {
  const newInstance = randomise(operators);
  addHtml(newInstance);
};

const addHtml = (newInstance) => {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>11/06/1990</td>
      <td>${newInstance.host}</td>
      <td>${newInstance.cohost}</td>
      <td>${newInstance.mics}</td>
    </tr>`);
};

generate.addEventListener('click', (e) => {
  for (let i = 0; i < 4 ; i++) {
    getNewInstance();
  };
});

add.addEventListener('click', (e) => {
  console.log('clicked');
});

exportBtn.addEventListener('click', (e) => {
  window.print();
});
