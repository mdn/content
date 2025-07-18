---
title: Taking still photos with getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
page-type: guide
---

{{DefaultAPISidebar("Media Capture and Streams")}}

This article shows how to use [`navigator.mediaDevices.getUserMedia()`](/en-US/docs/Web/API/MediaDevices/getUserMedia) to access the camera on a computer or mobile phone with `getUserMedia()` support and take a photo with it.

![getUserMedia-based image capture app — on the left we have a video stream taken from a webcam and a take photo button, on the right we have the still image output from taking the photo](web-rtc-demo.png)

You can also jump straight to the [Demo](#demo) if you like.

## The HTML markup

Our HTML interface has two main operational sections: the stream and capture panel and the presentation panel.
Each of these is presented side-by-side in its own {{HTMLElement("div")}} to facilitate styling and control.
There's a {{HTMLElement("button")}} element (`permissions-button`) that we can use later in JavaScript to let the user allow or block camera permissions per device using `getUserMedia()`.

The box on the left contains two components: a {{HTMLElement("video")}} element, which will receive the stream from `navigator.mediaDevices.getUserMedia()`, and a {{HTMLElement("button")}} to start video capture.
This is straightforward, and we'll see how it ties together when we get into the JavaScript code.

```css hidden live-sample___photo-capture live-sample___photo-capture-with-filters
body {
  font:
    1rem "Lucida Grande",
    "Arial",
    sans-serif;
  padding: 0.8rem;
}

button {
  display: block;
  margin-block: 1rem;
}

#start-button {
  position: relative;
  margin: auto;
  bottom: 32px;
  background-color: rgb(0 150 0 / 50%);
  border: 1px solid rgb(255 255 255 / 70%);
  box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
  font-size: 14px;
  color: rgb(255 255 255 / 100%);
}

#video,
#photo {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 100%%;
  height: auto;
}

#canvas {
  display: none;
}

.camera,
.output {
  width: 300px;
  display: inline-block;
  width: 49%;
  height: auto;
}

.output {
  vertical-align: top;
}

code {
  background-color: lightgrey;
}
```

```html hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<h1>Still photo capture demo</h1>
<p>
  This example demonstrates how to use
  <code>navigator.mediaDevices.getUserMedia()</code> to set up a media stream
  using your webcam or other video device, fetch an image from that stream, and
  create a PNG using that image.
</p>
<button id="permissions-button">Allow camera</button>
```

```html hidden live-sample___photo-capture-with-filters
<p>
  &#9432; This example uses the same code as before, but this time, we're adding
  a filter effect to the <code>&lt;video&gt;</code> element using a CSS
  <code>filter: grayscale(100%)</code> declaration. We can then check if the
  video element has any CSS <code>filter</code> applied, and use the same filter
  when drawing to the canvas:
</p>
```

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Capture photo</button>
</div>
```

Next, we have a {{HTMLElement("canvas")}} element into which the captured frames are stored, potentially manipulated in some way, and then converted into an output image file.
This canvas is kept hidden by styling the canvas with {{cssxref("display", "display: none")}}, to avoid cluttering up the screen — the user does not need to see this intermediate stage.

We also have an {{HTMLElement("img")}} element into which we will draw the image — this is the final display shown to the user.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

## The JavaScript code

Now let's take a look at the JavaScript code. We'll break it up into a few bite-sized pieces to make it easier to explain.

### Initialization

We start by setting up various variables we'll be using.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

let streaming = false;

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const startButton = document.getElementById("start-button");
const allowButton = document.getElementById("permissions-button");
```

Those variables are:

- `width`
  - : Whatever size the incoming video is, we're going to scale the resulting image to be 320 pixels wide.
- `height`
  - : The output height of the image will be computed given the `width` and the {{glossary("aspect ratio")}} of the stream.
- `streaming`
  - : Indicates whether or not there is currently an active stream of video running.
- `video`
  - : A reference to the {{HTMLElement("video")}} element.
- `canvas`
  - : A reference to the {{HTMLElement("canvas")}} element.
- `photo`
  - : A reference to the {{HTMLElement("img")}} element.
- `startButton`
  - : A reference to the {{HTMLElement("button")}} element that's used to trigger capture.
- `allowButton`
  - : A reference to the {{HTMLElement("button")}} element that's used to control whether the page can access devices or not.

#### Get the media stream

The next task is to get the media stream: we define an event listener that calls {{domxref("MediaDevices.getUserMedia()")}} and requests a video stream (without audio) when the user clicks on the "Allow camera" button.
It returns a promise which we attach success and failure callbacks to:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
allowButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });
});
```

The success callback receives a `stream` object as input, which is set as our {{HTMLElement("video")}} element's source.
Once the stream is linked to the `<video>` element, we start it playing by calling [`HTMLMediaElement.play()`](/en-US/docs/Web/API/HTMLMediaElement/play_event).

The error callback is called if opening the stream doesn't work.
This will happen for example if there's no compatible camera connected, or the user denied access.

#### Listen for the video to start playing

After calling [`HTMLMediaElement.play()`](/en-US/docs/Web/API/HTMLMediaElement/play_event) on the {{HTMLElement("video")}}, there's a (hopefully brief) period of time that elapses before the stream of video begins to flow. To avoid blocking until that happens, we add an event listener to `video` for the {{domxref("HTMLMediaElement/canplay_event", "canplay")}} event, which is delivered when the video playback actually begins. At that point, all the properties in the `video` object have been configured based on the stream's format.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
video.addEventListener(
  "canplay",
  (ev) => {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);

      video.setAttribute("width", width);
      video.setAttribute("height", height);
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      streaming = true;
    }
  },
  false,
);
```

This callback does nothing unless it's the first time it's been called; this is tested by looking at the value of our `streaming` variable, which is `false` the first time this method is run.

If this is indeed the first run, we set the video's height based on the size difference between the video's actual size, `video.videoWidth`, and the width at which we're going to render it, `width`.

Finally, the `width` and `height` of both the video and the canvas are set to match each other by calling {{domxref("Element.setAttribute()")}} on each of the two properties on each element, and setting widths and heights as appropriate. Finally, we set the `streaming` variable to `true` to prevent us from inadvertently running this setup code again.

#### Handle clicks on the button

To capture a still photo each time the user clicks the `startButton`, we need to add an event listener to the button, to be called when the {{domxref("Element/click_event", "click")}} event is issued:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener(
  "click",
  (ev) => {
    takePicture();
    ev.preventDefault();
  },
  false,
);
```

This method is straightforward: it calls the `takePicture()` function, defined below in the section [Capturing a frame from the stream](#capturing_a_frame_from_the_stream), then calls {{domxref("Event.preventDefault()")}} on the received event to prevent the click from being handled more than once.

### Clearing the photo box

Clearing the photo box involves creating an image, then converting it into a format usable by the {{HTMLElement("img")}} element that displays the most recently captured frame. That code looks like this:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

clearPhoto();
```

We start by getting a reference to the hidden {{HTMLElement("canvas")}} element that we use for offscreen rendering. Next we set the `fillStyle` to `#AAA` (a fairly light grey), and fill the entire canvas with that color by calling {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}.

Last in this function, we convert the canvas into a PNG image and call {{domxref("Element.setAttribute", "photo.setAttribute()")}} to make our captured still box display the image.

### Capturing a frame from the stream

There's one last function to define, and it's the point to the entire exercise: the `takePicture()` function, whose job it is to capture the currently displayed video frame, convert it into a PNG file, and display it in the captured frame box. The code looks like this:

```js live-sample___photo-capture
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  } else {
    clearPhoto();
  }
}
```

As is the case any time we need to work with the contents of a canvas, we start by getting the [2D drawing context](/en-US/docs/Web/API/CanvasRenderingContext2D) for the hidden canvas.

Then, if the width and height are both non-zero (meaning that there's at least potentially valid image data), we set the width and height of the canvas to match that of the captured frame, then call {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} to draw the current frame of the video into the context, filling the entire canvas with the frame image.

> [!NOTE]
> This takes advantage of the fact that the {{domxref("HTMLVideoElement")}} interface looks like an {{domxref("HTMLImageElement")}} to any API that accepts an `HTMLImageElement` as a parameter, with the video's current frame presented as the image's contents.

Once the canvas contains the captured image, we convert it to PNG format by calling {{domxref("HTMLCanvasElement.toDataURL()")}} on it; finally, we call {{domxref("Element.setAttribute", "photo.setAttribute()")}} to make our captured still box display the image.

If there isn't a valid image available (that is, the `width` and `height` are both 0), we clear the contents of the captured frame box by calling `clearPhoto()`.

## Demo

Click "Allow camera" to select an input device and allow the page to access the camera.
Once video starts, you can click "Capture photo" to capture a still from the stream as an image drawn to the canvas on the right:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Fun with filters

Since we're capturing images from the user's webcam by grabbing frames from a {{HTMLElement("video")}} element, we can apply fun CSS {{cssxref("filter")}} effects to the video with filters. These filters range from basic (making the image black and white) to complex (Gaussian blurs and hue rotation).

```css live-sample___photo-capture-with-filters
#video {
  filter: grayscale(100%);
}
```

For the video filters to be applied to the photo, the `takePicture()` function needs the following changes.

```js live-sample___photo-capture-with-filters
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;

    // Get the computed CSS filter from the video element.
    // For example, it might return "grayscale(100%)"
    const videoStyles = window.getComputedStyle(video);
    const filterValue = videoStyles.getPropertyValue("filter");

    // Apply the filter to the canvas drawing context.
    // If there's no filter (i.e., it returns "none"), default to "none".
    context.filter = filterValue !== "none" ? filterValue : "none";

    context.drawImage(video, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/png");
    photo.setAttribute("src", dataUrl);
  } else {
    clearPhoto();
  }
}
```

{{EmbedLiveSample('photo-capture-with-filters', , '600', , , , 'camera', 'allow-popups')}}

You can play with this effect using, for example, the Firefox developer tools' [style editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html); see [Edit CSS filters](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) for details on how to do so.

## Using specific devices

You can, if needed, restrict the set of permitted video sources to a specific device or set of devices. To do so, call {{domxref("MediaDevices.enumerateDevices")}}. When the promise is fulfilled with an array of {{domxref("MediaDeviceInfo")}} objects describing the available devices, find the ones that you want to allow and specify the corresponding {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} or `deviceId`s in the {{domxref("MediaTrackConstraints")}} object passed into {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

## See also

- {{domxref("MediaDevices.getUserMedia")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- [Using frames from a video](/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) in the Canvas tutorial
