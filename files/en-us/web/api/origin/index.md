---
title: origin
slug: Web/API/origin
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - Web
  - Window
  - Worker
  - origin
browser-compat: api.origin
---
{{APIRef()}}{{SeeCompatTable}}

The global **`origin`** read-only property returns the origin of the global
scope, serialized as a string.

## Syntax

```js
var myOrigin = self.origin; // or just origin
```

### Value

A {{domxref("USVString")}}.

## Examples

Executed from inside a worker script, the following snippet will log the worker's
global scope's origin to the console each time it receives a message

```js
onmessage = function() {
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
