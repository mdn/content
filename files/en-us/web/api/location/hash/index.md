---
title: "location: hash property"
short-title: hash
slug: Web/API/Location/hash
page-type: web-api-instance-property
browser-compat: api.Location.hash
---

{{ APIRef("Location") }}

The **`hash`** property of the
{{domxref("Location")}} interface returns a string containing a
`'#'` followed by the fragment identifier of the URL — the ID on the page
that the URL is trying to target.

The fragment is not [URL decoded](https://en.wikipedia.org/wiki/URL_encoding). If the URL does not
have a fragment identifier, this property contains an empty string, `""`.

## Value

A string.

## Examples

```html
<a id="myAnchor" href="/en-US/docs/Location.href#Examples">Examples</a>
<script>
  const anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // Returns '#Examples'
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
