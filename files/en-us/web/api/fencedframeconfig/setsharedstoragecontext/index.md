---
title: "FencedFrameConfig: setSharedStorageContext() method"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FencedFrameConfig.setSharedStorageContext
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

The **`setSharedStorageContext()`** method of the
{{domxref("FencedFrameConfig")}} interface passes in contextual data from the embedding document to the `<fencedframe>`'s [shared storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/).

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameters

- `context`
  - : A string representing the contextual data to pass in to shared storage. Once set, this will be stored in the [internal config](/en-US/docs/Web/API/FencedFrameConfig#internal_config) `storageContext` property.

### Return value

None (`Undefined`).

## Examples

### Passing contextual data via `setSharedStorageContext()`

You can use the [Private Aggregation API](https://developer.chrome.com/docs/privacy-sandbox/private-aggregation/) to create reports that combine event-level data inside fenced frames with contextual data from the embedding document. `setSharedStorageContext()` can be used to pass contextual data from the embedder to shared storage worklets initiated by the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/).

In the following example, we store data from both the embedding page and the fenced frame in [shared storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/).

In the embedding page, we will set a mock event ID as the shared storage context using `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Inside the fenced frame, we add the worklet module with {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}}, and then send the event-level data into the shared storage worklet using {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (this is unrelated to the contextual data from the embedding document):

```js
const frameData = {
  // Data available only inside the fenced frame
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

In the `reporting-worklet.js` worklet, we read the embedding document's event ID from `sharedStorage.context` and the frame's event-level data from the data object, then report them through Private Aggregation:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Data from the embedder
    const eventId = sharedStorage.context;

    // Data from the fenced frame
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload)
    });
  }
}

register('send-report', ReportingOperation);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
