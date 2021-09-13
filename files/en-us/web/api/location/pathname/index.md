---
title: 'Location: pathname'
slug: Web/API/Location/pathname
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.pathname
---
{{ApiRef("Location")}}

The **`pathname`** property of the {{domxref("Location")}}
interface is a {{domxref("USVString")}} containing the path of the URL for the location, which will be the empty string if there is no path.

## Syntax

```js
string = object.pathname;
object.pathname = string;
```

## Examples

```js
// Let's an <a id="myAnchor" href="/en-US/docs/Location.pathname"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.pathname; // Returns:'/en-US/docs/Location.pathname'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
