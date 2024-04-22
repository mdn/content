---
title: "URL: parse() static method"
short-title: parse()
slug: Web/API/URL/parse_static
page-type: web-api-static-method
browser-compat: api.URL.parse_static
---

{{ApiRef("URL API")}}

The **`URL.parse()`** static method of the {{domxref("URL")}} interface returns a newly created {{domxref("URL")}} object representing the URL defined by the parameters.

If the given base URL or the resulting URL are not parsable and valid URLs, `null` is returned.
This is an alternative to using the normal constructor to construct a `URL` within a [try...catch](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, or using {{domxref("URL.canParse_static", "canParse()")}} to check the parameters and returning `null` if the method returns `false`.

## Syntax

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### Parameters

- `url`
  - : A string or any other object with a {{Glossary("stringifier")}} — including, for example, an {{htmlelement("a")}} or {{htmlelement("area")}} element — that represents an absolute or relative URL.
    If `url` is a relative URL, `base` is required, and will be used as the base URL.
    If `url` is an absolute URL, a given `base` will be ignored.
- `base` {{optional_inline}}
  - : A string representing the base URL to use in cases where `url` is a relative URL.
    If not specified, it defaults to `undefined`.

> **Note:** The `url` and `base` arguments will each be stringified from whatever value you pass, just like with other Web APIs that accept a string.
> In particular, you can use an existing {{domxref("URL")}} object for either argument, and it will be stringified to the object's {{domxref("URL.href", "href")}} property.

### Return value

A `URL` if the parameters can be resolved to a valid URL; `null` otherwise.

## Examples

This live example demonstrates how to use the `URL.parse()` static method for a few different absolute and relative URL values.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 250px;
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
If the method is supported we log the result of checking a relative URL with a base URL, a valid absolute URL with a valid base URL (which gets ignored), and an invalid base URL that returns `null`.

We also log the case when `URL.parse()` is not supported.

```js
if ("parse" in URL) {
  let url = "en-US/docs";
  let base = "https://developer.mozilla.org";
  let result = URL.parse(url, base);
  log("//Relative URL appended to valid base URL");
  log(`Url.parse("${url}", "${base}")\n// ${result}`);

  url = "https://example.org/some/docs";
  result = URL.parse(url, base);
  log("\n//Absolute URL (base URL ignored)");
  log(`Url.parse("${url}", "${base}")\n// => ${result}`);

  log("\n//Invalid base URL (missing colon)");
  base = "https//developer.mozilla.org";
  result = URL.parse(url, base);
  log(`Url.Parse("${url}", "${base}")\n// ${result}`);
} else {
  log("URL.parse() not supported");
}
```

Last of all, the code below shows that the `baseUrl` doesn't have to be a string.
Here we have passed a `URL` object.

```js
if ("parse" in URL) {
  log("\nRelative URL with base URL supplied as a URL object");
  base = new URL("https://developer.mozilla.org/");
  url = "/en-US/docs";
  result = URL.parse(url, base);
  log(`Url.parse("${url}", "${base}")\n// ${result}`);
}
```

The results of each of the checks are shown below.

{{EmbedLiveSample('Examples', '100%', '300')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`URL()` constructor](/en-US/docs/Web/API/URL/URL), which throws if the passed parameters define an invalid URL
- [A polyfill of `URL.canParse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) is available in [`core-js`](https://github.com/zloirock/core-js)
