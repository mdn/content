---
title: SharedStorageOperation
slug: Web/API/SharedStorageOperation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorageOperation
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorageOperation`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the base class for all output gate operation types.

The output gate types are detailed below:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Defined by</th>
      <th>Invoked by</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>URL Selection</td>
      <td>Used to select a URL to display to the user based on shared storage data.</td>
      <td>{{domxref("SharedStorageSelectURLOperation")}}</td>
      <td>{{domxref("WindowSharedStorage.selectURL()", "selectURL()")}}</td>
    </tr>
    <tr>
      <td>Run</td>
      <td>A generic way to process some shared storage data. Used, for example, by the <a href="https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation">Private Aggregation API</a> to process shared storage data and generate aggregated reports. </td>
      <td>{{domxref("SharedStorageRunOperation")}}</td>
      <td>{{domxref("WindowSharedStorage.run()", "run()")}}</td>
    </tr>
  </tbody>
</table>

## Examples

### Defining individual operations

Many shared storage worklet module scripts only define and register a single operation; you can see examples on the {{domxref("SharedStorageSelectURLOperation")}} and {{domxref("SharedStorageRunOperation")}} pages.

### Defining multiple operations

In more advanced cases, it is possible to define and register multiple operations in the same shared storage worklet module script with different names. In the following worklet module script, we define a URL Selection operation called `SelectURLOperation` that selects a URL for A/B testing, and a Run operation called `ExperimentGroupReportingOperation`, which runs a histogram report based on the user's A/B testing group:

```js
// ab-testing-worklet.js

class SelectURLOperation {
  async run(urls, data) {
    // Read the user's group from shared storage
    const experimentGroup = await sharedStorage.get("ab-testing-group");

    // Log to console for the demo
    console.log(`urls = ${JSON.stringify(urls)}`);
    console.log(`data = ${JSON.stringify(data)}`);
    console.log(`ab-testing-group in shared storage is ${experimentGroup}`);

    // Return the index of the group
    return data.indexOf(experimentGroup);
  }
}

function getBucketForTestingGroup(testingGroup) {
  switch (testingGroup) {
    case "control":
      return 0;
    case "experiment-a":
      return 1;
    case "experiment-b":
      return 2;
  }
}

class ExperimentGroupReportingOperation {
  async run() {
    const experimentGroup = await sharedStorage.get("ab-testing-group");

    const bucket = BigInt(getBucketForTestingGroup(experimentGroup));
    privateAggregation.contributeToHistogram({ bucket, value: 1 });
  }
}

// Register the operations
register("ab-testing", SelectURLOperation);
register("experiment-group-reporting", ExperimentGroupReportingOperation);
```

In the main browsing context, these operations are invoked by {{domxref("WindowSharedStorage.selectURL()", "selectURL()")}} and {{domxref("WindowSharedStorage.run()", "run()")}}, respectively. The operations to invoke via these methods are selected using the names they were registered with, and they are also required to conform to the structures defined by the {{domxref("SharedStorageSelectURLOperation")}} and {{domxref("SharedStorageRunOperation")}} classes and their `run()` methods.

```js
// For demo purposes. The hostname is used to determine the usage of
// development localhost URL vs production URL
const contentProducerUrl = window.location.host;

// Map the experiment groups to the URLs
const EXPERIMENT_MAP = [
  {
    group: "control",
    url: `https://${contentProducerUrl}/ads/default-ad.html`,
  },
  {
    group: "experiment-a",
    url: `https://${contentProducerUrl}/ads/experiment-ad-a.html`,
  },
  {
    group: "experiment-b",
    url: `https://${contentProducerUrl}/ads/experiment-ad-b.html`,
  },
];

// Choose a random group for the initial experiment
function getRandomExperiment() {
  const randomIndex = Math.floor(Math.random() * EXPERIMENT_MAP.length);
  return EXPERIMENT_MAP[randomIndex].group;
}

async function injectAd() {
  // Load the worklet module
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Set the initial value in the storage to a random experiment group
  window.sharedStorage.set("ab-testing-group", getRandomExperiment(), {
    ignoreIfPresent: true,
  });

  const urls = EXPERIMENT_MAP.map(({ url }) => ({ url }));
  const groups = EXPERIMENT_MAP.map(({ group }) => group);

  // Resolve the selectURL call to a fenced frame config only when it exists on the page
  const resolveToConfig = typeof window.FencedFrameConfig !== "undefined";

  // Run the URL selection operation to select an ad based on the experiment group in shared storage
  const selectedUrl = await window.sharedStorage.selectURL("ab-testing", urls, {
    data: groups,
    resolveToConfig,
    keepAlive: true,
  });

  const adSlot = document.getElementById("ad-slot");

  if (resolveToConfig && selectedUrl instanceof FencedFrameConfig) {
    adSlot.config = selectedUrl;
  } else {
    adSlot.src = selectedUrl;
  }

  // Run the reporting operation
  await window.sharedStorage.run("experiment-group-reporting");
}

injectAd();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
