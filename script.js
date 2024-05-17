document.addEventListener("DOMContentLoaded", ()=> {

let lighttheme= document.getElementById('lighttheme');
let darktheme= document.getElementById('darktheme');


//change background color
lighttheme.addEventListener('click', changetheme=() => {
    // document.body.classList.remove('dark');
    // document.body.classList.add('light');
    lighttheme.style.display = 'none';
    darktheme.style.display = 'block';
    document.getElementById('darkscreen').style.display = 'none';
    document.getElementById('heads').style.backgroundColor = 'white';
    document.getElementById('lightscreen').style.display = 'block';
    document.getElementById('container').style.backgroundColor = 'white';
});
darktheme.addEventListener('click', changetheme=() => {
    // document.body.classList.remove('dark');
    // document.body.classList.add('light');
    lighttheme.style.display = 'block';
    darktheme.style.display = 'none';
    document.getElementById('darkscreen').style.display = 'block';
    document.getElementById('lightscreen').style.display = 'none';
    document.getElementById('heads').style.backgroundColor = 'hsl(233, 14%, 35%)';
    document.getElementById('container').style.backgroundColor = 'darkgray';
    
});



//strikethrough the to do list elements
const checkbox = document.getElementById('underlinecheckbox');
const targetElement = document.getElementById('targetelement');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    targetElement.style.textDecoration = 'line-through';
    targetElement.style.color = 'dimgray';
  } else {
    targetElement.style.textDecoration = 'none';
    targetElement.style.color = 'black';
  }
});



//strikethrough the to do list elements  
const checkboxing = document.getElementById('clearauto');
const targetElementing = document.getElementById('checkDelete');

checkboxing.addEventListener('change', () => {
  if (checkbox.checked) {
    targetElementing.style.textDecoration = 'line-through';
    targetElementing.style.color = 'dimgray';
  } else {
    targetElementing.style.textDecoration = 'none';
    targetElementing.style.color = 'black';
  }
});

//strikethrough the to do list elements
const checkbx = document.getElementById('underline');
const targetElements = document.getElementById('target');

checkbx.addEventListener('change', () => {
  if (checkbox.checked) {
    targetElements.style.textDecoration = 'line-through';
    targetElements.style.color = 'dimgray';
  } else {
    targetElements.style.textDecoration = 'none';
    targetElements.style.color = 'black';
  }
});



//count a list of elements left 
const itemCheckboxes = document.querySelectorAll('.item-checkbox');
const remainingItemsContainer = document.getElementById('remaining-items');

itemCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    updateRemainingItems();
  });
});

function updateRemainingItems() {
  const uncheckedItems = Array.from(itemCheckboxes).filter(checkbox => !checkbox.checked);
  const remainingItems = uncheckedItems.length;
  remainingItemsContainer.textContent = `${remainingItems} items left`;
}



//change the typing state
let typechange =document.getElementById('typechange');

typechange.addEventListener('change', () => {
    if(input.click)
    typechange.value = 'Currently typing...';
});



//delete from the  one dropdown list
const list=document.getElementById('resetbtn');

list.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});


//delete from the  two dropdown list
const lists=document.getElementById('resetbtns');

lists.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});



//delete from the three dropdown list
const listing=document.getElementById('resetbttn');

listing.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});



//delete from the  four dropdown list
const liststyl=document.getElementById('resetsbtn');

liststyl.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});


//delete from the five dropdown list
const lisny=document.getElementById('setbtn');

lisny.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});


//delete from the  six dropdown list
const listys=document.getElementById('rsetbtn');

listys.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});



//delete from the  six dropdown list
const checken=document.getElementById('clearlist');

checken.addEventListener("click", (e) => {
  console.log('list clicked');
  if (e.target.className == "") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
  }
});


});