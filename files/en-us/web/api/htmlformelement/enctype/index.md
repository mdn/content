---
title: HTMLFormElement.enctype
slug: Web/API/HTMLFormElement/enctype
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLFormElement.enctype
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement.enctype`** property is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used
to submit the form to the server. Possible values are:

- `application/x-www-form-urlencoded`: The initial default type.
- `multipart/form-data`: The type that allows file {{HTMLElement("input")}}
  element(s) to upload file data.
- `text/plain`: A type introduced in HTML5.

This value can be overridden by a {{htmlattrxref("formenctype", "button")}} attribute
on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element.

## Syntax

```js
var string = form.enctype;
form.enctype = string;
```

## Example

```js
form.enctype = 'application/x-www-form-urlencoded';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
