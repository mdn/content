---
title: HTMLAnchorElement.host
slug: Web/API/HTMLAnchorElement/host
page-type: web-api-instance-property
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.host
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.host`** property is a
string containing the host, that is the _hostname_, and then,
if the _port_ of the URL is nonempty, a `':'`, and the _port_
of the URL.

## Value

A string.

## Examples

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/HTMLAnchorElement"
anchor.host === "developer.mozilla.org"

anchor.href = "https://developer.mozilla.org:443/en-US/HTMLAnchorElement"
anchor.host === "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/HTMLAnchorElement"
anchor.host === "developer.mozilla.org:4097"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
