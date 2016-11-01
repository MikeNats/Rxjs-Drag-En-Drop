# Rxjs Drag En Drop

This is a mutliple level drag and drop implementation using Rxjs.
For two level dnd follow the comments in `src/dragEnDrop/dnd.js`

### Demo: 
`npm i && npm run start`

### Structure:

- `src/dragEnDrop/dnd$.js`     rxjs implementation
- `src/dragEnDrop/dnd.js`	  helper methods for implementing animation etc 

### Use:
	/* You can develop your own methods for each subscription */

	dragStart$.subscribe((event) =>
	  generateNewDraggable(event)); 
	  
	drag$.subscribe(({draggable, event}) => 
	  dragElement(draggable, event));  

	dragEnDrop$.subscribe(({event, draggable})=> 
	  handleDropabble(event, draggable));
