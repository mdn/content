---
title: Using the Media Capabilities API
slug: Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API
page-type: guide
tags:
  - API
  - Audio
  - Guide
  - Intermediate
  - Media
  - Media Capabilities
  - Media Capabilities API
  - Video
  - capabilities
browser-compat: api.MediaCapabilities
---
{{APIRef("Media Capabilities API")}}

The [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API) provides several key features to help you better decide how to handle media, but also to determine how well media is being handled, in real time.

These features include:

- The ability to query the browser to determine its ability to encode or decode media given a specified set of encoding parameters. These parameters may include the codecs, resolutions, bit rates, frame rates, and other such details. With the Media Capabilities API, you can determine not just if the browser can support a given format, but whether or not it can do so efficiently and smoothly. In short, this API replaces—and improves upon—the {{domxref("MediaSource")}} method {{domxref("MediaSource.isTypeSupported", "isTypeSupported()")}} or the {{domxref("HTMLMediaElement")}} method {{domxref("HTMLMediaElement.canPlayType","canPlayType()")}}.
- More and more finely-detailed information about the display's properties, so that informed decisions can be made when choosing the best format to play on the user's device. For example, you can use the API to ensure that you don't try to play High Dynamic Range (HDR) content on a Standard Dynamic Range (SDR) screen.
- Support for getting real-time feedback about the playback of media, so your code can make informed decisions about adapting the stream's quality or other settings to manage the user's perceived media performance and quality. One feature of this is the ability to detect when the device switches GPUs, so you can make appropriate adjustments based on the new GPU's capabilities.

> **Note:** The display capabilities functionality mentioned in the third point above have not yet appeared in any browser. They will be a useful feature of the API once available, but there is a high probability of the display capabilities functionality changing a great deal before browser implementations arrive.

## The MediaCapabilities interface

The {{domxref("MediaCapabilities")}} is available using the {{domxref("Navigator.mediaCapabilities", "mediaCapabilities")}} property which is provided by both the `navigator` object and the {{domxref("WorkerNavigator")}} object; in other words, the Media Capabilities API is available both on the main thread and from workers.

If the object exists, Media Capabilities API is available. You can, therefore, test for the presence of the API like so:

```js
if ("mediaCapabilities" in navigator) {
  // mediaCapabilities is available
} else {
  // mediaCapabilities IS NOT available
}
```

Taking video as an example, to obtain information about video decoding abilities, you create a video decoding configuration which you pass as a parameter to {{domxref("MediaCapabilities.decodingInfo()")}} method. This returns a promise that fulfills with information about the media capabilities as to whether the video can be decoded, and whether decoding will be smooth and power efficient. You can also test audio decoding as well as video and audio encoding.

### Creating a video decoding configuration

The {{domxref("MediaCapabilities.decodingInfo()")}} method takes as a parameter a media decoding configuration.

In our example, we are testing the decoding capabilities of a video configuration. The configuration requires the type of media being tested — e.g. a plain `file` or {{domxref("MediaSource")}} — and a video configuration object that includes values for the `contentType`, `width`, `height`, `bitrate`, and `framerate`:

- The `contentType` must be a string specifying a [valid video MIME type](/en-US/docs/Web/Media/Formats/Video_codecs).
- The `width` and `height` are the horizontal and vertical dimensions of the video; these are also used to determine the aspect ratio.
- The `bitrate` is the number of bits used to encode one second of video.
- The `framerate` is the number of frames which are played per second of time when playing the video.

```js
const videoConfiguration = {
  type: "file",
    video: {
      contentType: "video/webm;codecs=vp8",
      width: 800,
      height: 600,
      bitrate: 10000,
      framerate: 15
   }
};
```

Had we been querying the decodability of an audio file, we would create an audio configuration including the number of channels and sample rate, leaving out the properties that apply only to video—namely, the dimensions and the frame rate:

```js
const audioConfiguration = {
  type: "file",
    audio: {
      contentType: "audio/ogg",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200
   }
};
```

Had we been testing encoding capabilities, we would have created a slightly different configuration.
In this case the type of media being tested is either `record` (for recording media, i.e. a {{domxref("MediaRecorder")}} object) or `transmission` (for media transmitted over electronic means like [`RTCPeerConnection`](/en-US/docs/Web/API/RTCPeerConnection)) — plus either an audio or video configuration as described above.

### Querying the browser about decoding abilities

Now that we've created a video decoding configuration we can pass it as a parameter of the {{domxref("MediaCapabilities.decodingInfo", "decodingInfo()")}} method to determine if a video matching this configuration would be decodable and if the playback would be smooth and power efficient.

```js
let promise = navigator.mediaCapabilities.decodingInfo(videoConfiguration);
```

The `decodingInfo()` and {{domxref("MediaCapabilities.encodingInfo", "encodingInfo()")}} methods both return promises. Once the promises state is fulfilled, you can access the `supported`, `smooth`, and `powerEfficient` properties from the returned object.

### Handling the response

Instead of the assigning the promise to a variable, we can output the values returned by the promise to the console:

```js
navigator.mediaCapabilities.decodingInfo(videoConfiguration).then((result) => {
  console.log(`This configuration is ${result.supported ? '' : 'not '}supported,`);
  console.log(`${result.smooth ? '' : 'not '}smooth, and`);
  console.log(`${result.powerEfficient ? '' : 'not '}power efficient.`);
});
```

## Handling errors

In our video decoding example, a {{jsxref("TypeError")}} would be raised if the media configuration passed to the {{domxref("MediaCapabilities.decodingInfo", "decodingInfo()")}} method was invalid. There are a few reasons why an error might occur, including:

- The specified `type` isn't one of the two permitted values: `file` or `media-source`
- The `contentType` given is

The error can be due to the `type` not being one of the two possible values, the `contentType` not being a valid codec MIME type, or invalid or omitted definitions being omitted from the video configuration object.

```js
navigator.mediaCapabilities.decodingInfo(videoConfiguration).then(
  console.log('It worked')
).catch((error) =>
  console.error(`It failed: ${error}`)
);
```

## Media Capabilities live example

### CSS

```css
li { margin : 1em; }
```

### HTML

```html
<form>
<p>Select your video configuration and find out if this browser supports the codec,
and whether decoding will be smooth and power efficient:</p>
  <ul>
  <li>
    <label for="codec">Select a codec</label>
    <select id="codec">
      <option>video/webm; codecs=vp8</option>
      <option>video/webm; codecs=vp9</option>
      <option>video/mp4; codecs=avc1</option>
      <option>video/mp4; codecs=avc1.420034</option>
      <option>video/ogg; codecs=theora</option>
      <option>invalid</option>
    </select>
  </li>
  <li>
    <label for="size">Select a size</label>
    <select id="size">
      <option>7680x4320</option>
      <option>3840x2160</option>
      <option>2560x1440</option>
      <option>1920x1080</option>
      <option>1280x720</option>
      <option selected>800x600</option>
      <option>640x480</option>
      <option>320x240</option>
      <option value=" x ">none</option>
    </select>
  </li>
  <li>
    <label for="framerate">Select a framerate</label>
    <select id="framerate">
      <option>60</option>
      <option>50</option>
      <option>30</option>
      <option>24</option>
      <option selected>15</option>
    </select>
  </li>
    <li>
    <label for="bitrate">Select a bitrate</label>
    <select id="bitrate">
      <option>4000</option>
      <option>2500</option>
      <option>800</option>
    </select>
  </li>
  </ul>
  <p><input type="button" value="Test this Video Configuration" id="try-it"></p>
</form>

<ul id="results"></ul>
```

### JavaScript

```js
let mc = {
  videoConfiguration : new Object(),

  tryIt() {
   mc.createConfiguration();
   mc.testIt();
  },

  createConfiguration() {
    const size = document.getElementById('size').value.split('x');
    mc.videoConfiguration = {
      type: 'file',
      video: {
        contentType: document.getElementById('codec').value,
        width: size[0],
        height: size[1],
        bitrate: document.getElementById('bitrate').value,
        framerate: document.getElementById('framerate').value,
      }
    }
  },

  testIt() {
    let content = '';
    navigator.mediaCapabilities.decodingInfo(mc.videoConfiguration).then((result) => {
      const li = document.createElement('li'),
        mcv = mc.videoConfiguration.video;
      content = `A ${mcv.width}x${mcv.height}, ${mcv.contentType} at ${mcv.framerate}fps and ${mcv.bitrate} bps video ${result.supported ? ' IS ' : 'IS NOT '} supported,`;
      content += `${result.smooth ? ' IS ' : ' is NOT '} smooth, and`;
      content += `${result.powerEfficient ? ' IS ' : ' IS NOT '}power efficient.`;
      const ul = document.getElementById("results")
      li.innerHTML = content;
      ul.appendChild(li);
    }).catch((error) => {
        const li = document.createElement('li'),
            ul = document.getElementById("results");
        li.textContent = `Codec ${mc.videoConfiguration.video.contentType} threw an error: ${error}`;
        ul.appendChild(li);
    });
  }
}

document.getElementById('try-it').addEventListener('click', mc.tryIt);
```

### Live Result

{{EmbedLiveSample('Media_Capabilities_live_example', '100%', '400')}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.mediaCapabilities")}}
