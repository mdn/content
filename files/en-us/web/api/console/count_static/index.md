---
title: "console: count() static method"
short-title: count()
slug: Web/API/console/count_static
page-type: web-api-static-method
browser-compat: api.console.count_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.count()`** static method logs the number of times that this particular call to `count()` has been called.

## Syntax

```js-nolint
console.count()
console.count(label)
```

### Parameters

- `label` {{Optional_Inline}}
  - : A string. If supplied, `count()` outputs the number of times it has been called with that label. If omitted, `count()` behaves as though it was called with the "default" label.

### Return value

None ({{jsxref("undefined")}}).

## Examples

For example, given code like this:

```js
function greet(user) {
  console.count();
  return `hi ${user}`;
}

greet("bob");
greet("alice");
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
function greet(user) {
  console.count(user);
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
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
- [Node.js documentation for `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chrome's documentation for `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
