---
title: console.log()
slug: Web/API/console/log
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - HTML-tree
  - Method
  - Reference
  - Web Development
  - console.log()
  - difference
  - web console
browser-compat: api.console.log
---
{{APIRef("Console API")}}

The **`console.log()`** method outputs a message to the web console.
The message may be a single string (with optional substitution values), or it may be any one
or more JavaScript objects.

{{AvailableInWorkers}}

## Syntax

```js
log(obj1)
log(obj1, /* …, */ objN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Parameters

- `obj1` … `objN`
  - : A list of JavaScript objects to output. The string representations of each of these
    objects are appended together in the order listed and output. Please be warned that if
    you log objects in the latest versions of Chrome and Firefox what you get logged on
    the console is a _reference to the object_, which is not necessarily the
    'value' of the object at the moment in time you call `console.log()`, but
    it is the value of the object at the moment you open the console.
- `msg`
  - : A JavaScript string containing zero or more substitution strings.
- `subst1` … `substN`
  - : JavaScript objects with which to replace substitution strings within
    `msg`. This gives you additional control over the format of the output.

See [Outputting text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of {{domxref("console")}} for details.

### Return value

None ({{jsxref("undefined")}}).

## Logging objects

Don't use `console.log(obj)`, use
`console.log(JSON.parse(JSON.stringify(obj)))`.

This way you are sure you are seeing the value of `obj` at the moment you
log it. Otherwise, many browsers provide a live view that constantly updates as values
change. This may not be what you want.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSDN: Using the F12 Tools Console to View Errors and Status](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85))
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
