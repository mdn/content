---
title: location.protocol
slug: Web/API/Location/protocol
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.protocol
---
{{ApiRef("Location")}}

The **`protocol`** property of the {{domxref("Location")}}
interface is a string representing the protocol scheme of the URL,
including the final `':'`.

## Value

A string.

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location.protocol"> element be in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.protocol; // Returns:'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
