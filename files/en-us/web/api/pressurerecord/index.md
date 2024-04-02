---
title: PressureRecord
slug: Web/API/PressureRecord
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PressureRecord
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers}}{{securecontext_header}}

The **`PressureRecord`** interface is part of the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) and describes the pressure trend of a source at a specific moment of transition.

## Instance properties

- {{domxref("PressureRecord.source")}} {{ReadOnlyInline}}
  - : A string indicating the origin source from which the record is coming.
- {{domxref("PressureRecord.state")}} {{ReadOnlyInline}}
  - : A string indicating the pressure state recorded.
- {{domxref("PressureRecord.time")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the timestamp of the record.

## Instance methods

- {{domxref("PressureRecord.toJSON()")}}
  - : Returns a JSON representation of the `PressureRecord` object.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
