---
title: SharedStorageRunOperation
slug: Web/API/SharedStorageRunOperation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorageRunOperation
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorageRunOperation`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents a [Run output gate](/en-US/docs/Web/API/Shared_Storage_API#run) operation.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("SharedStorageRunOperation.run", "run()")}} {{Experimental_Inline}}
  - : Defines the structure to which the `run()` method defined inside a Run output gate operation should conform.

## Examples

In a worklet, a class called `ReachMeasurementOperation` is defined and registered using {{domxref("SharedStorageWorkletGlobalScope.register()")}} with a name of `reach-measurement`. `SharedStorageRunOperation` defines the structure this class needs to conform to, which in real terms means the parameters the `run()` method is required to have. Apart from that, the functionality of the class is flexible in terms of how it is defined.

```js
// reach-measurement-worklet.js
const SCALE_FACTOR = 65536;

function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class ReachMeasurementOperation {
  async run(data) {
    const { contentId } = data;

    // Read from Shared Storage
    const key = "has-reported-content";
    const hasReportedContent = (await this.sharedStorage.get(key)) === "true";

    // Do not report if a report has been sent already
    if (hasReportedContent) {
      return;
    }

    // Generate the aggregation key and the aggregatable value
    const bucket = convertContentIdToBucket(contentId);
    const value = 1 * SCALE_FACTOR;

    // Send an aggregatable report via the Private Aggregation API
    privateAggregation.sendHistogramReport({ bucket, value });

    // Set the report submission status flag
    await this.sharedStorage.set(key, true);
  }
}

// Register the operation
register("reach-measurement", ReachMeasurementOperation);
```

> **Note:** It is possible to define and register multiple operations in the same shared storage worklet module script with different names; see {{domxref("SharedStorageOperation")}} for an example.

In the main browsing context, the `reach-measurement` operation is invoked using the {{domxref("WindowSharedStorage.run()")}} method:

```js
async function measureUniqueReach() {
  // Load the Shared Storage worklet
  await window.sharedStorage.worklet.addModule("reach-measurement-worklet.js");

  // Run the reach measurement operation
  await window.sharedStorage.run("reach-measurement", {
    data: { contentId: "1234" },
  });
}

measureUniqueReach();
```

See [Unique reach measurement](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/unique-reach/) for more details of this example, and [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
