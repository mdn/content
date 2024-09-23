---
title: "HTMLOptionsCollection: selectedIndex property"
short-title: selectedIndex
slug: Web/API/HTMLOptionsCollection/selectedIndex
page-type: web-api-instance-property
browser-compat: api.HTMLOptionsCollection.selectedIndex
---

{{APIRef("HTML DOM")}}

The **`selectedIndex`** property of the {{DOMxRef("HTMLOptionsCollection")}} interface is the numeric index of the first selected
{{HTMLElement("option")}} element, if any, or −1 if no `<option>` is selected. The property changes which option element is selected, or selects an option element if none is selected, with the `-1` deselecting any currently selected elements

## Value

A number.

## Examples

```js
const optionColl = document.getElementById("select").options;
console.log(`selected option: ${optionColl.selectedIndex}`); // the index of the first selected option, or -1 if no option is selected
optionColl.selectedIndex = 0; // selects the first item
optionColl.selectedIndex = -1; // deselects any selected option
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLOptionsCollection.length")}}
- {{DOMxRef("HTMLOptionsCollection.add()")}}
- {{DOMxRef("HTMLOptionsCollection.remove()")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLSelectElement")}}
