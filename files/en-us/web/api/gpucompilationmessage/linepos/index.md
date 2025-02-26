---
title: "GPUCompilationMessage: linePos property"
short-title: linePos
slug: Web/API/GPUCompilationMessage/linePos
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCompilationMessage.linePos
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`linePos`** read-only property of the
{{domxref("GPUCompilationMessage")}} interface is a number representing the position in the code line that the message corresponds to. This could be an exact point, or the start of the relevant substring.

## Value

A number.

To be precise, `linePos` is the number of UTF-16 code units from the beginning of the line to the exact point or start of the relevant substring that the message corresponds to.

Note that:

- If the message corresponds to a substring, `linePos` refers to the first UTF-16 code unit of the substring.
- If the message does not correspond to a specific code position (perhaps it refers to the whole of the shader code), `linePos` will be 0.
- Values are one-based — a value of 1 refers to the first code unit of the line.

## Examples

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.linePos);
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
