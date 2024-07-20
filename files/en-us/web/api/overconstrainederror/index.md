---
title: OverconstrainedError
slug: Web/API/OverconstrainedError
page-type: web-api-interface
browser-compat: api.OverconstrainedError
---

{{APIRef("Media Capture and Streams")}}

The **`OverconstrainedError`** interface of the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API) indicates that the set of desired capabilities for the current {{domxref('MediaStreamTrack')}} cannot currently be met. When this event is thrown on a MediaStreamTrack, it is muted until either the current constraints can be established or until satisfiable constraints are applied.

{{InheritanceDiagram}}

## Constructor

- {{domxref("OverconstrainedError.OverconstrainedError", "OverconstrainedError()")}}
  - : Creates a new `OverconstrainedError` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref('DOMException')}}._

- {{domxref("OverconstrainedError.constraint")}} {{ReadOnlyInline}}
  - : Returns the constraint that was supplied in the constructor, meaning the constraint that was not satisfied.

## Instance methods

_Also inherits methods from its parent interface, {{domxref('DOMException')}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
