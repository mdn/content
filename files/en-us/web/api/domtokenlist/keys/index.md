---
title: DOMTokenList.keys()
slug: Web/API/DOMTokenList/keys
tags:
  - DOM
  - DOMTokenList
  - Iterable
  - Method
  - Reference
  - Web
  - keys
browser-compat: api.DOMTokenList.keys
---
{{APIRef("DOM")}}

The **`keys()`** method of the {{domxref("DOMTokenList")}}
interface returns an {{jsxref("Iteration_protocols",'iterator',"",1)}} allowing to go through
all keys contained in this object. The keys are of type `unsigned integer`.

## Syntax

```js
tokenList.keys();
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator","",1)}}.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then retrieve an iterator containing the keys using
`keys()`, then iterate through those keys using a [for ... of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop,
writing each one to the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.keys();

for(var value of iterator) {
  span.textContent += value + ' ++ ';
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
