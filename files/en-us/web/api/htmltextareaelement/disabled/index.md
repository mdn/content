---
title: "HTMLTextAreaElement: disabled property"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.disabled
---

{{ APIRef("HTML DOM") }}

The **`disabled`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface indicates whether this multi-line text control is disabled and cannot be interacted with. It reflects the {{htmlelement("textarea")}} element's [`disabled`](/en-US/docs/Web/HTML/Element/textarea#autocomplete) attribute. When `false`, this `textarea` may still be disabled if its containing element, such as a {{htmlelement("fieldset")}}, is disabled.

## Value

A boolean.

## Examples

```js
const textareaElement = document.getElementById("comment");
if (commentsDisabled) {
  textareaElement.disabled = true;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.readOnly")}}
