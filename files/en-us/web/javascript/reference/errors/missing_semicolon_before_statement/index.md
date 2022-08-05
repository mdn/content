---
title: 'SyntaxError: missing ; before statement'
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "missing ; before statement" occurs when there is a semicolon (`;`)
missing somewhere and can't be added
by [automatic semicolon insertion (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).
You need to provide a semicolon, so that JavaScript can parse the source code correctly.

## Message

```
SyntaxError: Expected ';' (Edge)
SyntaxError: missing ; before statement (Firefox)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

There is a semicolon (`;`) missing somewhere. [JavaScript statements](/en-US/docs/Web/JavaScript/Reference/Statements) must
be terminated with semicolons. Some of them are affected
by [automatic semicolon insertion (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion),
but in this case you need to provide a semicolon,
so that JavaScript can parse the source code correctly.

However, oftentimes, this error is only a consequence of another error, like not
escaping strings properly, or using `var` wrongly. You might also have too
many parenthesis somewhere. Carefully check the syntax when this error is thrown.

## Examples

### Unescaped strings

This error can occur easily when not escaping strings properly and the JavaScript
engine is expecting the end of your string already. For example:

```js example-bad
const foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

You can use double quotes, or escape the apostrophe:

```js example-good
const foo = "Tom's bar";
// OR
const foo = 'Tom\'s bar';
```

### Declaring properties with var

You **cannot** declare properties of an object or array with a
`var` declaration.

```js example-bad
const obj = {};
const obj.foo = 'hi'; // SyntaxError missing ; before statement

const array = [];
const array[0] = 'there'; // SyntaxError missing ; before statement
```

Instead, omit the `var` keyword:

```js example-good
const obj = {};
obj.foo = 'hi';

const array = [];
array[0] = 'there';
```

### Bad keywords

If you come from another programming language, it is also common to use keywords that
don't mean the same or have no meaning at all in JavaScript:

```js example-bad
def print(info) {
  console.log(info);
} // SyntaxError missing ; before statement
```

Instead, use `function` instead of `def`:

```js example-good
function print(info) {
  console.log(info);
}
```

## See also

- [Automatic semicolon insertion (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
- [JavaScript statements](/en-US/docs/Web/JavaScript/Reference/Statements)
