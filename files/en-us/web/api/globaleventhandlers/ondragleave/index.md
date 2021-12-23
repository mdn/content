---
title: GlobalEventHandlers.ondragleave
slug: Web/API/GlobalEventHandlers/ondragleave
tags:
  - API
  - HTML DOM
  - Reference
  - drag and drop
browser-compat: api.GlobalEventHandlers.ondragleave
---
{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the
{{event("dragleave")}} event.

## Syntax

```js
var dragleaveHandler = targetElement.ondragleave;
```

### Return value

- `dragleaveHandler`
  - : The _dragleave_ event handler for element `targetElement`.

## Example

This example demonstrates using the
{{domxref("GlobalEventHandlers.ondragleave","ondragleave")}} attribute handler to set an
element's {{event("dragleave")}} event handler.

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of using the Drag and Drop Global Event Attribute</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
</style>
</head>
<script>
function dragstart_handler(ev) {
 console.log("dragStart");
 // Change the source element's border to signify drag has started
 ev.currentTarget.style.border = "dashed";
 ev.dataTransfer.setData("text", ev.target.id);
}

function dragover_handler(ev) {
 console.log("dragOver");
 // Change the target element's background color to signify a drag over event
 // has occurred
 ev.currentTarget.style.background = "lightblue";
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragenter_handler(ev) {
 console.log("dragEnter");
 // Change the source element's background color for enter events
 ev.currentTarget.style.background = "yellow";
}

function dragleave_handler(ev) {
 console.log("dragLeave");
 // Change the source element's background color back to white
 ev.currentTarget.style.background = "white";
}

function dragend_handler(ev) {
 console.log("dragEnd");
 // Change the target element's background color to visually indicate
 // the drag ended.
 var el=document.getElementById("target");
 el.style.background = "pink";
}

function init() {
 // Set handlers for the source's enter/leave/end/exit events
 var el=document.getElementById("source");
 el.ondragenter = dragenter_handler;
 el.ondragleave = dragleave_handler;
 el.ondragend = dragend_handler;
}
</script>
<body onload="init();">
<h1>Examples of <code>ondragenter</code>, <code>ondragleave</code>, <code>ondragend</code></h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("dragleave")}}
