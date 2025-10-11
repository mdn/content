---
title: Creating a cross-browser video player
slug: Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player
page-type: guide
sidebar: mediasidebar
---

This article describes a basic HTML video player that uses the Media and Fullscreen APIs. As well as working fullscreen, the player features custom controls rather than just using the browser defaults. The player controls themselves won't be styled beyond the basics required to get them working; full styling of the player will be taken care of in a future article.

Our example video player displays a clip from an open source movie called [Tears of Steel](https://mango.blender.org/about/), and includes typical video controls.

## HTML markup

To start off with, let's take a look at the HTML that makes up the player.

### The video

Our whole player is contained within a {{ htmlelement("figure") }} element.

```html-nolint live-sample___video-player
<figure id="videoContainer">
```

Inside, we first define the {{ htmlelement("video") }} element.

```html live-sample___video-player
<video
  id="video"
  controls
  preload="metadata"
  poster="/shared-assets/images/examples/tears-of-steel-battle-clip-medium-poster.jpg">
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    type="video/mp4" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <source
    src="/shared-assets/videos/tears-of-steel-battle-clip-medium.ogg"
    type="video/ogg" />
  <!-- Offer download -->
  <a href="/shared-assets/videos/tears-of-steel-battle-clip-medium.mp4"
    >Download MP4</a
  >
</video>
```

Even though this player will define its own custom control set, the `controls` attribute is still added to the {{ htmlelement("video") }} element, and the player's default control set is switched off later with JavaScript. Doing things this way still allows users who have JavaScript turned off (for whatever reason) to still have access to the browser's native controls.

A poster image is defined for the video, and the `preload` attribute is set to `metadata`, which informs the browser that it should initially only attempt to load the metadata from the video file rather than the entire video file. This provides the player with data such as video duration and format.

Three different video sources are provided for the player: MP4, WebM, and Ogg. Using these different source formats gives the best chance of being supported across all browsers that support HTML video. For further information on video formats and browser compatibility, see [choosing a video codec](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec).

The code above would allow playback of the video in most browsers, using the browser's default control set. The next step is to define a custom control set, also in HTML, which will be used to control the video.

### The control set

Most browser's default video controls have the following functionality:

- Play/pause
- Mute
- Volume control
- Progress bar
- Skip ahead
- Go fullscreen

The custom control set will also support this functionality, with the addition of a stop button.

Once again the HTML is quite straightforward, using an unordered list with `list-style-type:none` set to enclose the controls, each of which is a list item with `float:left`. For the progress bar, the `progress` element is taken advantage of. This list is inserted after the {{ htmlelement("video") }} element, but inside the {{ htmlelement("figure") }} element (this is important for the fullscreen functionality, which is explained later on).

```html live-sample___video-player
<ul id="video-controls" class="controls" data-state="hidden">
  <li><button id="play-pause" type="button">Play/Pause</button></li>
  <li><button id="stop" type="button">Stop</button></li>
  <li class="progress">
    <progress id="progress" value="0"></progress>
  </li>
  <li><button id="mute" type="button">Mute/Unmute</button></li>
  <li><button id="vol-inc" type="button">Vol+</button></li>
  <li><button id="vol-dec" type="button">Vol-</button></li>
  <li><button id="fs" type="button">Fullscreen</button></li>
</ul>
```

Each button is given an `id` so it can be easily accessed with JavaScript.

The controls are initially hidden with a CSS `display:none` and will be enabled with JavaScript. Again if a user has JavaScript disabled, the custom control set will not appear and they can use the browser's default control set unhindered.

Of course, this custom control set is currently useless and doesn't do a thing: Let's improve the situation with JavaScript.

Finally we close off the `<figure>` element with a {{htmlelement("figcaption")}} containing the copyright information.

```html live-sample___video-player
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

## Using the Media API

HTML comes with a JavaScript [Media API](/en-US/docs/Web/API/HTMLMediaElement) that allows developers access to and control of HTML media. This API will be used to make the custom control set defined above actually do something. In addition, the fullscreen button will use the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API), another W3C API that controls the ability of web browsers to show apps using your computer's full screen.

### Setup

Before dealing with the individual buttons, a number of initialization calls are required. Variables pointing to HTML elements are required:

```js live-sample___video-player
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Using these handles, events can now be attached to each of the custom control buttons making them interactive. Most of these buttons require a `click` event listener to be added, and a Media API defined method and/or attributes to be called/checked on the video.

As mentioned earlier, the browser's default controls now need to be disabled, and the custom controls need to be displayed:

```js live-sample___video-player
// Hide the default controls
video.controls = false;
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Play/Pause

```js live-sample___video-player
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

When a `click` event is detected on the play/pause button, the handler first of all checks if the video is currently paused or has ended (via the Media API's `paused` and `ended` attributes); if so, it uses the `play()` method to play back the video. Otherwise the video must be playing, so it is paused using the `pause()` method.

### Stop

```js live-sample___video-player
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

The Media API doesn't have a `stop` method, so to mimic this the video is paused, and its `currentTime` (i.e., the video's current playing position) and the {{ htmlelement("progress") }} element's position is set to 0 (more on the {{ htmlelement("progress") }} element later).

### Mute

```js live-sample___video-player
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

The mute button is a toggle button that uses the Media API's `muted` attribute to mute the video: this is a Boolean indicating whether the video is muted or not. To get it to toggle, we set it to the inverse of itself.

### Volume

```js live-sample___video-player
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Two volume control buttons have been defined, one for increasing the volume and another for decreasing it. A user-defined function, `alterVolume(direction)` has been created that deals with this:

```js live-sample___video-player
function alterVolume(dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+" && currentVolume < 1) {
    video.volume += 0.1;
  } else if (dir === "-" && currentVolume > 0) {
    video.volume -= 0.1;
  }
}
```

This function makes use of the Media API's `volume` attribute, which holds the current volume value of the video. Valid values for this attribute are 0 and 1 and anything in between. The function checks the `dir` parameter, which indicates whether the volume is to be increased (+) or decreased (-) and acts accordingly. The function is defined to increase or decrease the video's `volume` attribute in steps of 0.1, ensuring that it doesn't go lower than 0 or higher than 1.

### Progress

When the {{ htmlelement("progress") }} element was defined above in the HTML, only the `value` attribute was set to 0. This attribute indicates the current value of the progress element. It also needs to have a maximum value set so that it can display its range correctly, and this can be done via the `max` attribute, which needs to be set to the maximum playing time of the video. This is obtained from the video's `duration` attribute, which again is part of the Media API.

Ideally, the correct value of the video's `duration` attribute is available when the `loadedmetadata` event is raised, which occurs when the video's metadata has been loaded:

```js live-sample___video-player
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Unfortunately in some mobile browsers, when `loadedmetadata` is raised — if it even _is_ raised — `video.duration` may not have the correct value, or even any value at all. So something else needs to be done. More on that below.

Another event, `timeupdate`, is raised periodically as the video is being played through. This event is ideal for updating the progress bar's value, setting it to the value of the video's `currentTime` attribute, which indicates how far through the video the current playback is.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

As the `timeupdate` event is raised, the `progress` element's `value` attribute is set to the video's `currentTime`. This span has a solid CSS background color, which helps it provide the same visual feedback as a {{ htmlelement("progress") }} element.

Coming back to the `video.duration` problem mentioned above, when the `timeupdate` event is raised, in most mobile browsers the video's `duration` attribute should now have the correct value. This can be taken advantage of to set the `progress` element's `max` attribute if it is currently not set:

```js live-sample___video-player
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> For more information and ideas on progress bars and buffering feedback, read [Media buffering, seeking, and time ranges](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Skip ahead

Another feature of most browser default video control sets is the ability to click on the video's progress bar to "skip ahead" to a different point in the video. This can also be achieved by adding a `click` event listener to the `progress` element:

```js live-sample___video-player
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

This piece of code uses the clicked position to (roughly) work out where in the `progress` element the user has clicked, and to move the video to that position by setting its `currentTime` attribute. It avoids setting the `currentTime` if the video's duration is {{jsxref("Global_Objects/NaN", "NaN")}} or {{jsxref("Global_Objects/Infinity", "Infinity")}}, which happens if the video is not yet loaded.

### Fullscreen

The Fullscreen API should be straight forward to use: the user clicks a button, if the video is in fullscreen mode: cancel it, otherwise enter fullscreen mode.

The fullscreen button is hidden if the Fullscreen API is not enabled:

```js live-sample___video-player
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

The fullscreen button needs to actually do something. Like the other buttons, a `click` event handler is attached that toggles fullscreen mode:

```js live-sample___video-player
fullscreen.addEventListener("click", (e) => {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
  }
});
```

If the browser is currently in fullscreen mode, then it must be exited and vice versa. Interestingly `document` must be used for exiting/cancelling fullscreen mode, whereas any HTML element can request fullscreen mode, here the `videoContainer` is used as it also contains the custom controls which should also appear with the video in fullscreen mode.

## Result

The CSS part is hidden for this tutorial, but you can click "Play" to see the full source code. In the next part, [Video player styling basics](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics), we will explore some interesting CSS techniques used here, and also add new CSS to make the player look nicer.

```css hidden live-sample___video-player
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida", "Arial",
    "Helvetica", sans-serif;
}
a {
  color: #0095dd;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2255aa;
  text-decoration: underline;
}
figure {
  max-width: 64rem;
  width: 100%;
  margin: 0;
  padding: 0;
}
figcaption {
  display: block;
  font-size: 1rem;
}
video {
  width: 100%;
}

/* controls */
.controls {
  display: flex;
  gap: 6px;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}
.controls[data-state="hidden"] {
  display: none;
}
.controls li {
  width: max(10%, 3rem);
  margin: 0;
  padding: 0;
}
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
}
.controls button {
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #aaaaaa;
  overflow: hidden;
  border-radius: 2px;
}

/* fullscreen */
figure:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
}
figure:fullscreen video {
  margin-top: auto;
  margin-bottom: auto;
}
figure:fullscreen figcaption {
  display: none;
}
```

> [!WARNING]
> The example video may be loud!

{{EmbedLiveSample("video-player", "", 400, "", "", "", "fullscreen")}}

## See also

- {{ htmlelement("video") }} for reference material
- [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) for more techniques
- [Media formats supported by the HTML audio and video elements](/en-US/docs/Web/Media/Guides/Formats)
