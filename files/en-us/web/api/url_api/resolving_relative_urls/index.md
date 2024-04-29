---
title: Resolving relative URLs
slug: Web/API/URL_API/Resolving_relative_urls
page-type: guide
---

{{DefaultAPISidebar("URL API")}}

The {{domxref("URL")}} interface of the [URL API](/en-US/docs/Web/API/URL_API) provides two methods for creating an `URL` objects: the [`URL()` constructor](/en-US/docs/Web/API/URL/URL) and the {{domxref("URL.parse_static", "parse()")}} static method.
Both methods take string arguments for either an absolute URL, or for a relative URL and a base URL that is used to resolve it.
The main difference between them is that the `URL()` constructor throws if invalid URLs are passed, while `parse()` returns `null`.

The usage for the methods is shown together below for the same `url` and `base` URL values.

```js
const url = "articles";
const base = "https://developer.mozilla.org/some/path";
const constructorResult = new URL(url, base);
// => https://developer.mozilla.org/url/some/articles
const parseResult = URL.parse(url, base);
// => // => https://developer.mozilla.org/url/some/articles (same)
```

You can see from the example above that resolving the `URL` from a supplied base URL and relative URL is not simply a concantenation of the supplied parameters.
Below we show how the resolution works.

## Base URL

Relative URLs are relative to either the current base directory, a parent of the current base directory, or the site root of the base URL.

The current directory of the `base` URL is the URL string up to the last forward slash.
If there is a path segment after the last forward slash then it represents a file name and gets ignored.
In the previous exmaple the base string is `https://developer.mozilla.org/some/path`, so the current directory is `https://developer.mozilla.org/some/`.

The live example below demonstrates this using the relative URL that resolves to "the current level" (`./`).
Note how everything after the last backslash is removed:

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
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

```js
log(new URL("./", "https://test.example.org").href); // => https://test.example.org/
log(new URL("./", "https://test.example.org/").href); // => https://test.example.org/
log(new URL("./", "https://test.example.org/api").href); // => https://test.example.org/
log(new URL("./", "https://test.example.org/api/").href); // => https://test.example.org/api/
log(new URL("./", "https://test.example.org/api/v1").href); // => https://test.example.org/api/
log(new URL("./", "https://test.example.org/api/v1/").href); // => https://test.example.org/api/v1/
log(
  new URL("./", "https://user:pass@test.example.org:440/api/v1?param1=val1")
    .href,
); // => https://user:pass@test.example.org:440/api/
```

{{EmbedLiveSample('Base URL', '100%')}}

## Relative URLs

Relative URLs are resolved against the base URL using a path reference that is relative to: the current directory (`./`), the parent directory of the current directory (`../`), or the site root (`/`).
These are demonstrated in the following sections.

### Current directory relative

You can specify a path relative to the current directory of the `base` by prefixing the path with `./` or by having no prefix.
For example, `./article` or `article`.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

The example URLs below demonstrate how this works.
These all resolve to the same absolute URL because `./article` and `article` are the same, and the current directory of the `base` URLs are the same (`v1` does not have a trailing forward slash and is omitted).

```js
log(new URL("./article", "https://test.example.org/api/").href);
// => https://test.example.org/api/article
log(new URL("./article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
log(new URL("article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
```

{{EmbedLiveSample('Current directory relative', '100%')}}

### Root relative

A root-relative URL is one that is relative to the site root, and is specified by prefixing the URL with `/`.
For example, given a base URL of `https://test.example.com/api/` the resolved URL for the root-relative URL `/some/path` is `https://test.example.com/some/path`.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

Below we see more examples.
Note that the path of the `base` URL doesn't matter when resolving root-relative URLs.

```js
log(new URL("/some/path", "https://test.example.org/api/").href);
// => https://test.example.org/some/path
log(new URL("/", "https://test.example.org/api/v1/").href);
// => https://test.example.org/
log(new URL("/article", "https://test.example.org/api/v1/").href);
// => https://test.example.org/article
```

{{EmbedLiveSample('Root relative', '100%')}}

### Parent-directory relative

A parent-relative URL is one that is relative to a parent directory of the base URL.
For example, given a base URL of `https://test.example.com/test/api/v1/` the resolved URL for the parent-relative URL `../some/path` is `https://test.example.com/test/api/some/path`.
You can navigate up through parents by specifying `../` multiple times, but only to the level of the site-root.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

This is shown below.

```js
log(new URL("../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/v1/path
log(new URL("../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/path
log(new URL("../../../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/path
```

{{EmbedLiveSample('Parent-directory relative', '100%')}}

### More examples

Here are a few more examples showing some different relative paths and base paths with and without a trailing forward slash.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
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

Base path without trailing slash:

```js
log(new URL("articles", "https://developer.mozilla.org/api/v1").href);
// => 'https://developer.mozilla.org/api/articles'

log(new URL("./articles", "https://developer.mozilla.org/api/v1").href);
// => 'https://developer.mozilla.org/api/articles'

log(new URL("/articles", "https://developer.mozilla.org/api/v1").href);
// => 'https://developer.mozilla.org/articles'

log(new URL("../articles", "https://developer.mozilla.org/api/v1").href);
// => 'https://developer.mozilla.org/articles'
```

Base path with trailing slash:

```js
log(new URL("articles", "https://developer.mozilla.org/api/v1/").href);
// => 'https://developer.mozilla.org/api/v1/articles'

log(new URL("/articles", "https://developer.mozilla.org/api/v1/").href);
// => 'https://developer.mozilla.org/articles'

log(new URL("./articles", "https://developer.mozilla.org/api/v1/").href);
// => 'https://developer.mozilla.org/api/v1/articles'

log(new URL("../articles", "https://developer.mozilla.org/api/v1/").href);
// => 'https://developer.mozilla.org/api/articles'
```

{{EmbedLiveSample('More examples', '100%', '200px')}}

## See also

- [RFC 3986 - Relative Resolution](https://datatracker.ietf.org/doc/html/rfc3986.html#section-5.2), the specification for resolving base and relative URLs
