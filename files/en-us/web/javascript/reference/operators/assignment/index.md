---
title: Assignment (=)
slug: Web/JavaScript/Reference/Operators/Assignment
page-type: javascript-operator
browser-compat: javascript.operators.assignment
---

{{jsSidebar("Operators")}}

The **assignment (`=`)** operator is used to assign a value to a
variable. The assignment operation evaluates to the assigned value. Chaining the
assignment operator is possible in order to assign a single value to multiple variables.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
