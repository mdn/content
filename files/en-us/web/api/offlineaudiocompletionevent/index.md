---
title: OfflineAudioCompletionEvent
slug: Web/API/OfflineAudioCompletionEvent
tags:
  - API
  - Interface
  - OfflineAudioCompletionEvent
  - Reference
  - Web Audio API
browser-compat: api.OfflineAudioCompletionEvent
---
{{APIRef("Web Audio API")}}

The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) `OfflineAudioCompletionEvent` interface represents events that occur when the processing of an {{domxref("OfflineAudioContext")}} is terminated. The {{event("complete")}} event uses this interface.

> **Note:** This interface is marked as deprecated; it is still supported for legacy reasons, but it will soon be superseded when the promise version of {{domxref("OfflineAudioContext.startRendering")}} is supported in browsers, which will no longer need it.

## Constructor

- {{domxref("OfflineAudioCompletionEvent.OfflineAudioCompletionEvent")}}
  - : Creates a new `OfflineAudioCompletionEvent` object instance.

## Properties

_Also inherits properties from its parent, {{domxref("Event")}}_.

- {{domxref("OfflineAudioCompletionEvent.renderedBuffer")}} {{readonlyinline}}
  - : An {{domxref("AudioBuffer")}} containing the result of processing an {{domxref("OfflineAudioContext")}}.

## Methods

_Inherits methods from its parent, {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
