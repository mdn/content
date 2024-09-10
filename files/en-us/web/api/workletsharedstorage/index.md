---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WorkletSharedStorage
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`WorkletSharedStorage`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the shared storage for a particular origin within a worklet context.

`WorkletSharedStorage` is accessed via {{domxref("SharedStorageWorkletGlobalScope.sharedStorage")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("WorkletSharedStorage.context", "context")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Contains contextual data passed into the shared storage worklet from the associated browsing context via the {{domxref("FencedFrameConfig.setSharedStorageContext()")}} method.

## Instance methods

_`WorkletSharedStorage` inherits properties from its parent interface, {{domxref("SharedStorage")}}._

- {{domxref("WorkletSharedStorage.get", "get()")}} {{Experimental_Inline}}
  - : Retrieves a value from the shared storage.
- {{domxref("WorkletSharedStorage.length", "length()")}} {{Experimental_Inline}}
  - : Returns the number of entries currently stored in the shared storage for the current origin.
- {{domxref("WorkletSharedStorage.remainingBudget", "remainingBudget()")}} {{Experimental_Inline}}
  - : Returns the remaining navigation budget for the current origin.

`WorkletSharedStorage` also includes the following methods because it has an [async iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) defined on it:

- {{domxref("WorkletSharedStorage.entries", "entries()")}} {{Experimental_Inline}}
  - : Returns a new async iterator for the key-value pairs of a `WorkletSharedStorage` object instance's enumerable properties.
- {{domxref("WorkletSharedStorage.keys", "keys()")}} {{Experimental_Inline}}
  - : Returns a new async iterator containing the keys for each item in a `WorkletSharedStorage` object instance.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Experimental_Inline}}
  - : Returns the {{domxref("WorkletSharedStorage.entries", "entries()")}} function by default.

## Examples

### Passing contextual data via `setSharedStorageContext()`

You can use the [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) to create reports that combine event-level data inside fenced frames with contextual data from the embedding document. `setSharedStorageContext()` can be used to pass contextual data from the embedder to shared storage worklets initiated by the [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience).

In this example, we store data from both the embedding page and the fenced frame using [shared storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

On the embedding page, we set a mock event ID as the shared storage context using `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Within the fenced frame, after adding the worklet module with {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}}, we send the event-level data into the shared storage worklet module using {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (this is unrelated to the contextual data from the embedding document):

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

In the `reporting-worklet.js` worklet, we read the embedding document's event ID from `sharedStorage.context` and the frame's event-level data from the data object. We then report them through Private Aggregation:

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

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
