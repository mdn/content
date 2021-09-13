---
title: DOMTokenList.remove()
slug: Web/API/DOMTokenList/remove
tags:
  - API
  - DOM
  - DOMTokenList
  - Method
  - Reference
  - remove
browser-compat: api.DOMTokenList.remove
---
{{APIRef("DOM")}}

The **`remove()`** method of the {{domxref("DOMTokenList")}}
interface removes the specified _tokens_ from the list.

## Syntax

```js
tokenList.remove(token1[, token2[, ...tokenN]]);
```

### Parameters

- `tokenN`
  - : A {{domxref("DOMString")}} representing the token you want to remove from the list.
    If the string is not in the list, no error is thrown, and nothing happens.

### Return value

`undefined`

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then remove a token from the list, and write the
list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<div id="ab" class="a b c"></div>
<div id="a" class="a b c"></div>
```

Now the JavaScript:

```js
let span = document.getElementById("ab");
let classes = span.classList;
classes.remove("c");
span.textContent = classes;
```

To remove multiple classes at once, you can supply multiple tokens. The order you
supply the tokens doesn't have to match the order they appear in the list:

```js
let span2 = document.getElementById("a")
let classes2 = span2.classList;

classes2.remove("c", "b");
span2.textContent = classes2;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
