---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Boolean.toString
---

{{JSRef}}

The **`toString()`** method returns a string representing the specified boolean value.

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Return value

A string representing the specified boolean value.

## Description

The {{jsxref("Boolean")}} object overrides the `toString` method of {{jsxref("Object")}}; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For `Boolean` values, the `toString` method returns a string representation of the boolean value, which is either `"true"` or `"false"`.

The `toString()` method requires its `this` value to be a `Boolean` primitive or wrapper object. It throws a {{jsxref("TypeError")}} for other `this` values without attempting to coerce them to boolean values.

Because `Boolean` doesn't have a [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, JavaScript calls the `toString()` method automatically when a `Boolean` _object_ is used in a context expecting a string, such as in a [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals). However, boolean _primitive_ values do not consult the `toString()` method to be [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — rather, they are directly converted using the same algorithm as the initial `toString()` implementation.

```js
Boolean.prototype.toString = () => "Overridden";
console.log(`${true}`); // "true"
console.log(`${new Boolean(true)}`); // "Overridden"
```

## Examples

### Using toString()

```js
const flag = new Boolean(true);
console.log(flag.toString()); // "true"
console.log(false.toString()); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
