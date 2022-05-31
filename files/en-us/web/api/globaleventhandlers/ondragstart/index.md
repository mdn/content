---
title: GlobalEventHandlers.ondragstart
slug: Web/API/GlobalEventHandlers/ondragstart
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
browser-compat: api.GlobalEventHandlers.ondragstart
---
{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the
{{domxref("HTMLElement/dragstart_event", "dragstart")}} event.

## Syntax

```js
target.ondragstart = functionRef;
```

### Value

- `functionRef`
  - : The _dragstart_ event handler for element `target`.

## Example

This example demonstrates using the
{{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} global event handler to set an
element's `dragstart` event handler.

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
    height: 8rem;
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
    ev.currentTarget.style.background = "lightgreen";
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
    event_log.textContent += "Dropped\n";
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    target.style.background = "pink";
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
    ev.currentTarget.style.background = "pink";
}

// Set handlers for the source's drag - start/enter/leave/end events
source.ondragstart = dragstart_handler;
source.ondragend = dragend_handler;

// Set handlers for the target's drop and dragover events
target.ondragleave = dragleave_handler;
target.ondragenter = dragenter_handler;
target.ondragover = dragover_handler;
target.ondrop = drop_handler;

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

- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
