---
title: "Document: location property"
short-title: location
slug: Web/API/Document/location
page-type: web-api-instance-property
browser-compat: api.Document.location
---

{{APIRef("DOM")}}

The read-only **`location`** property of the {{domxref("Document")}} interface returns a {{domxref("Location")}} object, which contains information about the URL of the document and provides methods for changing that URL and loading another URL.

To retrieve just the URL as a string, the read-only {{domxref("document.URL")}}
property can also be used.

## Value

A {{domxref("Location")}} object. If the current document is not in a browsing context, the returned value is
`null`.

Although the `location` property itself is read-only in the sense that you can't replace the `Location` object, you can still assign to the `location` property directly, which is equivalent to assigning to its {{domxref("Location/href", "href")}} property. You can also modify the `Location` object using the {{domxref("Location/assign", "assign()")}} and {{domxref("Location/replace", "replace()")}} methods.

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
