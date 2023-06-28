---
title: "DOMTokenList: add() method"
short-title: add()
slug: Web/API/DOMTokenList/add
page-type: web-api-instance-method
browser-compat: api.DOMTokenList.add
---

{{APIRef("DOM")}}

The **`add()`** method of the {{domxref("DOMTokenList")}} interface adds the given tokens to the list, omitting any that are already present.

## Syntax

```js-nolint
add(token0)
add(token0, token1)
add(token0, token1, /* … ,*/ tokenN)
```

### Parameters

- `tokenN`
  - : A string representing a token (or tokens) to add to the `DOMTokenList`.

### Return value

None.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if one of the arguments is an empty string
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if a token contains ASCII whitespace.

## Examples

In the following example, we retrieve the list of classes set on a {{htmlelement("span")}} element as a `DOMTokenList`, using {{domxref("Element.classList")}}.
We then add a new token to the list, and write the list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
classes.add("d");
span.textContent = classes;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

You can add multiple tokens as well:

```js
span.classList.add("d", "e", "f");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
