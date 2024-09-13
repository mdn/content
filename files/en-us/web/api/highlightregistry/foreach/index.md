---
title: "HighlightRegistry: forEach() method"
short-title: forEach()
slug: Web/API/HighlightRegistry/forEach
page-type: web-api-instance-method
browser-compat: api.HighlightRegistry.forEach
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.foreach
---

{{APIRef("CSS Custom Highlight API")}}

The **`forEach()`** method of the {{domxref("HighlightRegistry")}} interface executes a provided function once for each {{domxref("Highlight")}} object in the registry, in insertion order.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callback`

  - : Function to execute for each `Highlight` object, taking three arguments:

    - `highlight`
      - : The current highlight.
    - `name`
      - : The highlight name.
    - `registry`
      - : The registry object which `forEach()` was called upon.

- `thisArg`
  - : Value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The code snippet below shows how create a new highlight with two ranges, and then log the ranges by using the `forEach()` method:

```js
function logAllHighlights(highlight, name) {
  console.log(`Highlight ${name} exists in the registry`, highlight);
}

const customHighlight1 = new Highlight();
const customHighlight2 = new Highlight();
const customHighlight3 = new Highlight();

CSS.highlights.set("custom-highlight-1", customHighlight1);
CSS.highlights.set("custom-highlight-2", customHighlight2);
CSS.highlights.set("custom-highlight-3", customHighlight3);

CSS.highlights.forEach(logAllHighlights);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
