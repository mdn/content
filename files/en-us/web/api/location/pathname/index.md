---
title: "location: pathname property"
short-title: pathname
slug: Web/API/Location/pathname
page-type: web-api-instance-property
browser-compat: api.Location.pathname
---

{{ApiRef("Location")}}

The **`pathname`** property of the {{domxref("Location")}}
interface is a string containing the path of the URL for the location. If there is no path, `pathname` will be empty: otherwise, `pathname` contains an initial '/' followed by the path of the URL, not including the query string or fragment.

## Value

A string.

## Examples

```js
// Let's say an <a id="myAnchor" href="/en-US/docs/Location.pathname"> element is in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.pathname; // Returns:'/en-US/docs/Location.pathname'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
