---
title: "SharedStorageWorkletGlobalScope: register() method"
short-title: register()
slug: Web/API/SharedStorageWorkletGlobalScope/register
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SharedStorageWorkletGlobalScope.register
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`register()`** method of the
{{domxref("SharedStorageWorkletGlobalScope")}} interface registers an {{domxref("SharedStorageOperation", "operation", "", "nocode")}} defined inside the current worklet module.

## Syntax

```js-nolint
register(name, operationCtor)
```

### Parameters

- `name`
  - : A string representing the name with which you want to register the operation. When the operation is invoked (say via {{domxref("WindowSharedStorage.run()")}} or {{domxref("WindowSharedStorage.selectURL()")}}), this name is used to identify the operation you want to run.
- `operationCtor`
  - : A string representing the class name of the operation to be registered. This is the class constructor that is invoked when the operation is run.

### Return value

None (`undefined`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - An operation has already been registered with the specified name.
    - The `operationCtor` is not a valid constructor.
    - The class does not contain a valid `run()` method.
    - The worklet module has not been added with {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}}.

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

See the [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) landing page for a walkthrough of this example and for links to other examples.

> [!NOTE]
> It is possible to define and register multiple operations in the same shared storage worklet module script with different names; see {{domxref("SharedStorageOperation")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
