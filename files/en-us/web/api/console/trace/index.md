---
title: "console: trace() method"
short-title: trace()
slug: Web/API/console/trace
page-type: web-api-instance-method
browser-compat: api.console.trace
---

{{APIRef("Console API")}}

The **`console.trace()`** method outputs a stack trace to the
[Web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html).

{{AvailableInWorkers}}

> **Note:** In some browsers, `console.trace()` may also output the sequence of calls and asynchronous events leading to the current `console.trace()` which are not on the call stack — to help identify the origin of the current event evaluation loop.

See [Stack traces](/en-US/docs/Web/API/console#stack_traces) in the
{{domxref("console")}} documentation for details and examples.

## Syntax

```js-nolint
trace()
trace(object1, /* …, */ objectN)
```

### Parameters

- `objects` {{optional_inline}}
  - : Zero or more objects to be output to console along with the trace. These are
    assembled and formatted the same way they would be if passed to the
    {{domxref("console.log()")}} method.

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

```
bar
foo
<anonymous>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
