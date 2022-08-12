---
title: console.countReset()
slug: Web/API/console/countReset
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - console
  - web console
browser-compat: api.console.countReset
---
{{APIRef("Console API")}}

The **`console.countReset()`** method resets counter used with
{{domxref("console.count()")}}.

{{AvailableInWorkers}}

## Syntax

```js
countReset()
countReset(label)
```

### Parameters

- `label` {{optional_inline}}
  - : A string. If supplied, `countReset()` resets the count for
    that label to 0. If omitted, `countReset()` resets the default counter to
    0\.

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

```
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Note that the call to `console.counterReset()` resets the value of the
default counter to zero.

If we pass the `user` variable as the `label` argument with the
string "bob" to the first invocation of `count()`, and the string "alice" to
the second:

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

```
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

Resetting the value of the counter "bob" only changes the value of that counter. The
value of "alice" is unchanged.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
