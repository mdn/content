---
title: "URLPattern: username property"
short-title: username
slug: Web/API/URLPattern/username
page-type: web-api-instance-property
browser-compat: api.URLPattern.username
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`username`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the pattern used to match the username part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the equivalent input passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern).

If the username is not explicitly defined in the constructor `input`, its value is normalized to the wildcard string (`"*"`), which will match against URLs with any username or not username component.
The `username` is never inherited from a [baseURL](/en-US/docs/Web/API/URLPattern/URLPattern#baseurl), so this is also true when defining relative `inputs`.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `admin` for the `username` part.
This pattern matches only if the username part of the URL is `admin`.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // 'admin'
```

### Wildcard username

This code shows a `URLPattern` that does not define a `username`.
The value is therefore the wildcard string (`"*"`).

```js
const pattern2 = new URLPattern({
  hostname: "{*.}?example.com",
});
console.log(pattern2.username); // '*' - matches any username
```

This code shows that the username isn't inherited from a baseURL either:

```js
const pattern3 = new URLPattern(
  "/some/path", // input
  "https://myusername:mypassword@example.com/more/path", // baseURL
);
console.log(pattern3.username); // '*'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
