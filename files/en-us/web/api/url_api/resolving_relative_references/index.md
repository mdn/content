---
title: Resolving relative references to a URL
slug: Web/API/URL_API/Resolving_relative_references
page-type: guide
---

{{DefaultAPISidebar("URL API")}}

The [`URL()` constructor](/en-US/docs/Web/API/URL/URL) or the {{domxref("URL.parse_static", "URL.parse()")}} static method of the [URL API](/en-US/docs/Web/API/URL_API) can be used to resolve a relative reference and a base URL to an absolute URL.

Both methods take up to two string arguments and return a [`URL()`](/en-US/docs/Web/API/URL) object representing an absolute URL.
The first argument represents either an absolute URL or a relative reference to a URL, while the second is a base URL that is used to resolve the relative reference if one is specified in the first argument.
The methods resolve the relative reference in the same way, except that the `URL()` constructor throws if invalid URLs are passed, while `parse()` returns `null`.

The code below shows how the methods are used with the same `url` and `base` URL values.

```js
const url = "articles";
const base = "https://developer.mozilla.org/some/path";
const constructorResult = new URL(url, base);
// => https://developer.mozilla.org/some/articles
const parseResult = URL.parse(url, base);
// => https://developer.mozilla.org/some/articles
```

You can see from the example that resolving the `URL` from a supplied base URL and relative reference is not simply a concatenation of the supplied parameters.

In this case a path relative to the current directory is passed (`articles`).
The current directory of the `base` URL is the URL string up to the last forward slash.
Here `https://developer.mozilla.org/some/path` has no trailing forward slash, so the current directory is `https://developer.mozilla.org/some/`, and hence resolves to a final URL of `https://developer.mozilla.org/some/articles`.

Relative references are resolved against the base URL using a path reference that is relative to: the current directory (`./`), the parent directory of the current directory (`../`), or the site root (`/`).
The following sections show how resolution works for each type of relative path.

## Current directory relative

A relative reference prefixed with `./` or no prefix, such as `./article`, `article`, or `./article/`, is relative to the current directory of the URL represented by the `base` argument.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 90px;
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

The current directory of the `base` URL is the URL string up to the last forward slash, which is `https://test.example.org/api/` for both of the `base` strings in the code block below.
The current directory relative reference `article` is appended to this, resolving to `https://test.example.org/api/article`

```js
log(new URL("./article", "https://test.example.org/api/").href);
// => https://test.example.org/api/article
log(new URL("article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
```

Similarly, below both base URL strings have a current directory of `https://test.example.org/api/v2/`.
We append `story/` and `story` to these to resolve the final URL.

```js
log(new URL("./story/", "https://test.example.org/api/v2/").href);
// => https://test.example.org/api/v2/story/
log(new URL("./story", "https://test.example.org/api/v2/v3").href);
// => https://test.example.org/api/v2/story
```

{{EmbedLiveSample('Current directory relative', '100%', '140px')}}

## Parent-directory relative

A relative reference prefixed with `../`, such as `../path`, is relative to the _parent_ of the current directory of the URL represented by the `base` argument.
Each instance of `../` strips a folder from the current directory, and then any text after `../` is appended to the remaining base path.
You can navigate up through parents by specifying `../` multiple times, but only to the level of the site-root.

For example, given a base URL `https://test.example.com/test/api/v1/` and a parent-relative URL of `../some/path`, the current directory is `https://test.example.com/test/api/v1/`, the parent is `https://test.example.com/test/api/`, and the resolved absolute URL is `https://test.example.com/test/api/some/path`.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

The following examples demonstrate this in more detail.
In all cases the current directory is `https://test.example.org/api/v1/v2/` (in the second case `v3` is after the last forward slash), with each relative reference resolving to a different parent.

```js
log(new URL("../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/v1/path
log(new URL("../../path", "https://test.example.org/api/v1/v2/v3").href);
// => https://test.example.org/api/path
log(new URL("../../../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/path
```

{{EmbedLiveSample('Parent-directory relative', '100%')}}

## Root relative

A relative reference prefixed with `/`, such as `/path`, is relative to the site root of the URL specified in the `base` argument.
For example, given a base URL of `https://test.example.com/api/v1` the resolved URL for the root-relative URL `/some/path` is `https://test.example.com/some/path`.

> [!NOTE]
> The path part of the `base` URL doesn't matter when resolving root-relative URLs.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

Below are a few more examples.

```js
log(new URL("/some/path", "https://test.example.org/api/").href);
// => https://test.example.org/some/path
log(new URL("/", "https://test.example.org/api/v1/").href);
// => https://test.example.org/
log(new URL("/article", "https://example.com/api/v1/").href);
// => https://example.com/article
```

{{EmbedLiveSample('Root relative', '100%')}}

## See also

- [RFC 3986 - Relative Resolution](https://datatracker.ietf.org/doc/html/rfc3986.html#section-5.2), the specification for resolving base and relative URLs
