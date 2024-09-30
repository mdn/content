---
title: "Selection: direction property"
short-title: direction
slug: Web/API/Selection/direction
page-type: web-api-instance-property
browser-compat: api.Selection.direction
---

{{APIRef("DOM")}}

The **`direction`** read-only property of the {{domxref("Selection")}} interface is a string that provides the direction of the current selection.

The value is determined by the order in which the user chooses the boundary points of the selection.
For example, a user might make a selection by clicking a starting boundary point, dragging the cursor, and releasing at an end boundary point.
If the end boundary point is later in the document than the start point, then the direction is "forwards", while the direction is "backwards" if the end point is before the start point within the document.
The value is "directionless" if no direction is implied by the user. For example, if the user made the selection by double-clicking on a word or element, or the selection was made programmatically.

The direction does not change if a selection's range is mutated, for example, using methods like {{DOMxRef("Range.selectNode()")}}.

## Value

A string describing the type of the current selection.
Possible values are:

- `backward`
  - : The selection is backwards.
- `forward`
  - : The selection is forwards.
- `none`
  - : No selection has been made, or the selection is directionless.

## Examples

This example allows you to test how the `direction` property works by logging the current direction of text selected within a paragraph.

### HTML

The HTML just displays a paragraph element with some text that you can select.

```html
<p id="text-box">
  Select text in this paragraph to see the selection direction.
</p>
```

Note that there is also a "hidden" logging box (and associated code), following the pattern in the [Display a single entry log](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples#displaying_a_single_entry_log) guide for writing live samples.

```css hidden
#log {
  height: 50px;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

### JavaScript

```js hidden
const logElement = document.querySelector("#log");

function log(text) {
  logElement.innerText = text;
}
```

The code checks whether the `direction` property is defined, and if so, adds a listener for the [`selectionchange` event](/en-US/docs/Web/API/Document/selectionchange_event), which gets the current selection and logs its direction.
If the property is not supported, the code logs this fact and hides the text for selection.

```js
const input = document.getElementById("text-box");

if ("direction" in Selection.prototype) {
  document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    log(`Selection direction: ${selection.direction}`);
  });
} else {
  log("direction property not defined");
  input.hidden = true;
}
```

### Result

If the property is supported, select text using double click, and select-drag-release in different directions.

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
