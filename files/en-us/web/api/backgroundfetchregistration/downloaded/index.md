---
title: BackgroundFetchRegistration.downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
tags:
  - API
  - Property
  - Reference
  - downloaded
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.downloaded
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`downloaded`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the size in bytes that has been downloaded, initially `0`.

## Syntax

```js
let downloaded = BackgroundFetchRegistration.downloaded;
```

### Value

A {{jsxref("number")}}.

## Examples

Logging {{domxref("BackgroundFetchRegistration.downloaded")}} to the console returns the number of bytes downloaded.

```js
console.log(bgFetch.downloaded);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
