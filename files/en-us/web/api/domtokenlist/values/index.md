---
title: DOMTokenList.values()
slug: Web/API/DOMTokenList/values
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.DOMTokenList.values
---
{{APIRef("DOM")}}

The **`values()`** method of the {{domxref("DOMTokenList")}} interface
returns an {{jsxref("Iteration_protocols",'iterator')}}
allowing the caller to go through all values contained in the `DOMTokenList`.
The individual values are strings.

## Syntax

```js
tokenList.values();
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We when retrieve an iterator containing the values
using `values()`, then iterate through those values using a [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop,
writing each one to the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.values();

for (const value of iterator) {
  span.textContent += `(${value}) `;
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
