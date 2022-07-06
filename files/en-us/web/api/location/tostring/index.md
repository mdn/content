---
title: location.toString()
slug: Web/API/Location/toString
page-type: web-api-instance-method
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
{{domxref("Location")}} interface returns a string containing the
whole URL. It is a read-only version of {{domxref("Location.href")}}.

## Syntax

```js
toString()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Let's imagine an <a id="myAnchor" href="/en-US/docs/Location/toString"> element is in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.toString(); // Returns: 'https://developer.mozilla.org/en-US/docs/Location/toString'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
