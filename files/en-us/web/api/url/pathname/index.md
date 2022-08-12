---
title: URL.pathname
slug: Web/API/URL/pathname
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.pathname
---
{{ApiRef("URL API")}}

The **`pathname`** property of the {{domxref("URL")}} interface is a string containing an initial `/` followed by the path of the URL, not including the query string or fragment (or the empty string if there is no path).

The path of the URL is a `/` delimited sequence of segments, which may each be one of `.`, `..` or a string with zero or more characters excluding `/`, `?`, and `#`.

Some systems define the term *slug* to mean the final segment of a non-empty path if it identifies a page in human-readable keywords. For example, the URL `https://example.org/articles/this-that-other-outre-collection` has `this-that-other-outre-collection` as its slug.

Some systems use the `;` and `=` characters to delimit parameters and parameter values applicable to a path segment. For example, with the URL `https://example.org/users;id=42/tasks;state=open?sort=modified`, a system might extract and use the path segment parameters `id=42` and `state=open` from the path segments `users;id=42` and `tasks;state=open`.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value');
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
