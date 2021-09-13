---
title: Taking still photos with WebRTC
slug: Web/API/WebRTC_API/Taking_still_photos
tags:
  - API
  - Advanced
  - Example
  - Photos
  - Sample code
  - Still Photos
  - Video
  - WebRTC
  - camera
  - getusermedia
  - webcam
---
{{WebRTCSidebar}}

This article shows how to use WebRTC to access the camera on a computer or mobile phone with WebRTC support and take a photo with it.

![WebRTC-based image capture app — on the left we have a video stream taken from a webcam and a take photo button, on the right we have the still image output from taking the photo](web-rtc-demo.png)

You can also jump straight to the [code on Github](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill) if you like.

## The HTML markup

[Our HTML interface](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill/index.html) has two main operational sections: the stream and capture panel and the presentation panel. Each of these is presented side-by-side in its own {{HTMLElement("div")}} to facilitate styling and control.

The first panel on the left contains two components: a {{HTMLElement("video")}} element, which will receive the stream from WebRTC, and a {{HTMLElement("button")}} the user clicks to capture a video frame.

```html
  <div class="camera">
    <video id="video">Video stream not available.</video>
    <button id="startbutton">Take photo</button>
  </div>
```

This is straightforward, and we'll see how it ties together when we get into the JavaScript code.

Next, we have a {{HTMLElement("canvas")}} element into which the captured frames are stored, potentially manipulated in some way, and then converted into an output image file. This canvas is kept hidden by styling the canvas with {{cssxref("display")}}`:none`, to avoid cluttering up the screen — the user does not need to see this intermediate stage.

We also have an {{HTMLElement("img")}} element into which we will draw the image — this is the final display shown to the user.

```html
  <canvas id="canvas">
  </canvas>
  <div class="output">
    <img id="photo" alt="The screen capture will appear in this box.">
  </div>
```

That's all of the relevant HTML. The rest is just some page layout fluff and a bit of text offering a link back to this page.

## The JavaScript code

Now let's take a look at the [JavaScript code](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill/capture.js). We'll break it up into a few bite-sized pieces to make it easier to explain.

### Initialization

We start by wrapping the whole script in an anonymous function to avoid global variables, then setting up various variables we'll be using.

```js
(function() {
  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  var streaming = false;

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;
```

Those variables are:

- `width`
  - : Whatever size the incoming video is, we're going to scale the resulting image to be 320 pixels wide.
- `height`
  - : The output height of the image will be computed given the `width` and the aspect ratio of the stream.
- `streaming`
  - : Indicates whether or not there is currently an active stream of video running.
- `video`
  - : This will be a reference to the {{HTMLElement("video")}} element after the page is done loading.
- `canvas`
  - : This will be a reference to the {{HTMLElement("canvas")}} element after the page is done loading.
- `photo`
  - : This will be a reference to the {{HTMLElement("img")}} element after the page is done loading.
- `startbutton`
  - : This will be a reference to the {{HTMLElement("button")}} element that's used to trigger capture. We'll get that after the page is done loading.

### The startup() function

The `startup()` function is run when the page has finished loading, courtesy of {{domxref("EventTarget.addEventListener")}}. This function's job is to request access to the user's webcam, initialize the output {{HTMLElement("img")}} to a default state, and to establish the event listeners needed to receive each frame of video from the camera and react when the button is clicked to capture an image.

#### Getting element references

First, we grab references to the major elements we need to be able to access.

```js
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
```

#### Get the media stream

The next task is to get the media stream:

```js
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });
```

Here, we're calling {{domxref("MediaDevices.getUserMedia()")}} and requesting a video stream (without audio). It returns a promise which we attach success and failure callbacks to.

The success callback receives a `stream` object as input. It is the {{HTMLElement("video")}} element's source to our new stream.

Once the stream is linked to the `<video>` element, we start it playing by calling [`HTMLMediaElement.play()`](/en-US/docs/Web/API/HTMLMediaElement#play).

The error callback is called if opening the stream doesn't work. This will happen for example if there's no compatible camera connected, or the user denied access.

#### Listen for the video to start playing

After calling [`HTMLMediaElement.play()`](/en-US/docs/Web/API/HTMLMediaElement#play) on the {{HTMLElement("video")}}, there's a (hopefully brief) period of time that elapses before the stream of video begins to flow. To avoid blocking until that happens, we add an event listener to `video` for the {{event("canplay")}} event, which is delivered when the video playback actually begins. At that point, all the properties in the `video` object have been configured based on the stream's format.

```js
    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);
```

This callback does nothing unless it's the first time it's been called; this is tested by looking at the value of our `streaming` variable, which is `false` the first time this method is run.

If this is indeed the first run, we set the video's height based on the size difference between the video's actual size, `video.videoWidth`, and the width at which we're going to render it, `width`.

Finally, the `width` and `height` of both the video and the canvas are set to match each other by calling {{domxref("Element.setAttribute()")}} on each of the two properties on each element, and setting widths and heights as appropriate. Finally, we set the `streaming` variable to `true` to prevent us from inadvertently running this setup code again.

#### Handle clicks on the button

To capture a still photo each time the user clicks the `startbutton`, we need to add an event listener to the button, to be called when the {{event("click")}} event is issued:

```js
    startbutton.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);
```

This method is simple enough: it just calls our `takepicture()` function, defined below in the section {{anch("Capturing a frame from the stream")}}, then calls {{domxref("Event.preventDefault()")}} on the received event to prevent the click from being handled more than once.

#### Wrapping up the startup() method

There are only two more lines of code in the `startup()` method:

```js
    clearphoto();
  }
```

This is where we call the `clearphoto()` method we'll describe below in the section {{anch("Clearing the photo box")}}.

### Clearing the photo box

Clearing the photo box involves creating an image, then converting it into a format usable by the {{HTMLElement("img")}} element that displays the most recently captured frame. That code looks like this:

```js
  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }
```

We start by getting a reference to the hidden {{HTMLElement("canvas")}} element that we use for offscreen rendering.  Next we set the `fillStyle` to `#AAA` (a fairly light grey), and fill the entire canvas with that color by calling {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}.

Last in this function, we convert the canvas into a PNG image and call `{{domxref("Element.setAttribute", "photo.setAttribute()")}}` to make our captured still box display the image.

### Capturing a frame from the stream

There's one last function to define, and it's the point to the entire exercise: the `takepicture()` function, whose job it is to capture the currently displayed video frame, convert it into a PNG file, and display it in the captured frame box. The code looks like this:

```js
  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }
```

As is the case any time we need to work with the contents of a canvas, we start by getting the {{domxref("CanvasRenderingContext2D","2D drawing context")}} for the hidden canvas.

Then, if the width and height are both non-zero (meaning that there's at least potentially valid image data), we set the width and height of the canvas to match that of the captured frame, then call {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} to draw the current frame of the video into the context, filling the entire canvas with the frame image.

> **Note:** This takes advantage of the fact that the {{domxref("HTMLVideoElement")}} interface looks like an {{domxref("HTMLImageElement")}} to any API that accepts an `HTMLImageElement` as a parameter, with the video's current frame presented as the image's contents.

Once the canvas contains the captured image, we convert it to PNG format by calling {{domxref("HTMLCanvasElement.toDataURL()")}} on it; finally, we call {{domxref("Element.setAttribute", "photo.setAttribute()")}} to make our captured still box display the image.

If there isn't a valid image available (that is, the `width` and `height` are both 0), we clear the contents of the captured frame box by calling `clearphoto()`.

## Fun with filters

Since we're capturing images from the user's webcam by grabbing frames from a {{HTMLElement("video")}} element, we can very easily apply filters and fun effects to the video. As it turns out, any CSS filters you apply to the element using the {{cssxref("filter")}} property affect the captured photo. These filters can range from the simple (making the image black and white)  to the extreme (gaussian blurs and hue rotation).

You can play with this effect using, for example, the Firefox developer tools' [style editor](/en-US/docs/Tools/Style_Editor); see [Edit CSS filters](/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters) for details on how to do so.

## Using specific devices

You can, if needed, restrict the set of permitted video sources to a specific device or set of devices. To do so, call {{domxref("MediaDevices.enumerateDevices")}}. When the promise is fulfilled with an array of {{domxref("MediaDeviceInfo")}}  objects describing the available devices, find the ones that you want to allow and specify the corresponding {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} or `deviceId`s in the {{domxref("MediaTrackConstraints")}} object passed into {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

## See also

- [Try this sample](https://mdn-samples.mozilla.org/s/webrtc-capturestill)
- [Sample code on Github](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
- {{domxref("MediaDevices.getUserMedia")}}
- {{SectionOnPage("/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images", "Using frames from a video")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
