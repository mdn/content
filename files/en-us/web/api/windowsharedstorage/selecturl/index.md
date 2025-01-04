---
title: "WindowSharedStorage: selectURL() method"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WindowSharedStorage.selectURL
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`selectURL()`** method of the
{{domxref("WindowSharedStorage")}} interface executes a [URL Selection operation](/en-US/docs/Web/API/SharedStorageSelectURLOperation) that is registered in a module added to the current origin's {{domxref("SharedStorageWorklet")}}.

> [!NOTE]
> The [URL Selection output gate](/en-US/docs/Web/API/Shared_Storage_API#url_selection) is used to select a URL from a provided list to display to the user, based on shared storage data.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameters

- `name`
  - : A string representing the registered operation's name within the shared storage worklet module. It must match the name given to the operation when it is registered with {{domxref("SharedStorageWorkletGlobalScope.register()")}}.
- `urls`
  - : An array of objects representing the URLs to be chosen between by the URL Selection operation. Each object contains two properties:
    - `url`
      - : A string representing the URL.
    - `reportingMetadata` {{optional_inline}}
      - : An object containing properties where names are event types and values are URLs pointing to reporting destinations, for example `"click" : "my-reports/report1.html"`. The URLs act as destinations for reports submitted with a destination of type `"shared-storage-select-url"`, typically submitted via a {{domxref("Fence.reportEvent()")}} or {{domxref("Fence.setReportEventDataForAutomaticBeacons()")}} method call.
- `options` {{optional_inline}}
  - : An options object, which can contain the following properties:
    - `data` {{optional_inline}}
      - : An object representing any data required for executing the operation.
    - `keepAlive` {{optional_inline}}
      - : A boolean value. If set to `true`, the {{domxref("SharedStorageWorkletGlobalScope")}} of the associated worklet is kept alive, and the operation can be run again. Therefore, you need to set `keepAlive` to `true` for each operation that is not intended to be the last one. The default value, `false`, means that the {{domxref("SharedStorageWorkletGlobalScope")}} is terminated after the operation is run and cannot be run again.
    - `resolveToConfig` {{optional_inline}}
      - : A boolean value. If set to `true`, the fulfillment value of the {{jsxref("Promise")}} returned by `run()` will be a {{domxref("FencedFrameConfig")}} object that can be used to load content into a {{htmlelement("fencedframe")}} via its `config` attribute. The default value, `false`, means that the fulfillment value will be a URL that can be used to load content into an {{htmlelement("iframe")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("FencedFrameConfig")}} object or a string representing a URL, depending on the value of the `resolveToConfig` option.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - The worklet module has not yet been added with {{domxref("Worklet.addModule", "addModule()")}}.
    - `urls` is empty or exceeds the maximum allowed length (which is browser-specific).
    - An object's `url` property contains an invalid URL.
    - Shared storage is disabled (for example, via a browser setting).
    - The calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).

## Examples

### Basic A/B testing

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
