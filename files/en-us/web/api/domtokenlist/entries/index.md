---
title: DOMTokenList.entries()
slug: Web/API/DOMTokenList/entries
tags:
  - DOM
  - DOMTokenList
  - Iterable
  - Method
  - Reference
  - Web
browser-compat: api.DOMTokenList.entries
---
{{APIRef("DOM")}}

The **`DOMTokenList.entries()`**
method returns an {{jsxref("Iteration_protocols",'iterator')}} allowing you to go
through all key/value pairs contained in this object. The values are
{{domxref("DOMString")}} objects, each representing a single token.

## Syntax

```js
tokenList.entries();
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
let span = document.querySelector("span");
let classes = span.classList;
let iterator = classes.entries();

for (let value of iterator) {
  span.textContent += value + ' ++ ';
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMSettableTokenList")}} (object that extends DOMTokenList with settable
  _.value_ property)
