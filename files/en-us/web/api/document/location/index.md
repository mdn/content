---
title: "Document: location property"
short-title: location
slug: Web/API/Document/location
page-type: web-api-instance-property
browser-compat: api.Document.location
---

{{APIRef("DOM")}}

The **`Document.location`** read-only property returns a
{{domxref("Location")}} object, which contains information about the URL of the document
and provides methods for changing that URL and loading another URL.

Though `Document.location` is a _read-only_ `Location`
object, you can also assign a string to it. This means that you can
work with document.location as if it were a string in most cases:
`document.location = 'http://www.example.com'` is a synonym of
`document.location.href = 'http://www.example.com'`. If you assign another
string to it, browser will load the website you assigned.

To retrieve just the URL as a string, the read-only {{domxref("document.URL")}}
property can also be used.

If the current document is not in a browsing context, the returned value is
`null`.

## Value

A {{domxref("Location")}} object.

## Examples

```js
console.log(document.location);
// Prints a Location object to the console
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface of the returned value, {{domxref("Location")}}
- A similar information, but attached to the {{Glossary("browsing context")}},
  {{domxref("Window.location")}}
