---
title: "BackgroundFetchRecord: request property"
short-title: request
slug: Web/API/BackgroundFetchRecord/request
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRecord.request
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`request`** read-only property of the {{domxref("BackgroundFetchRecord")}} interface returns the details of the resource to be fetched.

## Value

A {{domxref("Request")}}.

## Examples

In this example an individual `BackgroundFetchRecord` is returned using {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}}. The `request` is returned and logged to the console.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
