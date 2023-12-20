---
title: "DataTransfer: getData() method"
short-title: getData()
slug: Web/API/DataTransfer/getData
page-type: web-api-instance-method
browser-compat: api.DataTransfer.getData
---

{{APIRef("HTML DOM")}}

The **`DataTransfer.getData()`**
method retrieves drag data (as a string) for the specified type.
If the drag operation does not include data, this method returns an empty
string.

Example data types are `text/plain` and `text/uri-list`.

## Syntax

```js-nolint
getData(format)
```

### Parameters

- `format`
  - : A string representing the type of data to retrieve.

### Return value

A string representing the drag data for the specified `format`. If the drag operation has no data or the operation has no data for the specified `format`, this method returns an empty string.

### Caveats

- Data availability

  - : The [HTML Drag and Drop Specification](https://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#drag-data-store-mode) dictates a `drag data store mode`.
    This may result in unexpected behavior, being
    **`DataTransfer.getData()`** not returning an expected
    value, because not all browsers enforce this restriction.

    During the `dragstart` and `drop` events, it is safe to access the data. For all other events, the data should be considered unavailable. Despite this, the items and their formats can still be enumerated.

## Examples

This example shows the use of the {{domxref("DataTransfer")}} object's
{{domxref("DataTransfer.getData()","getData()")}} and
{{domxref("DataTransfer.setData()","setData()")}} methods.

### HTML

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <span id="drag" draggable="true" ondragstart="drag(event)"
    >drag me to the other box</span
  >
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

### CSS

```css
#div1,
#div2 {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

### JavaScript

```js
function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = "green";
}

function drop(dropevent) {
  dropevent.preventDefault();
  const data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
  document.getElementById("drag").style.color = "black";
}
```

### Result

{{EmbedLiveSample('Examples', 600) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
