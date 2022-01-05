---
title: CSSTransformValue()
slug: Web/API/CSSTransformValue/CSSTransformValue
tags:
  - API
  - CSS
  - CSS Typed Object Model API
  - CSSTransformValue
  - Constructor
  - Experimental
  - Houdini
  - Reference
browser-compat: api.CSSTransformValue.CSSTransformValue
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSTransformValue()`** constructor
creates a new {{domxref("CSSTransformValue")}} object which represents a list of
individual transform objects.

## Syntax

```js
var CSSTransformValue = new CSSTransformValue(transforms);
```

### Parameters

- transforms
  - : A list of {{domxref("CSSTransformComponent")}} objects to iterate over.

### Returns

A new {{domxref("CSSTransformValue")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Raised if transforms is empty.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
