---
title: StylePropertyMap.append()
slug: Web/API/StylePropertyMap/append
tags:
  - API
  - CSS Typed Object Model API
  - Houdini
  - Method
  - Reference
  - StylePropertyMap
  - append()
browser-compat: api.StylePropertyMap.append
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`append()`** method of the
{{domxref("StylePropertyMap")}} interface adds the passed CSS value to the
`StylePropertyMap` with the given property.

## Syntax

```js
StylePropertyMap.append(property,value)
```

### Parameters

- property
  - : An identifier indicating the stylistic feature (e.g. font, width, background
    color) to add.
- value
  - : The value the given property should have.

### Return value

{{jsxref('undefined')}}.

## Example

This example shows an extra background image value being added to the
{{cssxref('background-image')}} property of the element, using
{{domxref('HTMLElement.attributeStyleMap')}}.

```js
// get the button element
const buttonEl = document.querySelector('button');

// append another value to the background-image property set on the attribute
buttonEl.attributeStyleMap.append('background-image', 'linear-gradient(180deg, blue, black');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
