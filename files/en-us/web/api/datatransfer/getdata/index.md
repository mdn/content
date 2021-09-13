---
title: DataTransfer.getData()
slug: Web/API/DataTransfer/getData
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.getData
---
{{APIRef("HTML DOM")}}

The **`DataTransfer.getData()`**
method retrieves drag data (as a {{domxref("DOMString")}}) for the specified type.
If the drag operation does not include data, this method returns an empty
string.

Example data types are `text/plain` and `text/uri-list`.

## Syntax

```js
dataTransfer.getData(format);
```

### Arguments

- `format`
  - : A {{domxref("DOMString")}} representing the type of data to retrieve.

### Return value

- {{domxref("DOMString")}}
  - : A {{domxref("DOMString")}} representing the drag data for the specified
    `format`. If the drag operation has no data or the operation has no
    data for the specified `format`, this method returns an empty string.

### Caveats

- Data availability
  - : The [HTML5
    Drag and Drop Specification](https://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#drag-data-store-mode) dictates a `drag data store mode`.
    This may result in unexpected behavior, being
    **`DataTransfer.getData()`** not returning an expected
    value.

## Example

This example shows the use of the {{domxref("DataTransfer")}} object's
{{domxref("DataTransfer.getData()","getData()")}} and
{{domxref("DataTransfer.setData()","setData()")}} methods.

### HTML Content

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
    <span id="drag" draggable="true" ondragstart="drag(event)">drag me to the other box</span>
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

### CSS Content

```css
#div1, #div2 {
    width:100px;
    height:50px;
    padding:10px;
    border:1px solid #aaaaaa;
}
```

### JavaScript Content

```js
function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = 'green';
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
    document.getElementById("drag").style.color = 'black';
}
```

### Result

{{EmbedLiveSample('Example', 600) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
