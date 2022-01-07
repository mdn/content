---
title: SourceBufferList
slug: Web/API/SourceBufferList
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - MSE
  - Media Source Extensions
  - Reference
  - SourceBufferList
  - Video
browser-compat: api.SourceBufferList
---
{{draft}}{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`SourceBufferList`** interface represents a simple container list for multiple {{domxref("SourceBuffer")}} objects.

The source buffer list containing the `SourceBuffer`s appended to a particular `MediaSource` can be retrieved using the {{domxref("MediaSource.sourceBuffers")}} property.

The individual source buffers can be accessed using the [array operator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements) `[]`.

{{InheritanceDiagram}}

## Properties

- {{domxref("SourceBufferList.length")}} {{readonlyInline}}
  - : Returns the number of {{domxref("SourceBuffer")}} objects in the list.

## Methods

_Inherits methods from its parent interface, {{domxref("EventTarget")}}._

## Events

- {{domxref("SourceBufferList.addsourcebuffer_event", "addsourcebuffer")}}
  - : Fired when a {{domxref("SourceBuffer")}} is added to the list.
- {{domxref("SourceBufferList.removesourcebuffer_event", "removesourcebuffer")}}
  - : Fired when a {{domxref("SourceBuffer")}} is removed from the list.

## Examples

This example shows how to access the active source buffers of the {{domxref("MediaSource")}} connected to an already playing {{domxref("HTMLVideoElement")}}.

```js
// Video is an already playing video using a MediaSource srcObject
var video = document.querySelector('video');
var mediaSource = video.srcObject;
var sourceBufferList = mediaSource.activeSourceBuffers;
for (var i = 0; i < sourceBufferList.length; i++) {
  var sourceBuffer = sourceBufferList[i];
  // Do something with each SourceBuffer, such as call abort()
  sourceBuffer.abort();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
