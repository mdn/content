---
title: "GPUShaderModule: getCompilationInfo() method"
short-title: getCompilationInfo()
slug: Web/API/GPUShaderModule/getCompilationInfo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUShaderModule.getCompilationInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`getCompilationInfo()`** method of the
{{domxref("GPUShaderModule")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUCompilationInfo")}} object containing messages generated during the `GPUShaderModule`'s compilation.

## Syntax

```js-nolint
getCompilationInfo()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUCompilationInfo")}} object.

{{domxref("GPUCompilationInfo")}} contains a `messages` property, which is an array of {{domxref("GPUCompilationMessage")}} objects, each one containing the details of an individual compilation message.

## Examples

In the example below, we have deliberately left a parenthesis out of a function declaration in our shader code:

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;
```

When we compile the shader module, we use `getCompilationInfo()` to grab some information about the resulting error:

```js
async function init() {
  // ...

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];

  console.log(firstMessage.lineNum); // 9
  console.log(firstMessage.message); // "expected ')' for function declaration"
  console.log(firstMessage.type); // "error"

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
