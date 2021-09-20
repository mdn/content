---
title: Console API
slug: Web/API/Console_API
tags:
  - API
  - Debugging
  - Overview
  - console
  - dump
  - log
  - output
  - test
---
{{DefaultAPISidebar("Console API")}}

The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.

{{AvailableInWorkers}}

## Concepts and usage

The Console API started as a largely proprietary API, with different browsers implementing it, albeit it in inconsistent ways. [The Console API spec](https://console.spec.whatwg.org/) was created to define consistent behavior, and all modern browsers eventually settled on implementing this behavior — although some implementations still have their own additional proprietary functions. Find out about these at:

- [Google Chrome DevTools implementation](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari DevTools implementation](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Usage is very simple — the {{domxref("console")}} object — available via {{domxref("window.console")}}, or {{domxref("WorkerGlobalScope.console")}} in workers; accessible using just `console` — contains many methods that you can call to perform rudimentary debugging tasks, generally focused around logging various values to the browser's [Web Console](/en-US/docs/Tools/Web_Console).

By far the most commonly-used method is {{domxref("console.log")}}, which is used to log the current value contained inside a specific variable.

## Interfaces

- {{domxref("console")}}
  - : Provides rudimentary debugging functionality, including logging, stack traces, timers, and counters.

## Examples

```js
let myString = 'Hello world';

// Output "Hello world" to the console
console.log(myString)
```

See the [console](/en-US/docs/Web/API/console#usage) reference page for more examples.

## Specifications

{{Specifications("api.console")}}

## Browser compatibility

{{Compat("api.console")}}

## See also

- [Tools](/en-US/docs/Tools)
- [Web Console](/en-US/docs/Tools/Web_Console "Web Console") — how the Web Console in Firefox handles console API calls
- [Remote debugging](/en-US/docs/Tools/Remote_Debugging) — how to see console output when the debugging target is a mobile device
