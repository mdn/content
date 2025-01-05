---
title: "HTMLTextAreaElement: rows property"
short-title: rows
slug: Web/API/HTMLTextAreaElement/rows
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.rows
---

{{ APIRef("HTML DOM") }}

The **`rows`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface is a positive integer representing the visible text lines of the text control. It reflects the `<textarea>` element's [`rows`](/en-US/docs/Web/HTML/Element/textarea#rows) attribute.

## Value

A positive integer. Defaults to `2`.

## Examples

```js
const textareaElement = document.getElementById("comment");
const textLines = textArea.rows;
textArea.rows = textLines + 2;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
- {{DOMXref("HTMLTextAreaElement.wrap")}}
- CSS {{cssxref("resize")}} property
