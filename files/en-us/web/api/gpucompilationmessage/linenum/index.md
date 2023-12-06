---
title: "GPUCompilationMessage: lineNum property"
short-title: lineNum
slug: Web/API/GPUCompilationMessage/lineNum
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCompilationMessage.lineNum
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`lineNum`** read-only property of the
{{domxref("GPUCompilationMessage")}} interface is a number representing the line number in the shader code that the message corresponds to.

## Value

A number.

Note that:

- If the message corresponds to a substring, `lineNum` refers to the line number that the substring begins on.
- If the message does not correspond to a specific line of code (perhaps it refers to the whole of the shader code), `lineNum` will be 0.
- Values are one-based — a value of 1 refers to the first line of code.
- Lines are delimited by line breaks. In WGSL, a [specific list of characters](https://gpuweb.github.io/gpuweb/wgsl/#line-break) is defined as line breaks.

## Examples

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.lineNum);
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
