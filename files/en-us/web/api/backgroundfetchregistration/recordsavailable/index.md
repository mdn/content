---
title: BackgroundFetchRegistration.recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - recordsAvailable
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.recordsAvailable
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`recordsAvailable`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns `true` if there are requests and responses to be accessed. If this returns false then {{domxref("BackgroundFetchRegistration.match()","match()")}} and {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}} can't be used.

## Value

A {{jsxref("boolean")}}.

## Examples

Logging this property to the console returns `true` or `false` to indicate if there are records.

```js
console.log(bgFetch.recordsAvailable);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
