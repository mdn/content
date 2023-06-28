---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.MediaRecorderErrorEvent
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

The `MediaRecorderErrorEvent` interface represents errors returned by the [MediaStream Recording API.](/en-US/docs/Web/API/MediaStream_Recording_API) It is an {{domxref("Event")}} object that encapsulates a reference to a {{domxref("DOMException")}} describing the error that occurred.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent interface, {{domxref("Event")}}_.

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A {{domxref("DOMException")}} containing information about the error that occurred. Read only.

## Constructor

- {{domxref("MediaRecorderErrorEvent.MediaRecorderErrorEvent", "MediaStreamRecorderEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Creates and returns a new `MediaRecorderErrorEvent` event object with the given parameters.

## Instance methods

_Inherits methods from its parent interface, {{domxref("Event")}}_.

### Specifications

This feature is no longer part of any specification, and longer on track to become standard.

## Browser compatibility

{{Compat}}
