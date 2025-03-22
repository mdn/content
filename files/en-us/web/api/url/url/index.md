---
title: "URL: URL() constructor"
short-title: URL()
slug: Web/API/URL/URL
page-type: web-api-constructor
browser-compat: api.URL.URL
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`URL()`** constructor returns a newly created {{domxref("URL")}} object representing the URL defined by the parameters.

If the given base URL or the resulting URL are not valid URLs, the JavaScript {{jsxref("TypeError")}} exception is thrown.

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

  - : A string representing the base URL to use in cases where `url` is a relative reference.
    If not specified, it defaults to `undefined`.

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

Here are some examples of using the constructor.

> **Note:** [Resolving relative references to a URL](/en-US/docs/Web/API/URL_API/Resolving_relative_references) provides additional examples demonstrating how different `url` and `base` values are resolved to a final absolute URL.

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
```

Here are some examples of invalid URLs:

```js
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

- {{domxref("URL.parse_static", "URL.parse()")}}, a non-throwing alternative to this constructor
- [Polyfill of `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- The interface it belongs to: {{domxref("URL")}}.
