---
title: 'Location: hostname'
slug: Web/API/Location/hostname
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.hostname
---
{{ApiRef("URL API")}}

The **`hostname`** property of the {{domxref("Location")}}
interface is a {{domxref("USVString")}} containing the domain of the URL.

## Syntax

```js
string = object.hostname;
object.hostname = string;
```

## Examples

```js
// Let's an <a id="myAnchor" href="/en-US/docs/Location.hostname"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.hostname; // Returns:'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
