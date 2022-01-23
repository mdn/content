---
title: 'Location: toString()'
slug: Web/API/Location/toString
tags:
  - API
  - Location
  - Method
  - Reference
  - Stringifier
browser-compat: api.Location.toString
---
{{ApiRef("Location")}}

The **`toString()`** {{Glossary("stringifier")}} method of the
{{domxref("Location")}} interface returns a {{domxref("USVString")}} containing the
whole URL. It is a read-only version of {{domxref("Location.href")}}.

## Syntax

```js
string = object.toString();
```

## Examples

```js
// Let's imagine an <a id="myAnchor" href="/en-US/docs/Location/toString"> element is in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.toString(); // Returns: 'https://developer.mozilla.org/en-US/docs/Location/toString'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
