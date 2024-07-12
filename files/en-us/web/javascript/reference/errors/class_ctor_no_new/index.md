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

## Examples

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/new", "new")}}
