---
title: "ShadowRoot: innerHTML property"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.innerHTML
---

{{APIRef("Shadow DOM")}}

The **`innerHTML`** property of the {{domxref("ShadowRoot")}} interface sets gets or sets the HTML markup to the DOM tree inside the `ShadowRoot`.

Note that some browsers serialize `<` and `>` in attributes as `&lt;` and `&gt;` when reading the HTML (see [Browser compatibility](#browser_compatibility)).
This prevents certain exploits where code becomes executable when serialized and then deserialized into HTML.

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
