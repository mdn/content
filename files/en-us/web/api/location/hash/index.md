---
title: "Location: hash property"
short-title: hash
slug: Web/API/Location/hash
page-type: web-api-instance-property
browser-compat: api.Location.hash
---

{{ APIRef("Location") }}

The **`hash`** property of the {{domxref("Location")}} interface returns a string containing a `'#'` followed by the fragment identifier of the URL — the ID on the page that the URL is trying to target.

The fragment is not {{Glossary("Percent-encoding", "percent-encoded")}}. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

## Value

A string.

## Examples

```html
<a id="myAnchor" href="/en-US/docs/Location.href#examples">Examples</a>
<script>
  const anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // '#examples'
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
