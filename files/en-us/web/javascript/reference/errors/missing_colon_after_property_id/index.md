---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "missing : after property id" occurs when objects are created
using the [object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) syntax.
A colon (`:`) separates keys and values for the
object's properties. Somehow, this colon is missing or misplaced.

## Message

```
SyntaxError: Invalid shorthand property initializer (V8-based)
SyntaxError: missing : after property id (Firefox)
SyntaxError: Unexpected token '='. Expected a ':' following the property name 'x'. (Safari)
SyntaxError: Unexpected token '+'. Expected an identifier as property name. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

When creating objects with the [object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) syntax,
a colon (`:`) separates keys and values for the object's properties.

```js
const obj = { propertyKey: "value" };
```

## Examples

### Colons vs. equal signs

This code fails, as the equal sign can't be used this way in this object initializer
syntax.

```js example-bad
const obj = { propertyKey = "value" };
// SyntaxError: missing : after property id
```

Correct would be to use a colon, or to use square brackets to assign a new property
after the object has been created already.

```js example-good
const obj = { propertyKey: "value" };

// or alternatively

const obj = {};
obj["propertyKey"] = "value";
```

### Computed properties

If you create a property key from an expression, you need to use square brackets.
Otherwise the property name can't be computed:

```js example-bad
const obj = { "b"+"ar": "foo" };
// SyntaxError: missing : after property id
```

Put the expression in brackets `[]`:

```js example-good
const obj = { ["b" + "ar"]: "foo" };
```

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
