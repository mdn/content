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
// Let's say we are on the URL https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname#examples
console.log(location.pathname); // '/en-US/docs/Web/API/Location/pathname'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
