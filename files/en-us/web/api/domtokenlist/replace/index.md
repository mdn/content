---
title: DOMTokenList.replace()
slug: Web/API/DOMTokenList/replace
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
browser-compat: api.DOMTokenList.replace
---
{{APIRef("DOM")}}

The **`replace()`** method of the {{domxref("DOMTokenList")}} interface
replaces an existing token with a new token.
If the first token doesn't exist, `replace()` returns `false` immediately,
without adding the new token to the token list.

## Syntax

```js
replace(oldToken, newToken);
```

### Parameters

- `oldToken`
  - : A string representing the token you want to replace.
- `newToken`
  - : A string representing the token you want to replace `oldToken` with.

### Return value

A boolean value, which is `true` if `oldToken` was
successfully replaced, or `false` if not.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then replace a token in the list, and write the
list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;

const result = classes.replace("c", "z");

if (result) {
  span.textContent = classes;
} else {
  span.textContent = 'token not replaced successfully';
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
