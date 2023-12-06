---
title: BackgroundFetchRecord
slug: Web/API/BackgroundFetchRecord
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BackgroundFetchRecord
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`BackgroundFetchRecord`** interface of the {{domxref('Background Fetch API','','',' ')}} represents an individual request and response.

A `BackgroundFetchRecord` is created by the {{domxref("BackgroundFetchRegistration.match()","BackgroundFetchRegistration.matchAll()")}} method, therefore there is no constructor for this interface.

There will be one `BackgroundFetchRecord` for each resource requested by `fetch()`.

## Instance properties

- {{domxref("BackgroundFetchRecord.request","request")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("Request")}}.
- {{domxref("BackgroundFetchRecord.responseReady","responseReady")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a promise that resolves with a {{domxref("Response")}}.

## Examples

In this example an individual `BackgroundFetchRecord` is returned using {{domxref("BackgroundFetchRegistration.match()","BackgroundFetchRegistration.matchAll()")}}. The {{domxref("BackgroundFetchRecord.request")}} and {{domxref("BackgroundFetchRecord.responseReady")}} are returned and logged to the console.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
