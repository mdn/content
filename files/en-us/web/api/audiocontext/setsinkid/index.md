---
title: "AudioContext: setSinkId() method"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioContext.setSinkId
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`setSinkId()`** method of the {{domxref("AudioContext")}} interface sets the output audio device for the `AudioContext`. If a sink ID is not explicitly set, the default system audio output device will be used.

To set the audio device to a device different than the default one, the developer needs permission to access to audio devices. If required, the user can be prompted to grant the required permission via a {{domxref("MediaDevices.getUserMedia()")}} call.

In addition, this feature may be blocked by a [`speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameters

- `sinkId`
  - : The sink ID of the device you want to set as the output audio device. This can take one of the following value types:
    - String
      - : A string representing the sink ID, retrieved for example via the `deviceId` property of the {{domxref("MediaDeviceInfo")}} objects returned by {{domxref("MediaDevices.enumerateDevices()")}}.
    - `AudioSinkOptions`
      - : An object representing different options for a sink ID. Currently this takes a single property, `type`, with a value of `none`. Setting this parameter causes the audio to be processed without being played through any audio output device. This is a useful option to minimize power consumption when you don't need playback along with processing.

### Return value

A {{jsxref("Promise")}} that fulfills with a value of `undefined`.

Attempting to set the sink ID to its existing value (i.e. returned by {{domxref("AudioContext.sinkId")}}), throws no errors, but it aborts the process immediately.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if accessing the selected audio output device failed.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser does not have permission to access audio devices.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the passed `sinkId` does not match any audio device found on the system.

## Examples

In our [SetSinkId test example](https://set-sink-id.glitch.me/) (check out the [source code](https://glitch.com/edit/#!/set-sink-id)), we create an audio graph that generates a three-second burst of white noise via an {{domxref("AudioBufferSourceNode")}}, which we also run through a {{domxref("GainNode")}} to quiet things down a bit.

We also provide the user with a dropdown menu to allow them to change the audio output device on the fly. To do this, we:

1. Provide a button to populate the dropdown menu. We first invoke {{domxref("MediaDevices.getUserMedia()")}} to trigger the permissions prompt we need to allow device enumeration, then use {{domxref("MediaDevices.enumerateDevices()")}} to get all the available devices. We loop through the different devices and make each one available as an option in a {{htmlelement("select")}} element. We also create a "None" option for the case where you don't want to play your audio in any output.

   ```js
   mediaDeviceBtn.addEventListener('click', async () => {
     if ("setSinkId" in AudioContext.prototype) {
       selectDiv.innerHTML = '';

       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
       const devices = await navigator.mediaDevices.enumerateDevices();

       // Most of the DOM scripting to generate the dropdown cut out for brevity

       const audioOutputs = devices.filter(
          (device) => device.kind === 'audiooutput' && device.deviceId !== 'default'
       );

       audioOutputs.forEach((device) => {
         const option = document.createElement('option')
         option.value = device.deviceId;
         option.textContent = device.label;
         select.appendChild(option);
       });

       const option = document.createElement('option')
       option.value = 'none';
       option.textContent = 'None';
       select.appendChild(option);

       //...
   ```

2. Add a {{domxref("HTMLElement/change_event", "change")}} event listener to the {{htmlelement("select")}} element to change the sink ID and therefore the audio output device when a new value is selected. If "None" is selected in the dropdown, we invoke `setSinkId()` with the `{ type : 'none' }` object parameter to select no audio device, otherwise we run it with the audio device ID contained in the `<select>` element `value` attribute` as the parameter.

   ```js
       // ...

       select.addEventListener('change', async () => {
         if(select.value === 'none') {
           await audioCtx.setSinkId({ type : 'none' });
         } else {
           await audioCtx.setSinkId(select.value);
         }
       })
     }
   });
   ```

The output device can be changed during audio playback, as well as before, or between plays.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.sinkId")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
