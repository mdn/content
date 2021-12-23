---
title: HTMLAreaElement.host
slug: Web/API/HTMLAreaElement/host
tags:
  - API
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.host
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.host`** property is a
{{domxref("USVString")}} containing the host, that is the _hostname_, and then,
if the _port_ of the URL is nonempty, a `':'`, and the _port_
of the URL.

## Syntax

```js
// Getter
string = area.host;
// Setter
area.host = string;
```

## Examples

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement"
area.host == "developer.mozilla.org"

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement"
area.host == "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement"
area.host == "developer.mozilla.org:4097"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
