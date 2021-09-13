---
title: Document.title
slug: Web/API/Document/title
tags:
  - API
  - Command API
  - Document
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.Document.title
---
{{APIRef("DOM")}}

The **`document.title`** property gets
or sets the current [title](/en-US/docs/Web/HTML/Element/title) of the
document.

## Syntax

```js
var docTitle = document.title;
```

_docTitle_ is a string containing the _document_'s title. If the
title was overridden by setting `document.title`, it contains that value.
Otherwise, it contains the title specified in the markup (see the {{Anch("Notes")}}
below).

```js
document.title = newTitle;
```

`newTitle` is the new title of the document. The assignment
affects the return value of `document.title`, the title displayed for the
document (e.g. in the titlebar of the window or tab), and it also affects the DOM of the
document (e.g. the content of the `<title>` element in an HTML
document).

## Example

```js
<!DOCTYPE html>
<html>
<head>
  <title>Hello World!</title>
</head>
<body>

  <script>
    alert(document.title); // displays "Hello World!"
    document.title = "Goodbye World!";
    alert(document.title); // displays "Goodbye World!"
  </script>

</body>
</html>
```

## Notes

This property applies to HTML, SVG, XUL, and other documents in Gecko.

For HTML documents the initial value of `document.title` is the text content
of the `<title>` element. For XUL it's the value of the
{{XULAttr("title")}} attribute of the {{XULElem("window")}} or other top-level XUL
element.

In XUL, accessing `document.title` before the document is fully loaded has
undefined behavior: `document.title` may return an empty string and setting
`document.title` may have no effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
