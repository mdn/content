---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
tags:
  - Error
  - JavaScript
  - Warning
---
{{jsSidebar("Errors")}}

The JavaScript warning "expression closures are deprecated" occurs when the
non-standard [expression
closure](/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures) syntax (shorthand function syntax) is used.

## Message

```js
Warning: expression closures are deprecated
```

## Error type

Warning. JavaScript execution won't be halted.

## What went wrong?

The non-standard [expression
closure](/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures) syntax (shorthand function syntax) is deprecated and shouldn't be used
anymore. This syntax will be removed entirely in [bug 1083458](https://bugzilla.mozilla.org/show_bug.cgi?id=1083458) and
scripts using it will throw a {{jsxref("SyntaxError")}} then.

## Examples

### Deprecated syntax

Expression closures omit curly braces or return statements from function declarations
or from method definitions in objects.

```js example-bad
var x = function() 1;

var obj = {
  count: function() 1
};
```

### Standard syntax

To convert the non-standard expression closures syntax to standard ECMAScript syntax,
you can add curly braces and return statements.

```js example-good
var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
```

### Standard syntax using arrow functions

Alternatively, you can use [arrow
functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```js example-good
var x = () => 1;
```

### Standard syntax using shorthand method syntax

Expression closures can also be found with getter and setter, like this:

```js example-bad
var obj = {
  get x() 1,
  set x(v) this.v = v
};
```

With ES2015 [method
definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions), this can be converted to:

```js example-good
var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
```

## See also

- [Expression
  closures](/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures)
- [Arrow
  functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Method
  definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
