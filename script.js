const productList = document.querySelectorAll('.menu__meal');
const overlay = document.querySelector('.modal-window-overlay');
const cancelBtn = document.querySelector('.modal-window__close-btn');
const addBtn = document.querySelector('.modal-window__add-btn');

for(let i = 0; i < productList.length ;i++){
    productList[i].addEventListener('click', ()=>{
        overlay.classList.remove('hidden');
        createMenu(i);
    });
}

cancelBtn.addEventListener('click', closeModal);

function createMenuItem(outerArIndex, innerArIndex){
    const item = document.createElement('div');
    item.classList.add('modal-window__meal');
    const itemTxt = document.createElement('span');
    itemTxt.textContent = menuList[outerArIndex][innerArIndex].name;
    item.addEventListener('click',()=>{
        item.classList.toggle('meal--active');
    });



    // console.log(menuList[outerArIndex][innerArIndex]);
    item.appendChild(itemTxt);
    return item;
}

function createMenu(index) {
    const container = document.querySelector('.modal-window__container');
    for(let i = 0 ; menuList[index].length > i  ; i++){
       container.appendChild(createMenuItem(index, i));
    }
    // console.log(createMenuItem(index));
}
 
function closeModal(){
    console.log('zamykam okno modalne');
    overlay.classList.add('hidden');
}

console.log(productList);