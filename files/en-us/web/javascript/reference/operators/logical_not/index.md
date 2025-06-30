---
title: Logical NOT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
page-type: javascript-operator
browser-compat: javascript.operators.logical_not
---

{{jsSidebar("Operators")}}

The **logical NOT (`!`)** (logical complement, negation) operator takes truth to
falsity and vice versa. It is typically used with boolean (logical)
values. When used with non-Boolean values, it returns `false` if its single
operand can be converted to `true`; otherwise, returns `true`.

{{InteractiveExample("JavaScript Demo: Logical NOT (!) operator", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false
```

## Syntax

```js-nolint
!x
```

## Description

Returns `false` if its single operand can be converted to `true`;
otherwise, returns `true`.

If a value can be converted to `true`, the value is so-called
{{Glossary("truthy")}}. If a value can be converted to `false`, the value is
so-called {{Glossary("falsy")}}.

Examples of expressions that can be converted to false are:

- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ` `` `);
- `undefined`.

Even though the `!` operator can be used with operands that are not Boolean values, it can still be considered a boolean operator since its return value can always be converted to a [boolean primitive](/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type). To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double NOT operator (`!!`) or the {{jsxref("Boolean/Boolean", "Boolean")}} constructor.

## Examples

### Using NOT

The following code shows examples of the `!` (logical NOT) operator.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Double NOT (`!!`)

It is possible to use a couple of NOT operators in series to explicitly force the
conversion of any value to the corresponding [boolean primitive](/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type).
The conversion is based on the "truthiness" or "falsiness" of the value (see
{{Glossary("truthy")}} and {{Glossary("falsy")}}).

The same conversion can be done through the {{jsxref("Boolean/Boolean", "Boolean()")}} function.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy…
!!new Boolean(false); // … even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Converting between NOTs

The following operation involving **booleans**:

```js-nolint
!!bCondition
```

is always equal to:

```js-nolint
bCondition
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
