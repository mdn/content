---
title: HTMLLabelElement.form
slug: Web/API/HTMLLabelElement/form
page-type: web-api-instance-property
tags:
  - Forms
  - HTML DOM
  - HTMLLabelElement
  - Property
  - Read-only
  - Reference
  - form
browser-compat: api.HTMLLabelElement.form
---
{{APIRef("HTML DOM")}}

The read-only **`HTMLLabelElement.form`** property returns an
{{domxref("HTMLFormElement")}} object which represents the form of which the label's
associated control is a part, or null if there is either no associated control, or if
that control isn't in a form.

This property is just a shortcut for `HTMLLabelElement.control.form`.

## Value

An {{domxref("HTMLFormElement")}} which represents the form with which the label's
{{domxref("HTMLLabelElement.control", "control")}} is associated. If
{{domxref("HTMLLabelElement.control", "control")}} is `null` (meaning the
label isn't associated with a control), or if the control isn't part of a form, this
property returns `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML forms guide](/en-US/docs/Learn/Forms)
