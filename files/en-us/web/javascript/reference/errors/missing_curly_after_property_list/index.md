---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "missing } after property list" occurs when there is a mistake
in the [object
initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) syntax somewhere. Might be in fact a missing curly bracket, but could
also be a missing comma.

## Message

```js
SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after property list (Firefox)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There is a mistake in the [object
initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) syntax somewhere. Might be in fact a missing curly bracket, but could
also be a missing comma, for example. Also check if any closing curly brackets or
parenthesis are in the correct order. Indenting or formatting the code a bit nicer might
also help you to see through the jungle.

## Examples

### Forgotten comma

Oftentimes, there is a missing comma in your object initializer code:

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

Correct would be:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3
};
```

## See also

- [Object
  initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
