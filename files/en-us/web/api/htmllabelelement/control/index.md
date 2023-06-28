---
title: "HTMLLabelElement: control property"
short-title: control
slug: Web/API/HTMLLabelElement/control
page-type: web-api-instance-property
browser-compat: api.HTMLLabelElement.control
---

{{APIRef("HTML DOM")}}

The read-only **`HTMLLabelElement.control`** property returns a
reference to the control (in the form of an object of type {{domxref("HTMLElement")}} or
one of its derivatives) with which the {{HTMLElement("label")}} element is associated,
or `null` if the label isn't associated with a control.

## Value

An {{domxref("HTMLElement")}} derived object representing the control with which the
{{HTMLElement("label")}} is associated, or `null` if the label stands alone.

> **Note:** If this property has a value and {{domxref("HTMLLabelElement.htmlFor")}} has a value,
> the {{domxref("HTMLLabelElement.htmlFor")}} property must refer to the same control.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/en-US/docs/Learn/Forms)
