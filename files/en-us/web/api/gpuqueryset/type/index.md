---
title: "GPUQuerySet: type property"
short-title: type
slug: Web/API/GPUQuerySet/type
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUQuerySet.type
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`type`** read-only property of the
{{domxref("GPUQuerySet")}} interface is an enumerated value specifying the type of queries managed by the `GPUQuerySet`.

## Value

An enumerated value. Possible values are:

- `"occlusion"`
  - : The `GPUQuerySet` manages occlusion queries.
- `"timestamp"` {{experimental_inline}}
  - : The `GPUQuerySet` manages timestamp queries.

> [!NOTE]
> The `timestamp-query` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to use timestamp queries.

## Examples

See the main [`GPUQuerySet`](/en-US/docs/Web/API/GPUQuerySet#examples) page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
