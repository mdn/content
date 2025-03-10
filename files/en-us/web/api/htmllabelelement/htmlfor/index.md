---
title: "HTMLLabelElement: htmlFor property"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLLabelElement.htmlFor
---

{{APIRef("HTML DOM")}}

The **`HTMLLabelElement.htmlFor`** property reflects the value
of the [`for`](/en-US/docs/Web/HTML/Element/label#for) content property. That means that this
script-accessible property is used to set and read the value of the content property
`for`, which is the ID of the label's associated control element.

## Value

A string which contains the ID string of the element which is
associated with the control.

> [!NOTE]
> If this property has a value, the {{domxref("HTMLLabelElement.control")}} property
> must refer to the same control.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLLabelElement.control")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/en-US/docs/Learn_web_development/Extensions/Forms)
