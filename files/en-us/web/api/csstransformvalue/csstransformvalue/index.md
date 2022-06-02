---
title: CSSTransformValue()
slug: Web/API/CSSTransformValue/CSSTransformValue
page-type: web-api-constructor
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
new CSSTransformValue(transforms)
```

### Parameters

- `transforms`
  - : A list of {{domxref("CSSTransformComponent")}} objects to iterate over.

### Return value

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
