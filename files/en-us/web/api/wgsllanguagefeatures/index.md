---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WGSLLanguageFeatures
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`WGSLLanguageFeatures`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is a [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object that reports the [WGSL language extensions](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) supported by the WebGPU implementation.

The `WGSLLanguageFeatures` object is accessed via the {{domxref("GPU.wgslLanguageFeatures")}} property.

> **Note:** Not all WGSL language extensions are available to WebGPU in all browsers that support the API. We recommend you thoroughly test any extensions you choose to use.

{{InheritanceDiagram}}

## Available features

The available WGSL language extensions can vary across implementations and physical devices and may also change over time; we have therefore not listed them here. For a complete list, refer to [WGSL language extensions](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in the WGSL specification.

## Instance properties

The following property is available to all read-only [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects:

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Returns the number of values in the set.

## Instance methods

The following methods are available to all read-only [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects:

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Returns a boolean asserting whether or not an element with the given value is present in the set.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that yields **values** for each element in the set in insertion order.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : An alias for {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the set in insertion order.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Calls the provided callback function once for each value present in the set in insertion order.

## Examples

```js
if (!navigator.gpu) {
  throw Error("WebGPU not supported.");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// Return the size of the set
console.log(wgslFeatures.size);

// Iterate through all the set values using values()
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
