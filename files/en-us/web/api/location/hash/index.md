---
title: "Location: hash property"
short-title: hash
slug: Web/API/Location/hash
page-type: web-api-instance-property
browser-compat: api.Location.hash
---

{{ APIRef("Location") }}

The **`hash`** property of the {{domxref("Location")}} interface is a string containing a `"#"` followed by the fragment identifier of the location URL. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

See {{domxref("URL.hash")}} for more information.

## Value

A string.

## Examples

Assuming the user has navigated to `https://example.org#examples`, the following code will log `#examples`:

```js
const result = location.hash;
console.log(result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
