---
title: "console: log() method"
short-title: log()
slug: Web/API/console/log
page-type: web-api-instance-method
browser-compat: api.console.log
---

{{APIRef("Console API")}}

The **`console.log()`** method outputs a message to the web console.
The message may be a single string (with optional substitution values), or it may be any one
or more JavaScript objects.

{{AvailableInWorkers}}

## Syntax

```js-nolint
log(obj1)
log(obj1, /* …, */ objN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Parameters

- `obj1` … `objN`
  - : A list of JavaScript objects to output.
    Objects are output in the order listed. Please be warned that if
    you log objects in the latest versions of Chrome and Firefox, what you get logged on
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

Information about an object is lazily retrieved. This means that the log message shows the content of an object at the time when it's first viewed, not when it was logged. For example:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

This will output `{}`. However, if you expand the object's details, you will see `prop: 123`.

If you are going to mutate your object and you want to prevent the logged information from being updated, you can [deep-clone](/en-US/docs/Glossary/Deep_copy) the object before logging it. A common way is to {{jsxref("JSON.stringify()")}} and then {{jsxref("JSON.parse()")}} it:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

There are other alternatives that work in browsers, such as [`structuredClone()`](/en-US/docs/Web/API/structuredClone), which are more effective at cloning different types of objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSDN: Using the F12 Tools Console to View Errors and Status](<https://docs.microsoft.com/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
