---
title: console.debug()
slug: Web/API/console/debug
tags:
  - API
  - Debug
  - Debugging
  - Developer Tools
  - Logging
  - Method
  - Reference
  - console
  - log
  - output
  - print
browser-compat: api.console.debug
---
{{APIRef("Console API")}}

The **`console.debug()`** method outputs a message to the web console at
the "debug" log level. The message is only displayed to the user if the console is configured to
display debug output. In most cases, the log level is configured within the console UI. This log
level might correspond to the \`Debug\` or \`Verbose\` log level.

{{AvailableInWorkers}}

## Syntax

```js
console.debug(obj1 [, obj2, ..., objN]);
console.debug(msg [, subst1, ..., substN]);
```

### Parameters

- `obj1` ... `objN`
  - : A list of JavaScript objects to output. The string representations of each of these
    objects are appended together in the order listed and output to the console.
- `msg`
  - : A JavaScript string containing zero or more substitution strings, which are replaced
    with `subst1` through `substN` in consecutive order.
- `subst1` ... `substN`
  - : JavaScript objects with which to replace substitution strings within
    `msg`. This gives you additional control over the format of the output. See
    {{SectionOnPage("/en-US/docs/Web/API/console", "Using string substitutions")}} for a
    description of how substitutions work.

See [Outputting
text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of the {{domxref("console")}} object for
details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
