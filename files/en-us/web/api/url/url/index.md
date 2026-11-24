---
title: "URL: URL() constructor"
short-title: URL()
slug: Web/API/URL/URL
page-type: web-api-constructor
browser-compat: api.URL.URL
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`URL()`** constructor returns a newly created {{domxref("URL")}} object representing the URL defined by the parameters.

If the given base URL or the resulting URL are not valid absolute URLs, the JavaScript {{jsxref("TypeError")}} exception is thrown.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameters

- `url`
  - : A string or any other object with a {{Glossary("stringifier")}} that represents an absolute URL or a relative reference to a base URL.
    If `url` is a relative reference, `base` is required, and is used to resolve the final URL.
    If `url` is an absolute URL, a given `base` will not be used to create the resulting URL.
- `base` {{optional_inline}}
  - : A string representing the base URL to use in cases where `url` is a relative reference. If it is specified, this must be an absolute URL.

    When a `base` is specified, the resolved URL is not simply a concatenation of `url` and `base`.
    Relative references to the parent and current directory are resolved relative to the current directory of the `base` URL, which includes path segments up until the last forward-slash, but not any after.
    Relative references to the root are resolved relative to the base origin.
    For more information see [Resolving relative references to a URL](/en-US/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> The `url` and `base` arguments will each be stringified from whatever value you pass, such as an {{domxref("HTMLAnchorElement")}} or {{domxref("HTMLAreaElement")}} element, just like with other Web APIs that accept a string.
> In particular, you can use an existing {{domxref("URL")}} object for either argument, and it will be stringified from the object's {{domxref("URL.href", "href")}} property.

### Exceptions

- {{jsxref("TypeError")}}
  - : `url` (in the case of absolute URLs) or `base` + `url` (in the case of relative references) is not a valid URL.

## Examples

> [!NOTE]
> [Resolving relative references to a URL](/en-US/docs/Web/API/URL_API/Resolving_relative_references) provides additional examples demonstrating how different `url` and `base` values are resolved to a final absolute URL.

### Usage without a base URL

```js
new URL("https://example.org");
// => 'https://example.org/'
```

### Usage with base URLs

If `url` is an absolute URL, then `base` is not used to construct the result:

```js
new URL("https://example.org", "https://example.com");
// => 'https://example.org/'

new URL("https://example.org", "https://example.com/base1/base2");
// => 'https://example.org/'
```

If `url` starts with `//`, then it is resolved using the [scheme](/en-US/docs/Web/URI/Reference/Schemes) from `base`:

```js
new URL("//example.org", "wss://example.com");
// => 'wss://example.org/'
```

If `url` starts with `/`, then it is resolved from the root directory of `base`:

```js
new URL("/", "https://example.com");
// => 'https://example.com/'

new URL("/url1/url2", "https://example.com/");
// => 'https://example.com/url1/url2'

new URL("/url1/url2", "https://example.com/base1/base2");
// => 'https://example.com/url1/url2'
```

Otherwise, `url` is resolved from the leaf directory of `base`:

```js
new URL("url1/url2", "https://example.com/base1/base2");
// => 'https://example.com/base1/url1/url2'

new URL("url1/url2", "https://example.com/base1/base2/");
// => 'https://example.com/base1/base2/url1/url2'
```

### URL parameters

If `url` includes parameters, then they are retained in the result:

```js
new URL("/url1?query1", "https://example.com/base1");
// => 'https://example.com/url1?query1'
```

If `url` is not an empty string, then any parameters are removed from `base`:

```js
new URL("/url1", "https://example.com/base1?query=1");
// => 'https://example.com/url1'

new URL("", "https://example.com/base1?query=1");
// => 'https://example.com/base1?query=1'
```

### Usage with `URL` objects

Since `URL` objects can be stringified, they can also be passed to the constructor:

```js
const example = new URL("https://example.com/");

new URL(example);
// => "https://example.com/"

new URL("/url1/url2", example);
// => 'https://example.com/url1/url2'
```

### Error cases

If `url` is relative, then `base` must be supplied:

```js
new URL("/url1/url2");
// TypeError exception: '/url1/url2' cannot be resolved
```

If `base` is supplied, it must be an absolute URL (even if `url` is absolute):

```js
new URL("https://example.org/url1/url2", "/base1/base2");
// TypeError exception: `base` not an absolute URL
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("URL.parse_static", "URL.parse()")}}, a non-throwing alternative to this constructor
- [Polyfill of `URL` in `core-js`](https://core-js.io/docs/features/web-standards/url)
- The interface it belongs to: {{domxref("URL")}}.
