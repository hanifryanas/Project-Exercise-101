//add hovered class in selected list item
let list1 = document.querySelectorAll('.navigation li');
function activeList(){
    list1.forEach((item)=>item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list1.forEach((item)=>item.addEventListener('mouseover',activeList));

let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    nav.classList.toggle('active');
    main.classList.toggle('active');
}