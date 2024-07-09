---
title: "Document: body property"
short-title: body
slug: Web/API/Document/body
page-type: web-api-instance-property
browser-compat: api.Document.body
---

{{APIRef("DOM")}}

The **`Document.body`** property represents the
{{HTMLElement("body")}} or {{HTMLElement("frameset")}} node of the current document, or
`null` if no such element exists.

## Value

One of the following:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- `null`

## Examples

```js
// Given this HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

const aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Notes

`document.body` is the element that contains the content for the document.
In documents with `<body>` contents, returns the
`<body>` element, and in frameset documents, this returns the outermost
`<frameset>` element.

Though the `body` property is settable, setting a new body on a document
will effectively remove all the current children of the existing
`<body>` element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.head")}}
