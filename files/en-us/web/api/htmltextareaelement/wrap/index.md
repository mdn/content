---
title: "HTMLTextAreaElement: wrap property"
short-title: wrap
slug: Web/API/HTMLTextAreaElement/wrap
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.wrap
---

{{ APIRef("HTML DOM") }}

The **`wrap`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface indicates how the control should wrap the value for form submission. It reflects the `<textarea>` element's [`wrap`](/en-US/docs/Web/HTML/Element/textarea#wrap) attribute. Note that the `"hard"` value only has an effect when the {{domxref("HTMLTextAreaElement.cols", "cols")}} attribute is also set.

## Value

See [`wrap`](/en-US/docs/Web/HTML/Element/textarea#wrap) for the possible values. Defaults to `"soft"`.

## Examples

```js
const textareaElement = document.getElementById("comment");
const oldWrap = textArea.wrap;
textArea.wrap = "hard"; // Add line breaks (CR+LF) during form submission
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
