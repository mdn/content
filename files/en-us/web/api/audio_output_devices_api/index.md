---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.MediaDevices.selectAudioOutput
  - api.HTMLMediaElement.setSinkId
  - api.HTMLMediaElement.sinkId
  - http.headers.Permissions-Policy.speaker-selection
spec-urls: https://w3c.github.io/mediacapture-output/
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

The **Audio Output Devices API** allows web applications to prompt users about what output device should be used for audio playback.

## Concepts and usage

Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device.
This API allows applications to provide this same functionality from within a web page.

Even if allowed by a permission policy, access to a particular audio output device still requires explicit user permission, as the user may be in a location where playing audio through some output devices is not appropriate.

The API provides the {{domxref("MediaDevices.selectAudioOutput()")}} method that allows users to select their desired audio output from those that are allowed by the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) directive of the {{httpheader("Permissions-Policy")}} HTTP header for the document.
The selected device then has user permission, allowing it to be enumerated with {{domxref("MediaDevices.enumerateDevices()")}} and set as the audio output device using {{domxref("HTMLMediaElement.setSinkId()")}}.

Audio devices may arbitrarily connect and disconnect.
Applications that wish to react to this kind of change can listen to the {{domxref("MediaDevices/devicechange_event", "devicechange")}} event and use {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} to determine if `sinkId` is present in the returned devices.
This might trigger, for example, pausing or unpausing playback.

## Interfaces

### Extensions to other interfaces

The Audio Output Devices API extends the following APIs, adding the listed features:

#### MediaDevices

- {{domxref("MediaDevices.selectAudioOutput()")}}
  - : This method prompts the user to select a specific audio output device, for example a speaker or headset.
    Selecting a device grants user permission to use that device and returns information about the device, including its ID.

#### HTMLMediaElement

- {{domxref("HTMLMediaElement.setSinkId()")}}
  - : This method sets the ID of the audio device to use for output, which will be used if permitted.
- {{domxref("HTMLMediaElement.sinkId")}}
  - : This property returns the unique ID of the audio device being used for output, or an empty string if the default user agent device is being used.

## Security requirements

Access to the API is subject to the following constraints:

- All methods and properties may only be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

- {{domxref("MediaDevices.selectAudioOutput()")}} grants user permission for a selected device to be used as the audio output sink:

  - Access may be gated by the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
  - [Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
    The user has to interact with the page or a UI element for the method to be called.

- {{domxref("HTMLMediaElement.setSinkId()")}} sets a permitted ID as the audio output:

  - Access may be gated by the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
  - User permission is required to set a non-default device ID.
    - This can come from selection in the prompt launched by `MediaDevices.selectAudioOutput()`
    - User permission to set the output device is also implicitly granted if the user has already granted permission to use a media input device in the same group with {{domxref("MediaDevices.getUserMedia()")}}.

<!-- The line below is "true" but this is not implemented in any browser -->
<!-- The permission status can be queried using the [Permissions API](/en-US/docs/Web/API/Permissions_API) method [`navigator.permissions.query()`](/en-US/docs/Web/API/Permissions/query), passing a permission descriptor with the `speaker-selection` permission. -->

## Examples

Here's an example of using `selectAudioOutput()`, within a function that is triggered by a button click, and then setting the selected device as the audio output.

The code first checks if `selectAudioOutput()` is supported, and if it is, uses it to select an output and return a [device ID](/en-US/docs/Web/API/MediaDeviceInfo/deviceId).
We then play some audio using the default output, and then call `setSinkId()` in order to switch to the selected output device.

```js
document.querySelector("#myButton").addEventListener("click", async () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() not supported or not in secure context.");
    return;
  }

  // Display prompt to select device
  const audioDevice = await navigator.mediaDevices.selectAudioOutput();

  // Create an audio element and start playing audio on the default device
  const audio = document.createElement("audio");
  audio.src = "https://example.com/audio.mp3";
  audio.play();

  // Change the sink to the selected audio output device.
  audio.setSinkId(audioDevice.deviceId);
});
```

Note that if you log the output details, they might look something like this:

```js
console.log(
  `${audioDevice.kind}: ${audioDevice.label} id = ${audioDevice.deviceId}`,
);
// audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
