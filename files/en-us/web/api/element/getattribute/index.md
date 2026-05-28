---
title: "Element: getAttribute() method"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
page-type: web-api-instance-method
browser-compat: api.Element.getAttribute
---

{{APIRef("DOM")}}

The **`getAttribute()`** method of the
{{domxref("Element")}} interface returns the value of a specified attribute on the
element.

If the given attribute does not exist, the value returned will be `null`.

If you need to inspect the {{domxref("Attr")}} node's properties, you can use the {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} method instead.

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

```html
<!-- example div in an HTML DOC -->
<div id="div1">Hi Champ!</div>
```

```js
const div1 = document.getElementById("div1");
// <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const lang = div1.getAttribute("lang");
// null
```

## Description

### Lower casing

When called on an HTML element in a DOM flagged as an HTML document,
`getAttribute()` lower-cases its argument before proceeding.

### Character entities in attribute values

HTML character entities in an attribute's source markup (for example, `&lt;`, `&amp;`, or `&#x3C;`) are decoded by the HTML parser when the document is parsed, so `getAttribute()` returns the decoded value, not the original source. Given:

```html
<div id="example" data-payload="&lt;b&gt;hi&lt;/b&gt;"></div>
```

calling `document.getElementById("example").getAttribute("data-payload")` returns the string `"<b>hi</b>"`.

> [!WARNING]
> Treating the return value as already-escaped HTML is unsafe. If you read an attribute that holds untrusted data and then assign it to {{domxref("Element.innerHTML", "innerHTML")}} or insert it into the document as markup, any HTML entities the source author used to escape special characters will already be decoded, and the result can be exploited for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS). Use {{domxref("Node.textContent", "textContent")}} (or another text-safe API) for untrusted data instead of `innerHTML`.

### Retrieving nonce values

For security reasons, [CSP](/en-US/docs/Web/HTTP/Guides/CSP) nonces from non-script
sources, such as CSS selectors, and `.getAttribute("nonce")` calls are
hidden.

```js example-bad
let nonce = script.getAttribute("nonce");
// returns empty string
```

Instead of retrieving the nonce from the content attribute, use the
{{domxref("HTMLElement/nonce", "nonce")}} property:

```js
let nonce = script.nonce;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
