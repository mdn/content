---
title: WebVTT API
slug: Web/API/WebVTT_API
page-type: web-api-overview
browser-compat:
  - api.VTTCue
  - api.TextTrack
  - api.VTTRegion
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks** (**WebVTT**) are text tracks that can be used to provide specific text "cues" that is time-aligned with other media, such as video or audio tracks.
They are primarily used for displaying video subtitles or captions that overlay with video content, but they can also be used to provide chapter information for easier navigation, audio descriptions, and generally any other form of metadata that needs to be time-aligned with audio or video content.

## Concepts and usage

A text track is a container for time-aligned text data of a particular kind, and in a particular language.
A video or audio media element may define tracks of different kinds and in different languages, allowing an appropriate track (or tracks) to be selected based on user preferences and browser user interface.

The different kinds of text data that can be specified are listed below (not all browsers will necessarily support all kinds of text tracks):

- `subtitles` provide a textual translation of spoken dialog.
  This is the default type of text track, and if used, the source language must be specified.
- `captions` provide a transcription of spoken text, and may include information about other audio such as music or background noise.
  They are intended for hearing impaired users.
- `chapters` provide high level navigation information, allowing users to more easily switch to relevant content.
- `descriptions` provide a textual description of the video content.
  They are intended for users who are sight impaired, or for when the video can't be seen clearly.
- `metadata` is used for any other kinds of time-aligned information.

The individual time-aligned units of text data within a track are referred to as "cues".
Each cue has a start time, end time and textual payload.
It may also have "cue settings", which affect its display region, position, alignment, and/or size.
Lastly, a cue may have a label, which can be used to select it for CSS styling.

A text track and cues can be defined in a file using the [WebVTT File Format](/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format), and then associated with a particular {{HTMLElement("video")}} element using the {{HTMLElement("track")}} element.

Alternatively you can add a {{domxref("TextTrack")}} to a media element in JavaScript using [`HTMLMediaElement.addTextTrack()`](/en-US/docs/Web/API/HTMLMediaElement#htmlmediaelement.addtexttrack), and then add individual {{domxref("VTTCue")}} objects to the track with {{domxref("TextTrack.addCue()")}}.

The {{cssxref("::cue")}} [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) can be used both in HTML and in a WebVTT file to style the cues for a particular element, for a particular tag within a cue, for a VTT class, or for a cue with a particular label.
The {{cssxref("::cue-region")}} is intended for styling cues in a particular region, but is not yet broadly supported.

Generally most important WebVTT functionality can be achieved using either the file format or Web API.

## Interfaces

- {{domxref("VTTCue")}}
  - : Represents a cue, the text displayed in a particular timeslice of the text track associated with a media element.
- {{domxref("VTTRegion")}}
  - : Represents a portion of a video element onto which a {{domxref("VTTCue")}} can be rendered.
- {{domxref("TextTrack")}}
  - : Represents the text track, which holds the list of cues that will be displayed over the associated video element at various points while it plays.
- {{domxref("TextTrackCue")}}
  - : An abstract base class for various cue types, such as {{domxref("VTTCue")}}.
- {{domxref("TextTrackCueList")}}
  - : An array-like object that represents a dynamically updating list of {{domxref("TextTrackCue")}} objects.
    An instance of this type is obtained from {{domxref('TextTrack.cues')}} in order to get all the cues in the {{domxref("TextTrack")}} object.
- {{domxref("TextTrackList")}}
  - : Represents a list of the text tracks defined for the associated video element, with each track represented by a separate {{domxref("TextTrack")}} instance in the list.

### Related interfaces

- {{domxref("TrackEvent")}}
  - : Part of the HTML DOM API, this is the interface for the `addtrack` and `removetrack` events that are fired when a track is added or removed from {{domxref("TextTrackList")}} (or more generally, when a track is added/removed from an HTML media element).

### Related CSS extensions

These [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) are used to style cues in media with VTT tracks.
https://w3c.github.io/webvtt/#css-extensions-introduction

- {{CSSxRef("::cue")}}
  - : Matches cues within a selected element in media with VTT tracks.
- {{CSSxRef("::cue-region")}}
  - : Matches cue regions within a selected element in media with VTT tracks.

## Examples

### Using the WebVTT API to add captions

#### HTML

The following example adds a new {{domxref("TextTrack")}} to the video, then adds cues using the {{domxref("TextTrack.addCue()")}} method, with a `VTTCue` object as the value.

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

#### CSS

```css
video {
  width: 420px;
  height: 300px;
}
```

#### JavaScript

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

#### Result

{{EmbedLiveSample('Using the WebVTT API to add captions','400','330')}}

### Displaying a VTT content defined in a file

First let's define a "captions.vtt" file that specifies the same cues as the [Using the WebVTT API to add captions](#using_the_webvtt_api_to_add_captions) example above:

```plain
WEBVTT

00:00.000 --> 00:00.900
Hildy!

00:01.000 --> 00:01.400
How are you?

00:01.500 --> 00:02.900
Tell me, is the lord of the universe in?

00:03.000 --> 00:04.200
Yes, he's in - in a bad humor

00:04.300 --> 00:06.000
Somebody must've stolen the crown jewels
```

We can then add this to a {{HTMLElement("video")}} element using the {{HTMLElement("track")}} element.
The following HTML would result in the same text track as the previous example:

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
</video>
```

We can add multiple {{HTMLElement("track")}} elements in order to specify different kinds of tracks in different languages, using the `kind` and `srclang` attributes (note that if `kind` is specified, the `srclang` _must_ be set too).
The `default` attribute may be added to just one `<track>`, and this will be played if user preferences don't specify a particular language or kind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" srclang="en" />
  <track kind="subtitles" src="subtitles.vtt" srclang="en" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
  <track kind="chapters" src="chapters_de.vtt" srclang="de" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

### Styling WebVTT in HTML or a stylesheet

<!-- Perhaps replace this with something like example in http://localhost:5042/en-US/docs/Web/CSS/::cue -->

You can style WebVTT cues by matching elements using the {{cssxref("::cue")}} pseudo-element.

This CSS styles all video elements to use a gray linear gradient as their backgrounds, with a foreground color of `"papayawhip"`. In addition, text boldfaced using the {{HTMLElement("b")}} element is colored `"peachpuff"`.

```css
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

It is also possible to define styles in the [WebVTT File Format](/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (see link for an example.)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The CSS [`::cue` and `::cue()`](/en-US/docs/Web/CSS/::cue) pseudo-elements
