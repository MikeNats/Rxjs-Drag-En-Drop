'use strict';

import  Rx from 'rxjs';

const mouseup$ =  Rx.Observable.fromEvent(document, 'mouseup');
const mousemove$ =  Rx.Observable.fromEvent(document, 'mousemove');
const mousedown$ = Rx.Observable.fromEvent(document, 'mousedown');//You can provide scpecific selctor for to reduce the cost od bubbling 
 
const mouseDownOnDraggable$ = mousedown$
  .filter(draggable => draggable.target.className === 'draggable');//DONT FORGET TO ADD draggable class ;)

const dragStart$ = mouseDownOnDraggable$.sample(mousemove$); 

const drag$ = mouseDownOnDraggable$
  .switchMap(({target}) => 
    mousemove$.map(event => ({draggable: target, event})).takeUntil(mouseup$)
  );

const dragEnDrop$ = drag$.sample(mouseup$);

export {dragStart$, drag$, dragEnDrop$ }