---
title: "HTMLOptionElement: index property"
short-title: index
slug: Web/API/HTMLOptionElement/index
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.index
---

{{APIRef("HTML DOM")}}

The read-only **`index`** property of the {{DOMxRef("HTMLOptionElement")}} interface specifies the 0-based index of the element; that is, the position of the {{HTMLElement("option")}} within the list of options it belongs to, in tree-order, as an integer. If the `<option>` is not part of an option-list, the value is `0`.

## Value

A number.

## Examples

```js
const optionElement = document.getElementById("myOption");
console.log(optionElement.index);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- {{DOMxRef("HTMLOptionElement.selected")}}
- {{DOMxRef("HTMLSelectElement.selectedIndex")}}
- {{DOMxRef("HTMLOptionsCollection")}}
