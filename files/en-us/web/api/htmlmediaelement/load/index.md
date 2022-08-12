---
title: HTMLMediaElement.load()
slug: Web/API/HTMLMediaElement/load
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - Element
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - Video
  - load
  - reset
browser-compat: api.HTMLMediaElement.load
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLMediaElement")}} method
**`load()`** resets the media element to its initial state and
begins the process of selecting a media source and loading the media in preparation
for playback to begin at the beginning.

The amount of media data that is
prefetched is determined by the value of the element's {{htmlattrxref("preload",
  "video")}} attribute.

This method is generally only useful when you've made dynamic changes to the set of
sources available for the media element, either by changing the element's
{{htmlattrxref("src", "video")}} attribute or by adding or removing
{{HTMLElement("source")}} elements nested within the media element itself.
`load()` will reset the element and rescan the available sources, thereby
causing the changes to take effect.

## Syntax

```js
load()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Usage notes

Calling `load()` aborts all ongoing operations involving this media element,
then begins the process of selecting and loading an appropriate media resource given the
options specified in the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element
and its {{htmlattrxref("src", "video")}} attribute or child {{HTMLElement("source")}}
element(s). This is described in more detail in
{{SectionOnPage("/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content",
  "Supporting multiple formats")}}.

The process of aborting any ongoing activities will cause any outstanding
{{jsxref("Promise")}}s returned by {{domxref("HTMLMediaElement.play", "play()")}} being
fulfilled or rejected as appropriate based on their status before the loading of new
media can begin. Pending play promises are aborted with an `"AbortError"`
{{domxref("DOMException")}}.

Appropriate events will be sent to the media element itself as the load process
proceeds:

- If the element is already in the process of loading media, that load process is
  aborted and the **{{domxref("HTMLMediaElement/abort_event", "abort")}}** event is sent.
- If the element has already been initialized with media, the
  **{{domxref("HTMLMediaElement/emptied_event", "emptied")}}** event is sent.
- If resetting the playback position to the beginning of the media actually changes
  the playback position (that is, it was not already at the beginning), a
  **{{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}}** event is sent.
- Once media has been selected and loading is ready to begin, the
  **{{domxref("HTMLMediaElement/loadstart_event", "loadstart")}}** event is delivered.
- From this point onward, events are sent just like any media load.

## Examples

This example finds a {{HTMLElement("video")}} element in the document and resets it by
calling `load()`.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
