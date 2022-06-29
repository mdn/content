---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - HTMLTrackElement
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLTrackElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLTrackElement`** interface represents an {{Glossary("HTML")}} {{HTMLElement("track")}} element within the {{Glossary("DOM")}}. This element can be used as a child of either {{HTMLElement("audio")}} or {{HTMLElement("video")}} to specify a text track containing information such as closed captions or subtitles.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTrackElement.kind")}}
  - : A string that reflects the {{htmlattrxref("kind", "track")}} HTML attribute, indicating how the text track is meant to be used. Possible values are: `subtitles`, `captions`, `descriptions`, `chapters`, or `metadata`.
- {{domxref("HTMLTrackElement.src")}}
  - : A string that reflects the {{htmlattrxref("src", "track")}} HTML attribute, indicating the address of the text track data.
- {{domxref("HTMLTrackElement.srclang")}}
  - : A string that reflects the {{htmlattrxref("srclang", "track")}} HTML attribute, indicating the language of the text track data.
- {{domxref("HTMLTrackElement.label")}}
  - : A string that reflects the {{htmlattrxref("label", "track")}} HTML attribute, indicating a user-readable title for the track.
- {{domxref("HTMLTrackElement.default")}}
  - : A boolean value reflecting the {{htmlattrxref("default", "track")}} attribute, indicating that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
- {{domxref("HTMLTrackElement.readyState")}} {{ReadOnlyInline}}

  - : Returns an `unsigned short` that show the readiness state of the track:

    | Constant  | Value | Description                                                                                                                                                                              |
    | --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0     | Indicates that the text track's cues have not been obtained.                                                                                                                             |
    | `LOADING` | 1     | Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track by the parser.                           |
    | `LOADED`  | 2     | Indicates that the text track has been loaded with no fatal errors.                                                                                                                      |
    | `ERROR`   | 3     | Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way. Some or all of the cues are likely missing and will not be obtained. |

- {{domxref("HTMLTrackElement.track")}} {{ReadOnlyInline}}
  - : Returns {{Domxref("TextTrack")}} is the track element's text track data.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Events

_The following events may be fired on a {{HTMLElement("track")}} element, in addition to any that may be fired at its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
  - : Sent when the underlying {{domxref("TextTrack")}} has changed the currently-presented cues. This event is always sent to the `TextTrack` but is _also_ sent to the `HTMLTrackElement` if one is associated with the track.
    You may also use the `oncuechange` event handler to establish a handler for this event.

## Usage notes

### Loading of the track's text resource

The WebVTT or TTML data describing the actual cues for the text track isn't loaded if the track's {{domxref("TextTrack.mode", "mode")}} is initially in the `disabled` state. If you need to be able to perform any processing on the track after the `<track>` is set up, you should instead ensure that the track's `mode` is either `hidden` (if you don't want it to start out being presented to the user) or `showing` (to initially display the track). You can then change the mode as desired later.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("track") }}.
