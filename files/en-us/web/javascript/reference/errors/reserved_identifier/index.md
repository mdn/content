---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---

{{jsSidebar("Errors")}}

The JavaScript exception "_variable_ is a reserved identifier" occurs when [reserved
keywords](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) are used as identifiers.

## Message

```js
SyntaxError: The use of a future reserved word for an identifier is invalid (Edge)
SyntaxError: "x" is a reserved identifier (Firefox)
SyntaxError: Unexpected reserved word (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

[Reserved
keywords](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) will throw in if they are used as identifiers. These are reserved in
strict mode and sloppy mode:

- `enum`

The following are only reserved when they are found in strict mode code:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## Examples

### Strict and non-strict reserved keywords

The `enum` identifier is generally reserved.

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

In strict mode code, more identifiers are reserved.

```js example-bad
"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

You'll need to rename these variables.

```js example-good
var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];
```

### Update older browsers

If you are using an older browser that does not yet implement
[`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) or
[`class`](/en-US/docs/Web/JavaScript/Reference/Statements/class),
for example, you should update to a more recent browser version that does support these
new language features.

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (throws in older browsers only, e.g. Firefox 44 and older)
```

## See also

- [Good variable names](https://wiki.c2.com/?GoodVariableNames)
