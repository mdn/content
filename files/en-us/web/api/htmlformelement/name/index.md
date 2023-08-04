---
title: "HTMLFormElement: name property"
short-title: name
slug: Web/API/HTMLFormElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.name
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.name`** property represents the name of
the current {{HtmlElement("form")}} element as a string.

If your {{HTMLElement("Form")}} element contains an element named _name_ then
that element overrides the `form.name` property, so that you can't access it.

## Value

A string.

## Examples

```js
const form1name = document.getElementById("form1").name;

if (form1name !== document.form.form1) {
  // Browser doesn't support this form of reference
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
