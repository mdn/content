---
title: "DOMTokenList: remove() method"
short-title: remove()
slug: Web/API/DOMTokenList/remove
page-type: web-api-instance-method
browser-compat: api.DOMTokenList.remove
---

{{APIRef("DOM")}}

The **`remove()`** method of the {{domxref("DOMTokenList")}} interface
removes the specified _tokens_ from the list.

## Syntax

```js-nolint
remove(token1)
remove(token1, token2)
remove(token1, token2, /* …, */ tokenN)
```

### Parameters

- `token1`, …, `tokenN`
  - : A string representing the token you want to remove from the list.
    If the string is not in the list, no error is thrown, and nothing happens.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then remove a token from the list, and write the
list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span id="ab" class="a b c"></span> <span id="a" class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.getElementById("ab");
const classes = span.classList;
classes.remove("c");
span.textContent = classes;
```

To remove multiple classes at once, you can supply multiple tokens. The order you
supply the tokens doesn't have to match the order they appear in the list:

```js
const span2 = document.getElementById("a");
const classes2 = span2.classList;

classes2.remove("c", "b");
span2.textContent = classes2;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
