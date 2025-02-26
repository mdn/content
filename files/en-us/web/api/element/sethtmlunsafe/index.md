---
title: "Element: setHTMLUnsafe() method"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
page-type: web-api-instance-method
browser-compat: api.Element.setHTMLUnsafe
---

{{APIRef("DOM")}}

The **`setHTMLUnsafe()`** method of the {{domxref("Element")}} interface is used to parse a string of HTML into a {{domxref("DocumentFragment")}}, which then replaces the element's subtree in the DOM.
The input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom).

The suffix "Unsafe" in the method name indicates that the method does not sanitize or remove potentially unsafe XSS-relevant input, such as `<script>` elements, and script or event handler content attributes.

If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

> [!NOTE]
> This method should be used instead of {{domxref("Element.innerHTML")}} when a string of HTML may contain declarative shadow roots.

## Syntax

```js-nolint
setHTMLUnsafe(html)
```

### Parameters

- `html`
  - : A string defining HTML to be parsed.

### Return value

None (`undefined`).

### Exceptions

None.

## Examples

The code below demonstrates how to parse a string of HTML and insert it into the `Element` with an id of `target`.

```js
const value = "<p>This is a string of text</p>"; // string of HTML

// Get the Element with id "target" and set it with the string.
document.getElementById("target").setHTMLUnsafe(value);

// Result (as a string): "<p>This is a string of text</p>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
