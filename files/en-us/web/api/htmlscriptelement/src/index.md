---
title: "HTMLScriptElement: src property"
short-title: src
slug: Web/API/HTMLScriptElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.src
---

{{APIRef("HTML DOM")}}

The **`src`** property of the {{domxref("HTMLScriptElement")}} interface is a string representing the URL of an external script; this can be used as an alternative to embedding a script directly within a document.

It reflects the `src` attribute of the {{HTMLElement("script")}} element.

## Value

A string.

## Examples

Assume the code is running on a website whose URL is `https://example.com`.

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

```js
const scriptWithSrc = document.getElementById("script-with-src");
console.log(scriptWithSrc.src); // Output: "https://example.com/main.js"
const scriptWithoutSrc = document.getElementById("script-without-src");
console.log(scriptWithoutSrc.src); // Output: ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
