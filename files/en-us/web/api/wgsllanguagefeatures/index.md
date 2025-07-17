---
title: WGSLLanguageFeatures
slug: Web/API/WGSLLanguageFeatures
page-type: web-api-interface
browser-compat: api.WGSLLanguageFeatures
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`WGSLLanguageFeatures`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is a [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object that reports the [WGSL language extensions](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) supported by the WebGPU implementation.

The `WGSLLanguageFeatures` object is accessed via the {{domxref("GPU.wgslLanguageFeatures")}} property.

> [!NOTE]
> Not all WGSL language extensions are available to WebGPU in all browsers that support the API. We recommend you thoroughly test any extensions you choose to use.

{{InheritanceDiagram}}

## Available features

The following WGSL language extensions are defined at [WGSL language extensions](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) in the WGSL specification. Bear in mind that the exact set of features available will vary across implementations and physical devices, and may change over time.

- `packed_4x8_integer_dot_product`
  - : Allows **DP4a** (Dot Product of 4 Elements and Accumulate) GPU instructions to be used via your WGSL code. These efficiently perform 8-bit integer dot products to accelerate computation, saving memory and network bandwidth and improving performance compared with the equivalent `f32` versions. They are commonly used in machine learning models in inferencing, within AI frameworks.

    Specifically, when `packed_4x8_integer_dot_product` is available, WGSL code can use:
    - 32-bit integer scalars packing 4-component vectors of 8-bit integers to be used as inputs to dot product instructions (via the `dot4U8Packed()` and `dot4I8Packed()` built-in functions).
    - Packing and unpacking instructions with packed 4-component vectors of 8-bit integers (via built-in functions such as `pack4xI8()` and `pack4xI8Clamp()`).

- `pointer_composite_access`
  - : Enables WGSL shader code to access components of complex data types using the same dot (`.`) syntax whether you're working directly with the data or with a pointer to it.

    When `pointer_composite_access` is available:
    - If `foo` is a pointer: `foo.bar` is available as a more convenient way to write `(*foo).bar`. The asterisk (`*`) would normally be needed to turn the pointer into a "reference" that can be dereferenced, but now both pointers and references are almost interchangeable.
    - If `foo` is not a pointer: The dot (`.`) operator works exactly as you're used to for directly accessing members.
    - if `pa` is a pointer that stores the starting address of an array, then `pa[i]` gives you direct access to the memory location where the `i`th element of that array is stored.

    See [Syntax sugar for dereferencing composites in WGSL](https://developer.chrome.com/blog/new-in-webgpu-123#syntax_sugar_for_dereferencing_composites_in_wgsl) for further details and an example.

- `readonly_and_readwrite_storage_textures`
  - : When available, allows the `"read-only"` and `"read-write"` [`storageTexture.access`](/en-US/docs/Web/API/GPUDevice/createBindGroupLayout#access) values to be set when specifying storage texture bind group entry types in a bind group layout. These enable WGSL code to read storage textures, and read/write storage textures, respectively.

- `unrestricted_pointer_parameters`
  - : Loosens restrictions on pointers being passed to WGSL functions. When available, the following are allowed:
    - Parameter pointers to storage, uniform, and workgroup address spaces being passed to user-declared functions.
    - Pointers to structure members and array elements being passed to user-declared functions.

      See [Pointers As Function Parameters](https://google.github.io/tour-of-wgsl/types/pointers/passing_pointers/) for more details.

## Instance properties

The following property is available to all read-only [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects:

- {{jsxref("Set.prototype.size", "size")}}
  - : Returns the number of values in the set.

## Instance methods

The following methods are available to all read-only [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects:

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Returns a boolean asserting whether or not an element with the given value is present in the set.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Returns a new iterator object that yields **values** for each element in the set in insertion order.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : An alias for {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the set in insertion order.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Calls the provided callback function once for each value present in the set in insertion order.

## Examples

### Check whether an extension is available

```js
if (
  navigator.gpu.wgslLanguageFeatures.has(
    "readonly_and_readwrite_storage_textures",
  )
) {
  console.log("Read-only and read-write storage textures are available");
}
```

### Return set size and iterate through values

```js
const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// Return the size of the set
console.log(wgslFeatures.size);

// Iterate through all the set values using values()
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
