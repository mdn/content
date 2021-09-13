---
title: OverconstrainedError
slug: Web/API/OverconstrainedError
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
{{securecontext_header}}{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The **`OverconstrainedError`** interface of the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API) indicates that the set of desired capabilities for the current {{domxref('MediaStreamTrack')}} cannot currently be met. When this event is thrown on a MediaStreamTrack, it is muted until either the current constraints can be established or until satisfiable constraints are applied.

## Constructor

- {{domxref("OverconstrainedError.OverconstrainedError()")}}
  - : Creates a new `OverconstrainedError` object.

## Properties

- {{domxref("OverconstrainedError.constraint")}} {{readonlyInline}}
  - : Returns the constraint that was supplied in the constructor, meaning the constraint that was not satisfied.
- {{domxref("DOMException.message")}} {{readonlyInline}}
  - : Returns the text supplied in the constructor.
- {{domxref("DOMException.name")}} {{readonlyInline}}
  - : Will always return `OverconstrainedError`.

## Methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
