---
title: "HTMLFormElement: enctype property"
short-title: enctype
slug: Web/API/HTMLFormElement/enctype
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.enctype
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.enctype`** property is the {{Glossary("MIME_type", "MIME type")}} of content that is used
to submit the form to the server. Possible values are:

- `application/x-www-form-urlencoded`: The initial default type.
- `multipart/form-data`: The type that allows file {{HTMLElement("input")}}
  element(s) to upload file data.
- `text/plain`: Ambiguous format, human-readable content not reliably interpretable by computer.

This value can be overridden by a [`formenctype`](/en-US/docs/Web/HTML/Element/button#formenctype) attribute
on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element.

## Value

A string.

## Examples

```js
form.enctype = "application/x-www-form-urlencoded";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
