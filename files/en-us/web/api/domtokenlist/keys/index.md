---
title: DOMTokenList.keys()
slug: Web/API/DOMTokenList/keys
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.DOMTokenList.keys
---
{{APIRef("DOM")}}

The **`keys()`** method of the {{domxref("DOMTokenList")}} interface
returns an {{jsxref("Iteration_protocols",'iterator',"",1)}} allowing to go through all keys contained in this object.
The keys are unsigned integers.

## Syntax

```js
keys();
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator","",1)}}.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then retrieve an iterator containing the keys using `keys()`,
then iterate through those keys using a [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop,
writing each one to the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.keys();

for (let value of iterator) {
  span.textContent += `(${value}) `;
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMTokenList.entries()")}}, {{domxref("DOMTokenList.forEach()")}} and {{domxref("DOMTokenList.values")}}.
