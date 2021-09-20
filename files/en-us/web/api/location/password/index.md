---
title: 'Location: password'
slug: Web/API/Location/password
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.password
---
{{deprecated_header}}

The **`password`** property of the {{domxref("Location")}}
interface is a {{domxref("USVString")}} containing the password specified before the
domain name.

If it is set without first setting the
[`username`](/en-US/docs/Web/API/Location/username) property, it
silently fails.

## Syntax

```js
string = object.password;
object.password = string;
```

## Examples

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/location.username"> be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.password; // Returns:'flabada'
```

## Browser compatibility

{{Compat}}
