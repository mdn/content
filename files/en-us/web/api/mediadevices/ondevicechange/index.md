---
title: MediaDevices.ondevicechange
slug: Web/API/MediaDevices/ondevicechange
tags:
  - API
  - Audio
  - Event Handler
  - Media
  - Media Capture and Streams API
  - MediaDevices
  - Property
  - Reference
  - Video
  - ondevicechanged
browser-compat: api.MediaDevices.ondevicechange
---
{{APIRef("Media Capture and Streams")}}

The **`MediaDevices.ondevicechange`**
property is an [event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called
when the {{event("devicechange")}} event occurs on a {{domxref("MediaDevices")}}
instance. This happens whenever the set of media devices available to the
{{Glossary("user agent")}} and, by extension, to the web site or app has changed. You
can at any time use {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}
to get the updated list of available devices.

## Syntax

```js
MediaDevices.ondevicechange = eventHandler;
```

### Value

A function you provide which accepts as input a {{domxref("Event")}} object describing
the {{event("devicechange")}} event that occurred. There is no information about the
change included in the event object; to get the updated list of devices, you'll have to
use {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}.

## Example

In this example, we create a function called `updateDeviceList()`, which is
called once when {{domxref("MediaDevices.getUserMedia()")}} successfully obtains a
stream, and then is called any time the device list changes. It displays in the browser
window two lists: one of audio devices and one of video devices, with both the device's
label (name) and whether it's an input or an output device. Because the example provides
a handler for the {{event("devicechange")}} event, the list is refreshed any time a
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

<div id="log"></div>
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
  float:left;
  width: 48%;
  margin-right: 2%
}

.right {
  float:right;
  width: 48%;
  margin-left: 2%
}

.deviceList {
  border: 1px solid black;
  list-style-type: none;
  margin-top: 2px;
  padding: 6px;
}
```

```js hidden
let videoElement = document.getElementById("video");
let logElement = document.getElementById("log");

function log(msg) {
  logElement.innerHTML += msg + "<br>";
}

document.getElementById("startButton").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
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
  }).then(stream => {
      videoElement.srcObject = stream;
      updateDeviceList();
    })
    .catch(err => log(err.name + ": " + err.message));
}, false);
```

We set up global variables that contain references to the {{HTMLElement("ul")}}
elements that are used to list the audio and video devices:

```js
let audioList = document.getElementById("audioList");
let videoList = document.getElementById("videoList");
```

#### Getting and drawing the device list

Now let's take a look at `updateDeviceList()` itself. This method is called
any time we want to fetch the current list of media devices and then update the
displayed lists of audio and video devices using that information.

```js
function updateDeviceList() {
  navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    audioList.innerHTML = "";
    videoList.innerHTML = "";

    devices.forEach(function(device) {
      let elem = document.createElement("li");
      let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);

      elem.innerHTML = "<strong>" + device.label + "</strong> (" + direction + ")";
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
deserves special notice. This uses [destructuring
assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) (a new feature of [ECMAScript
6](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)) to assign the values of the first three items in the array returned by
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
event handler for {{event("devicechange")}}:

```js
navigator.mediaDevices.ondevicechange = function(event) {
  updateDeviceList();
}
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

## See also

- The {{event("devicechange")}} event and its type, {{domxref("Event")}}.
- {{domxref("MediaDevices.enumerateDevices()")}}
- {{domxref("MediaDeviceInfo")}}
