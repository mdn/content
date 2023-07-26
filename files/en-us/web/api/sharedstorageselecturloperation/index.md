---
title: SharedStorageSelectURLOperation
slug: Web/API/SharedStorageSelectURLOperation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorageSelectURLOperation
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorageSelectURLOperation`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents a Content Selection output gate operation.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("SharedStorageSelectURLOperation.run", "run()")}} {{Experimental_Inline}}
  - : Defines the structure that the `run()` method defined inside a Content Selection output gate operation should conform to.

## Examples

In a worklet, a class called `SelectURLOperation` is defined and registered using {{domxref("SharedStorageWorkletGlobalScope.register()")}} with a name of `ab-testing`. `SharedStorageSelectURLOperation` defines the structure this class needs to conform to, which in real terms means the parameters and return value the `run()` method is required to have. Apart from that, the functionality of the class is flexible in terms of how it is defined.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from Shared Storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the corresponding URL (first or second item in the array)
    return urls.indexOf(experimentGroup);
  }
}

// Register the operation
register("ab-testing", SelectURLOperation);
```

In the main browsing context, the `ab-testing` operation is invoked using the {{domxref("WindowSharedStorage.selectURL()")}} method:

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Register the Shared Storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in Shared Storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Run the URL selection operation
  const fencedFrameConfig = await window.sharedStorage.selectURL(
    "ab-testing",
    [
      { url: `https://your-server.example/content/default-content.html` },
      { url: `https://your-server.example/content/experiment-content-a.html` },
    ],
    {
      resolveToConfig: true,
    },
  );

  // Render the chosen URL into a fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

See the [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API) landing page for more information about this example, and links to other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
