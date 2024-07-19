---
title: "TypeError: calling a builtin X constructor without new is forbidden"
slug: Web/JavaScript/Reference/Errors/Builtin_ctor_no_new
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "calling a builtin X constructor without new is forbidden" occurs when you try to call a builtin constructor without using the {{jsxref("Operators/new", "new")}} keyword. All modern constructors, such as {{jsxref("Promise")}} and {{jsxref("Map")}}, must be called with `new`.

## Message

```plain
TypeError: Constructor X requires 'new' (V8-based)
TypeError: Promise constructor cannot be invoked without 'new' (V8-based)
TypeError: calling a builtin X constructor without new is forbidden (Firefox)
TypeError: calling X constructor without new is invalid (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

In JavaScript, _calling_ a function without `new` and _constructing_ a function with `new` are two distinct operations, and functions can behave differently depending on how they are called.

Apart from the following legacy constructors, all modern constructors must be called with `new`:

- {{jsxref("Object/Object", "Object()")}}
- {{jsxref("Function/Function", "Function()")}} (and its subclasses)
- {{jsxref("Error/Error", "Error()")}} (and its subclasses)
- {{jsxref("RegExp/RegExp", "RegExp()")}}
- {{jsxref("Array/Array", "Array()")}}

Some other constructors, such as {{jsxref("Date/Date", "Date()")}}, and primitive wrappers, such as {{jsxref("String/String", "String()")}}, {{jsxref("Number/Number", "Number()")}}, and {{jsxref("Boolean/Boolean", "Boolean()")}}, can also be called with or without `new`, but the return types differ in the two cases.

On every constructor page, you can find information about whether the constructor must be called with `new`.

## Examples

### Invalid cases

```js example-bad
const m = Map(); // TypeError: calling a builtin Map constructor without new is forbidden
```

### Valid cases

```js example-good
const m = new Map();
```

## See also

- {{jsxref("Operators/new", "new")}}
