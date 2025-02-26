---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("String")}} values returns this string value.

{{InteractiveExample("JavaScript Demo: String.toString()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
```

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the specified string value.

## Description

The {{jsxref("String")}} object overrides the `toString` method of {{jsxref("Object")}}; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For `String` values, the `toString` method returns the string itself (if it's a primitive) or the string that the `String` object wraps. It has the exact same implementation as {{jsxref("String.prototype.valueOf()")}}.

The `toString()` method requires its `this` value to be a `String` primitive or wrapper object. It throws a {{jsxref("TypeError")}} for other `this` values without attempting to coerce them to string values.

Because `String` doesn't have a [`[Symbol.toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, JavaScript calls the `toString()` method automatically when a `String` _object_ is used in a context expecting a string, such as in a [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals). However, String _primitive_ values do not consult the `toString()` method to be [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — since they are already strings, no conversion is performed.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Examples

### Using toString()

The following example displays the string value of a {{jsxref("String")}} object:

```js
const x = new String("Hello world");

console.log(x.toString()); // "Hello world"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.valueOf()")}}
