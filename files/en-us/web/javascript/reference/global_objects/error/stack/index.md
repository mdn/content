---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
page-type: javascript-instance-data-property
status:
  - non-standard
browser-compat: javascript.builtins.Error.stack
---

{{JSRef}} {{Non-standard_Header}}

> [!NOTE]
> The `stack` property is de facto implemented by all major JavaScript engines, and [the JavaScript standards committee is looking to standardize it](https://github.com/tc39/proposal-error-stacks). You cannot rely on the precise content of the stack string due to implementation inconsistencies, but you can generally assume it exists and use it for debugging purposes.

The non-standard **`stack`** property of an {{jsxref("Error")}} instance offers a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.

## Value

A string.

Because the `stack` property is non-standard, implementations differ about where it's installed.

- In Firefox, it's an accessor property on `Error.prototype`.
- In Chrome and Safari, it's a data property on each `Error` instance, with the descriptor:

{{js_property_attributes(1, 0, 1)}}

## Description

Each JavaScript engine uses its own format for stack traces, but they are fairly consistent in their high-level structure. Every implementation uses a separate line in the stack to represent each function call. The call that directly caused the error is placed at the top, and the call that started the whole call chain is placed at the bottom. Below are some examples of stack traces:

```js
function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  console.log(new Error().stack);
}

foo();
```

```plain
#### JavaScriptCore
baz@filename.js:10:24
bar@filename.js:6:6
foo@filename.js:2:6
global code@filename.js:13:4

#### SpiderMonkey
baz@filename.js:10:15
bar@filename.js:6:3
foo@filename.js:2:3
@filename.js:13:1

#### V8
Error
    at baz (filename.js:10:15)
    at bar (filename.js:6:3)
    at foo (filename.js:2:3)
    at filename.js:13:1
```

V8 provides the non-standard [stack trace API](https://v8.dev/docs/stack-trace-api) for customizing the stack trace, including {{jsxref("Error.captureStackTrace()")}}, {{jsxref("Error.stackTraceLimit")}}, and `Error.prepareStackTrace()`. Other engines support this API to varying extents.

Different engines set this value at different times. Most modern engines set it when the {{jsxref("Error")}} object is created. This means you can get the full call stack information within a function using the following:

```js
function foo() {
  console.log(new Error().stack);
}
```

Without having to throw an error and then catch it.

Stack frames can be things other than explicit function calls, too. For example, event listeners, timeout jobs, and promise handlers all begin their own call chain. Source code within {{jsxref("Global_Objects/eval", "eval()")}} and {{jsxref("Function")}} constructor calls also appear in the stack:

```js
console.log(new Function("return new Error('Function failed')")().stack);
console.log("====");
console.log(eval("new Error('eval failed')").stack);
```

```plain
#### JavaScriptCore
anonymous@
global code@filename.js:1:65
====
eval code@
eval@[native code]
global code@filename.js:3:17

#### SpiderMonkey
anonymous@filename.js line 1 > Function:1:8
@filename.js:1:65

====
@filename.js line 3 > eval:1:1
@filename.js:3:13

#### V8
Error: Function failed
    at eval (eval at <anonymous> (filename.js:1:13), <anonymous>:1:8)
    at filename.js:1:65
====
Error: eval failed
    at eval (eval at <anonymous> (filename.js:3:13), <anonymous>:1:1)
    at filename.js:3:13
```

In Firefox, you can use the `//# sourceURL` directive to name an eval source. See the Firefox [Debug eval sources](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) docs and the [Naming `eval` Scripts with the `//# sourceURL` Directive](https://fitzgen.com/2014/12/05/name-eval-scripts.html) blog post for more details.

## Examples

### Using the stack property

The following script demonstrates how to use the `stack` property to output a stack trace into your browser window. You can use this to check what your browser's stack structure looks like.

```html hidden
<div id="output"></div>
```

```css hidden
#output {
  white-space: pre;
  font-family: monospace;
}
```

```js
function trace() {
  throw new Error("trace() failed");
}
function b() {
  trace();
}
function a() {
  b(3, 4, "\n\n", undefined, {});
}
try {
  a("first call, first arg");
} catch (e) {
  document.getElementById("output").textContent = e.stack;
}
```

{{EmbedLiveSample("Using_the_stack_property", "700", "200")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [TraceKit](https://github.com/csnover/TraceKit/) on GitHub
- [stacktrace.js](https://github.com/stacktracejs/stacktrace.js) on GitHub
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in the V8 docs
