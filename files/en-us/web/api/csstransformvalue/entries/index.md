---
title: CSSTransformValue.entries()
slug: Web/API/CSSTransformValue/entries
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSTransformValue
  - Entries
  - Experimental
  - Houdini
  - Method
  - Reference
browser-compat: api.CSSTransformValue.entries
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSTransformValue.entries()`** method
returns an array of a given object's own enumerable
property `[key, value]` pairs in the same order as that provided by a
{{jsxref("for...in")}} loop (the difference being that a for-in loop enumerates
properties in the prototype chain as well).

## Syntax

```js
entries(obj)
```

### Parameters

- `obj`
  - : The {{domxref('CSSTransformValue')}} whose enumerable own property
    `[key, value]` pairs are to be returned.

### Return value

An array of the given `CSSTransformValue` object's own enumerable property
`[key, value]` pairs.

## Examples

To Do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
