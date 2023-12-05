---
title: "WindowSharedStorage: worklet property"
short-title: worklet
slug: Web/API/WindowSharedStorage/worklet
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WindowSharedStorage.worklet
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`worklet`** read-only property of the
{{domxref("WindowSharedStorage")}} interface contains the {{domxref("SharedStorageWorklet")}} instance representing the shared storage worklet for the current origin.

`SharedStorageWorklet` contains the {{domxref("Worklet.addModule", "addModule()")}} method, which is used to add a module to the shared storage worklet.

## Value

A {{domxref("SharedStorageWorklet")}} object.

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

See the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) landing page for a walkthrough of this example and for links to other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
