---
title: "URL: parse() static method"
short-title: parse()
slug: Web/API/URL/parse_static
page-type: web-api-static-method
browser-compat: api.URL.parse_static
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`URL.parse()`** static method of the {{domxref("URL")}} interface returns a newly created {{domxref("URL")}} object representing the URL defined by the parameters.

If the given base URL or the resulting URL are not parsable and valid URLs, `null` is returned.
This is an alternative to using the {{domxref("URL.URL", "URL()")}} constructor to construct a `URL` within a [try...catch](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, or using {{domxref("URL.canParse_static", "canParse()")}} to check the parameters and returning `null` if the method returns `false`.

## Syntax

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### Parameters

- `url`
  - : A string or any other object with a {{Glossary("stringifier")}} that represents an absolute URL or a relative reference to a URL.
    If `url` is a relative reference, `base` is required, and is used to resolve the final URL.
    If `url` is an absolute URL, a given `base` will not be used to create the resulting URL.
- `base` {{optional_inline}}

  - : A string representing the base URL to use in cases where `url` is a relative URL.
    If not specified, it defaults to `undefined`.

    When you specify a `base` URL, the resolved URL is not simply a concatenation of `url` and `base`.
    Relative references to the parent and current directory are resolved are relative to the current directory of the `base` URL, which includes only path segments up until the last forward-slash, but not any after.
    Relative references to the root are resolved relative to the base origin.
    For more information see [Resolving relative references to a URL](/en-US/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> The `url` and `base` arguments will each be stringified from whatever value you pass, such as an {{domxref("HTMLAnchorElement")}} or {{domxref("HTMLAreaElement")}} element, just like with other Web APIs that accept a string.
> In particular, you can use an existing {{domxref("URL")}} object for either argument, and it will be stringified from the object's {{domxref("URL.href", "href")}} property.

### Return value

A `URL` if the parameters can be resolved to a valid URL; `null` otherwise.

## Examples

[Resolving relative references to a URL](/en-US/docs/Web/API/URL_API/Resolving_relative_references) and [`URL()` constructor](/en-US/docs/Web/API/URL/URL#examples) provide additional examples demonstrating how different `url` and `base` values are resolved to a final absolute URL (though primarily using `URL()`).

### Using URL.parse()

This live example demonstrates how to use the `URL.parse()` static method for a few different absolute and relative reference values.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

First we check that the `URL.parse()` method is supported using the condition `"parse" in URL`.
If the method is supported we log the result of checking an absolute URL, a relative reference and a base URL, a relative reference with a more [complicated base URL](/en-US/docs/Web/API/URL_API/Resolving_relative_references), a valid absolute URL with a valid base URL (which is not used), and an invalid base URL that results in the method returning `null`.

We also log the case when `URL.parse()` is not supported.

```js
if ("parse" in URL) {
  // Absolute URL
  let result = URL.parse("https://developer.mozilla.org/en-US/docs");
  log(`[1]: ${result.href}`);

  // Relative reference to a valid base URL
  result = URL.parse("en-US/docs", "https://developer.mozilla.org");
  log(`[2]: ${result.href}`);

  // Relative reference to a "complicated" valid base URL
  // (only the scheme and domain are used to resolve url)
  result = URL.parse(
    "/different/place",
    "https://developer.mozilla.org:443/some/path?id=4",
  );
  log(`[3]: ${result.href}`);

  // Absolute url argument (base URL ignored)
  result = URL.parse(
    "https://example.org/some/docs",
    "https://developer.mozilla.org",
  );
  log(`[4]: ${result.href}`);

  // Invalid base URL (missing colon)
  result = URL.parse("en-US/docs", "https//developer.mozilla.org");
  log(`[5]: ${result}`);
} else {
  log("URL.parse() not supported");
}
```

Last of all, the code below demonstrates that the arguments don't have to be strings, by passing an `URL` object for the `base` parameter.

```js
if ("parse" in URL) {
  // Relative reference with base URL supplied as a URL object
  result = URL.parse("/en-US/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

The results of each of the checks are shown below.

{{EmbedLiveSample('URL.parse()', '100%')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`URL()` constructor](/en-US/docs/Web/API/URL/URL), which throws if the passed parameters define an invalid URL
- [A polyfill of `URL.parse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) is available in [`core-js`](https://github.com/zloirock/core-js)
