---
title: TextTrack.mode
slug: Web/API/TextTrack/mode
page-type: web-api-instance-property
tags:
  - Accessibility
  - NeedsExample
  - Property
  - TextTrack
  - Web
  - WebVTT
  - mode
browser-compat: api.TextTrack.mode
---
{{APIRef("WebVTT")}}

The {{domxref("TextTrack")}} interface's
**`mode`** property is a string specifying and controlling the
text track's mode: `disabled`, `hidden`, or
`showing`. You can read this value to determine the current mode,
and you can change this value to switch modes.

Safari additionally requires the **`default`**
boolean attribute to be set to true when implementing your own video player controls in
order for the subtitles cues to be shown.

### Value

A string which indicates the track's current mode. One of:

- `disabled`
  - : The text track is currently disabled. While the track's presence is exposed in the
    DOM, the user agent is otherwise ignoring it. No cues are active, no events are being
    fired, and the user agent won't attempt to obtain the track's cues. This is the
    default value, unless the text track has the {{htmlattrxref("default", "track")}}
    Boolean attribute is specified, in which case the default is `showing`.
- `hidden`
  - : The text track is currently active but the cues aren't being displayed. If the user
    agent hasn't tried to obtain the track's cues yet, it will do so soon (thereby
    populating the track's {{domxref("TextTrack.cues")}} property). The user agent is
    keeping a list of the active cues (in the track's {{domxref("TextTrack.activeCues",
    "activeCues")}} property) and events are being fired at the corresponding times, even
    though the text isn't being displayed.
- `showing`
  - : The text track is currently enabled and is visible. If the track's cues list hasn't
    been obtained yet, it will be soon. The {{domxref("TextTrack.activeCues",
    "activeCues")}} list is being maintained and events are firing at the appropriate
    times; the track's text is also being drawn appropriately based on the styling and the
    track's {{domxref("TextTrack.kind", "kind")}}. This is the default value if the text
    track's {{htmlattrxref("default", "track")}} Boolean attribute is specified.

## Usage notes

The default `mode` is `disabled`, unless the
{{htmlattrxref("default", "track")}} Boolean attribute is specified, in which case the
default `mode` is `showing`. When a text track is loaded in the
`disabled` state, the corresponding WebVTT file is not loaded until the state
changes to either `showing` or `hidden`. This way, the resource
fetch and memory usage are avoided unless the cues are actually needed.

However, that means that if you wish to perform any actions involving the track's cues
while handling, for example, the {{domxref("Window/load_event", "load")}} event—in order to process some aspect
of the cues upon page load—and the track mode was initially `disabled`,
you'll have to change the `mode` to either `hidden` or
`showing` in order to trigger loading of the cues.

When the mode is `showing`, text tracks are performed. The exact appearance
and manner of that performance varies depending on each text track's
{{domxref("TextTrack.kind", "kind")}}. In general:

- Tracks whose `kind` is `"subtitles"` or
  `"captions"` are rendered with the cues overlaid over the top of the video.
- Tracks whose `kind` is `"descriptions"` are presented in a
  non-visual form (for example, the text might be spoken to describe the action in the
  video).
- Tracks whose `kind` is `"chapters"` are used by the user agent
  or the Web site or Web app to construct and present an interface for navigating the
  named chapters, where each cue in the list represents a chapter in the media. The user
  can then navigate to the desired chapter, which begins at the cue's start position and
  ends at the cue's end position.

## Example

In this example, we configure the text track's cues so that every time a cue is
finished, the video automatically pauses playback. This is done by setting the
{{domxref("TextTrackCue.pauseonExit", "pauseOnExit")}} property on each cue to
`true`. However, to ensure that the track's cues are available, we first set
`mode` to `showing`.

```js
window.addEventListener("load", (event) => {
  let trackElem = document.querySelector("track");
  let track = trackElem.track;

  track.mode = "showing";

  for (let index=0; index < track.cues.length; index++) {
    let cue = track.cues[index];
    cue.pauseOnExit = true;
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVTT](/en-US/docs/Web/API/WebVTT_API)
- {{domxref("TextTrack")}}
- {{domxref("TextTrackList")}}
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
