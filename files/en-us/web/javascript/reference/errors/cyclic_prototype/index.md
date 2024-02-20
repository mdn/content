---
title: "TypeError: can't set prototype: it would cause a prototype chain cycle"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "TypeError: can't set prototype: it would cause a prototype chain cycle"
occurs when a given object's prototype is assigned to an object that has the given object
in its prototype chain.

## Message

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

When a property or a method of an object is accessed, Javascript first checks if it is in the object itself.
If it is, it provides that. If it's not, it then accesses it on the object's prototype object, in exactly the same way.
This repeats until it reaches an object with `null` as its prototpye, or finds the property or the method.

This requires that accessing "the prototype of the prototype of the prototype...",
walking the protype chain, reaches no loops.
This error means that a loop, also called a cycle, would have been introduced.

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

### Another section?

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

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
