---
title: WindowSharedStorage
slug: Web/API/WindowSharedStorage
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WindowSharedStorage
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`WindowSharedStorage`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the shared storage for a particular origin within a standard browsing context.

`WindowSharedStorage` is accessed via {{domxref("Window.sharedStorage")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("WindowSharedStorage.worklet", "worklet")}} {{Experimental_Inline}}
  - : Contains the {{domxref("SharedStorageWorklet")}} instance representing the shared storage worklet for the current origin. `SharedStorageWorklet` includes the {{domxref("Worklet.addModule", "addModule()")}} method, which is used to add a module to the shared storage worklet.

## Instance methods

_`WindowSharedStorage` inherits properties from its parent interface, {{domxref("SharedStorage")}}._

- {{domxref("WindowSharedStorage.run", "run()")}} {{Experimental_Inline}}
  - : Executes a [Run output gate](/en-US/docs/Web/API/Shared_Storage_API#run) operation that has been registered in a module added to the {{domxref("SharedStorageWorklet")}} of the current origin.
- {{domxref("WindowSharedStorage.selectURL", "selectURL()")}} {{Experimental_Inline}}
  - : Executes a [URL Selection output gate](/en-US/docs/Web/API/Shared_Storage_API#url_selection) operation that has been registered in a module added to the {{domxref("SharedStorageWorklet")}} of the current origin.

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
