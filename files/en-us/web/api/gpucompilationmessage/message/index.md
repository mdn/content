---
title: "GPUCompilationMessage: message property"
short-title: message
slug: Web/API/GPUCompilationMessage/message
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCompilationMessage.message
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`message`** read-only property of the
{{domxref("GPUCompilationMessage")}} interface is a string representing human-readable message text.

## Value

A string.

## Examples

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.message);
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
