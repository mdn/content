---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.compile
---

{{JSRef}} {{deprecated_header}}

> **Note:** The `compile()` method is deprecated and is only specified for compatibility reasons. You can just use the [`RegExp()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) constructor to achieve the same effect. Using `compile()` causes the otherwise immutable regex source and flags to become mutable, which may break user expectations.

The deprecated **`compile()`** method of a `RegExp` object is used to recompile a regular expression with new source and flags after the `RegExp` object has already been created.

## Syntax

```js-nolint
compile(pattern, flags)
```

### Parameters

- `pattern`
  - : The text of the regular expression.
- `flags`
  - : Any combination of [flag values](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags).

## Examples

### Using compile()

The following example shows how to recompile a regular expression with a new pattern and a new flag.

```js
const regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp")}}
