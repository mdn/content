---
title: Error.captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
page-type: javascript-static-method
status:
  - non-standard
browser-compat: javascript.builtins.Error.captureStackTrace
---

{{JSRef}}{{Non-standard_Header}}

> [!NOTE]
> This feature is part of the non-standard [V8 stack trace API](https://v8.dev/docs/stack-trace-api). However, for compatibility reasons, it is de facto implemented by all major JavaScript engines.

The **`Error.captureStackTrace()`** static method installs stack trace information on a provided object as the [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) property.

## Syntax

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Parameters

- `object`
  - : The object on which to add the `stack` property.
- `constructor` {{optional_inline}}
  - : A function, typically the constructor where the `object` was created. When collecting the stack trace, all frames above the topmost call to this function, including that call, are left out of the stack trace.

### Return value

None ({{jsxref("undefined")}}).

The `object` is modified in-place with an extra own property called `stack` defined, whose string value follows the same format as {{jsxref("Error.prototype.stack")}}. This property is non-enumerable and configurable. In V8, it is a getter-setter pair. In SpiderMonkey and JavaScriptCore, it is a data property that is writable.

## Examples

### Using Error.captureStackTrace()

The `getStack()` utility function returns the current stack trace at the point it is called, removing itself from the stack. This serves the same debugging purpose as {{domxref("console.trace()")}}, but allows you to output the string elsewhere. Note that it does not construct an `Error` instance for this purpose, but installs `stack` on a plain object, which would be more efficient for our purposes. Normally, you would call `Error.captureStackTrace` on objects intended to be thrown as errors, as shown in the next example.

```js
function getStack() {
  const obj = {};
  if ("captureStackTrace" in Error) {
    // Avoid getStack itself in the stack trace
    Error.captureStackTrace(obj, getStack);
  }
  return obj.stack;
}

function foo() {
  console.log(getStack());
}

foo();
// Error
//     at foo (<anonymous>:8:15)
//     at <anonymous>:11:1
```

### Installing stack trace on a custom error object

The main use case for `Error.captureStackTrace()` is to install a stack trace on a custom error object. Typically, you define [custom errors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types) by extending the `Error` class, which automatically makes the `stack` property available via inheritance. However, the problem with the default stack trace is that it includes the constructor call itself, which leaks implementation details. You can avoid this by using `Error.captureStackTrace()`, which allows the stack trace to be installed even for custom errors that do not inherit from `Error`.

```js
class MyError extends Error {
  constructor(message, options) {
    super(message, options);
    if ("captureStackTrace" in Error) {
      // Avoid MyError itself in the stack trace
      Error.captureStackTrace(this, MyError);
    }
  }
}

const myError = new MyError("Something went wrong");
console.log(myError.stack);
// Error: Something went wrong
//     at <anonymous>:8:17
```

Note that even if you don't call `Error.captureStackTrace()` here, some engines are still smart enough to avoid `MyError` in the stack trace if the constructor inherits from `Error`. Calling `Error.captureStackTrace()` is more important for custom errors that, for some reason, do not inherit from `Error`.

```js
class MyError {
  constructor(message) {
    this.message = message;
    if ("captureStackTrace" in Error) {
      // Avoid MyError itself in the stack trace
      Error.captureStackTrace(this, MyError);
    }
  }
}

const myError = new MyError("Something went wrong");
console.log(myError.stack);
// Error: Something went wrong
//     at <anonymous>:8:17
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.stackTraceLimit")}}
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in the V8 docs
