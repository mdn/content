---
title: "location: toString() method"
short-title: toString()
slug: Web/API/Location/toString
page-type: web-api-instance-method
browser-compat: api.Location.toString
---

{{ApiRef("Location")}}

The **`toString()`** {{Glossary("stringifier")}} method of the
{{domxref("Location")}} interface returns a string containing the
whole URL. It is a read-only version of {{domxref("Location.href")}}.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the object's URL.

## Examples

```js
// Let's imagine this code is executed on https://example.com/path?search#hash
const result = window.location.toString(); // Returns: 'https://example.com/path?search#hash'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
