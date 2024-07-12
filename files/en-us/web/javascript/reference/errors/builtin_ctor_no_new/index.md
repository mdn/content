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
TypeError: calling a builtin X constructor without new is forbidden (Firefox)
TypeError: calling X constructor without new is invalid (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

## Examples

## See also

- {{jsxref("Operators/new", "new")}}
