---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "missing variable name" is a common error experienced by developers. It mostly occurs due to a typo or a forgotten variable name.

## Message

```js
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A variable is missing a name. The cause is most likely a typo or a forgotten variable name.
Make sure that you've provided the name of the variable before the `=` sign.

When declaring multiple variables at the same time, make sure that the previous lines/declaration does not end with a comma instead
of a semi-colon.

## Examples

### Missing a variable name

```js example-bad
var = "foo";
```

Coming up with a descriptive variable name is challenging for most developers. It gets easier over time.

```js example-good
var description = "foo";
```

### Reserved keywords can't be variable names

There are a few variable names that are [reserved
keywords](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords). You can't use these. Sorry :(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### Declaring multiple variables

Pay special attention to commas when declaring multiple variables. Is there an excess
comma? Did you accidentally add commas instead of semicolons?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

The fixed version:

```js example-good
var x, y = "foo";
var x = "foo";

var first = document.getElementById('one');
var second = document.getElementById('two');
```

### Arrays

{{jsxref("Array")}} literals in JavaScript need square brackets around the values. This
won't work:

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

This would be correct:

```js example-good
var arr = [1,2,3,4,5];
```

## See also

- [Good variable names](http://wiki.c2.com/?GoodVariableNames)
- {{jsxref("Statements/var", "var")}}
- [Variable
  declarations in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
