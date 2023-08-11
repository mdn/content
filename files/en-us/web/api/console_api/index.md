---
title: Console API
slug: Web/API/Console_API
page-type: guide
browser-compat: api.console
---

{{DefaultAPISidebar("Console API")}}

The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.

{{AvailableInWorkers}}

## Concepts and usage

The Console API started as a largely proprietary API, with different browsers implementing it, albeit in inconsistent ways. [The Console API spec](https://console.spec.whatwg.org/) was created to define consistent behavior, and all modern browsers eventually settled on implementing this behavior — although some implementations still have their own additional proprietary functions. Find out about these at:

- [Google Chrome DevTools implementation](https://developer.chrome.com/docs/devtools/console/api/)
- [Safari DevTools implementation](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Usage is very simple — the {{domxref("console")}} object contains many methods that you can call to perform rudimentary debugging tasks, generally focused around logging various values to the browser's [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html).

By far the most commonly-used method is {{domxref("console.log")}}, which is used to log the current value contained inside a specific variable.

## Interfaces

- {{domxref("console")}}
  - : Provides rudimentary debugging functionality, including logging, stack traces, timers, and counters.

## Examples

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

See the [console](/en-US/docs/Web/API/console#usage) reference page for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — how the Web Console in Firefox handles console API calls
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — how to see console output when the debugging target is a mobile device
