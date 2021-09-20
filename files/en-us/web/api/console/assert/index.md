---
title: console.assert()
slug: Web/API/console/assert
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - console
  - web console
browser-compat: api.console.assert
---
{{APIRef("Console API")}}

The **`console.assert()`** method writes an error message to
the console if the assertion is false. If the assertion is true, nothing happens.

{{AvailableInWorkers}}

## Syntax

```js
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]); // C-like message formatting
```

### Parameters

- `assertion`
  - : Any boolean expression. If the assertion is false, the message is written to the
    console.
- `obj1` ... `objN`
  - : A list of JavaScript objects to output. The string representations of each of these
    objects are appended together in the order listed and output.
- `msg`
  - : A JavaScript string containing zero or more substitution strings.
- `subst1` ... `substN`
  - : JavaScript objects with which to replace substitution strings within
    `msg`. This parameter gives you additional control over the format of the
    output.

## Examples

The following code example demonstrates the use of a JavaScript object following the
assertion:

```js
const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // or, using ES2015 object property shorthand:
    // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

Note that, while a string containing a substitution string works as a parameter for
`console.log` in Node and many, if not most, browsers...

```js
console.log('the word is %s', 'foo');
// output: the word is foo
```

...the use of such a string does not currently work as intended as a parameter for
`console.assert` in all browsers:

```js
console.assert(false, 'the word is %s', 'foo');
// correct output in Node.js and some browsers
//     (e.g. Firefox v60.0.2):
// Assertion failed: the word is foo
// incorrect output in some browsers
//     (e.g. Chrome v67.0.3396.87):
// Assertion failed: the word is %s foo
```

See [Outputting
text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of {{domxref("console")}} for further
details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
