---
title: "TypeError: class constructors must be invoked with 'new'"
slug: Web/JavaScript/Reference/Errors/Class_ctor_no_new
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "class constructors must be invoked with 'new'" occurs when a [class constructor](/en-US/docs/Web/JavaScript/Reference/Classes) is called without the {{jsxref("Operators/new", "new")}} keyword. All class constructors must be called with `new`.

## Message

```plain
TypeError: Class constructor X cannot be invoked without 'new' (V8-based)
TypeError: Class constructors cannot be invoked without 'new' (V8-based)
TypeError: class constructors must be invoked with 'new' (Firefox)
TypeError: Cannot call a class constructor without |new| (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

In JavaScript, _calling_ a function without `new` and _constructing_ a function with `new` are two distinct operations, and functions can behave differently depending on how they are called.

Traditionally, JavaScript functions have been used as both constructors and normal functions, and can detect how they were called using [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target). However, class constructors are always constructors and cannot be called as normal functions.

## Examples

### Invalid cases

```js example-bad
class X {}

X(); // TypeError: class constructors must be invoked with 'new'
```

### Valid cases

```js example-good
class X {}

new X();
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/new", "new")}}
