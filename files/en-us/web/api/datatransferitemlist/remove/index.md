---
title: DataTransferItemList.remove()
slug: Web/API/DataTransferItemList/remove
tags:
  - API
  - DataTransferItemList
  - HTML DOM
  - HTML Drag and Drop API
  - Method
  - Reference
  - drag and drop
  - remove
browser-compat: api.DataTransferItemList.remove
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItemList.remove()`** method removes the
{{domxref("DataTransferItem")}} at the specified index from the list. If the index is
less than zero or greater than one less than the length of the list, the list will not
be changed.

## Syntax

```js
DataTransferItemList.remove(index);
```

### Parameters

- `index`
  - : The zero-based index number of the item in the drag data list to remove. If the
    `index` doesn't correspond to an existing item in the list, the list is
    left unchanged.

### Return value

{{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the drag data store is not in read/write mode and so the item cannot be removed.

## Example

This example shows the use of the `remove()` method.

### JavaScript

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

### HTML

```html
<h1>Example uses of <code>DataTransferItemList</code> methods and property</h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
```

### CSS

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

{{ EmbedLiveSample('Example', '300', '450', '', 'Web/API/DataTransferItemList/remove')
  }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
