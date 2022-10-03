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

The deprecated **`compile()`** method is used to (re-)compile a regular expression during execution of a script. It is basically the same as the [`RegExp()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) constructor.

The `compile()` method is deprecated and is only specified for compatibility reasons. You can just use the `RegExp()` constructor to achieve the same effect.

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

The following example shows how to recompile a regular expression with a new pattern
and a new flag.

```js
const regexObj = new RegExp('foo', 'gi');
regexObj.compile('new foo', 'g');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp")}}
