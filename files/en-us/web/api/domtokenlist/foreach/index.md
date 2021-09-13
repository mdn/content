---
title: DOMTokenList.forEach()
slug: Web/API/DOMTokenList/forEach
tags:
  - DOM
  - DOMTokenList
  - Iterable
  - Method
  - Reference
  - Web
  - forEach
browser-compat: api.DOMTokenList.forEach
---
{{APIRef("DOM")}}

The **`forEach()`** method of the {{domxref("DOMTokenList")}}
interface calls the callback given in parameter once for each value pair in the list, in
insertion order.

## Syntax

```js
tokenList.forEach(callback [, thisArg]);
```

### Parameters

- `callback`

  - : Function to execute for each element, eventually taking three arguments:

    - `currentValue`
      - : The current element being processed in the array.
    - `currentIndex`
      - : The index of the current element being processed in the array.
    - `listObj`
      - : The array that `forEach()` is being applied to.

- `thisArg` {{Optional_inline}}
  - : Value to use as {{jsxref("Operators/this", "this")}} when executing `callback`.

### Return value

{{jsxref('undefined')}}.

## Example

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We when retrieve an iterator containing the values
using `forEach()`, writing each one to the `<span>`'s
{{domxref("Node.textContent")}} inside the `forEach()` inner function.

### HTML

```html
<span class="a b c"></span>
```

### JavaScript

```js
let span = document.querySelector("span");
let classes = span.classList;
let iterator = classes.values();

classes.forEach(
  function(value, key, listObj) {
    span.textContent += `${value} ${key}/${this}  ++  `;
  },
  "arg"
);
```

### Result

{{ EmbedLiveSample('Example', '100%', 60) }}

## Polyfill

This {{Glossary("Polyfill","polyfill")}} adds compatibility to all Browsers supporting
[ES5](https://caniuse.com/#search=es5):

```js
if (window.DOMTokenList && !DOMTokenList.prototype.forEach) {
  DOMTokenList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMSettableTokenList")}} (object that extends DOMTokenList with settable
  _.value_ property)
