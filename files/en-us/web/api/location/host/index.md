---
title: 'Location: host'
slug: Web/API/Location/host
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.host
---
{{ApiRef("Location")}}

The **`host`** property of the {{domxref("Location")}}
interface is a {{domxref("USVString")}} containing the host, that is the
_hostname_, and then, if the _port_ of the URL is nonempty, a
`':'`, and the _port_ of the URL.

## Syntax

```js
string = object.host;
object.host = string;
```

## Examples

```js
var anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/Location.host"
anchor.host == "developer.mozilla.org"

anchor.href = "https://developer.mozilla.org:443/en-US/Location.host"
anchor.host == "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/Location.host"
anchor.host == "developer.mozilla.org:4097"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
