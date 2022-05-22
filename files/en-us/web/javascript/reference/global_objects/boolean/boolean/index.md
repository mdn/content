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
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean('');
const bfalse = new Boolean(false);
```

### Creating `Boolean` objects with an initial value of `true`

```js
const btrue = new Boolean(true);
const btrueString = new Boolean('true');
const bfalseString = new Boolean('false');
const bSuLin = new Boolean('Su Lin');
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Boolean](/en-US/docs/Glossary/Boolean)
