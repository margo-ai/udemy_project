// ЛЕКЦИЯ 32 "НАВИГАЦИЯ ПО DOM-ЭЛЕМЕНТАМ, DATA-АТРИБУТЫ, ПРЕИМУЩЕСТВО FOR/OF"

// console.log(document.head);
// console.log(document.documentElement); // весь html документ
// console.log(document.body.childNodes); // элементы(узлы), которые являются детьми у body
// узел text - это перенос строки на следующий элемент

// Не каждый узел будет элементом (DOM)

// console.log(document.body.firstChild); // первый элемент родителя
// console.log(document.body.lastChild); // последний элемент родителя

console.log(document.querySelector('#current').parentNode); // родитель любого элемента
console.log(document.querySelector('#current').parentNode.parentNode); // родитель родителя элемента #current

// Как получать дата атрибуты в коде?
// console.log(document.querySelector('[data-current="3"]').nextSibling); // nextSibling - следующий DOM-узел
// console.log(document.querySelector('[data-current="3"]').previousSibling); // previousSibling - предыдущий DOM-узел
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// nextElementSibling - следующий DOM-элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// previousElementSibling - предыдущий DOM-элемент



// Аналог parentNode (чтобы искать элемент, а не узел):
console.log(document.querySelector('#current').parentElement); 

// Прочие аналоги для "путешествия" по элементам:
console.log(document.body.firstElementChild); 
console.log(document.body.lastElementChild); 

// Аналог childNodes для DOM-элементов (через for/of):
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}