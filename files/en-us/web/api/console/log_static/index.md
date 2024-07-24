---
title: "console: log() static method"
short-title: log()
slug: Web/API/console/log_static
page-type: web-api-instance-method
browser-compat: api.console.log_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.log()`** static method outputs a message to the console.

## Syntax

```js-nolint
log(val1)
log(val1, /* …, */ valN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Parameters

- `val1` … `valN`
  - : A list of JavaScript values to output. A representation of each of these values is output to the console in the order given with some type of separation between each of them. There is a special case if `obj1` is a string, which is described subsequently.
- `msg`
  - : A JavaScript string containing zero or more substitution strings, which are replaced with `subst1` through `substN` in consecutive order up to the number of substitution strings. See [Using string substitutions](/en-US/docs/Web/API/console#using_string_substitutions) for a description of how substitutions work.
- `subst1` … `substN`
  - : JavaScript values with which to replace substitution strings within `msg`. If there are more substitution values than there are substitution strings, the extra values are themselves written to the console after the detailed assertion message in the same manner as when there's no format string.

See [Outputting text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of {{domxref("console")}} for further details.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.JS documentation for `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chrome's documentation for `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
