---
title: MediaTrackSupportedConstraints
slug: Web/API/MediaTrackSupportedConstraints
tags:
  - API
  - Capture
  - Constraints
  - Dictionary
  - Interface
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSupportedConstraints
  - Reference
  - Screen Capture
  - Screen Capture API
  - screen
browser-compat: api.MediaTrackSupportedConstraints
---
{{APIRef("Media Capture and Streams")}}

The **`MediaTrackSupportedConstraints`** dictionary establishes the list of constrainable properties recognized by the {{Glossary("user agent")}} or browser in its implementation of the {{domxref("MediaStreamTrack")}} object. An object conforming to `MediaTrackSupportedConstraints` is returned by {{domxref("MediaDevices.getSupportedConstraints()")}}.

Because of the way interface definitions in WebIDL work, if a constraint is requested but not supported, no error will occur. Instead, the specified constraints will be applied, with any unrecognized constraints stripped from the request.That can lead to confusing and hard to debug errors, so be sure to use `getSupportedConstraints()` to retrieve this information before attempting to establish constraints if you need to know the difference between silently ignoring a constraint and a constraint being accepted.

An actual constraint set is described using an object based on the {{domxref("MediaTrackConstraints")}} dictionary.

To learn more about how constraints work, see [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints).

## Properties

Some combination—but not necessarily all—of the following properties will exist on the object.

- {{domxref("MediaTrackSupportedConstraints.autoGainControl", "autoGainControl")}}
  - : A Boolean whose value is `true` if the [`autoGainControl`](/en-US/docs/Web/API/MediaTrackConstraints#autogaincontrol) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.width", "width")}}
  - : A Boolean value whose value is `true` if the [`width`](/en-US/docs/Web/API/MediaTrackConstraints#width) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.height", "height")}}
  - : A Boolean value whose value is `true` if the [`height`](/en-US/docs/Web/API/MediaTrackConstraints#height) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.aspectRatio", "aspectRatio")}}
  - : A Boolean value whose value is `true` if the [`aspectRatio`](/en-US/docs/Web/API/MediaTrackConstraints#aspectratio) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.frameRate", "frameRate")}}
  - : A Boolean value whose value is `true` if the [`frameRate`](/en-US/docs/Web/API/MediaTrackConstraints#framerate) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.facingMode", "facingMode")}}
  - : A Boolean value whose value is `true` if the [`facingMode`](/en-US/docs/Web/API/MediaTrackConstraints#facingmode) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.resizeMode", "resizeMode")}}
  - : A Boolean value whose value is `true` if the [`resizeMode`](/en-US/docs/Web/API/MediaTrackConstraints#resizemode) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.volume", "volume")}}
  - : A Boolean value whose value is `true` if the [`volume`](/en-US/docs/Web/API/MediaTrackConstraints#volume) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.sampleRate", "sampleRate")}}
  - : A Boolean value whose value is `true` if the [`sampleRate`](/en-US/docs/Web/API/MediaTrackConstraints#samplerate) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.sampleSize", "sampleSize")}}
  - : A Boolean value whose value is `true` if the [`sampleSize`](/en-US/docs/Web/API/MediaTrackConstraints#samplesize) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.echoCancellation", "echoCancellation")}}
  - : A Boolean value whose value is `true` if the [`echoCancellation`](/en-US/docs/Web/API/MediaTrackConstraints#echocancellation) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.latency", "latency")}}
  - : A Boolean value whose value is `true` if the [`latency`](/en-US/docs/Web/API/MediaTrackConstraints#latency) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.noiseSuppression", "noiseSuppression")}}
  - : A Boolean whose value is `true` if the [`noiseSuppression`](/en-US/docs/Web/API/MediaTrackConstraints#noisesuppression) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.channelCount", "channelCount")}}
  - : A Boolean value whose value is `true` if the [`channelCount`](/en-US/docs/Web/API/MediaTrackConstraints#channelcount) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.deviceId", "deviceId")}}
  - : A Boolean value whose value is `true` if the [`deviceId`](/en-US/docs/Web/API/MediaTrackConstraints#deviceid) constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.groupId", "groupId")}}
  - : A Boolean value whose value is `true` if the [`groupId`](/en-US/docs/Web/API/MediaTrackConstraints#groupid) constraint is supported in the current environment.

### Properties specific to shared screen tracks

For tracks containing video sources from the user's screen contents, the following additional properties are may be included in addition to those available for video tracks.

- {{domxref("MediaTrackSupportedConstraints.cursor", "cursor")}}
  - : A Boolean value which is `true` if the {{domxref("MediaTrackConstraints.cursor", "cursor")}} constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.displaySurface", "displaySurface")}}
  - : A Boolean value which is `true` if the {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}} constraint is supported in the current environment.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface", "logicalSurface")}}
  - : A Boolean value which is `true` if the {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}} constraint is supported in the current environment.

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
