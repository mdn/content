---
title: VTTCue
slug: Web/API/VTTCue
page-type: web-api-interface
browser-compat: api.VTTCue
---

{{APIRef("WebVTT")}}

The `VTTCue` interface of the [WebVTT API](/en-US/docs/Web/API/WebVTT_API) represents a cue that can be added to the text track associated with a particular video (or other media).

A cue defines the text to display in a particular timeslice of a video or audio track, along with display properties such as its size, alignment, and position.

{{InheritanceDiagram}}

## Constructor

- {{domxref("VTTCue.VTTCue", "VTTCue()")}}
  - : Returns a newly created `VTTCue` object that covers the given time range and has the given text.

## Instance properties

_This interface also inherits properties from {{domxref("TextTrackCue")}}._

- {{domxref("VTTCue.region")}}
  - : A {{domxref("VTTRegion")}} object describing the video's sub-region that the cue will be drawn onto, or `null` if none is assigned.
- {{domxref("VTTCue.vertical")}}
  - : An enum representing the cue writing direction.
- {{domxref("VTTCue.snapToLines")}}
  - : `true` if the {{domxref("VTTCue.line")}} attribute indicates an integer number of lines or `false` if it represents a percentage of the video size.
    This is `true` by default.
- {{domxref("VTTCue.line")}}
  - : Represents the line positioning of the cue. This can be the string `auto` or a number whose interpretation depends on the value of {{domxref("VTTCue.snapToLines")}}.
- {{domxref("VTTCue.lineAlign")}}
  - : An enum representing the alignment of the {{domxref("VTTCue.line")}}.
- {{domxref("VTTCue.position")}}
  - : Represents the indentation of the cue within the line.
    This can be the string `auto`, a number representing the percentage of the {{domxref("VTTCue.region")}}, or the video size if {{domxref("VTTCue.region")}} is `null`.
- {{domxref("VTTCue.positionAlign")}}
  - : An enum representing the alignment of the cue.
    This is used to determine what the {{domxref("VTTCue.position")}} is anchored to.
    The default is `auto`.
- {{domxref("VTTCue.size")}}
  - : Represents the size of the cue, as a percentage of the video size.
- {{domxref("VTTCue.align")}}
  - : An enum representing the alignment of all the lines of text within the cue box.
- {{domxref("VTTCue.text")}}
  - : A string representing the contents of the cue.

## Instance methods

- {{domxref("VTTCue.getCueAsHTML", "getCueAsHTML()")}}
  - : Returns the cue text as a {{domxref("DocumentFragment")}}.

## Example

### HTML

The following example adds a new {{domxref("TextTrack")}} to the video, then adds cues using the {{domxref("TextTrack.addCue()")}} method, with a `VTTCue` object as the value.

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

### CSS

```css
video {
  width: 420px;
  height: 300px;
}
```

### JavaScript

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(new VTTCue(1.5, 2.9, "Tell me, is the lord of the universe in?"));
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(new VTTCue(4.3, 6, "Somebody must've stolen the crown jewels"));
console.log(track.cues);
```

### Result

{{EmbedLiveSample('Example','400','330')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
