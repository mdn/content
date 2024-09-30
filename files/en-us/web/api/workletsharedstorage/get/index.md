---
title: "WorkletSharedStorage: get() method"
short-title: get()
slug: Web/API/WorkletSharedStorage/get
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WorkletSharedStorage.get
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`get()`** method of the
{{domxref("WorkletSharedStorage")}} interface retrieves a value from shared storage.

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : A string representing the key of the key-value pair you want to retrieve.

### Return value

A {{jsxref("Promise")}} that fulfills with either a string equal to the value of the retrieved key-value pair or `undefined` if the specified `key` is not found in the shared storage.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - The worklet module has not yet been added with {{domxref("Worklet.addModule", "addModule()")}}.
    - `key` exceeds the browser-defined maximum length.
    - The calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).

## Examples

### Measuring K+ frequency

The following example measures the K+ frequency of content views. Sometimes described as "effective frequency", K frequency refers to the minimum number of views before a user will recognize or recall certain content (often used in the context of ad views).

The main page script:

```js
// k-frequency-measurement.js

async function injectContent() {
  // Load the Shared Storage worklet
  await window.sharedStorage.worklet.addModule('k-freq-measurement-worklet.js');

  // Run the K-frequency measurement operation
  await window.sharedStorage.run('k-freq-measurement', { data: { kFreq: 3, contentId: 123 });
}

injectContent();
```

The worklet module is shown below:

```js
// k-frequency-measurement-worklet.js

// Scale factor for handling noise added to data
const SCALE_FACTOR = 65536;

/**
 * The bucket key must be a number, and in this case, it is simply the content
 * ID itself. For more complex bucket key construction, see other use cases in
 * this demo.
 */
function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class KFreqMeasurementOperation {
  async run(data) {
    const { kFreq, contentId } = data;

    // Read from Shared Storage
    const hasReportedContentKey = "has-reported-content";
    const impressionCountKey = "impression-count";
    const hasReportedContent =
      (await this.sharedStorage.get(hasReportedContentKey)) === "true";
    const impressionCount = parseInt(
      (await this.sharedStorage.get(impressionCountKey)) || 0,
    );

    // Do not report if a report has been sent already
    if (hasReportedContent) {
      return;
    }

    // Check impression count against frequency limit
    if (impressionCount < kFreq) {
      await this.sharedStorage.set(impressionCountKey, impressionCount + 1);
      return;
    }

    // Generate the aggregation key and the aggregatable value
    const bucket = convertContentIdToBucket(contentId);
    const value = 1 * SCALE_FACTOR;

    // Send an aggregatable report via the Private Aggregation API
    privateAggregation.sendHistogramReport({ bucket, value });

    // Set the report submission status flag
    await this.sharedStorage.set(hasReportedContentKey, "true");
  }
}

// Register the operation
register("k-freq-measurement", KFreqMeasurementOperation);
```

For more details about this example, see [K+ frequency measurement](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach). See the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) landing page for links to other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
- [Noise and scaling](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/fundamentals#noise_and_scaling) on developers.google.com (2023)
