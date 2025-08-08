---
title: "URLPattern: search property"
short-title: search
slug: Web/API/URLPattern/search
page-type: web-api-instance-property
browser-compat: api.URLPattern.search
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`search`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the pattern used to match the search part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the equivalent input passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern).

If the search value is not explicitly defined in the constructor `input`, its value is usually normalized to the wildcard string (`"*"`), which will match against URLs with any search or no search components.
The `search` may be inherited from a [baseURL](/en-US/docs/Web/API/URLPattern/URLPattern#baseurl) when using a relative URL `input`, but only if this input does not contain a "more specific component" than `search`.
Since the only component less specific than `search` is `hash`, this means search will usually not be inherited.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `'q=baby'` for the `search` part.
This pattern matches any URL that includes exactly that text.

```js
const pattern = new URLPattern({
  search: "q=baby",
});

// Test
console.log(pattern.test("https://example.com/?q=baby")); // true
console.log(pattern.test("https://example.com/path?q=baby&foo=bar")); // false - search is 'q=baby&foo=bar'
```

### Wildcard search

This code shows a `URLPattern` that does not define a `search`.
The value is therefore the wildcard string (`"*"`).

```js
const pattern2 = new URLPattern({
  hostname: "{*.}?example.com",
});
console.log(pattern2.search); // '*'
```

This code shows that the `search` isn't inherited from a baseURL if the `input` contains a more specific component, in this case the path:

```js
const pattern3 = new URLPattern(
  "/some/path", // input
  "https://example.com/more/path?q=baby", // baseURL
);
console.log(pattern3.search); // '*'
```

However `search` is inherited in this case, because only a hash is specified in the input.

```js
const pattern4 = new URLPattern(
  "#myHash", // input
  "https://example.com/more/path?q=baby", // baseURL
);
console.log(pattern4.search); // '*'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
