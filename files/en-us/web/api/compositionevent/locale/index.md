---
title: CompositionEvent.locale
slug: Web/API/CompositionEvent/locale
tags:
  - API
  - CompositionEvent
  - Deprecated
  - Locale
  - Property
  - Reference
browser-compat: api.CompositionEvent.locale
---
{{deprecated_header}}{{APIRef("DOM Events")}}

The **`locale`** read-only property of the
{{domxref("CompositionEvent")}} interface returns the locale of current input method
(for example, the keyboard layout locale if the composition is associated with IME).

> **Warning:** Even for browsers supporting it, don't trust the value contained in this property.
> Even if technically it is accessible, the way to set it up when creating a {{domxref("CompositionEvent")}}
> is not guaranteed to be coherent.

## Syntax

```js
myLocale = CompositionEvent.locale
```

### Value

A {{domxref("DOMString")}} representing the locale of current input method.

## Specifications

This property was in early versions of different specifications. It is now only kept for compatibility purposes, and the way
to set its value when creating a {{domxref("CompositionEvent")}} is [not well defined](https://github.com/w3c/uievents/issues/48).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CompositionEvent")}}
