---
title: "SyntaxError: property name __proto__ appears more than once in object literal"
slug: Web/JavaScript/Reference/Errors/Duplicate_proto
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "property name \_\_proto\_\_ appears more than once in object literal" occurs when an [object literal](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) contains multiple occurrences of the `__proto__` field, which is used to [set the prototype of this new object](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

## Message

```plain
SyntaxError: Duplicate __proto__ fields are not allowed in object literals (V8-based)
SyntaxError: property name __proto__ appears more than once in object literal (Firefox)
SyntaxError: Attempted to redefine __proto__ property. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The `__proto__` key, unlike other property keys, is a special syntax in an object literal. It is used to set the prototype of the object being created and is not allowed to appear more than once in an object literal. Note that this restriction only applies to the `__proto__` prototype setter syntax: if it actually has the effect of creating a property called `__proto__`, then it can appear multiple times. See [prototype setter](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) for the exact syntax restrictions.

Worth noting that the `__proto__` key in object literals is a special syntax and is not deprecated, unlike the [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) accessor property.

## Examples

### Invalid cases

```js example-bad
const obj = { __proto__: {}, __proto__: { a: 1 } };
```

### Valid cases

```js example-good
// Only setting the prototype once
const obj = { __proto__: { a: 1 } };

// These syntaxes all create a property called "__proto__" and can coexist
// They would overwrite each other and the the last one is actually used
const __proto__ = null;
const obj2 = {
  ["__proto__"]: {},
  __proto__,
  __proto__() {},
  get __proto__() {},
};
```

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
