---
title: "GPUCompilationMessage: type property"
short-title: type
slug: Web/API/GPUCompilationMessage/type
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUCompilationMessage.type
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`type`** read-only property of the
{{domxref("GPUCompilationMessage")}} interface is an enumerated value representing the type of the message. Each type represents a different severity level.

## Value

A enumerated value. Possible values are:

- `"error"`
  - : A shader-creation error, which stops successful compilation.
- `"info"`
  - : A purely informative message, which is low severity.
- `"warning"`
  - : A warning about an issue that will not stop successful compilation, but merits attention by the developer. An example is usage of deprecated functions or syntax.

## Examples

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.type);
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
