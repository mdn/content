---
title: "HTMLTableColElement: span property"
short-title: span
slug: Web/API/HTMLTableColElement/span
page-type: web-api-instance-property
browser-compat: api.HTMLTableColElement.span
---

{{ APIRef("HTML DOM") }}

The **`span`** read-only property of the {{domxref("HTMLTableColElement")}} interface represents the number of columns this {{htmlelement("col")}} or {{htmlelement("colgroup")}} must span; this lets the column occupy space across multiple columns of the table. It reflects the [`span`](/en-US/docs/Web/HTML/Element/col#span) attribute.

## Value

A positive number representing the number of columns.

> [!NOTE]
> When setting a new value, the value is _clamped_ to the nearest strictly positive number (up to 1000).

## Examples

This example provides two buttons to modify the column span of the first cell of the body.

### HTML

```html
<table>
  <colgroup>
    <col />
    <col span="2" class="multiColumn" />
  </colgroup>
  <thead>
    <th></th>
    <th scope="col">C1</th>
    <th scope="col">C2</th>
    <th scope="col">C3</th>
    <th scope="col">C4</th>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row 1</th>
      <td>cell</td>
      <td>cell</td>
      <td>cell</td>
      <td>cell</td>
    </tr>
  </tbody>
</table>
<button id="increase">Increase column span</button>
<button id="decrease">Decrease column span</button>
<div>The first &lt;col&gt; spans <output>2</output> actual column(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### CSS

```css
.multiColumn {
  background-color: #d7d9f2;
}
```

### JavaScript

```js
// Obtain relevant interface elements
const col = document.querySelectorAll("col")[1];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  col.span = col.span + 1;

  // Update the display
  output.textContent = col.span;
});

decreaseButton.addEventListener("click", () => {
  col.span = col.span - 1;

  // Update the display
  output.textContent = col.span;
});
```

### Result

{{EmbedLiveSample("Examples", "100%", 175)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableCellElement.colSpan")}}
