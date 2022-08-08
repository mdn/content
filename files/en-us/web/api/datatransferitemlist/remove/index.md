---
title: DataTransferItemList.remove()
slug: Web/API/DataTransferItemList/remove
page-type: web-api-instance-method
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
remove(index)
```

### Parameters

- `index`
  - : The zero-based index number of the item in the drag data list to remove. If the
    `index` doesn't correspond to an existing item in the list, the list is
    left unchanged.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the drag data store is not in read/write mode and so the item cannot be removed.

## Examples

### Dragging and dropping an element

This example shows the use of the `remove()` method.

#### HTML

```html
<div>
 <p id="source" draggable="true">
   Select this element, drag it to the Drop Zone
   and then release the selection to move the element.</p>
</div>
<div id="target">Drop Zone</div>
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
  console.log('dragStart');
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, 'text/plain');
  // Add some other items to the drag payload
  dataList.add('<p>Paragraph…</p>', 'text/html');
  dataList.add('http://www.example.org','text/uri-list');
}

function drop_handler(ev) {
  console.log('Drop');
  ev.preventDefault();
  const data = event.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (const item of data) {
    if ((item.kind === 'string') &&
        (item.type.match('^text/plain'))) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if ((item.kind === 'string') &&
               (item.type.match('^text/html'))) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if ((item.kind === 'string') &&
               (item.type.match('^text/uri-list'))) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log('dragOver');
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = 'move'
}

function dragend_handler(ev) {
  console.log('dragEnd');
  const dataList = ev.dataTransfer.items;
  // Clear all the files. Iterate in reverse order to safely remove.
  for (let i = dataList.length - 1; i >= 0; i--) {
    if (dataList[i].kind === 'file') {
      dataList.remove(i);
    }
  }
  // Clear any remaining drag data
  dataList.clear();
}

const source = document.querySelector('#source');
source.addEventListener('dragstart', dragstart_handler);
source.addEventListener('dragend', dragend_handler);

const target = document.querySelector('#target');
target.addEventListener('drop', drop_handler);
target.addEventListener('dragover', dragover_handler);
```

#### Result

{{ EmbedLiveSample('Dragging and dropping an element', 100, '300px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
