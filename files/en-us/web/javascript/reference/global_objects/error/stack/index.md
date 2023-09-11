---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
page-type: javascript-instance-data-property
status:
  - non-standard
browser-compat: javascript.builtins.Error.stack
---

{{JSRef}} {{non-standard_header}}

The non-standard **`stack`** property of an {{jsxref("Error")}} instance offers a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.

## Value

A string.

Because the `stack` property is non-standard, implementations differ about where it's installed.

- In Firefox, it's an accessor property on `Error.prototype`.
- In Chrome and Safari, it's a data property on each `Error` instance, with the descriptor:

{{js_property_attributes(1, 0, 1)}}

## Description

Each step will be separated by a newline, with the first part of the line being the function name (if not a call from the global scope), then by an at (@) sign, the file location (except when the function is the error constructor as the error is being thrown), a colon, and, if there is a file location, the line number. (Note that the {{jsxref("Error")}} object also possesses the `fileName`, `lineNumber` and `columnNumber` properties for retrieving these from the error thrown (but only the error, and not its trace).)

Note that this is the format used by Firefox. There is no standard formatting. However, Safari 6+ and Opera 12- use a very similar format. Browsers using the V8 JavaScript engine (such as Chrome, Opera 15+, Android Browser) and IE10+, on the other hand, uses a different format.

**Argument values in the stack**: Prior to Firefox 14, the function name would be followed by the argument values converted to string in parentheses immediately before the at (`@`) sign. While an object (or array, etc.) would appear in the converted form `"[object Object]"`, and as such could not be evaluated back into the actual objects, scalar values could be retrieved (though it may be — it is still possible in Firefox 14 — easier to use `arguments.callee.caller.arguments`, as could the function name be retrieved by `arguments.callee.caller.name`). `"undefined"` is listed as `"(void 0)"`. Note that if string arguments were passed in with values such as `"@"`, `"("`, `")"` (or if in file names), you could not easily rely on these for breaking the line into its component parts. Thus, in Firefox 14 and later this is less of an issue.

Different browsers set this value at different times. For example, Firefox sets it when creating an {{jsxref("Error")}} object, while PhantomJS sets it only when throwing the {{jsxref("Error")}}, and [archived MSDN docs](https://web.archive.org/web/20180618201428/https://docs.microsoft.com/scripting/javascript/reference/stack-property-error-javascript) also seem to match the PhantomJS implementation.

## Examples

### Using the stack property

The following HTML markup demonstrates the use of `stack` property.

```html
<!doctype html>
<meta charset="UTF-8" />
<title>Stack Trace Example</title>
<body>
  <script>
    function trace() {
      try {
        throw new Error("myError");
      } catch (e) {
        alert(e.stack);
      }
    }
    function b() {
      trace();
    }
    function a() {
      b(3, 4, "\n\n", undefined, {});
    }
    a("first call, firstarg");
  </script>
</body>
```

Assuming the above markup is saved as `C:\example.html` on a Windows file system it produces an alert message box with the following text:

Starting with Firefox 30 and later containing the column number:

```plain
trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9
```

Firefox 14 to Firefox 29:

```plain
trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21
```

Firefox 13 and earlier would instead produce the following text:

```plain
Error("myError")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("first call, firstarg")@file:///C:/example.html:19
@file:///C:/example.html:21
```

### Stack of eval'ed code

Starting with Firefox 30, the error stack of code in `Function()` and `eval()` calls, now produces stacks with more detailed information about the line and column numbers inside these calls. Function calls are indicated with `"> Function"` and eval calls with `"> eval"`.

```js
try {
  new Function("throw new Error()")();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6

try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
```

You can also use the `//# sourceURL` directive to name an eval source. See also [Debug eval sources](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) in the [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) docs and this [blog post](https://fitzgeraldnick.com/2014/12/05/name-eval-scripts.html).

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [TraceKit](https://github.com/csnover/TraceKit/) on GitHub
- [stacktrace.js](https://github.com/stacktracejs/stacktrace.js) on GitHub
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in the V8 docs
