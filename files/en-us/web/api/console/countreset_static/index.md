---
title: "console: countReset() static method"
short-title: countReset()
slug: Web/API/console/countreset_static
page-type: web-api-instance-method
browser-compat: api.console.countReset_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.countReset()`** static method resets counter used with {{domxref("console/count_static", "console.count()")}}.

## Syntax

```js-nolint
countReset()
countReset(label)
```

### Parameters

- `label` {{optional_inline}}
  - : A string. If supplied, `countReset()` resets the count for that label to 0. If omitted, `countReset()` resets the default counter to 0.

### Return value

None ({{jsxref("undefined")}}).

## Examples

For example, given code like this:

```js
let user = "";

function greet() {
  console.count();
  return `hi ${user}`;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();
```

Console output will look something like this:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Note that the call to `console.counterReset()` resets the value of the default counter to zero.

If we pass the `user` variable as the `label` argument with the string "bob" to the first invocation of `console.count()`, and the string "alice" to the second:

```js
let user = "";

function greet() {
  console.count(user);
  return `hi ${user}`;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");
```

We will see output like this:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

Resetting the value of the counter "bob" only changes the value of that counter. The value of "alice" is unchanged.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.countReset()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#countreset)
- [Node.JS documentation for `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Google Chrome's documentation for `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
