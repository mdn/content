---
title: URL()
slug: Web/API/URL/URL
tags:
  - API
  - Constructor
  - Reference
  - URL
  - URL API
  - Polyfill
browser-compat: api.URL.URL
---
{{APIRef("URL API")}}

The **`URL()`** constructor returns a newly created
{{domxref("URL")}} object representing the URL defined by the parameters.

If the given base URL or the resulting URL are not valid URLs, the JavaScript
{{jsxref("TypeError")}} exception is thrown.

{{AvailableInWorkers}}

## Syntax

```js
const url = new URL(url [, base])
```

### Parameters

- `url`
  - : A {{domxref("USVString")}} or any other object with a [stringifier](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#stringifiers) — including, for example, an {{htmlelement("a")}} or {{htmlelement("area")}} element — that represents an absolute or relative URL.
    If `url` is a relative URL, `base` is
    required, and will be used as the base URL. If `url` is an
    absolute URL, a given `base` will be ignored.
- `base` {{optional_inline}}
  - : A {{domxref("USVString")}} representing the base URL to use in cases where
    `url` is a relative URL. If not specified, it defaults to
    `undefined`.

> **Note:** The `url` and `base` arguments will
> each be stringified from whatever value you pass, just like with other Web APIs
> that accept {{domxref("USVString")}}. In particular, you can use an existing
> {{domxref("URL")}} object for either argument, and it will stringify to the
> object's {{domxref("URL.href", "href")}} property.

### Exceptions

| Exception                        | Explanation                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | `url` (in the case of absolute URLs) or `base` + `url` (in the case of relative URLs) is not a valid URL. |

## Examples

```js
// Base urls
let m = 'https://developer.mozilla.org';
let a = new URL("/", m);                                // => 'https://developer.mozilla.org/'
let b = new URL(m);                                     // => 'https://developer.mozilla.org/'

        new URL('en-US/docs', b);                      // => 'https://developer.mozilla.org/en-US/docs'
let d = new URL('/en-US/docs', b);                     // => 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', d);                     // => 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', a);                     // => 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // => 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', '');                    // Raises a TypeError exception as '' is not a valid URL
        new URL('/en-US/docs');                        // Raises a TypeError exception as '/en-US/docs' is not a valid URL
        new URL('http://www.example.com', );           // => 'http://www.example.com/'
        new URL('http://www.example.com', b);          // => 'http://www.example.com/'

        new URL("", "https://example.com/?query=1")    // => 'https://example.com/?query=1' (Edge before 79 removes query arguments)
        new URL("/a", "https://example.com/?query=1")  // => 'https://example.com/a' (see relative URLs)
        new URL("//foo.com", "https://example.com")    // => 'https://foo.com' (see relative URLs)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URL` is available in [`core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- The interface it belongs to: {{domxref("URL")}}.
