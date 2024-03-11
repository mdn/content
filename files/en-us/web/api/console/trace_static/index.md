---
title: "console: trace() static method"
short-title: trace()
slug: Web/API/console/trace_static
page-type: web-api-instance-method
browser-compat: api.console.trace_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.trace()`** static method outputs a stack trace to the console.

> **Note:** In some browsers, `console.trace()` may also output the sequence of calls and asynchronous events leading to the current `console.trace()` which are not on the call stack — to help identify the origin of the current event evaluation loop.

See [Stack traces](/en-US/docs/Web/API/console#stack_traces) in the {{domxref("console")}} documentation for details and examples.

## Syntax

```js-nolint
trace()
trace(object1, /* …, */ objectN)
```

### Parameters

- `objects` {{optional_inline}}
  - : Zero or more objects to be output to console along with the trace. These are assembled and formatted the same way they would be if passed to the {{domxref("console/log_static", "console.log()")}} method.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

In the console, the following trace will be displayed:

```plain
bar
foo
<anonymous>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.trace()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#trace)
- [Node.JS documentation for `console.trace()`](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chrome's documentation for `console.trace()`](https://developer.chrome.com/docs/devtools/console/api/#trace)
