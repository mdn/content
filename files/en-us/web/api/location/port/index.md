---
title: 'Location: port'
slug: Web/API/Location/port
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.port
---
{{ApiRef("Location")}}

The **`port`** property of the {{domxref("Location")}}
interface is a {{domxref("USVString")}} containing the port number of the URL. If the
URL does not contain an explicit port number, it will be set to `''`.

## Syntax

```js
string = object.port;
object.port = string;
```

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/Location.port"> element be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.port; // Returns:'443'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
