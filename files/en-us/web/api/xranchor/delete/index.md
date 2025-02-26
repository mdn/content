---
title: "XRAnchor: delete() method"
short-title: delete()
slug: Web/API/XRAnchor/delete
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRAnchor.delete
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`delete()`** method of the {{domxref("XRAnchor")}} interface removes an anchor. This can be useful when an application is no longer interested in receiving updates to an anchor.

## Syntax

```js-nolint
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
