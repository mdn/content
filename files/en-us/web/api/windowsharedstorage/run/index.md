---
title: "WindowSharedStorage: run() method"
short-title: run()
slug: Web/API/WindowSharedStorage/run
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WindowSharedStorage.run
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`run()`** method of the
{{domxref("WindowSharedStorage")}} interface executes a [run operation](/en-US/docs/Web/API/SharedStorageRunOperation) that is registered in a module added to the current origin's {{domxref("SharedStorageWorklet")}}.

> [!NOTE]
> The [Run output gate](/en-US/docs/Web/API/Shared_Storage_API#run) is intended as a generic way to process some shared storage data.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameters

- `name`
  - : A string representing the registered operation's name within the shared storage worklet module. It must match the name given to the operation when it is registered with {{domxref("SharedStorageWorkletGlobalScope.register()")}}.
- `options` {{optional_inline}}
  - : An options object that can contain the following properties:
    - `data` {{optional_inline}}
      - : An object representing any data required for executing the operation.
    - `keepAlive` {{optional_inline}}
      - : A boolean value. If set to `true`, the {{domxref("SharedStorageWorkletGlobalScope")}} of the associated worklet is kept alive, and the operation can be run again. Therefore, you need to set `keepAlive` to `true` for each operation that is not intended to be the last one. The default value, `false`, means that the {{domxref("SharedStorageWorkletGlobalScope")}} is terminated after the operation is run and cannot be run again.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - The worklet module has not yet been added with {{domxref("Worklet.addModule", "addModule()")}}.
    - Shared storage is disabled (for example via a browser setting).
    - The calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).

## Examples

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

See [Unique reach measurement](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach) for a full explanation of this example. See [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
