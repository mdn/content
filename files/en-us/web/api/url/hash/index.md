---
title: URL.hash
slug: Web/API/URL/hash
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.hash
---
{{ APIRef("URL API") }}

The **`hash`** property of the
{{domxref("URL")}} interface is a string containing a
`'#'` followed by the fragment identifier of the URL.

The fragment is not [percent-decoded](/en-US/docs/Glossary/percent-encoding). If the URL does not
have a fragment identifier, this property contains an empty string — `""`.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
console.log(url.hash); // Logs: '#Examples'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
