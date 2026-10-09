---
title: "console: context() static method"
short-title: context()
slug: Web/API/console/context_static
page-type: web-api-static-method
status:
  - non-standard
browser-compat: api.console.context_static
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

The **`console.context()`** static method creates a new console context: an object with most of the same methods as the `console` object, whose messages are associated with an optional label. This lets you group and filter the messages that come from different parts of your code.

## Syntax

```js-nolint
console.context()
console.context(label)
```

### Parameters

- `label` {{Optional_Inline}}
  - : A string used to name the context. Messages logged through the returned object are associated with this name. If omitted, the context is unnamed.

### Return value

A new object that has most of the methods of the `console` object, such as {{domxref("console/log_static", "log()")}}, {{domxref("console/warn_static", "warn()")}}, {{domxref("console/count_static", "count()")}}, and {{domxref("console/time_static", "time()")}}. It doesn't have a `context()` method itself.

## Description

Every call to `console.context()` returns a new, independent console context. Messages logged through a context carry its label, which developer tools can use to identify where a message came from. For example, in the Chrome DevTools console you can type `context:myLogger` in the filter box to show only the messages logged through a context labeled `myLogger`.

Each context keeps its own state for counters and timers. This means that {{domxref("console/count_static", "count()")}} and {{domxref("console/time_static", "time()")}} labels used on one context don't affect the same labels on the global `console` object or on another context. Calling {{domxref("console/clear_static", "clear()")}} on a context clears the whole console, not only the messages of that context.

The methods of a console context don't need to be called on the context object, so you can pass them around as standalone functions, just like the methods of `console`.

## Examples

### Creating a named logger

```js
const logger = console.context("myLogger");
logger.log("Hello");
logger.info("World");
```

Both messages appear in the console like messages logged with `console.log()` and `console.info()`. In Chrome DevTools, typing `context:myLogger` in the console filter box shows only these two messages.

### Counters are separate for each context

```js
const a = console.context("A");
const b = console.context("B");

console.count("hits"); // hits: 1
a.count("hits"); // hits: 1
a.count("hits"); // hits: 2
b.count("hits"); // hits: 1
console.count("hits"); // hits: 2
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/count_static", "console.count()")}}
- {{domxref("console/time_static", "console.time()")}}
- [Proposal to specify `console.context()`](https://github.com/whatwg/console/pull/244) in the Console Standard
