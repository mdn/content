---
title: XRAnchor.delete()
slug: Web/API/XRAnchor/delete
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - VR
  - XR
  - WebXR
  - Experimental
browser-compat: api.XRAnchor.delete
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`delete()`** method of the {{domxref("XRAnchor")}} interface removes an anchor. This can be useful when an application is no longer interested in receiving updates to an anchor.

## Syntax

```js
delete()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Removing all anchors

```js
let anchorsCollection = new Set();

// Upon creating anchors, add them to the Set
// anchorsCollection.add(anchor);

for (const anchor of anchorsCollection) {
  anchor.delete();
}

anchorsCollection.clear();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
