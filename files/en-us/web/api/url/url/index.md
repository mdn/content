---
title: "URL: URL() constructor"
short-title: URL()
slug: Web/API/URL/URL
page-type: web-api-constructor
browser-compat: api.URL.URL
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`URL()`** constructor returns a newly created
{{domxref("URL")}} object representing the URL defined by the parameters.

If the given base URL or the resulting URL are not valid URLs, the JavaScript
{{jsxref("TypeError")}} exception is thrown.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameters

- `url`
  - : A string or any other object with a {{Glossary("stringifier")}} — including, for example, an {{htmlelement("a")}} or {{htmlelement("area")}} element — that represents an absolute or relative URL.
    If `url` is a relative URL, `base` is
    required, and will be used as the base URL. If `url` is an
    absolute URL, a given `base` will be ignored.
- `base` {{optional_inline}}
  - : A string representing the base URL to use in cases where
    `url` is a relative URL. If not specified, it defaults to
    `undefined`.

> **Note:** The `url` and `base` arguments will
> each be stringified from whatever value you pass, just like with other Web APIs
> that accept a string. In particular, you can use an existing
> {{domxref("URL")}} object for either argument, and it will stringify to the
> object's {{domxref("URL.href", "href")}} property.

### Exceptions

| Exception               | Explanation                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | `url` (in the case of absolute URLs) or `base` + `url` (in the case of relative URLs) is not a valid URL. |

## Examples

```js
// Base URLs:
let baseUrl = "https://developer.mozilla.org";

let A = new URL("/", baseUrl);
// => 'https://developer.mozilla.org/'

let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'

new URL("en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

let D = new URL("/en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", D);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", A);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", "https://developer.mozilla.org/fr-FR/toto");
// => 'https://developer.mozilla.org/en-US/docs'

// Invalid URLs:

new URL("/en-US/docs", "");
// Raises a TypeError exception as '' is not a valid URL

new URL("/en-US/docs");
// Raises a TypeError exception as '/en-US/docs' is not a valid URL

// Other cases:

new URL("http://www.example.com");
// => 'http://www.example.com/'

new URL("http://www.example.com", B);
// => 'http://www.example.com/'

new URL("", "https://example.com/?query=1");
// => 'https://example.com/?query=1' (Edge before 79 removes query arguments)

new URL("/a", "https://example.com/?query=1");
// => 'https://example.com/a' (see relative URLs)

new URL("//foo.com", "https://example.com");
// => 'https://foo.com/' (see relative URLs)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- The interface it belongs to: {{domxref("URL")}}.
