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
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

The **Audio Output Devices API** allows web applications to prompt users about what audio output device should be used for playback.

## Concepts and usage

Operating systems commonly allow users to specify that audio should be played from speakers, a Bluetooth headset, or some other audio output device.
This API allows applications to provide this same functionality from within a web page, which may provide a better user experience.

Setting a particular audio output device requires explicit user permission, as the user may be in a location where playing audio is not appropriate through some output devices.
For more information see [Security requirements](#security-requirements) below.

Audio devices may arbitrarily connect and disconnect.
Applications that wish to react to this kind of change can listen to the [`devicechange` event](/en-US/docs/Web/API/MediaDevices/devicechange_event) and use [`enumerateDevices()`](/en-US/docs/Web/API/MediaDevices/enumerateDevices) to determine if `sinkId` is present in the returned devices.
This might trigger, for example, pausing or unpausing playback.

## Interfaces

### Extensions to interfaces

The Audio Output Devices API extends the following APIs, adding the listed features:

- [`MediaDevices.selectAudioOutput()`](/en-US/docs/Web/API/MediaDevices/selectAudioOutput)
  - : This method prompts the user to select a specific audio output device, for example a speaker or headset.
- [`HTMLMediaElement.setSinkId()`](/en-US/docs/Web/API/HTMLMediaElement/setSinkId)
  - : This method sets the ID of the audio device to use for output, which will be used if permitted.
- [`HTMLMediaElement.sinkId`](/en-US/docs/Web/API/HTMLMediaElement/sinkId)
  - : This property returns the unique ID of the audio device being used for output, or an empty string if the default user agent device is being used.

## Security requirements

Access to [`MediaDevices.selectAudioOutput()`](/en-US/docs/Web/API/MediaDevices/selectAudioOutput) is subject to the following constraints:

- It may only be used in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- Access may be gated by the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- [Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
  The user has to interact with the page or a UI element for this feature to work.
- The user must explicitly grant permission to use the audio output device through a user-agent specific mechanism, or have previously granted permission.
  Note that if access is denied by a permission policy it cannot be granted by a user permission.

User permission to set the output device is also implicitly granted if the user has already granted permission to use a media input device in the same group, using [`MediaDevices.getUserMedia()`](/en-US/docs/Web/API/MediaDevices/getUserMedia).

Other methods/properties also require a secure context and the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/midi) permission policy.

The permission status can be queried using the [Permissions API](/en-US/docs/Web/API/Permissions_API) method [`navigator.permissions.query()`](/en-US/docs/Web/API/Permissions/query), passing a permission descriptor with the `speaker-selection` permission.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
