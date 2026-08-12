---
title: "ProcessingInstruction: getAttribute() method"
short-title: getAttribute()
slug: Web/API/ProcessingInstruction/getAttribute
page-type: web-api-instance-method
browser-compat: api.ProcessingInstruction.getAttribute
---

{{APIRef("DOM")}}

The **`getAttribute()`** method of the
{{domxref("ProcessingInstruction")}} interface returns the value of a specified attribute on the
processing instruction.

If the given attribute does not exist, the value returned will be `null`.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameters

- `attributeName`
  - : The name of the attribute whose value you want to get.

### Return value

A string containing the value of `attributeName` if the attribute exists, otherwise `null`.

## Examples

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

console.log(pi.getAttribute("name"));
// Logs:
// "placeholder"
```

## Description

### Lower casing

When called on an HTML element in a DOM flagged as an HTML document,
`getAttribute()` lower-cases its argument before proceeding.

### Decoded character references in attribute values

HTML [character references](/en-US/docs/Glossary/Character_reference) in an attribute's source markup (for example, `&lt;`, `&amp;`, or `&#x3C;`) are decoded by the HTML parser when the document is parsed, so `getAttribute()` returns the decoded value, not the original source.

Given:

```js
const pi = document.createProcessingInstruction(
  "start",
  'data-payload="&lt;b&gt;hi&lt;/b&gt;"',
);

pi.getAttribute("data-payload");
// <b>hi</b>
```

Treating the return value from `getAttribute()` as already-escaped HTML is unsafe. If you read an attribute that holds untrusted data and then assign it to {{domxref("Element.innerHTML", "innerHTML")}} or insert it into the document as markup, any HTML references used to escape special characters will already be decoded, and the result can be exploited for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS).

Use {{domxref("Node.textContent", "textContent")}} (or another text-safe API) for untrusted data instead of `innerHTML`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ProcessingInstruction.hasAttribute()")}}
- {{domxref("ProcessingInstruction.hasAttributes()")}}
- {{domxref("ProcessingInstruction.getAttributeNames()")}}
- {{domxref("ProcessingInstruction.setAttribute()")}}
- {{domxref("ProcessingInstruction.removeAttribute()")}}
- {{domxref("ProcessingInstruction.toggleAttribute()")}}
