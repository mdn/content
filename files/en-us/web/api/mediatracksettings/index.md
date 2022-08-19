---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
page-type: web-api-interface
tags:
  - API
  - Audio
  - Constraints
  - Dictionary
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSettings
  - NeedsExample
  - Reference
  - Video
browser-compat: api.MediaTrackSettings
---
{{APIRef("Media Capture and Streams")}}

The **`MediaTrackSettings`** dictionary is used to return the current values configured for each of a {{domxref("MediaStreamTrack")}}'s settings. These values will adhere as closely as possible to any constraints previously described using a {{domxref("MediaTrackConstraints")}} object and set using {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}, and will adhere to the default constraints for any properties whose constraints haven't been changed, or whose customized constraints couldn't be matched.

To learn more about how constraints and settings work, see [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints).

## Properties

Some or all of the following will be included in the object, either because it's not supported by the browser or because it's not available due to context. For example, because {{Glossary("RTP")}} doesn't provide some of these values during negotiation of a WebRTC connection, a track associated with a {{domxref("RTCPeerConnection")}} will not include certain values, such as {{domxref("MediaTrackSettings.facingMode", "facingMode")}} or {{domxref("MediaTrackSettings.groupId", "groupId")}}.

### Properties of all media tracks

- {{domxref("MediaTrackSettings.deviceId", "deviceId")}}
  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} property. The device ID is a origin-unique string identifying the source of the track; this is usually a {{Glossary("GUID")}}. This value is specific to the source of the track's data and is not usable for setting constraints; it can, however, be used for initially selecting media when calling {{domxref("MediaDevices.getUserMedia()")}}.
- {{domxref("MediaTrackSettings.groupId", "groupId")}}
  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.groupId", "groupId")}} property. The group ID is a browsing session-unique string identifying the source group of the track. Two devices (as identified by the {{domxref("MediaTrackSettings.deviceId", "deviceId")}}) are considered part of the same group if they are from the same physical device. For instance, the audio input and output devices for the speaker and microphone built into a phone would share the same group ID, since they're part of the same physical device. The microphone on a headset would have a different ID, though. This value is specific to the source of the track's data and is not usable for setting constraints; it can, however, be used for initially selecting media when calling {{domxref("MediaDevices.getUserMedia()")}}.

### Properties of audio tracks

- {{domxref("MediaTrackSettings.autoGainControl", "autoGainControl")}}
  - : A Boolean which indicates the current value of the {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}} property, which is `true` if automatic gain control is enabled and is `false` otherwise.
- {{domxref("MediaTrackSettings.channelCount", "channelCount")}}
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.channelCount", "channelCount")}} property, specifying the number of audio channels present on the track (therefore indicating how many audio samples exist in each audio frame). This is 1 for mono, 2 for stereo, and so forth.
- {{domxref("MediaTrackSettings.echoCancellation", "echoCancellation")}}
  - : A Boolean indicating the current value of the {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}} property, specifying `true` if echo cancellation is enabled, otherwise `false`.
- {{domxref("MediaTrackSettings.latency", "latency")}}
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.latency", "latency")}} property, specifying the audio latency, in seconds. Latency is the amount of time which elapses between the start of processing the audio and the data being available to the next stop in the audio utilization process. This value is a target value; actual latency may vary to some extent for various reasons.
- {{domxref("MediaTrackSettings.noiseSuppression", "noiseSuppression")}}
  - : A Boolean which indicates the current value of the {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}} property, which is `true` if noise suppression is enabled and is `false` otherwise.
- {{domxref("MediaTrackSettings.sampleRate", "sampleRate")}}
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}} property, specifying the sample rate in samples per second of the audio data. Standard CD-quality audio, for example, has a sample rate of 41,000 samples per second.
- {{domxref("MediaTrackSettings.sampleSize", "sampleSize")}}
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}} property, specifying the linear size, in bits, of each audio sample. CD-quality audio, for example, is 16-bit, so this value would be 16 in that case.
- {{domxref("MediaTrackSettings.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.volume", "volume")}} property, specifying the volume level of the track. This value will be between 0.0 (silent) to 1.0 (maximum supported volume).

### Properties of video tracks

- {{domxref("MediaTrackSettings.aspectRatio", "aspectRatio")}}
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}} property, specified precisely to 10 decimal places. This is the width of the image in pixels divided by its height in pixels. Common values include 1.3333333333 (for the classic television 4:3 "standard" aspect ratio, also used on tablets such as Apple's iPad), 1.7777777778 (for the 16:9 high-definition widescreen aspect ratio), and 1.6 (for the 16:10 aspect ratio common among widescreen computers and tablets).
- {{domxref("MediaTrackSettings.facingMode", "facingMode")}}

  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} property, specifying the direction the camera is facing. The value will be one of:

    - `"user"`
      - : A camera facing the user (commonly known as a "selfie cam"), used for self-portraiture and video calling.
    - `"environment"`
      - : A camera facing away from the user (when the user is looking at the screen). This is typically the highest quality camera on the device, used for general photography.
    - `"left"`
      - : A camera facing toward the environment to the user's left.
    - `"right"`
      - : A camera facing toward the environment to the user's right.

- {{domxref("MediaTrackSettings.frameRate", "frameRate")}}
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.frameRate", "frameRate")}} property, specifying how many frames of video per second the track includes. If the value can't be determined for any reason, the value will match the vertical sync rate of the device the user agent is running on.
- {{domxref("MediaTrackSettings.height", "height")}}
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.height", "height")}} property, specifying the height of the track's video data in pixels.
- {{domxref("MediaTrackSettings.width", "width")}}
  - : A long integer value indicating the current value of the {{domxref("MediaTrackSettings.width", "width")}} property, specifying the width of the track's video data in pixels.
- {{domxref("MediaTrackSettings.resizeMode", "resizeMode")}}

  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.resizeMode", "resizeMode")}} property, specifying the mode used by the user agent to derive the resolution of the track. The value will be one of:

    - `"none"`
      - : The track has the resolution offered by the camera, its driver or the OS.
    - `"crop-and-scale"`
      - : The track's resolution might be the result of the user agent using cropping or downscaling from a higher camera resolution.

### Properties of shared screen tracks

Tracks containing video shared from a user's screen (regardless of whether the screen data comes from the entire screen or a portion of a screen, like a window or tab) are generally treated like video tracks, with the exception that they also support the following added settings:

- {{domxref("MediaTrackSettings.cursor", "cursor")}}

  - : A string which indicates whether or not the mouse cursor is being included in the generated stream and under what conditions. Possible values are:

    - `always`
      - : The mouse is always visible in the video content of the {domxref("MediaStream"), unless the mouse has moved outside the area of the content.
    - `motion`
      - : The mouse cursor is always included in the video if it's moving, and for a short time after it stops moving.
    - `never`
      - : The mouse cursor is never included in the shared video.

- {{domxref("MediaTrackSettings.displaySurface", "displaySurface")}}

  - : A string which specifies the type of source the track contains; one of:

    - `application`
      - : The stream contains all of the windows of the application chosen by the user rendered into the one video track.
    - `browser`
      - : The stream contains the contents of a single browser tab selected by the user.
    - `monitor`
      - : The stream's video track contains the entire contents of one or more of the user's screens.
    - `window`
      - : The stream contains a single window selected by the user for sharing.

- {{domxref("MediaTrackSettings.logicalSurface", "logicalSurface")}}
  - : A Boolean value which, if `true`, indicates that the video contained in the stream's video track contains a background rendering context, rather than a user-visible one. This is `false` if the video being captured is coming from a foreground (user-visible) source.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
