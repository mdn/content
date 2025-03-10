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

In this example, a class called `ReachMeasurementOperation` is defined in a worklet and is registered using {{domxref("SharedStorageWorkletGlobalScope.register()")}} with the name `reach-measurement`. `SharedStorageRunOperation` defines the structure to which this class must conform, essentially defining the parameters required for the `run()` method. Other than this requirement, the functionality of the class can be defined flexibly.

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

> [!NOTE]
> It is possible to define and register multiple operations in the same shared storage worklet module script with different names. See {{domxref("SharedStorageOperation")}} for an example.

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

For more details about this example, see [Unique reach measurement](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach). See [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
