---
title: DataTransferItemList.clear()
slug: Web/API/DataTransferItemList/clear
tags:
  - API
  - DataTransferItemList
  - HTML DOM
  - HTML Drag and Drop API
  - Method
  - Reference
  - clear
  - drag and drop
browser-compat: api.DataTransferItemList.clear
---
The {{domxref("DataTransferItemList")}} method
**`clear()`** removes all {{domxref("DataTransferItem")}}
objects from the drag data items list, leaving the list empty.

The drag data store in which this list is kept is only writable while handling the
{{event("dragstart")}} event. While handling {{event("drop")}}, the drag data store is
in read-only mode, and this method silently does nothing. No exception is thrown.

## Syntax

```js
DataTransferItemList.clear();
```

### Parameters

None.

### Return value

{{jsxref("undefined")}}

## Example

This example shows the use of the `clear()` method.

#### HTML

```html
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
```

#### CSS

```css
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
```

#### JavaScript

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  var dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>... paragraph ...</p>", "text/html");
  dataList.add("http://www.example.org","text/uri-list");
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = event.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (var i = 0; i < data.length; i++) {
    if ((data[i].kind == 'string') && (data[i].type.match('^text/plain'))) {
      // This item is the target node
      data[i].getAsString(function (s){
        ev.target.appendChild(document.getElementById(s));
      });
    } else if ((data[i].kind == 'string') && (data[i].type.match('^text/html'))) {
      // Drag data item is HTML
      data[i].getAsString(function (s){
        console.log("... Drop: HTML = " + s);
      });
    } else if ((data[i].kind == 'string') && (data[i].type.match('^text/uri-list'))) {
      // Drag data item is URI
      data[i].getAsString(function (s){
        console.log("... Drop: URI = " + s);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}

function dragend_handler(ev) {
  console.log("dragEnd");
  var dataList = ev.dataTransfer.items;
  for (var i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  // Clear any remaining drag data
  dataList.clear();
}
```

#### Result

{{EmbedLiveSample('Example', 400, 300)}}

{{LiveSampleLink('Example','Result link')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("HTML Drag and Drop API")}}
