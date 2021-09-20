---
title: 'Location: protocol'
slug: Web/API/Location/protocol
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.protocol
---
{{ApiRef("Location")}}

The **`protocol`** property of the {{domxref("Location")}}
interface is a {{domxref("USVString")}} representing the protocol scheme of the URL,
including the final `':'`.

## Syntax

```js
string = object.protocol;
object.protocol = string;
```

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location.protocol"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.protocol; // Returns:'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
