---
title: location.username
slug: Web/API/Location/username
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.Location.username
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`username`** property of the {{domxref("Location")}}
interface is a string containing the username specified before the
domain name.

## Value

A string.

## Examples

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/Location.username"> be in the document
const anchor = document.getElementByID("myAnchor");
const result = anchor.username; // Returns:'anonymous'
```

## Browser compatibility

{{Compat}}
