---
title: "DOMTokenList: forEach() method"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
page-type: web-api-instance-method
browser-compat: api.DOMTokenList.forEach
---

{{APIRef("DOM")}}

The **`forEach()`** method of the {{domxref("DOMTokenList")}} interface
calls the callback given in parameter once for each value pair in the list, in
insertion order.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameters

- `callback`

  - : The function to execute for each element, eventually taking three arguments:

    - `currentValue`
      - : The current element being processed in the array.
    - `currentIndex`
      - : The index of the current element being processed in the array.
    - `listObj`
      - : The array that `forEach()` is being applied to.

- `thisArg` {{Optional_inline}}
  - : The value to use as {{jsxref("Operators/this", "this")}} when executing `callback`.

### Return value

None.

## Example

In the following example we retrieve the list of classes set on a
{{htmlelement("pre")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We when retrieve an iterator containing the values
using `forEach()`, writing each one to the `<pre>`'s
{{domxref("Node.textContent")}} inside the `forEach()` inner function.

### HTML

```html
<pre class="a b c"></pre>
```

### JavaScript

```js
const pre = document.querySelector("pre");
const classes = pre.classList;
const iterator = classes.values();

classes.forEach(function (value, key, listObj) {
  pre.textContent += `(${value} ${key})/${this}\n`;
}, "arg");
```

### Result

{{ EmbedLiveSample('Example', '100%', 100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMTokenList.entries()")}}, {{domxref("DOMTokenList.keys")}} and {{domxref("DOMTokenList.values")}}.
