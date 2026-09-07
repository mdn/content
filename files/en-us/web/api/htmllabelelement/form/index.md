---
title: "HTMLLabelElement: form property"
short-title: form
slug: Web/API/HTMLLabelElement/form
page-type: web-api-instance-property
browser-compat: api.HTMLLabelElement.form
---

{{APIRef("HTML DOM")}}

The **`form`** read-only property of the {{domxref("HTMLLabelElement")}} interface returns an {{domxref("HTMLFormElement")}} object that owns the {{domxref("HTMLLabelElement.control", "control")}} associated with this {{HTMLElement("label")}}, or `null` if this label is not associated with a [labelable](/en-US/docs/Web/HTML/Guides/Content_categories#labelable) [form-associated](/en-US/docs/Web/HTML/Guides/Content_categories#form-associated_content) element ({{htmlelement("button")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, or [form-associated custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)) that is owned by a form.

Unlike [form-associated elements](/en-US/docs/Web/HTML/Guides/Content_categories#form-associated_content), the `<label>` element does not have a [`form`](/en-US/docs/Web/HTML/Reference/Attributes/form) attribute. This property does not reflect any HTML attribute, but is just a shortcut for `label.control.form`.

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
