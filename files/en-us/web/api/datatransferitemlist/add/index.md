---
title: DataTransferItemList.add()
slug: Web/API/DataTransferItemList/add
tags:
  - API
  - Add
  - DataTransferItemList
  - HTML DOM
  - HTML Drag and Drop API
  - Method
  - Reference
  - drag and drop
browser-compat: api.DataTransferItemList.add
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItemList.add()`** method creates a new
{{domxref("DataTransferItem")}} using the specified data and adds it to the drag data
list. The item may be a {{domxref("File")}} or a {{domxref("DOMString","string")}} of a
given type. If the item is successfully added to the list, the newly-created
{{domxref("DataTransferItem")}} object is returned.

## Syntax

```js
DataTransferItem = DataTransferItemList.add(data, type);
DataTransferItem = DataTransferItemList.add(file);
```

### Parameters

- `data`
  - : A {{domxref("DOMstring","string")}} representing the drag item's data.
- `type`
  - : A {{domxref("DOMstring","string")}} of the drag item's type. Some example types are
    `text/html` and `text/plain`.
- `file`
  - : A {{domxref("File")}} object. No type needs to be given in this case.

### Return value

A {{domxref("DataTransferItem")}} containing the specified data. If the drag item
couldn't be created (for example, if the associated {{domxref("DataTransfer")}} object
has no data store), `null` is returned.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the string `data` parameter was provided, and the list already contains an
    item whose {{domxref("DataTransferItem.kind","kind")}} is `"Plain Unicode string"` and
    whose type is equal to the specified type parameter.

## Example

This example shows the use of the `add()` method.

### HTML

```html
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

### Javascript

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

### Result

{{EmbedLiveSample('Example', 400, 300)}}

{{LiveSampleLink('Example', 'Result link')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
