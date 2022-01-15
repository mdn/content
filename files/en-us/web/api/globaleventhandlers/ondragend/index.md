---
title: GlobalEventHandlers.ondragend
slug: Web/API/GlobalEventHandlers/ondragend
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
browser-compat: api.GlobalEventHandlers.ondragend
---
{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the
{{event("dragend")}} event.

## Syntax

```js
targetElement.ondragend = dragendHandler;
```

### Return value

- `dragendHandler`
  - : The _dragend_ event handler for element `targetElement`.

## Example

This example demonstrates using the
{{domxref("GlobalEventHandlers.ondragend","ondragend")}} global event handler to set an
element's {{event("dragend")}} event handler.

### HTML

```html
<div>
  <p id="source" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>

<textarea readonly id="event-log"></textarea>
<button id="reload">Reload</button>
```

### CSS

```css
div, #event-log {
    margin: 1em;
}
#source, #target {
    padding: 2em;
    border: 1px solid black;
}
#source {
    color: blue;
}
#event-log {
    width: 25rem;
    height: 4rem;
    margin-bottom: 0;
    padding: .2rem;
}
```

### JavaScript

```js
const source = document.getElementById("source");
const target = document.getElementById("target");
const event_log = document.getElementById("event-log");

function dragstart_handler(ev) {
  event_log.textContent += "dragStart\n";
  // Change the source element's background color to signify drag has started
  ev.currentTarget.style.border = "dashed";
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragover_handler(ev) {
  event_log.textContent += "dragOver\n";
  // Change the target element's border to signify a drag over event
  // has occurred
  ev.currentTarget.style.background = "lightblue";
  ev.preventDefault();
}

function drop_handler(ev) {
  event_log.textContent += "Drop\n";
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragenter_handler(ev) {
  event_log.textContent += "dragEnter\n";
  // Change the source element's background color for enter events
  ev.currentTarget.style.background = "yellow";
}

function dragleave_handler(ev) {
  event_log.textContent += "dragLeave\n";
  // Change the source element's border back to white
  ev.currentTarget.style.background = "white";
}

function dragend_handler(ev) {
  event_log.textContent += "dragEnd\n";
  // Change the target element's background color to visually indicate
  // the drag ended.
  target.style.background = "pink";
}

// Set handlers for the source's drag - start/enter/leave/end events
source.ondragstart = dragstart_handler;
source.ondragenter = dragenter_handler;
source.ondragleave = dragleave_handler;
source.ondragend = dragend_handler;

// Set handlers for the target's drop and dragover events
target.ondrop = drop_handler;
target.ondragover = dragover_handler;

// Set click event listener on button to reload the example
const button = document.getElementById("reload");
button.addEventListener("click", () => {
  document.location.reload();
});
```

### Result

{{ EmbedLiveSample('Example', '100', '450') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("dragend")}}
