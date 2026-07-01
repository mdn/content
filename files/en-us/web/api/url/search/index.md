---
title: "URL: search property"
short-title: search
slug: Web/API/URL/search
page-type: web-api-instance-property
browser-compat: api.URL.search
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`search`** property of the {{domxref("URL")}} interface is a search string, also called a _query string_, that is a string containing a `"?"` followed by the parameters of the URL. If the URL does not have a search query, this property contains an empty string, `""`.

This property can be set to change the query string of the URL. When setting, a single `"?"` prefix is added to the provided value, if not already present. Setting it to `""` removes the query string.

The query is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

Modern browsers provide the {{domxref("URL.searchParams")}} property to make it easy to
parse out the parameters from the query string.

## Value

A string.

## Examples

### Basic usage

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

### Interaction with searchParams

The {{domxref("URL.searchParams")}} property exposes the `search` string as a {{domxref("URLSearchParams")}} object. When updating this `URLSearchParams`, the URL's `search` is updated with its serialization. However, `URL.search` encodes a subset of characters that `URLSearchParams` does, and encodes spaces as `%20` instead of `+`. This may cause some surprising interactions—if you update `searchParams`, even with the same values, the URL may be serialized differently.

```js
const url = new URL("https://example.com/?a=b ~");
console.log(url.href); // "https://example.com/?a=b%20~"
console.log(url.searchParams.toString()); // "a=b+%7E"
// This should be a no-op, but it changes the URL's query to the
// serialization of its searchParams
url.searchParams.sort();
console.log(url.href); // "https://example.com/?a=b+%7E"

const url2 = new URL("https://example.com?search=1234&param=my%20param");
console.log(url2.search); // "?search=1234&param=my%20param"
url2.searchParams.delete("search");
console.log(url2.search); // "?param=my+param"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
