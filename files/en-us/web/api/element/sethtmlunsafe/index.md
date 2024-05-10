---
title: "Element: setHTMLUnsafe() method"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
page-type: web-api-instance-method
browser-compat: api.Element.setHTMLUnsafe
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`setHTMLUnsafe()`** method of the {{domxref("Element")}} interface is used to parse a string of HTML and then insert it into the DOM as a subtree of the element.

## Syntax

```js-nolint
element.setHTMLUnsafe(input)
```

### Parameters

- `input`
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

- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
