---
title: BackgroundFetchRegistration.recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
tags:
  - API
  - Property
  - Reference
  - recordsAvailable
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.recordsAvailable
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`recordsAvailable`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns `true` if there are requests and responses to be accessed. If this returns false then {{domxref("BackgroundFetchRegistration.match()","match()")}} and {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}} can't be used.

## Syntax

```js
let recordsAvailable = BackgroundFetchRegistration.recordsAvailable;
```

### Value

A {{jsxref("boolean")}}.

## Examples

Logging {{domxref("BackgroundFetchRegistration.recordsAvailable")}} to the console returns `true` or `false` to indicate if there are records.

```js
console.log(bgFetch.recordsAvailable);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
