---
title: "SharedStorageWorkletGlobalScope: sharedStorage property"
short-title: sharedStorage
slug: Web/API/SharedStorageWorkletGlobalScope/sharedStorage
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SharedStorageWorkletGlobalScope.sharedStorage
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`context`** read-only property of the
{{domxref("SharedStorageWorkletGlobalScope")}} interface contains a {{domxref("WorkletSharedStorage")}} object instance, which represents the shared storage for a particular origin as exposed to a worklet context.

## Value

A {{domxref("WorkletSharedStorage")}} object instance.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
