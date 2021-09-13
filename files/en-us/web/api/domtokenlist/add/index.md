---
title: DOMTokenList.add()
slug: Web/API/DOMTokenList/add
tags:
  - API
  - Add
  - DOM
  - DOMTokenList
  - Method
  - Reference
browser-compat: api.DOMTokenList.add
---
{{APIRef("DOM")}}

The **`add()`** method of the {{domxref("DOMTokenList")}}
interface adds the given _token_ to the list.

## Syntax

```js
tokenList.add(token1[, token2[, ...tokenN]]);
```

### Parameters

- `tokenN`
  - : A {{domxref("DOMString")}} representing the token (or tokens) to add to the
    `tokenList`.

### Return value

`undefined`

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then add a new token to the list, and write the
list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;
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
