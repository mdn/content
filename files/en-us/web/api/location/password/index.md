---
title: location.password
slug: Web/API/Location/password
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.Location.password
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`password`** property of the {{domxref("Location")}}
interface is a string containing the password specified before the
domain name.

If it is set without first setting the
[`username`](/en-US/docs/Web/API/Location/username) property, it
silently fails.

## Value

A string.

## Examples

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/location.username"> be in the document
const anchor = document.getElementByID("myAnchor");
const result = anchor.password; // Returns:'flabada'
```

## Browser compatibility

{{Compat}}
