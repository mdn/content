---
title: location.pathname
slug: Web/API/Location/pathname
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.pathname
---
{{ApiRef("Location")}}

The **`pathname`** property of the {{domxref("Location")}}
interface is a string containing the path of the URL for the location, which will be the empty string if there is no path.

## Value

A string.

## Examples

```js
// Let's an <a id="myAnchor" href="/en-US/docs/Location.pathname"> element be in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.pathname; // Returns:'/en-US/docs/Location.pathname'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
