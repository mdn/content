---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
tags:
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.isNaN
---
{{jsSidebar("Objects")}}

The **`isNaN()`** function determines whether a value is
{{jsxref("NaN")}} or not. Because coercion inside the `isNaN`
function can be [surprising](#confusing_special-case_behavior), you may alternatively
want to use {{jsxref("Number.isNaN()")}}.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntax

```js
isNaN(value)
```

### Parameters

- `value`
  - : The value to be tested.

### Return value

**`true`** if the given value is {{jsxref("NaN")}}; otherwise,
**`false`**.

## Description

### The convenience of an isNaN function

Unlike all other possible values in JavaScript, it is not possible to use the equality
operators (== and ===) to compare a value against {{jsxref("NaN")}} to determine whether
the value _is_ `NaN` or not, because both `NaN == NaN` and
`NaN === NaN` evaluate to `false`. The `isNaN()` function provides a convenient
equality check against {{jsxref("NaN")}}.

### Origin of NaN values

`NaN` values are generated when arithmetic operations result in
_undefined_ or _unrepresentable_ values. Such values do not necessarily
represent overflow conditions. A `NaN` also results from attempted coercion
to numeric values of non-numeric values for which no primitive numeric value is
available.

For example, dividing zero by zero results in a `NaN` — but dividing other
numbers by zero does not.

### Confusing special-case behavior

Since the very earliest versions of the `isNaN` function specification, its
behavior for non-numeric arguments has been confusing. When the argument to the
`isNaN` function is not of type [Number](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type), the value is first coerced to a
Number. The resulting value is then tested to determine whether it is {{jsxref("NaN")}}.
Thus for non-numbers that when coerced to numeric type result in a valid non-NaN numeric
value (notably the empty string and boolean primitives, which when coerced give numeric
values zero or one), the "false" returned value may be unexpected; the empty string, for
example, is surely "not a number." The confusion stems from the fact that the term, "not
a number", has a specific meaning for numbers represented as IEEE-754 floating-point
values. The function should be interpreted as answering the question, "is this value,
when coerced to a numeric value, an IEEE-754 'Not A Number' value?"

{{jsxref("Number.isNaN()")}} is a more reliable way to test whether a value is the number value `NaN` or not. Alternatively, the expression `x !== x` can be used, and both of the solutions are not subject to the false positives that make the global `isNaN()` unreliable.

## Examples

```js
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla');   // true: "blabla" is converted to a number.
                   // Parsing this as a number fails and returns NaN
```

### Useful special-case behavior

There is a more usage oriented way to think of `isNaN()`: If
`isNaN(x)` returns `false`, you can use `x` in an
arithmetic expression not making the expression return `NaN`. If it returns
`true`, `x` will make every arithmetic expression return
`NaN`. This means that in JavaScript, `isNaN(x) == true` is
equivalent to `x - 0` returning `NaN` (though in JavaScript
`x - 0 == NaN` always returns false, so you can't test for it). Actually,
`isNaN(x)`, `isNaN(x - 0)`, `isNaN(Number(x))`,
`Number.isNaN(x - 0)`, and `Number.isNaN(Number(x))` always return
the same and in JavaScript `isNaN(x)` is just the shortest possible form to
express each of these terms.

You can use this, for example, to test whether an argument to a function is
arithmetically processable (usable "like" a number), or if it's not and you have to
provide a default value or something else. This way you can have a function that makes
use of the full versatility JavaScript provides by implicitly converting values
depending on context.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
