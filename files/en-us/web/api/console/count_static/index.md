---
title: "console: count() static method"
short-title: count()
slug: Web/API/console/count_static
page-type: web-api-instance-method
browser-compat: api.console.count_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.count()`** static method logs the number of times that this particular call to `count()` has been called.

## Syntax

```js-nolint
count()
count(label)
```

### Parameters

- `label` {{Optional_Inline}}
  - : A string. If supplied, `count()` outputs the number of times it has been called with that label. If omitted, `count()` behaves as though it was called with the "default" label.

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
```

Console output will look something like this:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

The label is displayed as `default` because no explicit label was supplied.

If we pass the `user` variable as the `label` argument to the first invocation of `console.count()`, and the string "alice" to the second:

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
console.count("alice");
```

We will see output like this:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

We're now maintaining separate counts based only on the value of `label`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.count()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#count)
- [Node.JS documentation for `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chrome's documentation for `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
