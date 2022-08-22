---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
page-type: web-api-interface
tags:
  - AV
  - Audio
  - Error
  - Event
  - Interface
  - Media
  - MediaRecorderErrorEvent
  - MediaStream
  - MediaStream Recording
  - MediaStream Recording API
  - Recording Audio
  - Recording Media
  - Recording Video
  - Video
  - WebRTC
  - Deprecated
  - Non-standard
browser-compat: api.MediaRecorderErrorEvent
---
{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

The `MediaRecorderErrorEvent` interface represents errors returned by the [MediaStream Recording API.](/en-US/docs/Web/API/MediaStream_Recording_API) It is an {{domxref("Event")}} object that encapsulates a reference to a {{domxref("DOMException")}} describing the error that occurred.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent interface, {{domxref("Event")}}_.

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A {{domxref("DOMException")}} containing information about the error that occurred. Read only.

## Constructor

- {{domxref("MediaRecorderErrorEvent.MediaRecorderErrorEvent", "MediaStreamRecorderEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Creates and returns a new `MediaRecorderErrorEvent` event object with the given parameters.

## Methods

_Inherits methods from its parent interface, {{domxref("Event")}}_.

### Specifications

This feature is no longer part of any specification, and longer on track to become standard.

## Browser compatibility

{{Compat}}
