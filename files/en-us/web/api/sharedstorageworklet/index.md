---
title: SharedStorageWorklet
slug: Web/API/SharedStorageWorklet
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorageWorklet
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorageWorklet`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the shared storage worklet for the current origin.

`SharedStorageWorklet` does not have its own properties or methods. Rather, it inherits the {{domxref("Worklet.addModule", "addModule()")}} method from the {{domxref("Worklet")}} interface. This method is used for adding a module.

Unlike a regular {{domxref("Worklet")}}:

- If the calling site has not included the Shared Storage API in a [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment), calls to `sharedStorageWorklet.addModule()` will be rejected.
- `SharedStorageWorklet` allows only a single module to be added, for privacy reasons. Even with a successful enrollment, repeated calls to `addModule()` on the same shared storage worklet will be rejected.

`SharedStorageWorklet` is accessed via {{domxref("WindowSharedStorage.worklet")}}.

{{InheritanceDiagram}}

## Examples

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
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

See the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) landing page for a walkthrough of this example and links to other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
