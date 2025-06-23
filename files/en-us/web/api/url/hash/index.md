---
title: "URL: hash property"
short-title: hash
slug: Web/API/URL/hash
page-type: web-api-instance-property
browser-compat: api.URL.hash
---

{{ APIRef("URL API") }} {{AvailableInWorkers}}

The **`hash`** property of the {{domxref("URL")}} interface is a string containing a `"#"` followed by the fragment identifier of the URL. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

This property can be set to change the fragment identifier of the URL. When setting, a single `"#"` prefix is added to the provided value, if not already present. Setting it to `""` removes the fragment identifier.

The fragment is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href#examples",
);
console.log(url.hash); // '#examples'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
