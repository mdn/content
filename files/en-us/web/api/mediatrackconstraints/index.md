---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
page-type: web-api-interface
spec-urls: https://w3c.github.io/mediacapture-main/#dom-mediatrackconstraints
---

{{APIRef("Media Capture and Streams")}}

The **`MediaTrackConstraints`** dictionary is used to describe a set of capabilities and the value or values each can take on. A constraints dictionary is passed into {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} to allow a script to establish a set of exact (required) values or ranges and/or preferred values or ranges of values for the track, and the most recently-requested set of custom constraints can be retrieved by calling {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

## Constraints

The following types are used to specify a constraint for a property. They allow you to specify one or more `exact` values from which one must be the parameter's value, or a set of `ideal` values which should be used if possible. You can also specify a single value (or an array of values) which the user agent will do its best to match once all more stringent constraints have been applied.

To learn more about how constraints work, see [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> **Note:** `min` and `exact` values are not permitted in constraints used in {{domxref("MediaDevices.getDisplayMedia()")}} calls — they produce a `TypeError` — but they are allowed in constraints used in {{domxref("MediaStreamTrack.applyConstraints()")}} calls.

### ConstrainBoolean

The `ConstrainBoolean` constraint type is used to specify a constraint for a property whose value is a Boolean value. Its value may either be set to a Boolean (`true` or `false`) or an object containing the following properties:

- `exact`
  - : A Boolean which must be the value of the property. If the property can't be set to this value, matching will fail.
- `ideal`
  - : A Boolean specifying an ideal value for the property. If possible, this value will be used, but if it's not possible, the user agent will use the closest possible match.

### ConstrainDouble

The `ConstrainDouble` constraint type is used to specify a constraint for a property whose value is a double-precision floating-point number. Its value may either be set to a number or an object containing the following properties:

- `max`
  - : A decimal number specifying the largest permissible value of the property it describes. If the value cannot remain equal to or less than this value, matching will fail.
- `min`
  - : A decimal number specifying the smallest permissible value of the property it describes. If the value cannot remain equal to or greater than this value, matching will fail.
- `exact`
  - : A decimal number specifying a specific, required, value the property must have to be considered acceptable.
- `ideal`
  - : A decimal number specifying an ideal value for the property. If possible, this value will be used, but if it's not possible, the user agent will use the closest possible match.

### ConstrainDOMString

The `ConstrainDOMString` constraint type is used to specify a constraint for a property whose value is a string. Its value may either be set to a string, an array of strings, or an object containing the following properties:

- `exact`
  - : A string or an array of strings, one of which must be the value of the property. If the property can't be set to one of the listed values, matching will fail.
- `ideal`
  - : A string or an array of strings, specifying ideal values for the property. If possible, one of the listed values will be used, but if it's not possible, the user agent will use the closest possible match.

### ConstrainULong

The `ConstrainULong` constraint type is used to specify a constraint for a property whose value is an integer. Its value may either be set to a number or an object containing the following properties:

- `max`
  - : An integer specifying the largest permissible value of the property it describes. If the value cannot remain equal to or less than this value, matching will fail.
- `min`
  - : An integer specifying the smallest permissible value of the property it describes. If the value cannot remain equal to or greater than this value, matching will fail.
- `exact`
  - : An integer specifying a specific, required, value the property must have to be considered acceptable.
- `ideal`
  - : An integer specifying an ideal value for the property. If possible, this value will be used, but if it's not possible, the user agent will use the closest possible match.

## Instance properties

Some combination—but not necessarily all—of the following properties will exist on the object. This may be because a given browser doesn't support the property, or because it doesn't apply. For example, because {{Glossary("RTP")}} doesn't provide some of these values during negotiation of a WebRTC connection, a track associated with a {{domxref("RTCPeerConnection")}} will not include certain values, such as {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} or {{domxref("MediaTrackConstraints.groupId", "groupId")}}.

### Instance properties of all media tracks

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a device ID or an array of device IDs which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a group ID or an array of group IDs which are acceptable and/or required.

### Instance properties of audio tracks

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : A [`ConstrainBoolean`](#constrainboolean) object which specifies whether automatic gain control is preferred and/or required.
- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the channel count or range of channel counts which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : A [`ConstrainBoolean`](#constrainboolean) object specifying whether or not echo cancellation is preferred and/or required.
- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the latency or range of latencies which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : A [`ConstrainBoolean`](#constrainboolean) which specifies whether noise suppression is preferred and/or required.
- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the sample rate or range of sample rates which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the sample size or range of sample sizes which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the volume or range of volumes which are acceptable and/or required.

### Instance properties of image tracks

- whiteBalanceMode
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- exposureMode
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- focusMode
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- pointsOfInterest
  - : The pixel coordinates on the sensor of one or more points of interest. This is either an object in the form { x:_value_, y:_value_ } or an array of such objects, where _value_ is a double-precision integer.
- exposureCompensation
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying f-stop adjustment by up to ±3.
- colorTemperature
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired color temperature in degrees kelvin.
- iso
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired iso setting.
- brightness
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired brightness setting.
- contrast
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the degree of difference between light and dark.
- saturation
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the degree of color intensity.
- sharpness
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the intensity of edges.
- focusDistance
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying distance to a focused object.
- zoom
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the desired focal length.
- torch
  - : A boolean value defining whether the fill light is continuously connected, meaning it stays on as long as the track is active.

### Instance properties of video tracks

- {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the video {{glossary("aspect ratio")}} or range of aspect ratios which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a facing or an array of facings which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.frameRate", "frameRate")}}
  - : A [`ConstrainDouble`](#constraindouble) specifying the frame rate or range of frame rates which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.height", "height")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the video height or range of heights which are acceptable and/or required.
- {{domxref("MediaTrackConstraints.width", "width")}}
  - : A [`ConstrainULong`](#constrainulong) specifying the video width or range of widths which are acceptable and/or required.
- resizeMode
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a mode or an array of modes the UA can use to derive the resolution of a video track. Allowed values are `none` and `crop-and-scale`. `none` means that the user agent uses the resolution provided by the camera, its driver or the OS. `crop-and-scale` means that the user agent can use cropping and downscaling on the camera output in order to satisfy other constraints that affect the resolution.

### Instance properties of shared screen tracks

These constraints apply to the `video` property of the object passed into {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} to obtain a stream for screen sharing.

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}

  - : A [`ConstrainDOMString`](#constraindomstring) which specifies the types of display surface that may be selected by the user. This may be a single one of the following strings, or a list of them to allow multiple source surfaces:

    - `browser`
      - : The stream contains the contents of a single browser tab selected by the user.
    - `monitor`
      - : The stream's video track contains the entire contents of one or more of the user's screens.
    - `window`
      - : The stream contains a single window selected by the user for sharing.

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}

  - : A [`ConstrainBoolean`](#constrainboolean) value which may contain a single Boolean value or a set of them, indicating whether or not to allow the user to choose source surfaces which do not directly correspond to display areas. These may include backing buffers for windows to allow capture of window contents that are hidden by other windows in front of them, or buffers containing larger documents that need to be scrolled through to see the entire contents in their windows.

- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} {{Experimental_Inline}}
  - : A [`ConstrainBoolean`](#constrainboolean) value describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.suppressLocalAudioPlayback","suppressLocalAudioPlayback")}} constrainable property. This property controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

## Specifications

{{Specifications}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
