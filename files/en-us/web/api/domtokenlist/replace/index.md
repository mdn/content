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

The **`replace()`** method of the {{domxref("DOMTokenList")}}
interface replaces an existing token with a new token. If the first token doesn't
exist, `replace()` returns `false` immediately, without adding the
new token to the token list.

## Syntax

```js
tokenList.replace(oldToken, newToken);
```

### Parameters

- `oldToken`
  - : A {{domxref("DOMString")}} representing the token you want to replace.
- `newToken`
  - : A {{domxref("DOMString")}} representing the token you want to replace
    `oldToken` with.

### Return value

A boolean value, which is `true` if `oldToken` was
successfully replaced, or `false` if not.

> **Note:** In older browsers, `replace()` returns void.

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
let span = document.querySelector("span");
let classes = span.classList;

let result = classes.replace("c", "z");
console.log(result);

if (result) {
  span.textContent = classes;
} else {
  span.textContent = 'token not replaced successfully';
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Polyfill

The following polyfill will add the replace method to the `DOMTokenList`
class.  The following code will only work with **IE10-11**. To use with
earlier versions of IE, refer to the polyfill at
{{domxref("element.classList#Polyfill")}}

```js
DOMTokenList.prototype.replace = function (a, b) {
    if (this.contains(a)) {
        this.add(b);
        this.remove(a);
        return true;
    }
    return false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
