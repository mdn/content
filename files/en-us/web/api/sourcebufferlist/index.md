---
title: SourceBufferList
slug: Web/API/SourceBufferList
page-type: web-api-interface
browser-compat: api.SourceBufferList
---

{{APIRef("Media Source Extensions")}}

The **`SourceBufferList`** interface represents a simple container list for multiple {{domxref("SourceBuffer")}} objects.

The source buffer list containing the `SourceBuffer`s appended to a particular `MediaSource` can be retrieved using the {{domxref("MediaSource.sourceBuffers")}} property.

The individual source buffers can be accessed using the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) `[]`.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("SourceBufferList.length")}} {{ReadOnlyInline}}
  - : Returns the number of {{domxref("SourceBuffer")}} objects in the list.

## Instance methods

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
const video = document.querySelector("video");
const mediaSource = video.srcObject;
const sourceBufferList = mediaSource.activeSourceBuffers;
for (const sourceBuffer of sourceBufferList) {
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
