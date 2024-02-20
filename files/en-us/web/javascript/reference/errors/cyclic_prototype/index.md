---
title: "TypeError: can't set prototype: it would cause a prototype chain cycle"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "TypeError: can't set prototype: it would cause a prototype chain cycle"
occurs when a given object's prototype is assigned to an object that has the given object in
its [prototype chain](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain).

## Message

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

A loop, also called a cycle, was introduced in a prototype chain.
That means that walking that prototype chain, the same places would have been accessed over and over again,
instead of reaching `null`.

## Examples

```js-nolint example-bad
const a = {};
Object.setPrototypeOf(a, a);
// TypeError: can't set prototype: it would cause a prototype chain cycle
```

```js-nolint example-bad
const a = {};
const b = {};
const c = {};
Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);
Object.setPrototypeOf(c, a);
// TypeError: can't set prototype: it would cause a prototype chain cycle
```

## See also

- [Object Prototypes](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
