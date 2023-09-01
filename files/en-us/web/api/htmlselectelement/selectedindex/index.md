---
title: "HTMLSelectElement: selectedIndex property"
short-title: selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.selectedIndex
---

{{APIRef("HTML DOM")}}

The **`HTMLSelectElement.selectedIndex`** property is a
`long` that reflects the index of the first or last selected
{{HTMLElement("option")}} element, depending on the value of `multiple`. The
value `-1` indicates that no element is selected.

## Value

A number.

## Examples

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
const selectElem = document.getElementById("select");
const pElem = document.getElementById("p");

// When a new <option> is selected
selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.textContent = `selectedIndex: ${index}`;
});
```

{{EmbedLiveSample("Examples", "200px", "120px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
