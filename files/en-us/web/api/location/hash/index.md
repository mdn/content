---
title: 'Location: hash'
slug: Web/API/Location/hash
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.hash
---
{{ APIRef("Location") }}

The **`hash`** property of the
{{domxref("Location")}} interface returns a {{domxref("USVString")}} containing a
`'#'` followed by the fragment identifier of the URL — the ID on the page
that the URL is trying to target.

The fragment is not [percent-decoded](/en-US/docs/Glossary/percent-encoding). If the URL does not
have a fragment identifier, this property contains an empty string, `""`.

## Syntax

```js
string = object.hash;
object.hash = string;
```

## Examples

```html
<a id="myAnchor" href="/en-US/docs/Location.href#Examples">Examples</a>
<script>
  var anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // Returns '#Examples'
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
