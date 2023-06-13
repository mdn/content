---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUSupportedFeatures
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUSupportedFeatures`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is a [`Set`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) that describes additional functionality supported by a {{domxref("GPUAdapter")}}.

The `GPUSupportedFeatures` object for the current adapter is accessed via the {{domxref("GPUAdapter.features")}} property.

You should note that not all features will be available to WebGPU in all browsers that support it, even if the features are supported by the underlying hardware. This could be due to constraints in the underlying system, browser, or adapter. For example:

- The underlying system might not be able to guarantee exposure of a feature in a way that is compatible with a certain browser.
- The browser vendor might not have found a secure way to implement support for that feature, or might just not have gotten round to it yet.

If you are hoping to take advantage of a specific additional feature in a WebGPU app, thorough testing is advised.

{{InheritanceDiagram}}

## Available features

We have not listed the exact set of additional features available to be used in WebGPU, as it will vary between implementations and physical devices, and will change over time. For a list, refer to the [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index) in the specification.

## Instance properties

The following properties are available to all read-only [`Set`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) (the links below are to the {{jsxref("Set")}} global object reference page).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Returns the number of values in the set.

## Instance methods

The following methods are available to all read-only [`Set`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) (the below links are to the {{jsxref("Set")}} global object reference page).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Returns a boolean asserting whether an element is present with the given value in the set or not.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that yields the **values** for each element in the set in insertion order.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : An alias for {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the set, in insertion order.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Calls a provided callback function once for each value present in the set, in insertion order.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const adapterFeatures = adapter.features;

  // Return the size of the set
  console.log(adapterFeatures.size);

  // Check whether a feature is supported by the adapter
  console.log(adapterFeatures.has("texture-compression-astc"));

  // Iterate through all the set values using values()
  const valueIterator = adapterFeatures.values();
  for (const value of valueIterator) {
    console.log(value);
  }

  // Iterate through all the set values using keys()
  const keyIterator = adapterFeatures.keys();
  for (const value of keyIterator) {
    console.log(value);
  }

  // Iterate through all the set values using entries()
  const entryIterator = adapterFeatures.entries();
  for (const entry of entryIterator) {
    console.log(entry[0]);
  }

  // Iterate through all the set values using forEach()
  adapterFeatures.forEach((value) => {
    console.log(value);
  });

  //...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
