---
title: "Window: origin property"
short-title: origin
slug: Web/API/Window/origin
page-type: web-api-instance-property
browser-compat: api.origin
---

{{APIRef("DOM")}}

The **`origin`** read-only property of the {{domxref("Window")}} interface returns the origin of the global scope, serialized as a string.

## Value

A string.

## Examples

Executed from inside window scope, the following snippet will log the document's global scope's origin to the console.

```js
console.log(window.origin); // On this page returns 'https://developer.mozilla.org'
```

If the origin is not a scheme/host/port tuple (say you are trying to run it locally, i.e. via `file://` URL), `origin` will return the string `"null"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WorkerGlobalScope.origin`](/en-US/docs/Web/API/WorkerGlobalScope/origin)
- {{Glossary("origin")}} glossary term
