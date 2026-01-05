---
title: "URL: pathname property"
short-title: pathname
slug: Web/API/URL/pathname
page-type: web-api-instance-property
browser-compat: api.URL.pathname
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`pathname`** property of the {{domxref("URL")}} interface represents a location in a hierarchical structure. It is a string constructed from a list of path segments, each of which is prefixed by a `/` character.

HTTPS, HTTP, or other URLs with [hierarchical schemes](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (which the URL standard calls "[special schemes](https://url.spec.whatwg.org/#special-scheme)") always have at least one (invisible) path segment: the empty string.
The `pathname` value for such URLs will therefore always have at least one `/` character.

For non-hierarchical schemes, the pathname is known as an _opaque path_ (meaning, the URL parser does not try to split it into a list of segments). In this case, an empty path results in the `pathname` property being the empty string. Trailing spaces in opaque paths are stripped during initial parsing if the `hash` and `search` are both empty; otherwise, they are percent-encoded as `%20` even when `hash` and `search` are later set to empty strings.

> [!NOTE]
> Percent-encoding trailing spaces in opaque paths is not widely implemented. Some browsers implement the old behavior of stripping trailing spaces from `pathname` whenever the `hash` and `search` properties are both empty strings. In these browsers, setting `hash` or `search` may change the `pathname` as well. In even older browsers, the trailing space remains after removing hash and search, causing [serialization and parsing to not round-trip](#pathname_with_opaque_path).

## Value

A string.

## Examples

### Pathname with invisible segment

The URL below has just one path segment, the empty string.
The `pathname` value is constructed by prefixing a `/` character to the empty string.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.pathname); // Logs "/"
```

### Pathname with query parameters

The example below shows the pathname for an HTTPS URL with query parameters.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

The query parameters do not form part of the path.
Note that some systems use the `;` and `=` characters to delimit parameters and parameter values applicable to a path segment.
For example, with the URL `https://example.org/users;id=42/tasks;state=open?sort=modified`, a system might extract and use the path segment parameters `id=42` and `state=open` from the path segments `users;id=42` and `tasks;state=open`.

### Pathname with a slug

Some systems define the term _slug_ to mean the final segment of a non-empty path if it identifies a page in human-readable keywords.
For example, the URL below has the slug `this-that-other-outre-collection`.

```js
const url = new URL(
  "https://example.org/articles/this-that-other-outre-collection",
);
console.log(url.pathname); // Logs "/articles/this-that-other-outre-collection"
```

### Pathname with opaque path

When the URL uses a non-hierarchical scheme, the `pathname` property behaves slightly differently. The following example shows a `data:` URL with no path at all, in which case the `pathname` is the empty string.

```js
const url = new URL("data:");
console.log(JSON.stringify(url.pathname)); // ""
```

Browsers always strip trailing spaces from `pathname` during initial parsing if there's no hash or search.

```js
const url = new URL("data:text/plain,Hello ");
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello"
```

However, if the hash or search is not empty during initial parsing, the trailing space is either preserved (old behavior) or percent-encoded (new behavior).

```js
const url = new URL("data:text/plain,Hello #frag");
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello " (old) or "text/plain,Hello%20" (new)
```

If they are later set to empty strings, the trailing space is either removed (old behavior) or remains percent-encoded (new behavior).

```js
const url = new URL("data:text/plain,Hello #frag");
url.hash = "";
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello" (old) or "text/plain,Hello%20" (new)
```

Both behaviors ensure that serializing and parsing the URL round-trip; that is, `new URL(url.href).href` is always equal to `url.href`. If the trailing space remains as-is after removing the hash, then `new URL()` would strip it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
