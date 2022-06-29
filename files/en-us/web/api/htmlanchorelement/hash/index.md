---
title: HTMLAnchorElement.hash
slug: Web/API/HTMLAnchorElement/hash
page-type: web-api-instance-property
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.hash
---
{{ APIRef("HTML DOM") }}

The
**`HTMLAnchorElement.hash`** property returns a
string containing a `'#'` followed by the fragment
identifier of the URL.

The fragment is not [percent-decoded](/en-US/docs/Glossary/percent-encoding). If the URL does not
have a fragment identifier, this property contains an empty string, `""`.

## Value

A string.

## Examples

### Getting the hash from an anchor link

Given this HTML

```html
<a id="myAnchor" href="/en-US/docs/HTMLAnchorElement#Examples">Examples</a>
```

you can get the hash of the anchor like this:

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // returns '#Examples'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
