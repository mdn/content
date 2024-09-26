---
title: "GPUCompilationMessage: offset property"
short-title: offset
slug: Web/API/GPUCompilationMessage/offset
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCompilationMessage.offset
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`offset`** read-only property of the
{{domxref("GPUCompilationMessage")}} interface is a number representing the offset from the start of the shader code to the exact point, or the start of the relevant substring, that the message corresponds to.

## Value

A number.

To be precise, `offset` is the number of UTF-16 code units from the beginning of the shader code to the exact point or start of the relevant substring that the message corresponds to.

If the message does not correspond to a specific code position (perhaps it refers to the whole of the shader code), `offset` will be 0.

## Examples

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.offset);
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
