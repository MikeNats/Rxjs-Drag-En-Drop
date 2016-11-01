'use strict';

import {
  dragElement ,
  generateNewDraggable ,
  handleDropabble
} from '../dragEnDrop/dnd';

import {
  dragStart$ ,
  drag$ ,
  dragEnDrop$
} from '../dragEnDrop/dnd$';
  
dragStart$.subscribe((event) =>
  generateNewDraggable(event));
  
drag$.subscribe(({draggable, event}) => 
  dragElement(draggable, event));  

dragEnDrop$.subscribe(({event, draggable})=> 
  handleDropabble(event, draggable)); 
