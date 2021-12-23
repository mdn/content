---
title: Boolean() constructor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
tags:
  - Boolean
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Boolean.Boolean
---
{{JSRef}}

The **`Boolean()`** constructor is used to create
{{jsxref("Boolean")}} objects.

{{EmbedInteractiveExample("pages/js/boolean-constructor.html","shorter")}}

## Syntax

```js
new Boolean()
new Boolean(value)
```

### Parameters

- `value` {{optional_inline}}
  - : The initial value of the `Boolean` object.

## Examples

### Creating `Boolean` objects with an initial value of `false`

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
```

### Creating `Boolean` objects with an initial value of `true`

```js
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Boolean](/en-US/docs/Glossary/Boolean)
