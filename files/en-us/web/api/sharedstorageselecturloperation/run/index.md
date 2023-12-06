---
title: "SharedStorageSelectURLOperation: run() method"
short-title: run()
slug: Web/API/SharedStorageSelectURLOperation/run
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SharedStorageSelectURLOperation.run
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`run()`** method of the {{domxref("SharedStorageSelectURLOperation")}} interface defines the structure to which the `run()` method defined inside a URL Selection output gate operation should conform.

## Syntax

```js-nolint
run(urls, data)
```

### Parameters

- `urls`
  - : An array of objects representing the URLs to be chosen by the URL Selection operation. Each object contains two properties:
    - `url`
      - : A string representing the URL.
    - `reportingMetadata` {{optional_inline}}
      - : An object containing properties where names are event types and values are URLs pointing to reporting destinations, for example `"click" : "my-reports/report1.html"`. The URLs act as destinations for reports submitted with a destination of type `"shared-storage-select-url"`, typically submitted via a {{domxref("Fence.reportEvent()")}} or {{domxref("Fence.setReportEventDataForAutomaticBeacons()")}} method call.
- `data`
  - : An object representing any data required for executing the operation.

### Return value

A {{jsxref("Promise")}} that fulfills with a number defining the array index of the URL selected by the operation.

## Examples

See the main {{domxref("SharedStorageSelectURLOperation")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
