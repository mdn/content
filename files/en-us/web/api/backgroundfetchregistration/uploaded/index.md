---
title: BackgroundFetchRegistration.uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
tags:
  - API
  - Property
  - Reference
  - uploaded
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.uploaded
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`uploaded`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the size in bytes successfully sent, initially `0`.

## Syntax

```js
let uploaded = BackgroundFetchRegistration.uploaded;
```

### Value

A {{jsxref("number")}}.

## Examples

Logging {{domxref("BackgroundFetchRegistration.uploaded")}} to the console returns the number of bytes uploaded.

```js
console.log(bgFetch.uploaded);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
