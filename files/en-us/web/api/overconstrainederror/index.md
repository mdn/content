---
title: OverconstrainedError
slug: Web/API/OverconstrainedError
page-type: web-api-interface
tags:
  - API
  - Audio
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - OverconstrainedError
  - Reference
  - Video
browser-compat: api.OverconstrainedError
---
{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

The **`OverconstrainedError`** interface of the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API) indicates that the set of desired capabilities for the current {{domxref('MediaStreamTrack')}} cannot currently be met. When this event is thrown on a MediaStreamTrack, it is muted until either the current constraints can be established or until satisfiable constraints are applied.

{{InheritanceDiagram}}

## Constructor

- {{domxref("OverconstrainedError.OverconstrainedError", "OverconstrainedError()")}}
  - : Creates a new `OverconstrainedError` object.

## Properties

- {{domxref("OverconstrainedError.constraint")}} {{ReadOnlyInline}}
  - : Returns the constraint that was supplied in the constructor, meaning the constraint that was not satisfied.
- {{domxref("DOMException.message")}} {{ReadOnlyInline}}
  - : Returns the text supplied in the constructor.
- {{domxref("DOMException.name")}} {{ReadOnlyInline}}
  - : Will always return `OverconstrainedError`.

## Methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
