---
title: BackgroundFetchRecord.responseReady
slug: Web/API/BackgroundFetchRecord/responseReady
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - responseReady
  - BackgroundFetchRecord
  - Experimental
browser-compat: api.BackgroundFetchRecord.responseReady
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`responseReady`** read-only property of the {{domxref("BackgroundFetchRecord")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("Response")}}.

## Value

A {{jsxref("Promise")}} that resolves with a {{domxref("Response")}}.

## Examples

In this example an individual `BackgroundFetchRecord` is returned using {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. The value of `responseReady` is returned and logged to the console.

```js
bgFetch.match('/ep-5.mp3').then(async (record) => {
  if (!record) {
    console.log('No record found');
    return;
  }

  const response = await record.responseReady;
  console.log(`Here's the response`, response);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
