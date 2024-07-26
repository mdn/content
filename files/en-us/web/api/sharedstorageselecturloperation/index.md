---
title: SharedStorageSelectURLOperation
slug: Web/API/SharedStorageSelectURLOperation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorageSelectURLOperation
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorageSelectURLOperation`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents a [URL Selection output gate](/en-US/docs/Web/API/Shared_Storage_API#url_selection) operation.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("SharedStorageSelectURLOperation.run", "run()")}} {{Experimental_Inline}}
  - : Defines the structure to which the `run()` method defined inside a URL Selection output gate operation should conform.

## Examples

In this example, a class called `SelectURLOperation` is defined in a worklet and is registered using {{domxref("SharedStorageWorkletGlobalScope.register()")}} with the name `ab-testing`. `SharedStorageSelectURLOperation` defines the structure to which this class needs to conform, essentially defining the parameters required for the `run()` method. Other than this requirement, the functionality of the class can be defined flexibly.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from Shared Storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the group number
    return experimentGroup;
  }
}

// Register the operation
register("ab-testing", SelectURLOperation);
```

> [!NOTE]
> It is possible to define and register multiple operations in the same shared storage worklet module script with different names; see {{domxref("SharedStorageOperation")}} for an example.

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

For more details about this example and links to other examples, see the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) landing page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
