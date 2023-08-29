---
title: Assignment (=)
slug: Web/JavaScript/Reference/Operators/Assignment
page-type: javascript-operator
browser-compat: javascript.operators.assignment
---

{{jsSidebar("Operators")}}

The **assignment (`=`)** operator is used to assign a value to a variable or property. The assignment expression itself has a value, which is the assigned value. This allows multiple assignments to be chained in order to assign a single value to multiple variables.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
```

### Parameters

- `x`
  - : A valid assignment target, including an [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) or a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). It can also be a [destructuring assignment pattern](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
- `y`
  - : An expression specifying the value to be assigned to `x`.

### Return value

The value of `y`.

### Exceptions

- {{jsxref("ReferenceError")}}
  - : Thrown in strict mode if assigning to an identifier that is not declared in the scope.
- {{jsxref("TypeError")}}
  - : Thrown in strict mode if assigning to a [property that is not modifiable](/en-US/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties).

## Description

The assignment operator is completely different from the equals (`=`) sign used as syntactic separators in other locations, which include:

- Initializers of [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var), [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) declarations
- Default values of [destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initializers of [class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

All these places accept an assignment expression on the right-hand side of the `=`, so if you have multiple equals signs chained together:

```js-nolint
const x = y = 5;
```

This is equivalent to:

```js
const x = (y = 5);
```

Which means `y` must be a pre-existing variable, and `x` is a newly declared `const` variable. `y` is assigned the value `5`, and `x` is initialized with the value of the `y = 5` expression, which is also `5`. If `y` is not a pre-existing variable, a global variable `y` is implicitly created in [non-strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), or a {{jsxref("ReferenceError")}} is thrown in strict mode. To declare two variables on the same line, use:

```js
const x = 5,
  y = 5;
```

## Examples

### Simple assignment and chaining

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
```

### Value of assignment expressions

The assignment expression itself evaluates to the value of the right-hand side, so you can log the value and assign to a variable at the same time.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Unqualified identifier assignment

The global object sits at the top of the scope chain. When attempting to resolve a name to a value, the scope chain is searched. This means that properties on the global object are conveniently visible from every scope, without having to qualify the names with `globalThis.` or `window.` or `global.`.

Because the global object has a `String` property (`Object.hasOwn(globalThis, "String")`), you can use the following code:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

So the global object will ultimately be searched for unqualified identifiers. You don't have to type `globalThis.String`; you can just type the unqualified `String`. To make this feature more conceptually consistent, assignment to unqualified identifiers will assume you want to create a property with that name on the global object (with `globalThis.` omitted), if there is no variable of the same name declared in the scope chain.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables), assignment to an unqualified identifier in strict mode will result in a `ReferenceError`, to avoid the accidental creation of properties on the global object.

Note that the implication of the above is that, contrary to popular misinformation, JavaScript does not have implicit or undeclared variables. It just conflates the global object with the global scope and allows omitting the global object qualifier during property creation.

### Assignment with destructuring

The left-hand side of can also be an assignment pattern. This allows assigning to multiple variables at once.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

For more information, see [Destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
