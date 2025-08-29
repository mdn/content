---
title: "HTMLLabelElement: form property"
short-title: form
slug: Web/API/HTMLLabelElement/form
page-type: web-api-instance-property
browser-compat: api.HTMLLabelElement.form
---

{{APIRef("HTML DOM")}}

The **`form`** read-only property of the {{domxref("HTMLLabelElement")}} interface returns an {{domxref("HTMLFormElement")}} object that owns the {{domxref("HTMLLabelElement.control", "control")}} associated with this {{HTMLElement("label")}}, or `null` if this label is not associated with a listed form-associated element, either a {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, or {{htmlelement("textarea")}}, that is owned by a form.

This property is just a shortcut for `label.control.form`.

> [!NOTE]
> The `form` property on the `<label>` element is different from the `form` property on [listed form-associated elements](/en-US/docs/Web/HTML/Reference/Attributes/form#usage) as the `<label>` element does not have a [`form`](/en-US/docs/Web/HTML/Reference/Attributes/form) attribute.

## Value

An {{domxref("HTMLFormElement")}} or `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLInputElement.form")}}
- {{domxref("HTMLFormElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/en-US/docs/Learn_web_development/Extensions/Forms)
