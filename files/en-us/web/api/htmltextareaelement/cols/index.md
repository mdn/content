---
title: "HTMLTextAreaElement: cols property"
short-title: cols
slug: Web/API/HTMLTextAreaElement/cols
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.cols
---

{{ APIRef("HTML DOM") }}

The **`cols`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface is a positive integer representing the visible width of the multi-line text control, in average character widths. It reflects the `<textarea>` element's [`cols`](/en-US/docs/Web/HTML/Element/textarea#cols) attribute.

## Value

A positive integer. Defaults to `20`.

## Examples

```js
const textareaElement = document.getElementById("comment");
textArea.cols = 80;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.rows")}}
- {{DOMXref("HTMLTextAreaElement.wrap")}}
- CSS {{cssxref("resize")}} property
