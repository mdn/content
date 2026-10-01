---
title: "MediaStreamTrack: getSettings() method"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.getSettings
---

{{APIRef("Media Capture and Streams")}}

The **`getSettings()`** method of the {{domxref("MediaStreamTrack")}} interface returns a [`MediaTrackSettings`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#return_value) object containing the current values of each of the constrainable properties for the current `MediaStreamTrack`.

See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js-nolint
getSettings()
```

### Parameters

None.

### Return value

A [`MediaTrackSettings`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#return_value) object describing the current configuration of the track's constrainable properties.

> [!NOTE]
> The returned object identifies the current values of every constrainable property, including those which are platform defaults rather than having been expressly set by the site's code. To instead fetch the most-recently established constraints for the track's properties, as specified by the site's code, use {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

The **`MediaTrackSettings`** dictionary is used to return the current values configured for each of a {{domxref("MediaStreamTrack")}}'s settings. These values will adhere as closely as possible to any constraints previously described using a {{domxref("MediaTrackConstraints")}} object and set using {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}, and will adhere to the default constraints for any properties whose constraints haven't been changed, or whose customized constraints couldn't be matched.

To learn more about how constraints and settings work, see [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

Some or all of the following will be included in the object, either because it's not supported by the browser or because it's not available due to context. For example, because {{Glossary("RTP")}} doesn't provide some of these values during negotiation of a WebRTC connection, a track associated with a {{domxref("RTCPeerConnection")}} will not include certain values, such as `facingMode` or `groupId`.

#### Properties of all media tracks

- `deviceId`
  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} property. The device ID is an origin-unique string identifying the source of the track; this is usually a [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). This value is specific to the source of the track's data and is not usable for setting constraints; it can, however, be used for initially selecting media when calling {{domxref("MediaDevices.getUserMedia()")}}.

    a string which uniquely identifies the source for the corresponding {{domxref("MediaStreamTrack")}} for the origin corresponding to the browsing session. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.deviceId")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`deviceId`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#deviceid) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} will never include this property.

    A string whose value is an origin-unique identifier for the track's source. This ID is valid across multiple browsing sessions for the same origin and is guaranteed to be different for all other origins, so you can safely use it to request the same source be used for multiple sessions, for example.

    The actual value of the string, however, is determined by the source of the track, and there is no guarantee what form it will take, although the specification does recommend it be a GUID.

    Since there is a one-to-one pairing of ID with each source, all tracks with the same source will share the same ID for any given origin, so {{domxref("MediaStreamTrack.getCapabilities()")}} will always return exactly one value for `deviceId`. That makes the device ID not useful for any changes to constraints when calling {{domxref("MediaStreamTrack.applyConstraints()")}}.

    > [!NOTE]
    > An exception to the rule that device IDs are the same across browsing sessions: private browsing mode will use a different ID, and will change it each browsing session.
- `groupId`
  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.groupId", "groupId")}} property. The group ID is a browsing session-unique string identifying the source group of the track. Two devices (as identified by the `deviceId`) are considered part of the same group if they are from the same physical device. For instance, the audio input and output devices for the speaker and microphone built into a phone would share the same group ID, since they're part of the same physical device. The microphone on a headset would have a different ID, though. This value is specific to the source of the track's data and is not usable for setting constraints; it can, however, be used for initially selecting media when calling {{domxref("MediaDevices.getUserMedia()")}}.

    a browsing-session unique string which identifies the group of devices which includes the source for the {{domxref("MediaStreamTrack")}}. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.groupId")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`groupId`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#groupid) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} will never include this property.

    A string whose value is a browsing-session unique identifier for a group of devices which includes the source of the track's contents. Two devices share the same group ID if they belong to the same physical hardware device. For example, a headset has two devices on it: a microphone which can serve as a source for audio tracks and a speaker which can serve as an output for audio.

    The group ID is not usable across multiple browsing sessions. However, it can be used to ensure that audio input and output are both being performed on the same headset, for example, or to ensure that the built-in camera and microphone on a phone are being used for video conferencing purposes.

    The actual value of the string, however, is determined by the source of the track, and there is no guarantee what form it will take, although the specification does recommend it be a GUID.

    Since this property isn't stable across browsing sessions, its usefulness when calling {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} is generally limited to ensuring that tasks performed during the same browsing session use devices from the same group (or that they don't use devices from the same group). There is no situation in which the groupId is useful when calling `applyConstraints()`, since the value can't be changed.

#### Properties of audio tracks

- `autoGainControl`
  - : A Boolean which indicates the current value of the {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}} property, which is `true` if automatic gain control is enabled and is `false` otherwise.

    a Boolean value whose value indicates whether or not automatic gain control (AGC) is enabled on an audio track. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.autoGainControl")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    Automatic gain control is a feature in which a sound source automatically manages changes in the volume of its source media to maintain a steady overall volume level. This feature is typically used on microphones, although it can be provided by other input sources as well.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`autoGainControl`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#autogaincontrol) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A Boolean value which is `true` if the track has automatic gain control enabled or `false` if AGC is disabled.
- `channelCount`
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.channelCount", "channelCount")}} property, specifying the number of audio channels present on the track (therefore indicating how many audio samples exist in each audio frame). This is 1 for mono, 2 for stereo, and so forth.

    an integer indicating how many audio channels the {{domxref("MediaStreamTrack")}} is currently configured to have. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.channelCount")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`channelCount`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#channelcount) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    An integer value indicating the number of audio channels on the track. A value of 1 indicates monaural sound, 2 means stereo, and so forth.
- `echoCancellation`
  - : A Boolean indicating the current value of the {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}} property, specifying `true` if echo cancellation is enabled, otherwise `false`.

    a Boolean value whose value indicates whether or not echo cancellation is enabled on an audio track. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.echoCancellation")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    Echo cancellation is a feature which attempts to prevent echo effects on a two-way audio connection by attempting to reduce or eliminate crosstalk between the user's output device and their input device. For example, it might apply a filter that negates the sound being produced on the speakers from being included in the input track generated from the microphone.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`echoCancellation`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#echocancellation) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} will never include this property.

    A Boolean value which is `true` if the track has echo cancellation functionality enabled or `false` if echo cancellation is disabled.
- `latency`
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.latency", "latency")}} property, specifying the audio latency, in seconds. Latency is the amount of time which elapses between the start of processing the audio and the data being available to the next stop in the audio utilization process. This value is a target value; actual latency may vary to some extent for various reasons.

    a double-precision floating-point number indicating the estimated latency (specified in seconds) of the {{domxref("MediaStreamTrack")}} as currently configured. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.latency")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    This is, of course, an approximation, since latency can vary for many reasons including CPU, transmission, and storage overhead.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`latency`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#latency) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} will never include this property.

    A double-precision floating-point number indicating the estimated latency, in seconds, of the audio track as currently configured.
- `noiseSuppression`
  - : A Boolean indicating the current value of the {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}} property: `true` if noise suppression is enabled, and is `false` otherwise.

    a Boolean value whose value indicates whether or not noise suppression technology is enabled on an audio track. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.noiseSuppression")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    Noise suppression automatically filters the audio to remove background noise, hum caused by equipment, and the like from the sound before delivering it to your code. This feature is typically used on microphones, although it is technically possible it could be provided by other input sources as well.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`noiseSuppression`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#noisesuppression) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A Boolean value which is `true` if the input track has noise suppression enabled or `false` if AGC is disabled.
- `restrictOwnAudio`
  - : A Boolean indicating the current value of the {{domxref("MediaTrackConstraints.restrictOwnAudio", "restrictOwnAudio")}} property: `true` if the browser will attempt to filter out system audio originating from the capturing tab during screen capture, and `false` otherwise.

    controls whether system audio originating from the capturing tab is filtered out of screen capture, allowing for cleaner screen recordings in some cases.

    For example, if the capturing web page itself is playing embedded audio or video, that audio would be included in the capture. Since this could lead to an undesirable echo or interfere with the intended audio sources from other tabs or applications, removing it from the capture is desirable.

    A boolean value, where `true` enables the capturing tab's system audio restriction and `false` disables it.

    If the value is `true`, the user agent will attempt to remove any audio originating from the captured audio produced by the tab that called {{domxref("MediaDevices.getDisplayMedia()")}} to initiate screen capture. If removal of audio via processing fails, the user agent may exclude all audio originating from the capturing tab.

    > [!NOTE]
    > If the captured display surface doesn't include system audio, this setting will have no effect.

- `sampleRate`
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}} property, specifying the sample rate in samples per second of the audio data. Standard CD-quality audio, for example, has a sample rate of 41,000 samples per second.

    an integer indicating how many audio samples per second the {{domxref("MediaStreamTrack")}} is currently configured for. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.sampleRate")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`sampleRate`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#samplerate) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    An integer value indicating how many samples each second of audio data includes. Common values include 44,100 (standard CD audio), 48,000 (standard digital audio), 96,000 (commonly used in audio mastering and post-production), and 192,000 (used for high-resolution audio in professional recording and mastering sessions). However, lower values are often used to reduce bandwidth requirements; 8,000 samples per second is adequate for comprehensible albeit imperfect human speech, and both 11,025 FPS and 22,050 FPS are often used for low-bandwidth, reduced quality sound and music.
- `sampleSize`
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}} property, specifying the linear size, in bits, of each audio sample. CD-quality audio, for example, is 16-bit, so this value would be 16 in that case.

    an integer indicating the linear sample size (in bits per sample) the {{domxref("MediaStreamTrack")}} is currently configured for. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.sampleSize")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`sampleSize`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#samplesize) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    An integer value indicating how many bits each audio sample is represented by. The most commonly used sample size for many years now is 16 bits per sample, which was used for CD audio among others. Other common sample sizes are 8 (for reduced bandwidth requirements) and 24 (for high-resolution professional audio).

    Each audio channel on the track requires sampleSize bits. That means that a given sample actually uses (`sampleSize` / 8) \* {{domxref("MediaTrackSettings.channelCount","channelCount")}} bytes of data. For example, 16-bit stereo audio requires (16/8)\*2 or 4 bytes per sample.
- `suppressLocalAudioPlayback`
  - : Controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

    controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

    For example, in cases where you broadcast a video call to an external AV system in a conference room, you will want the audio to play out of the AV system, and not the local speakers. This way, the audio will be louder and clearer, and also in sync with the conference video.

    The value of `suppressLocalAudioPlayback` is a boolean — `true` enables local audio playback suppression, and `false` disables it.
- `volume` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.volume", "volume")}} property, specifying the volume level of the track. This value will be between 0.0 (silent) to 1.0 (maximum supported volume).

    a double-precision floating-point number indicating the volume of the {{domxref("MediaStreamTrack")}} as currently configured, as a value from 0.0 (silence) to 1.0 (maximum supported volume for the device). This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.volume")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`volume`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#volume) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A double-precision floating-point number indicating the volume, from 0.0 to 1.0, of the audio track as currently configured.

#### Properties of video tracks

- `aspectRatio`
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}} property, specified precisely to 10 decimal places. This is the width of the image in pixels divided by its height in pixels. Common values include 1.3333333333 (for the classic television 4:3 "standard" {{glossary("aspect ratio")}}, also used on tablets such as Apple's iPad), 1.7777777778 (for the 16:9 high-definition widescreen aspect ratio), and 1.6 (for the 16:10 aspect ratio common among widescreen computers and tablets).

    a double-precision floating-point number indicating the {{glossary("aspect ratio")}} of the {{domxref("MediaStreamTrack")}} as currently configured. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.aspectRatio")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`aspectRatio`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#aspectratio) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A double-precision floating-point number indicating the current configuration of the track's aspect ratio. The aspect ratio is computed by taking the track's width, dividing by its height, and rounding the result to ten decimal places. For example, the standard 16:9 high-definition aspect ratio can be computed as 1920/1080, or 1.7777777778.
- `facingMode`
  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} property, specifying the direction the camera is facing. The value will be one of:
    - `"user"`
      - : A camera facing the user (commonly known as a "selfie cam"), used for self-portraiture and video calling.
    - `"environment"`
      - : A camera facing away from the user (when the user is looking at the screen). This is typically the highest quality camera on the device, used for general photography.
    - `"left"`
      - : A camera facing toward the environment to the user's left.
    - `"right"`
      - : A camera facing toward the environment to the user's right.

      a string indicating the direction in which the camera producing the video track represented by the {{domxref("MediaStreamTrack")}} is currently facing. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.facingMode")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

      If needed, you can determine whether or not this constraint is supported by checking the value of [`facingMode`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#facingmode) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

      Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} will never include this property.

      The following strings are permitted values for the facing mode. These may represent separate cameras, or they may represent directions in which an adjustable camera can be pointed.

      - `"user"`
        - : The video source is facing toward the user; this includes, for example, the front-facing camera on a smartphone.
      - `"environment"`
        - : The video source is facing away from the user, thereby viewing their environment. This is the back camera on a smartphone.
      - `"left"`
        - : The video source is facing toward the user but to their left, such as a camera aimed toward the user but over their left shoulder.
      - `"right"`
        - : The video source is facing toward the user but to their right, such as a camera aimed toward the user but over their right shoulder.

- `frameRate`
  - : A double-precision floating point value indicating the current value of the {{domxref("MediaTrackConstraints.frameRate", "frameRate")}} property, specifying how many frames of video per second the track includes. If the value can't be determined for any reason, the value will match the vertical sync rate of the device the user agent is running on.

    a double-precision floating-point number indicating the frame rate, in frames per second, of the {{domxref("MediaStreamTrack")}} as currently configured. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.frameRate")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`frameRate`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#framerate) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A double-precision floating-point number indicating the current configuration of the track's frame rate, in frames per second.
- `height`
  - : A long integer value indicating the current value of the {{domxref("MediaTrackConstraints.height", "height")}} property, specifying the height of the track's video data in pixels.

    an integer indicating the number of pixels tall {{domxref("MediaStreamTrack")}} is currently configured to be. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.height")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`height`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#height) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    An integer value indicating the height, in pixels, of the video track as currently configured.
- `width`
  - : A long integer value indicating the current value of the `width` property, specifying the width of the track's video data in pixels.

    an integer indicating the number of pixels wide {{domxref("MediaStreamTrack")}} is currently configured to be. This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.width")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`width`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#width) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    An integer value indicating the width, in pixels, of the video track as currently configured.
- `resizeMode`
  - : A string indicating the current value of the {{domxref("MediaTrackConstraints.resizeMode", "resizeMode")}} property, specifying the mode used by the user agent to derive the resolution of the track. The value will be one of:
    - `"none"`
      - : The track has the resolution offered by the camera, its driver or the OS.
    - `"crop-and-scale"`
      - : The track's resolution might be the result of the user agent using cropping or downscaling from a higher camera resolution.

#### Properties of shared screen tracks

Tracks containing video shared from a user's screen (regardless of whether the screen data comes from the entire screen or a portion of a screen, like a window or tab) are generally treated like video tracks, with the exception that they also support the following added settings:

- `cursor`
  - : A string which indicates whether or not the mouse cursor is being included in the generated stream and under what conditions. Possible values are:
    - `always`
      - : The mouse is always visible in the video content of the {domxref("MediaStream"), unless the mouse has moved outside the area of the content.
    - `motion`
      - : The mouse cursor is always included in the video if it's moving, and for a short time after it stops moving.
    - `never`
      - : The mouse cursor is never included in the shared video.

    indicates whether or not the cursor should be captured as part of the video track included in the {{domxref("MediaStream")}} returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}.

    The value of `cursor` comes from the `CursorCaptureConstraint` enumerated string type, and may have one of the following values:

    - `always`
      - : The mouse should always be visible in the video content of the {{domxref("MediaStream")}}, unless the mouse has moved outside the area of the content.
    - `motion`
      - : The mouse cursor should always be included in the video if it's moving, and for a short time after it stops moving.
    - `never`
      - : The mouse cursor is never included in the shared video.

- `displaySurface`
  - : A string which specifies the type of source the track contains; one of:
    - `browser`
      - : The stream contains the contents of a single browser tab selected by the user.
    - `monitor`
      - : The stream's video track contains the entire contents of one or more of the user's screens.
    - `window`
      - : The stream contains a single window selected by the user for sharing.

    indicates the type of display surface being captured.

    The value of `displaySurface` is a string that comes from the `DisplayCaptureSurfaceType` enumerated type, and is one of the following:

    - `browser`
      - : The stream's video track presents the entire contents of a single browser tab which the user selected during the {{domxref("MediaDevices.getDisplayMedia","getDisplayMedia()")}} call.
    - `monitor`
      - : The video track in the stream presents the complete contents of one or more of the user's screens. Any empty space (if the displays are of different dimensions) is filled with a backdrop chosen by the user agent.
    - `window`
      - : The stream's video track presents the contents of a single window selected by the user. The window may be from any application, not necessarily just from within the user agent.

    Not all user agents support all of these surface types.

- `logicalSurface`
  - : A Boolean value which, if `true`, indicates that the video contained in the stream's video track contains a background rendering context, rather than a user-visible one. This is `false` if the video being captured is coming from a foreground (user-visible) source.

    indicates whether or not the display area being captured is a logical surface. Logical surfaces are those which are not necessarily entirely onscreen, or may even be off-screen, such as windows' backing buffers (where only part of the buffer is visible without scrolling the containing window) and offscreen rendering contexts.

    A Boolean value which is `true` if the video track in the stream of captured video is taken from a logical display surface.

    The most common scenario in which a display surface may be a logical one is if the selected surface contains the entire content area of a window which is too large to display onscreen at once. Since the window that contains the surface has to be scrolled to show the rest of the contents, the surface is a logical one.

    A visible display surface (that is, a surface for which `logicalSurface` returns `false`) is the portion of a logical display surface which is currently visible onscreen.

    For example, a user agent _may_ choose to allow the user to choose whether to share the entire document (a `browser` with `logicalSurface` value of `true`), or just the currently visible portion of the document (where the `logicalSurface` of the `browser` surface is `false`).

- `screenPixelRatio`
  - : A number representing the ratio of the physical size of a pixel on the captured display surface (displayed at its physical resolution) to the logical size of a CSS pixel on the capturing screen (displayed at its logical resolution). It cannot be used as a constraint or capability.

    a number representing the ratio of the physical size of a pixel on the captured display surface (displayed at its physical resolution) to the logical size of a CSS pixel on the capturing screen (displayed at its logical resolution). It cannot be used as a constraint or capability.

    This property allows applications using the [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API) to save resources by sending the video of a screen capture at its logical, or device independent, resolution.

    A number representing the screen pixel ratio.

    This is calculated by dividing the size of a {{glossary("CSS pixel")}} at a page zoom of `1.0` and using a scale factor of `1.0` on the capturing screen by the vertical size of a pixel from the captured [display surface](/en-US/docs/Web/API/MediaTrackConstraints/displaySurface).

    It is common for a screen to have zoom applied via the operating system (OS), for example when the display is a high-resolution display, and you want the graphics to be shown at the same physical size as they would on a standard resolution display. The resolution before applying the zoom is called the **logical resolution**, and the resolution after the zoom is applied is called the **physical resolution**.

    If the sender's captured screen is zoomed in, then the physical resolution is greater than the logical resolution, and a video-conferencing app can therefore save bandwidth and CPU by:

    1. Removing the zoom applied to the captured display surface by the OS.
    2. Sending the video of the screen capture at the logical resolution.
    3. Reapplying the zoom after receiving it on the remote client to size it back up to its physical resolution.

    The `screenPixelRatio` property describes the ratio of the physical size of a pixel to the logical size of a CSS pixel, and therefore enables the application to work out how much of a zoom factor has been applied, and then constrain the video to the logical size.

    For example:

    - If the captured display surface is being displayed on a standard resolution screen where physical pixel dimensions are about the same as CSS pixel dimensions, `screenPixelRatio` will return a value of `1`.
    - If, however, the captured display surface is being displayed on a high-dpi resolution screen where physical pixel dimensions are about double the CSS pixel dimensions, `screenPixelRatio` will return a value of `2`.

## Examples

### Basic `screenPixelRatio` usage

In this example, the application defines a constant `RESOLUTION_LIMIT`, which represents the scaling factor beyond which the sending application should send video at the logical resolution rather than the physical resolution.

When `screenPixelRatio` exceeds this limit, the application uses the `screenPixelRatio` value to calculate the logical resolution from the physical resolution, and then constrains the captured {{domxref("MediaStreamTrack")}} to the logical resolution.

```js
const RESOLUTION_LIMIT = 1.5;

async function startCapture() {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const track = stream.getVideoTracks()[0];
  const settings = track.getSettings();
  const capabilities = track.getCapabilities();

  if (settings.screenPixelRatio > RESOLUTION_LIMIT) {
    const physicalWidth = capabilities.width.max;
    const physicalHeight = capabilities.height.max;
    const logicalWidth = physicalWidth / settings.screenPixelRatio;
    const logicalHeight = physicalHeight / settings.screenPixelRatio;
    await track.applyConstraints({
      width: logicalWidth,
      height: logicalHeight,
    });
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Using the screen capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
- {{domxref("MediaDevices.getUserMedia()")}}
