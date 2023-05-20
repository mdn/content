---
title: origin global property
short-title: origin
slug: Web/API/origin
page-type: web-api-global-property
browser-compat: api.origin
---

{{APIRef()}}

The global **`origin`** read-only property returns the origin of the global
scope, serialized as a string.

## Value

A string.

## Examples

Executed from inside a worker script, the following snippet will log the worker's
global scope's origin to the console each time it receives a message

```js
onmessage = () => {
  console.log(self.origin);
};
```

If the origin is not a scheme/host/port tuple (say you are trying to run it locally,
i.e. via `file://` URL), `origin` will return the string
`"null"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
