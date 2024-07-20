---
title: "DataTransfer: setData() method"
short-title: setData()
slug: Web/API/DataTransfer/setData
page-type: web-api-instance-method
browser-compat: api.DataTransfer.setData
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer.setData()`** method sets the drag
operation's {{domxref("DataTransfer","drag data")}} to the specified data and type. If
data for the given type does not exist, it is added at the end of the drag data store,
such that the last item in the {{domxref("DataTransfer.types","types")}} list will be
the new type. If data for the given type already exists, the existing data is replaced
in the same position. That is, the order of the
{{domxref("DataTransfer.types","types")}} list is not changed when replacing data of the
same type.

Example data types are `text/plain` and `text/uri-list`.

## Syntax

```js-nolint
setData(format, data)
```

### Parameters

- `format`
  - : A string representing the type of the drag data to add to the
    {{domxref("DataTransfer","drag object")}}.
- `data`
  - : A string representing the data to add to the
    {{domxref("DataTransfer","drag object")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Dragging an element

In this example we can drag a {{HTMLElement("p")}} element into a target {{HTMLElement("div")}} element.

- In the `dragstart` handler, we use {{domxref("DataTransfer.setData","setData()")}} to add the `id` of the `<p>` element to the {{domxref("DataTransfer")}} object.

- In the `drop` handler we retrieve the `id` and use it to move the `<p>` element into the target.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the drop zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>

<button id="reset">Reset example</button>
```

#### CSS

```css
div {
  margin: 0.5em 0;
  padding: 2em;
}

#target,
#source {
  border: 1px solid black;
  padding: 0.5rem;
}

.dragging {
  background-color: pink;
}
```

#### JavaScript

```js
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // Change the source element's background color
  // to show that drag has started
  ev.currentTarget.classList.add("dragging");
  // Clear the drag data cache (for all formats/types)
  ev.dataTransfer.clearData();
  // Set the drag's format and data.
  // Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
source.addEventListener("dragend", (ev) =>
  ev.target.classList.remove("dragging"),
);

const target = document.querySelector("#target");
target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // Get the data, which is the id of the source element
  const data = ev.dataTransfer.getData("text");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Result

{{EmbedLiveSample("Dragging an element", "", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
