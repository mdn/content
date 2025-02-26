---
title: "URLSearchParams: toString() method"
short-title: toString()
slug: Web/API/URLSearchParams/toString
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.toString
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`toString()`** method of the
{{domxref("URLSearchParams")}} interface returns a query string suitable for use in a
URL.

> [!NOTE]
> This method returns the query string without the question mark. This is different from [`Location.search`](/en-US/docs/Web/API/Location/search), [`HTMLAnchorElement.search`](/en-US/docs/Web/API/HTMLAnchorElement/search), and [`URL.search`](/en-US/docs/Web/API/URL/search), which all include the question mark.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string, without the question mark. Returns an empty string if no search parameters have been set. Characters in the [`application/x-www-form-urlencoded` percent-encode set](https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set) (which contains all code points except ASCII alphanumeric, `*`, `-`, `.`, and `_`) are [percent-encoded](/en-US/docs/Glossary/Percent-encoding), and U+0020 SPACE is encoded as `+`.

## Examples

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// Add a second foo parameter.
params.append("foo", 4);
console.log(params.toString()); // Prints 'foo=1&bar=2&foo=4'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
