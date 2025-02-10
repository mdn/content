---
title: Error.stackTraceLimit
slug: Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
page-type: javascript-static-data-property
status:
  - non-standard
browser-compat: javascript.builtins.Error.stackTraceLimit
---

{{JSRef}}{{Non-standard_Header}}

> [!NOTE]
> This feature is part of the currently non-standard [V8 stack trace API](https://v8.dev/docs/stack-trace-api). However, for compatibility reasons, it is also implemented by JavaScriptCore.

The **`Error.stackTraceLimit`** static data property indicates the maximum number of stack frames captured by the stack trace of an error. It can be set by user code to change the engine's behavior.

Generally, _reading_ this property is not very useful, but you can _set_ it to a new value. Setting it to a larger value can be useful for debugging, as it allows you to see more of the call stack. Setting it to a smaller value can improve performance as it reduces the amount of stack captured.

## Value

An integer representing the maximum number of stack frames captured by the stack trace of an error.

{{js_property_attributes(1, 1, 1)}}

## Description

Because `stackTraceLimit` is a static property of `Error`, you always use it as `Error.stackTraceLimit`, rather than as a property of an `Error` object you created. If you want to customize the stack trace for a single error only, you may need to set the property, create the error, and then reset the property to its original value.

## Examples

### Setting Error.stackTraceLimit

This code is safe to run even in environments that don't support `Error.stackTraceLimit`, because it doesn't read the property, only sets it, and engines that don't support it will ignore the setting.

```js
Error.stackTraceLimit = 2;
const a = () => b();
const b = () => c();
const c = () => d();
const d = () => e();
const e = () => {
  throw new Error("My error");
};
try {
  a();
} catch (e) {
  console.log(e.stack);
}
// Only two frames in supporting engines; all frames in others
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.captureStackTrace()")}}
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in the V8 docs
