---
title: "URLPattern: password property"
short-title: password
slug: Web/API/URLPattern/password
page-type: web-api-instance-property
browser-compat: api.URLPattern.password
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`password`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the pattern used to match the password part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the equivalent input passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern).

If the password is not explicitly defined in the constructor `input`, its value is normalized to the wildcard string (`"*"`), which will match against URLs with any password or no password component.
The `password` is never inherited from a [baseURL](/en-US/docs/Web/API/URLPattern/URLPattern#baseurl), so this is also true when defining relative `inputs`.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `correct-horse-battery{-staple}?` for the `password` part.
This pattern matches the passwords `correct-horse-battery` and `correct-horse-battery-staple`.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

### Wildcard username

This code shows a `URLPattern` that does not define a `password`.
The value is therefore the wildcard string (`"*"`).

```js
const pattern2 = new URLPattern({
  hostname: "{*.}?example.com",
});
console.log(pattern2.password); // '*' - matches any password
```

This code shows that the password isn't inherited from a baseURL either:

```js
const pattern3 = new URLPattern(
  "/some/path", // input
  "https://myusername:mypassword@example.com/more/path", // baseURL
);
console.log(pattern3.password); // '*'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
