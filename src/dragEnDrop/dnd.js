'use strict';

const getDropableAreas = (event) => {
  let dropableAreas = document.querySelectorAll('.dropArea');//needs a fresh DOM version

  dropableAreas.filter = [].filter;
  return dropableAreas.filter((dropableArea) => 
    (event.pageY >= dropableArea.offsetTop &&  event.pageY <= dropableArea.offsetTop + dropableArea.offsetHeight) //in drop area from top
      && (event.pageX >= dropableArea.offsetLeft &&  event.pageX <= dropableArea.offsetLeft + dropableArea.offsetWidth)
  );
}

const animateGoBack = (draggable) => {
  draggable.className += ' animateDraggableReturn';

    draggable.style.top = draggable.parentNode.offsetTop;
    draggable.style.left = draggable.parentNode.offsetLeft;
  setTimeout(() =>{
    draggable.remove();
  }, 350); 
}
 
const generateDropedArea = (event, draggable, dropAreas) => {
  let newDropArea = document.createElement('div'),
    dropArea = dropAreas[dropAreas.length - 1]; //fully nested
    //dropArea = dropAreas[0];  //2 level nesting
  
  newDropArea.innerHTML = draggable.innerHTML
  newDropArea.className = 'droped dropArea';
  if (dropAreas.length > 1) {
     // dropArea = dropAreas[1] //2 level nesting
      newDropArea.className = 'droped sub dropArea';
  }
 
  dropArea.appendChild(newDropArea);
  draggable.remove();
} 

const dragElement = (draggable, event) => {
  draggable.style.boxShadow = "1px 2px 1px 0.5px #000"
  draggable.style.top = event.pageY - draggable.offsetHeight/2;
  draggable.style.left = event.pageX - draggable.offsetWidth/2; 
};
const generateNewDraggable = (event) => {
  let newElement,
    activeDraggables = document.querySelectorAll('.active') || []; //needs a fresh DOM version due to multiple click
  
  activeDraggables.forEach = [].forEach;

  activeDraggables.forEach(e => e.remove());
  newElement = event.target.cloneNode(true);
  event.target.className = 'draggable active'
  event.target.style.position = 'absolute';
  event.target.parentNode.appendChild(newElement);
};
const handleDropabble = (event, draggable) => {
  let dropAreas = getDropableAreas(event);
  
  dropAreas.length >= 1 ? 
     generateDropedArea(event, draggable, dropAreas) :
     animateGoBack(draggable); 
};

export {dragElement, generateNewDraggable, handleDropabble}