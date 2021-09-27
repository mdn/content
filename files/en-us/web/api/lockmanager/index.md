---
title: LockManager
slug: Web/API/LockManager
tags:
  - API
  - Experimental
  - Interface
  - LockManager
  - Reference
  - Web Locks API
  - lock
browser-compat: api.LockManager
---
{{SeeCompatTable}}{{APIRef("Web Locks")}}

The **`LockManager`** interface of the [Web Locks API](/en-US/docs/Web/API/Web_Locks_API) provides methods for requesting a new {{domxref('Lock')}} object and querying for an existing `Lock` object. To get an instance of `LockManager`, call {{domxref('navigator.locks')}}.

## Methods

- {{domxref('LockManager.request()')}}
  - : Requests a {{domxref('Lock')}} object with parameters specifying its name and characteristics.
- {{domxref('LockManager.query()')}}
  - : Returns a {{jsxref('Promise')}} that resolves with a {{domxref('LockManagerSnapshot')}} which contains information about held and pending locks.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
