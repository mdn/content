---
title: SyncManager.getTags()
slug: Web/API/SyncManager/getTags
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - Reference
  - ServiceWorker
  - SyncManager
  - getTags
browser-compat: api.SyncManager.getTags
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`SyncManager.getTags`** method of the
{{domxref("SyncManager")}} interface returns a list of developer-defined identifiers for
`SyncManager` registrations.

## Syntax

```js
getTags()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an array of strings
containing developer-defined identifiers for `SyncManager` registrations.

## Browser compatibility

{{Compat}}
