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

`SharedStorageWorklet` has no properties or methods directly defined on it; it inherits the {{domxref("Worklet.addModule", "addModule()")}} method from the {{domxref("Worklet")}} interface, which is used to add a module to it. Unlike a regular {{domxref("Worklet")}}.

Note the following:

- If the calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment), calls to `addModule()` will reject.
- `SharedStorageWorklet` can only have a single module added to it, for privacy reasons. Even with a successful enrollment, repeated calls to `addModule()` on the same shared storage worklet will reject.

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

See the [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API) landing page for a walkthrough of this example, and links to other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
