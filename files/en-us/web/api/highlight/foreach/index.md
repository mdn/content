---
title: "Highlight: forEach() method"
short-title: forEach()
slug: Web/API/Highlight/forEach
page-type: web-api-instance-method
browser-compat: api.Highlight.forEach
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.foreach
---

{{APIRef("CSS Custom Highlight API")}}

The **`forEach()`** method of the {{domxref("Highlight")}} interface executes a provided function once for each {{domxref("Range")}} object in the `Highlight` object, in insertion order.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callback`

  - : Function to execute for each `Range` object, taking three arguments:

    - `range`, `key`
      - : The current `Range` object being processed in the `Highlight`. As there are no
        keys in `Highlight`, the `range` is passed for both arguments.
    - `highlight`
      - : The `Highlight` object which `forEach()` was called upon.

- `thisArg`
  - : Value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The code snippet below shows how create a new highlight with two ranges, and then log the ranges by using the `forEach()` method:

```js
function logRanges(range, key, highlight) {
  console.log(`Highlight object ${highlight} contains range ${range}`);
}

const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const myHighlight = new Highlight();
myHighlight.add(range1);
myHighlight.add(range2);

myHighlight.forEach(logRanges);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
