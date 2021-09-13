---
title: with
slug: Web/JavaScript/Reference/Statements/with
tags:
  - Deprecated
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.with
---
> **Warning:**Use of the `with` statement is not recommended, as it may
> be the source of confusing bugs and compatibility issues. See the "Ambiguity Contra"
> paragraph in the "Description" section below for details.

{{jsSidebar("Statements")}}

The **with statement** extends the scope chain for a statement.

## Syntax

```js
with (expression)
  statement
```

- `expression`
  - : Adds the given expression to the scope chain used when evaluating the statement. The
    parentheses around the expression are required.
- `statement`
  - : Any statement. To execute multiple statements, use a [block](/en-US/docs/Web/JavaScript/Reference/Statements/block) statement ({
    ... }) to group those statements.

## Description

JavaScript looks up an unqualified name by searching a scope chain associated with the
execution context of the script or function containing that unqualified name. The 'with'
statement adds the given object to the head of this scope chain during the evaluation of
its statement body. If an unqualified name used in the body matches a property in the
scope chain, then the name is bound to the property and the object containing the
property. Otherwise a {{jsxref("ReferenceError")}} is thrown.

> **Note:** Using `with` is not recommended, and is forbidden in
> ECMAScript 5 [strict
> mode](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode). The recommended alternative is to assign the object whose properties you
> want to access to a temporary variable.

### Performance pro & contra

**Pro:** The `with` statement can help reduce file size by
reducing the need to repeat a lengthy object reference without performance penalty. The
scope chain change required by 'with' is not computationally expensive. Use of 'with'
will relieve the interpreter of parsing repeated object references. Note, however, that
in many cases this benefit can be achieved by using a temporary variable to store a
reference to the desired object.

**Contra:** The `with` statement forces the specified object to
be searched first for all name lookups. Therefore all identifiers that aren't members of
the specified object will be found more slowly in a 'with' block. Where performance is
important, 'with' should only be used to encompass code blocks that access members of
the specified object.

### Ambiguity contra

**Contra:** The `with` statement makes it hard for a human
reader or JavaScript compiler to decide whether an unqualified name will be found along
the scope chain, and if so, in which object. So given this example:

```js
function f(x, o) {
  with (o) {
    console.log(x);
  }
}
```

Only when `f` is called is `x` either found or not, and if found,
either in `o` or (if no such property exists) in `f`'s activation
object, where `x` names the first formal argument. If you forget to define
`x` in the object you pass as the second argument, or if there's some similar
bug or confusion, you won't get an error -- just unexpected results.

**Contra:** Code using `with` may not be forward compatible,
especially when used with something other than a plain object. Consider this example:

```js
function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
```

If you call `f([1,2,3], obj)` in an ECMAScript 5 environment, then the
`values` reference inside the `with` statement will resolve to
`obj`. However, ECMAScript 2015 introduces a `values` property
on {{jsxref("Array.prototype")}} (so that it will be available on every array). So, in
a JavaScript environment that supports ECMAScript 2015, the `values`
reference inside the `with` statement could resolve to
`[1,2,3].values`. However, in this particular example,
{{jsxref("Array.prototype")}} has been defined with `values` in its
{{jsxref("Symbol.unscopables")}} object. If it were not, one can see how this would be
a difficult issue to debug.

## Examples

### Using with

The following `with` statement specifies that the {{jsxref("Math")}} object
is the default object. The statements following the `with` statement refer to
the {{jsxref("Math.PI", "PI")}} property and the {{jsxref("Math.cos", "cos")}} and
{{jsxref("Math.sin", "sin")}} methods, without specifying an object. JavaScript assumes
the `Math` object for these references.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/block", "block", "", 1)}}
- [Strict
  mode](/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
