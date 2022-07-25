---
title: StylePropertyMapReadOnly.has()
slug: Web/API/StylePropertyMapReadOnly/has
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - Experimental
  - Houdini
  - Method
  - Reference
  - StylePropertyMapReadOnly
  - has()
browser-compat: api.StylePropertyMapReadOnly.has
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`has()`** method of the
{{domxref("StylePropertyMapReadOnly")}} interface indicates whether the specified
property is in the `StylePropertyMapReadOnly` object.

## Syntax

```js
has(property)
```

### Parameters

- `property`
  - : The name of a property.

### Return value

A boolean value.

## Examples

Here we use the `has()` method to see if the padding-top property is present
within the button elements style attribute.

```js
// get the button element
const buttonEl = document.querySelector('.example');

// find what's in the style attribute with attributeStyleMap and has()
const hasPadTop = buttonEl.attributeStyleMap.has('padding-top');

console.log(hasPadTop); // logs true if padding-top is present in style attribute
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
