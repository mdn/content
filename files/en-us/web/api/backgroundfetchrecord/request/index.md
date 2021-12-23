---
title: BackgroundFetchRecord.request
slug: Web/API/BackgroundFetchRecord/request
tags:
  - API
  - Property
  - Reference
  - request
  - BackgroundFetchRecord
browser-compat: api.BackgroundFetchRecord.request
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`request`** read-only property of the {{domxref("BackgroundFetchRecord")}} interface returns the details of the resource to be fetched.

## Syntax

```js
var request = BackgroundFetchRecord.request;
```

### Value

A {{domxref("Request")}}.

## Examples

In this example an individual `BackgroundFetchRecord` is returned using {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. The `request` is returned and logged to the console.

```js
bgFetch.match('/ep-5.mp3').then(async (record) => {
  if (!record) {
    console.log('No record found');
    return;
  }

  console.log(`Here's the request`, record.request);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
