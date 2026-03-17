---
title: SharedStorageWorkletGlobalScope
slug: Web/API/SharedStorageWorkletGlobalScope
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.SharedStorageWorkletGlobalScope
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

The **`SharedStorageWorkletGlobalScope`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the global scope of a {{domxref("SharedStorageWorklet")}} module.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("SharedStorageWorkletGlobalScope.sharedStorage", "sharedStorage")}} {{deprecated_inline}}
  - : Contains an instance of the {{domxref("WorkletSharedStorage")}} object, representing the shared storage for a particular origin as exposed in a worklet context.

## Instance methods

- {{domxref("SharedStorageWorkletGlobalScope.register", "register()")}} {{deprecated_inline}}
  - : Registers an {{domxref("SharedStorageOperation", "operation", "", "nocode")}} defined inside the current worklet module.

## Examples

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from shared storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the group number
    return experimentGroup;
  }
}

register("ab-testing", SelectURLOperation);
```

See the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) landing page for a walkthrough of this example and links to other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
