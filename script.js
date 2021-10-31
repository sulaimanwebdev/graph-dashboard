let dropDownContent = document.querySelector('.dropDownContent');
let dropDownClick = document.querySelector('.dropDownClick');

dropDownClick.addEventListener('click', () =>{
    dropDownContent.classList.toggle('activeDropDown')
});

let openBar = document.querySelector('.openBar');
let realBar = document.querySelector('.realBar');
let blackBg = document.querySelector('.blackBg');
let closeBtn = document.querySelector('.closeBtn');
openBar.addEventListener('click', ()=>{
    realBar.classList.toggle('activeSideBar');
    blackBg.classList.toggle('bgActive')
});

closeBtn.addEventListener('click', ()=>{
    realBar.classList.remove('activeSideBar');
    blackBg.classList.remove('bgActive')
});






