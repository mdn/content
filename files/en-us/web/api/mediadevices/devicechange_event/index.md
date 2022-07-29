---
title: "MediaDevices: devicechange event"
slug: Web/API/MediaDevices/devicechange_event
page-type: web-api-event
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Reference
  - Video
  - Event
browser-compat: api.MediaDevices.devicechange_event
---
{{APIRef}}

A `devicechange` event is sent to a {{domxref("MediaDevices")}} instance whenever a media device such as a camera, microphone, or speaker is connected to or removed from the system.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('devicechange', (event) => {});

ondevicechange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

In this example, we create a function called `updateDeviceList()`, which is
called once when {{domxref("MediaDevices.getUserMedia()")}} successfully obtains a
stream, and then is called any time the device list changes. It displays in the browser
window two lists: one of audio devices and one of video devices, with both the device's
label (name) and whether it's an input or an output device. Because the example provides
a handler for the `devicechange` event, the list is refreshed any time a
media device is attached to or removed from the device running the sample.

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">
  Start
</div>
<video id="video" width="160" height="120" autoplay></video><br>

<div class="left">
  <h2>Audio devices:</h2>
  <ul class="deviceList" id="audioList"></ul>
</div>
<div class="right">
  <h2>Video devices:</h2>
  <ul class="deviceList" id="videoList"></ul>
</div>

<output></output>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}

h2 {
  margin-bottom: 4px;
}

.left {
  float: left;
  width: 48%;
  margin-right: 2%;
}

.right {
  float: right;
  width: 48%;
  margin-left: 2%;
}

.deviceList {
  border: 1px solid black;
  list-style-type: none;
  margin-top: 2px;
  padding: 6px;
}
```

```js hidden
// UI elements
const videoElement = document.queryElement("#video");
const logElement = document.queryElement("output");
const startButton = document.queryElement("#startButton");

function log(msg) {
  logElement.innerHTML += `${msg}<br>`;
}

startButton.addEventListener(
  "click",
  () => {
    const constraints = {
      video: {
        width: 160,
        height: 120,
        frameRate: 30
      },
      audio: {
        sampleRate: 44100,
        sampleSize: 16,
        volume: 0.25
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        videoElement.srcObject = stream;
        updateDeviceList();
      })
      .catch((err) => {
        log(`${err.name}: ${err.message}`);
      });
  },
  false
);
```

We set up global variables that contain references to the {{HTMLElement("ul")}}
elements that are used to list the audio and video devices:

```js
const audioList = document.getElementById("audioList");
const videoList = document.getElementById("videoList");
```

#### Getting and drawing the device list

Now let's take a look at `updateDeviceList()` itself. This method is called
any time we want to fetch the current list of media devices and then update the
displayed lists of audio and video devices using that information.

```js
function updateDeviceList() {
  navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
      audioList.innerHTML = "";
      videoList.innerHTML = "";

      devices.forEach((device) => {
        const elem = document.createElement("li");
        const [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);

        elem.innerHTML = `<strong>${device.label}</strong> (${direction})`;
        if (type === "audio") {
          audioList.appendChild(elem);
        } else if (type === "video") {
          videoList.appendChild(elem);
        }
      });
    });
}
```

`updateDeviceList()` consists entirely of a call to the function
{{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} on the
{{domxref("MediaDevices")}} object referenced in the
{{domxref("navigator.mediaDevices")}} property, as well as the code that's run when the
{{jsxref("promise")}} returned by `enumerateDevices()` is fulfilled. The
fulfillment handler is called when the device list is ready. The list is passed into the
fulfillment handler as an array of {{domxref("MediaDeviceInfo")}} objects, each
describing one media input or output device.

A {{jsxref("Array.forEach", "forEach()")}} loop is used to scan through all the
devices. For each device, we create a new {{HTMLElement("li")}} object to be used to
display it to the user.

The line
`let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);`
deserves special notice. This uses [destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to assign the values of the first three items in the array returned by
{{jsxref("String.match()")}} to the variables `kind`, `type`, and
`direction`. We do this because the value of
{{domxref("MediaDeviceInfo.kind")}} is a single string that includes both the media type
and the direction the media flows, such as "audioinput" or "videooutput". This line,
then, pulls out the type ("audio" or "video") and direction ("input" or "output") so
they can be used to construct the string displayed in the list.

Once the string is assembled, containing the device's name in bold and the direction in
parentheses, it's appended to the appropriate list by calling
{{domxref("Node.appendChild", "appendChild()")}} on either `audioList` or
`videoList`, as appropriate based on the device type.

#### Handling device list changes

We call `updateDeviceList()` in two places. The first is in the
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} promise's fulfillment
handler, to initially fill out the list when the stream is opened. The second is in the
event handler for this `devicechange` event:

```js
navigator.mediaDevices.ondevicechange = (event) => {
  updateDeviceList();
};
```

With this code in place, each time the user plugs in a camera, microphone, or other
media device, or turns one on or off, we call `updateDeviceList()` to redraw
the list of connected devices.

### Result

{{ EmbedLiveSample('Example', 600, 460, "", "", "", "camera;microphone") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
