---
title: "URL: pathname property"
short-title: pathname
slug: Web/API/URL/pathname
page-type: web-api-instance-property
browser-compat: api.URL.pathname
---

{{ApiRef("URL API")}}

The **`pathname`** property of the {{domxref("URL")}} interface represents a location in a hierarchical structure. It is a string constructed from a list of path segments, each of which is prefixed by a `/` character. If the URL has no path segments, the value of its `pathname` property will be the empty string.

URLs such as `https` and `http` URLs that have [hierarchical schemes](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (which the URL standard calls "[special schemes](https://url.spec.whatwg.org/#special-scheme)") always have at least one (invisible) path segment: the empty string. Thus the `pathname` value for such "special scheme" URLs can never be the empty string, but will instead always have a least one `/` character.

For example, the URL `https://developer.mozilla.org` has just one path segment: the empty string, so its `pathname` value is constructed by prefixing a `/` character to the empty string.

Some systems define the term _slug_ to mean the final segment of a non-empty path if it identifies a page in human-readable keywords. For example, the URL `https://example.org/articles/this-that-other-outre-collection` has `this-that-other-outre-collection` as its slug.

Some systems use the `;` and `=` characters to delimit parameters and parameter values applicable to a path segment. For example, with the URL `https://example.org/users;id=42/tasks;state=open?sort=modified`, a system might extract and use the path segment parameters `id=42` and `state=open` from the path segments `users;id=42` and `tasks;state=open`.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
