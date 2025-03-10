---
title: "HTMLOptionElement: defaultSelected property"
short-title: defaultSelected
slug: Web/API/HTMLOptionElement/defaultSelected
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.defaultSelected
---

{{ APIRef("HTML DOM") }}

The **`defaultSelected`** property of the {{DOMxRef("HTMLOptionElement")}} interface specifies the default selected state of the element. This property reflects the {{htmlelement("option")}} element's [`selected`](/en-US/docs/Web/HTML/Element/option#selected) attribute. The presence of the `selected` attribute sets the `defaultSelected` property to `true`.

## Value

A boolean.

## Examples

```js
const optionElement = document.getElementById("water");
console.log(optionElement.defaultSelected);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("option")}}
- {{DOMxRef("HTMLOptionElement.selected")}}
- {{DOMxRef("HTMLOptionElement.index")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{cssxref(":default")}}
