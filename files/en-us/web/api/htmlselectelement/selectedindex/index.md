---
title: "HTMLSelectElement: selectedIndex property"
short-title: selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.selectedIndex
---

{{APIRef("HTML DOM")}}

The **`selectedIndex`** property of the {{DOMxRef("HTMLSelectElement")}} interface is the numeric index of the first selected {{HTMLElement("option")}} element in a {{HTMLElement("select")}} element, if any, or `−1` if no `<option>` is selected. Setting this property selects the option at that index and deselects all other options, while setting it to `-1` deselects any currently selected options.

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

## See also

- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOptionsCollection")}}
