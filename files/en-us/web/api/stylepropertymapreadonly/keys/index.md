---
title: StylePropertyMapReadOnly.keys()
slug: Web/API/StylePropertyMapReadOnly/keys
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - Experimental
  - Houdini
  - Method
  - Reference
  - StylePropertyMapReadOnly
  - keys()
browser-compat: api.StylePropertyMapReadOnly.keys
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`StylePropertyMapReadOnly.keys()`** method returns a new
_array iterator_ containing the keys for each item
in `StylePropertyMapReadOnly`

## Syntax

```js
keys()
```

### Parameters

None.

### Return value

A new {{jsxref("Array")}}.

## Examples

In this example we use the `keys()` method to be able to access the
properties within our {{domxref('Element.computedStyleMap()')}}.

```js
// get a button element
const buttonEl = document.querySelector('button');

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// keys returns an iterable list of properties
const props = allComputedStyles.keys();
console.log(props.next().value); // returns align-content
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
