---
title: "DOMTokenList: entries() method"
short-title: entries()
slug: Web/API/DOMTokenList/entries
page-type: web-api-instance-method
browser-compat: api.DOMTokenList.entries
---

{{APIRef("DOM")}}

The **`entries()`** method of the {{domxref("DOMTokenList")}} interface
returns an {{jsxref("Iteration_protocols",'iterator')}} allowing you
to go through all key/value pairs contained in this object. The values are
{{jsxref("Array")}}s which have [key, value] pairs, each representing a single token.

## Syntax

```js-nolint
entries()
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We when retrieve an iterator containing the key/value
pairs using `entries()`, then iterate through each one using a
{{jsxref("Statements/for...of", "for...of")}} loop, writing them to the
`<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.entries();

for (const value of iterator) {
  span.textContent += `(${value})`;
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMTokenList.foreach()")}}, {{domxref("DOMTokenList.keys")}} and {{domxref("DOMTokenList.values")}}.
