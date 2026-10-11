---
title: "MediaStreamTrack: getSettings() method"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.getSettings
---

{{APIRef("Media Capture and Streams")}}

The **`getSettings()`** method of the {{domxref("MediaStreamTrack")}} interface returns an object containing the current values of each of the constrainable properties for the current `MediaStreamTrack`.

See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js-nolint
getSettings()
```

### Parameters

None.

### Return value

An object describing the current configuration of the track's constrainable properties.

> [!NOTE]
> The returned object identifies the current values of every constrainable property, including those which are platform defaults rather than having been expressly set by the site's code. To instead fetch the most-recently established constraints for the track's properties, as specified by the site's code, use {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

These values will adhere as closely as possible to any constraints previously described using a {{domxref("MediaTrackConstraints")}} object and set using {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}, and will adhere to the default constraints for any properties whose constraints haven't been changed, or whose customized constraints couldn't be matched. This lets you determine what value was selected to comply with your specified constraints for each property value provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

Certain listed properties may not be included in the object, either because they're not supported by the browser or because they're not available due to context.

For example, because {{Glossary("RTP")}} doesn't provide some of these values during negotiation of a WebRTC connection, a track associated with a {{domxref("RTCPeerConnection")}} will not include the following:

- `deviceId`
- `groupId`
- `echoCancellation`
- `latency`
- `facingMode`

#### Properties of all media tracks

- `deviceId`
  - : A string uniquely identifying the source of the corresponding {{domxref("MediaStreamTrack")}} for the origin corresponding to the browsing session. This ID is valid across multiple browsing sessions for the same origin and is guaranteed to be different for all other origins, so you can safely use it to request that the same source be used for multiple sessions, for example.

    All tracks with the same source will share the same ID for any given origin, so {{domxref("MediaStreamTrack.getCapabilities()")}} will always return exactly one value for `deviceId`. That makes the device ID not useful for any changes to constraints when calling {{domxref("MediaStreamTrack.applyConstraints()")}}. It can, however, be used for initially selecting media when calling {{domxref("MediaDevices.getUserMedia()")}}.

    > [!NOTE]
    > An exception to the rule that device IDs are the same across browsing sessions: private browsing mode will use a different ID, and will change it each browsing session.

    The actual value of the string is determined by the source of the track, and there is no guarantee what form it will take, although the specification does recommend it be a [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

- `groupId`
  - : A string uniquely identifying the group of devices that includes the source for the {{domxref("MediaStreamTrack")}}. Two devices (as identified by the `deviceId`) are considered part of the same group if they are from the same physical device. For instance, the audio input and output devices for the speaker and microphone built into a phone would share the same group ID, since they're part of the same physical device. The microphone on a headset would have a different ID, though.

    This ID is browsing-session unique and is not usable across multiple browsing sessions. However, it can be used when calling {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to ensure that different tracks use or don't use the same device—such as using the same headset for input and output. There is no situation in which the groupId is useful when calling `applyConstraints()`, since the value can't be changed.

    The actual value of the string is determined by the source of the track, and there is no guarantee what form it will take, although the specification does recommend it be a GUID.

#### Properties of audio tracks

- `autoGainControl`
  - : A boolean specifying whether automatic gain control (AGC) is enabled. Automatic gain control allows a sound source to manage source media volume changes automatically to maintain a steady overall volume level. This feature is typically used on microphones, although other input sources can also provide it.
- `channelCount`
  - : An integer specifying the number of audio channels present on the track (therefore indicating how many audio samples exist in each audio frame). This is 1 for mono, 2 for stereo, and so forth.
- `echoCancellation`
  - : A boolean specifying whether echo cancellation is enabled. Echo cancellation attempts to prevent echo effects on a two-way audio connection by reducing or eliminating crosstalk between the user's input and output devices. For example, it might apply a filter that negates the sound produced by the speakers from being included in the microphone's generated input track.
- `latency`
  - : A floating point number specifying the audio latency, in seconds. Latency is the amount of time that elapses between the start of processing the audio and the data being available to the next step in the audio utilization process. This value is a target value; actual latency may vary to some extent for various reasons, including CPU, transmission, and storage overhead.
- `noiseSuppression`
  - : A boolean specifying whether noise suppression is enabled. Noise suppression automatically filters the audio to remove background noise, equipment hum, etc., from the sound before delivering it to your code. This feature is typically used on microphones, although other input sources can also provide it.
- `restrictOwnAudio`
  - : A boolean specifying whether the browser will attempt to filter out system audio originating from the capturing tab during screen capture. For example, if the capturing web page itself is playing embedded audio or video, that audio would be included in the capture. Since this could lead to an undesirable echo or interfere with the intended audio sources from other tabs or applications, removing it from the capture is desirable. If audio removal via processing fails, the user agent may exclude all audio originating from the capturing tab.

    > [!NOTE]
    > If the captured display surface doesn't include system audio, this setting will have no effect.
- `sampleRate`
  - : An integer specifying the sample rate in samples per second of the audio data. Common values include 44,100 (standard CD audio), 48,000 (standard digital audio), 96,000 (commonly used in audio mastering and post-production), and 192,000 (used for high-resolution audio in professional recording and mastering sessions). However, lower values are often used to reduce bandwidth requirements; 8,000 samples per second is adequate for comprehensible albeit imperfect human speech, and both 11,025 and 22,050 are often used for low-bandwidth, reduced quality sound and music.
- `sampleSize`
  - : An integer specifying the linear size, in bits, of each audio sample. The most commonly used sample size is 16 bits per sample, which is used for CD audio, etc. Other common sample sizes are 8 (for reduced bandwidth requirements) and 24 (for high-resolution professional audio).

    Each audio channel on the track requires `sampleSize` bits. That means that a given sample actually uses (`sampleSize` / 8) \* `channelCount` bytes of data. For example, 16-bit stereo audio requires (16/8)\*2 or 4 bytes per sample.
- `suppressLocalAudioPlayback`
  - : A boolean specifying whether the audio playing in a tab will stop playing from a user's local speakers when the tab is captured. For example, when broadcasting a video call to an external AV system in a conference room, you will want the audio to play out of the AV system, not the local speakers. This way, the audio will be louder and clearer, and also in sync with the conference video.
- `volume` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A floating point number specifying the volume level of the track. This value will be between 0.0 (silent) to 1.0 (maximum supported volume for the device).

#### Properties of video tracks

- `aspectRatio`
  - : A floating point number specifying the width of the image in pixels divided by its height in pixels, accurate to at least 10 decimal places. Common values include 1.3333333333 (for the classic television 4:3 "standard" {{glossary("aspect ratio")}}, also used on tablets such as Apple's iPad), 1.7777777778 (for the 16:9 high-definition widescreen aspect ratio), and 1.6 (for the 16:10 aspect ratio common among widescreen computers and tablets).
- `facingMode`
  - : A string specifying the direction the camera is facing. The value will be one of:
    - `"user"`
      - : The video source is facing toward the user (commonly known as a "selfie cam"); this includes, for example, the front-facing camera on a smartphone.
    - `"environment"`
      - : The video source is facing away from the user, thereby viewing their environment. This is the back camera on a smartphone. This is typically the highest quality camera on the device, used for general photography.
    - `"left"`
      - : The video source is facing toward the user but to their left, such as a camera aimed toward the user but over their left shoulder.
    - `"right"`
      - : The video source is facing toward the user but to their right, such as a camera aimed toward the user but over their right shoulder.

    These may represent separate cameras, or they may represent directions in which an adjustable camera can be pointed.

- `frameRate`
  - : A floating point number specifying how many frames of video per second the track includes. If the value can't be determined for any reason, the value will match the vertical sync rate of the device the user agent is running on.
- `height`
  - : An integer specifying the height of the track's video data in pixels.
- `width`
  - : An integer value specifying the width of the track's video data in pixels.
- `resizeMode`
  - : A string specifying the mode used by the user agent to derive the resolution of the track. The value will be one of:
    - `"none"`
      - : The track has the resolution offered by the camera, its driver or the OS.
    - `"crop-and-scale"`
      - : The track's resolution might be the result of the user agent using cropping or downscaling from a higher camera resolution.

#### Properties of shared screen tracks

Tracks containing video shared from a user's screen (regardless of whether the screen data comes from the entire screen or a portion of a screen, like a window or tab) are generally treated like video tracks, except that they also support the following settings:

- `cursor`
  - : A string specifying whether or not the mouse cursor is being included in the generated stream and under what conditions. Possible values are:
    - `always`
      - : The mouse is always visible in the video content of the {{domxref("MediaStream")}}, unless the mouse has moved outside the area of the content.
    - `motion`
      - : The mouse cursor is always included in the video if it's moving, and for a short time after it stops moving.
    - `never`
      - : The mouse cursor is never included in the shared video.

- `displaySurface`
  - : A string specifying the type of source the track contains. The value will be one of:
    - `browser`
      - : The stream's video track presents the entire contents of a single browser tab that the user selected during the {{domxref("MediaDevices.getDisplayMedia","getDisplayMedia()")}} call.
    - `monitor`
      - : The stream's video track presents the complete contents of one or more of the user's screens. Any empty space (if the displays are of different dimensions) is filled with a backdrop chosen by the user agent.
    - `window`
      - : The stream's video track presents the contents of a single window selected by the user. The window may be from any application, not necessarily just from within the user agent.

    Not all user agents support all of these surface types.

- `logicalSurface`
  - : A boolean specifying whether the display area being captured is a logical surface. Logical surfaces are not necessarily entirely onscreen, or may even be off-screen, such as windows' backing buffers (where only part of the buffer is visible without scrolling the containing window) and offscreen rendering contexts. A visible display surface (that is, a surface for which `logicalSurface` returns `false`) is the portion of a logical display surface that is currently visible onscreen.

    The most common scenario in which a display surface may be a logical one is if the selected surface contains the entire content area of a window which is too large to display onscreen at once. Since the window that contains the surface has to be scrolled to show the rest of the contents, the surface is a logical one.

    For example, a user agent _may_ choose to allow the user to choose whether to share the entire document (a `browser` with `logicalSurface` value of `true`), or just the currently visible portion of the document (where the `logicalSurface` of the `browser` surface is `false`).

- `screenPixelRatio`
  - : A number representing the ratio between the physical resolution and the logical resolution. It cannot be used as a constraint or capability. The value is calculated by dividing the size of a {{glossary("CSS pixel")}} at a page zoom of `1.0` and using a scale factor of `1.0` on the capturing screen by the vertical size of a pixel from the captured [display surface](/en-US/docs/Web/API/MediaTrackConstraints/displaySurface).

    It is common for a screen to have zoom applied via the operating system (OS), for example when the display is a high-resolution display, and you want the graphics to be shown at the same physical size as they would on a standard resolution display. The resolution before applying the zoom is called the **logical resolution**, and the resolution after the zoom is applied is called the **physical resolution**.

    For example:

    - If the captured display surface is being displayed on a standard resolution screen where physical pixel dimensions are about the same as CSS pixel dimensions, `screenPixelRatio` will return a value of `1`.
    - If, however, the captured display surface is being displayed on a high-dpi resolution screen where physical pixel dimensions are about half the CSS pixel dimensions (so each CSS pixel uses 4 physical pixels), `screenPixelRatio` will return a value of `2`.

    If the sender's captured screen is zoomed in, then the physical resolution is greater than the logical resolution, and a video-conferencing app can therefore save bandwidth and CPU by:

    1. Removing the zoom applied to the captured display surface by the OS.
    2. Sending the video of the screen capture at the logical resolution.
    3. Reapplying the zoom after receiving it on the remote client to size it back up to its physical resolution.

    This property allows applications using the [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API) to save resources by sending the video of a screen capture at its logical, or device independent, resolution.

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
