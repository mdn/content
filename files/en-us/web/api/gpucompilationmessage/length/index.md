---
title: "GPUCompilationMessage: length property"
short-title: length
slug: Web/API/GPUCompilationMessage/length
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCompilationMessage.length
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`length`** read-only property of the
{{domxref("GPUCompilationMessage")}} interface is a number representing the length of the substring that the message corresponds to.

## Value

A number.

To be precise, `length` is the number of UTF-16 code units in the shader code substring that the message corresponds to. If the message corresponds to a single point rather than a substring, `length` will be 0.

## Examples

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.length);
  // ...
}
```

See the main [`GPUCompilationInfo` page](/en-US/docs/Web/API/GPUCompilationInfo#examples) for a more detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
