---
title: console.count()
slug: Web/API/console/count
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - web console
browser-compat: api.console.count
---
{{APIRef("Console API")}}

The **`console.count()`** method logs the number of times that
this particular call to `count()` has been called.

{{AvailableInWorkers}}

## Syntax

```js
console.count([label]);
```

### Parameters

- `label` {{Optional_Inline}}
  - : A {{jsxref("String")}}. If supplied, `count()` outputs the number of
    times it has been called with that label. If omitted, `count()` behaves as
    though it was called with the "default" label.

## Examples

For example, given code like this:

```js
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

Console output will look something like this:

    "default: 1"
    "default: 2"
    "default: 3"
    "default: 4"

The label is displayed as `default` because no explicit label was supplied.

If we pass the `user` variable as the `label` argument to the
first invocation of `count()`, and the string "alice" to the second:

```js
let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

We will see output like this:

    "bob: 1"
    "alice: 1"
    "alice: 2"
    "alice: 3"

We're now maintaining separate counts based only on the value of `label`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
