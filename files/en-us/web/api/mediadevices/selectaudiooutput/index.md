---
title: "MediaDevices: selectAudioOutput() method"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.MediaDevices.selectAudioOutput
---

{{APIRef("WebRTC")}} {{SeeCompatTable}}

The {{domxref("MediaDevices.selectAudioOutput()")}} method of the [Web Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API) prompts the user to select an audio output device, such as a speaker or headset, and grants user-permission to use the selected device as an audio output sink.

Following selection, if the device is available it can be enumerated using [`MediaDevices.enumerateDevices()`](/en-US/docs/Web/API/MediaDevices/enumerateDevices) and set as the audio output sink using [`HTMLMediaElement.setSinkId()`](/en-US/docs/Web/API/HTMLMediaElement/setSinkId).

The method can only be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts) with [transient user activation](/en-US/docs/Web/Security/User_activation), and will only offer audio output devices if allowed by the page [`Permission-Policy: speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection).
For more information see the [security requirements](#security_requirements).

On success, the returned {{jsxref("Promise")}} is resolved with a {{domxref("MediaDeviceInfo")}} describing the selected device.

## Syntax

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### Parameters

- `options` {{Optional_Inline}}

  - : An object that configures what device(s) may be offered in the user prompt.

    - `deviceId` {{Optional_Inline}}

      - : A string representing the id of a single device to display in the prompt.
        If not set, all audio output devices for which permission is not explicitly denied will be displayed.

        The option is intended for applications that want to use persisted device ids.

        > **Note:** A user agent may choose to skip prompting the user if a specified non-null id was previously exposed to the user by `selectAudioOutput()` in an earlier session.
        > In this case the user agent may simply resolve with this device id, or a new id for the same device if it has changed.
        >
        > Note that persisted ids _must be passed_ through `selectAudioOutput()` successfully before they will work with {{domxref("HTMLMediaElement.setSinkId","setSinkId()")}}.

### Return value

A {{ jsxref("Promise") }} that receives a {{domxref("MediaDeviceInfo")}} object when the promise is fulfilled.
The object describes the user-selected audio output device.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if a [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) is used to block use of audio outputs (in addition the popup for selecting an audio output won't be displayed), or the user closed the selection prompt without choosing a device.
- `NotFoundError` {{domxref("DOMException")}}
  - : Returned if there are no available audio output devices.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if there hasn't been a {{Glossary("transient activation")}} (you must trigger it from some kind of UI event).

## Security requirements

Access to the API is subject to the following constraints:

- The method must be called in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
- [Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
  The user has to interact with the page or a UI element for this feature to work.
- Access may be gated by the [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

The permission status can be queried using the [Permissions API](/en-US/docs/Web/API/Permissions_API) method [`navigator.permissions.query()`](/en-US/docs/Web/API/Permissions/query), passing a permission descriptor with the `speaker-selection` permission.

## Examples

Here's an example of using `selectAudioOutput()`, within a function that is triggered by a button click.
It outputs the selected [device IDs](/en-US/docs/Web/API/MediaDeviceInfo/deviceId) and labels (if available) or an error message.

```js
document.querySelector("#myButton").addEventListener("click", () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() not supported.");
    return;
  }

  // Display prompt and log selected device or error
  navigator.mediaDevices
    .selectAudioOutput()
    .then((device) => {
      console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
});
```

On selection of an output this might produce:

```bash
audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API) - the introductory page to the API
