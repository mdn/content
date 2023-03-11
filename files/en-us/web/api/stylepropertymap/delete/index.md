---
title: StylePropertyMap.delete()
slug: Web/API/StylePropertyMap/delete
page-type: web-api-instance-method
browser-compat: api.StylePropertyMap.delete
---

{{APIRef("CSS Typed Object Model API")}}

The **`delete()`** method of the
{{domxref("StylePropertyMap")}} interface removes the CSS declaration with the given
property.

## Syntax

```js-nolint
delete(property)
```

### Parameters

- `property`
  - : An identifier indicating the stylistic feature (e.g. font, width, background
    color) to remove.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example removes the {{cssxref('background-image')}} property from the
element's [style attribute](/en-US/docs/Web/HTML/Global_attributes/style).

```js
// get the button element
const buttonEl = document.querySelector("button");

// remove background-image from style attribute
buttonEl.attributeStyleMap.delete("background-image");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
