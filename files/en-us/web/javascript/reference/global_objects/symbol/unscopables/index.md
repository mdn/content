---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
browser-compat: javascript.builtins.Symbol.unscopables
---
{{JSRef}}

The **`Symbol.unscopables`** well-known symbol is used to specify an object value of whose own and inherited property names are excluded from the [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) environment bindings of the associated object.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Description

The `@@unscopables` symbol (`Symbol.unscopables`) can be defined on any object to exclude property names from being exposed as lexical variables in [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) environment bindings. Note that if using [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), `with` statements are not available and will likely also not need this symbol.

Setting a property to `true` in an `unscopables` object will make it _unscopable_ and therefore it won't appear in lexical scope variables. Setting a property to `false` will make it `scopable` and thus it will appear in lexical scope variables.

{{js_property_attributes(0,0,0)}}

## Examples

### Scoping in with statements

The following code works fine in ES5 and below. However, in ECMAScript 2015 and later, the {{jsxref("Array.prototype.keys()")}} method was introduced. That means that inside `with` environment "keys" would now be the method and not the variable. That's when the `unscopable`s symbol was introduced. A built-in `unscopables` setting is implemented as {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} to prevent that some of the Array methods are being scoped into the `with` statement.

```js
var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

### Unscopables in objects

You can also set `unscopables` for your own objects.

```js
var obj = {
  foo: 1,
  bar: 2
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement (not available in [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode))
