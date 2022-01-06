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
var anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/en-US/docs/Location.hostname";

console.log(anchor.hostname);  // developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
