---
title: location.username
slug: Web/API/Location/username
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.username
---
{{APIRef("HTMLDOM")}}
{{deprecated_header}}

The **`username`** property of the {{domxref("Location")}}
interface is a string containing the username specified before the
domain name.

## Syntax

```js
string = object.username;
object.username = string;
```

## Examples

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/Location.username"> be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.username; // Returns:'anonymous'
```

## Browser compatibility

{{Compat}}
