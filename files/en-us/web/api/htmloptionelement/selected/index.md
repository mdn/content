---
title: "HTMLOptionElement: selected property"
short-title: selected
slug: Web/API/HTMLOptionElement/selected
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.selected
---

{{ APIRef("HTML DOM") }}

The **`selected`** property of the {{DOMxRef("HTMLOptionElement")}} interface specifies the current selectedness of the element; that is, whether the {{HTMLElement("option")}} is selected or not.

The presence of the HTML [`selected`](/en-US/docs/Web/HTML/Element/option#selected) attribute indicates the option is selected by default. It does not indicate whether this option is currently selected: if the option's state changes, the `selected` content attribute does not reflect the change; only the `HTMLOptionElement`'s `selected` IDL property is updated. The `selected` attribute is reflected by the {{domxref("HTMLOptionElement.defaultSelected", "defaultSelected")}} property.

## Value

A boolean.

## Examples

```js
const optionElement = document.getElementById("water");
console.log(optionElement.selected);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- {{DOMxRef("HTMLOptionElement.index")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("HTMLSelectElement.selectedIndex")}}
