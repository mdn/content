---
title: "console: assert() static method"
short-title: assert()
slug: Web/API/console/assert_static
page-type: web-api-instance-method
browser-compat: api.console.assert_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.assert()`** static method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

## Syntax

```js-nolint
assert(assertion)

assert(assertion, val1)
assert(assertion, val1, val2)
assert(assertion, val1, val2, /* …, */ valN)

assert(assertion, msg)
assert(assertion, msg, subst1)
assert(assertion, msg, subst1, /* …, */ substN)
```

### Parameters

- `assertion`
  - : Any boolean expression. If the assertion is false, a generic message indicating assertion failure is written to the console.
- `val1` … `valN`
  - : A list of JavaScript values to output. A representation of each of these values is output to the console after a generic assertion failure message (which may be different from the message output when these values are not present) in the order given with some type of separation between the message and between each of them. There is a special case if `obj1` is a string, which is described subsequently.
- `msg`
  - : A JavaScript string containing zero or more substitution strings, which are replaced with `subst1` through `substN` in consecutive order up to the number of substitution strings. A colon, a space, and then the substituted string are appended to the generic assertion message to form a detailed assertion message, and the result is output to the console. See [Using string substitutions](/en-US/docs/Web/API/console#using_string_substitutions) for a description of how substitutions work.
- `subst1` … `substN`
  - : JavaScript values with which to replace substitution strings within `msg`. If there are more substitution values than there are substitution strings, the extra values are themselves written to the console after the detailed assertion message in the same manner as when there's no format string.

See [Outputting text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of {{domxref("console")}} for further details.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following code example demonstrates the use of a JavaScript object following the assertion:

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#assert)
- [Node.JS documentation for `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chrome's documentation for `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
