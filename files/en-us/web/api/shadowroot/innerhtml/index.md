---
title: "ShadowRoot: innerHTML property"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.innerHTML
---

{{APIRef("Shadow DOM")}}

The **`innerHTML`** property of the {{domxref("ShadowRoot")}} interface gets or sets the HTML markup to the DOM tree inside the `ShadowRoot`.

Note that some browsers serialize the `<` and `>` characters as `&lt;` and `&gt;` when they appear in attribute values (see [Browser compatibility](#browser_compatibility)).
This is to prevent a potential security vulnerability ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) in which an attacker can craft input that bypasses a [sanitization function](/en-US/docs/Web/Security/Attacks/XSS#sanitization), enabling a cross-site scripting (XSS) attack.

## Value

A string.

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `sr.innerHTML = null` is equivalent to `sr.innerHTML = ""`.

## Examples

### Setting the innerHTML of a Shadow root

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
