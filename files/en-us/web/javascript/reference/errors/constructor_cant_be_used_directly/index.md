---
title: "TypeError: Iterator/AsyncIterator constructor can't be used directly"
slug: Web/JavaScript/Reference/Errors/Constructor_cant_be_used_directly
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "Iterator constructor can't be used directly" or "AsyncIterator constructor can't be used directly" occurs when you try to use the {{jsxref("Iterator/Iterator", "Iterator()")}} or {{jsxref("AsyncIterator/AsyncIterator", "AsyncIterator()")}} constructors directly to create instances. These constructors are _abstract classes_ and should only be inherited from.

## Message

```plain
TypeError: Abstract class Iterator not directly constructable (V8-based)
TypeError: Iterator constructor can't be used directly (Firefox)
TypeError: Iterator cannot be constructed directly (Safari)

TypeError: Abstract class AsyncIterator not directly constructable (V8-based)
TypeError: AsyncIterator constructor can't be used directly (Firefox)
TypeError: AsyncIterator cannot be constructed directly (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

## Examples

## See also

- {{jsxref("AsyncIterator")}}
- {{jsxref("Iterator")}}
