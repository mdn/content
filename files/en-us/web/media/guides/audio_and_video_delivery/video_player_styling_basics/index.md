---
title: Video player styling basics
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
page-type: guide
sidebar: mediasidebar
---

In the previous [Cross-browser video player article](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) we described how to build a cross-browser HTML video player using the Media and Fullscreen APIs. This follow-up article looks at how to style this custom player, including making it responsive.

## HTML markup

There are a few changes that were made to the HTML markup shown in the previous article. The custom video controls and {{htmlelement("progress")}} element are now contained within {{htmlelement("div") }} elements, rather than residing inside unordered list items.

The markup for the custom controls now looks as follows:

```html-nolint hidden live-sample___video-player-styled
<figure id="videoContainer">
```

```html hidden live-sample___video-player-styled
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

```html live-sample___video-player-styled
<div id="video-controls" class="controls" data-state="hidden">
  <button id="play-pause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="vol-inc" type="button" data-state="vol-up">Vol+</button>
  <button id="vol-dec" type="button" data-state="vol-down">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
</div>
```

```html hidden live-sample___video-player-styled
  <figcaption>
    &copy; Blender Foundation |
    <a href="https://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

A `data-state` attribute is used in various places for styling purposes and these are set using JavaScript. Specific implementations will be mentioned at appropriate places below.

## Styling

The resultant video player style used here is rather basic — this is intentional, as the purpose is to show how such a video player could be styled and be made responsive.

> [!NOTE]
> In some cases some basic CSS is omitted from the code examples here as its use is either obvious or not specifically relevant to styling the video player.

```css hidden live-sample___video-player-styled
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida",
    "Helvetica", "Arial", sans-serif;
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
  background-color: #666666;
}
figcaption {
  display: block;
  font-size: 0.75rem;
  color: white;
  margin-top: 0.5rem;
}
video {
  width: 100%;
}
```

### Basic styling

The video controls container itself needs some styling so that it is set up the correct way:

```css live-sample___video-player-styled
.controls {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 2rem;
  position: relative;
}
```

The position is set to `relative`, which is required for its responsiveness (more on that later).

As mentioned earlier, a `data-state` attribute is used to indicate whether the video controls are visible or not and it needs corresponding CSS declarations:

```css live-sample___video-player-styled
.controls[data-state="hidden"] {
  display: none;
}
```

### Buttons

The first major styling task to tackle is to make the video control's buttons actually look like and act like real buttons.

Each button has some basic styling:

```css live-sample___video-player-styled
.controls button {
  width: 2rem;
  height: 2rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: none;
  cursor: pointer;
  color: transparent;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
```

Each button is set to be `2rem` in width and height. By default, all {{htmlelement("button") }} elements have a border, so this is removed. Since background images will be used to display appropriate icons, the background color of the button is set to be transparent, non-repeated, and the element should fully contain the image. Furthermore, there's some label text that should not be visible on screen, so the text color is set to transparent.

The `:hover` and `:focus` states are then set for each button that alters the opacity of the button:

```css live-sample___video-player-styled
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Each button image is an SVG icon embedded in a data URL. The SVG markup is URL-encoded so it can be used directly in the CSS.

Since some buttons have dual functionality, e.g., play/pause, and mute/unmute, these buttons have different states that need to be styled. As mentioned earlier, a `data-state` variable is used to indicate which state such buttons are currently in.

For example, the play/pause button has the following background image definitions:

```css
.controls button[data-state="play"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM13 8V30L32 19Z'/%3E%3C/svg%3E");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM13 10H18V28H13ZM22 10H27V28H22Z'/%3E%3C/svg%3E");
}
```

```css hidden live-sample___video-player-styled
.controls button[data-state="play"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM13 8V30L32 19Z'/%3E%3C/svg%3E");
}
.controls button[data-state="pause"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM13 10H18V28H13ZM22 10H27V28H22Z'/%3E%3C/svg%3E");
}
.controls button[data-state="stop"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM11 10H29V28H11Z'/%3E%3C/svg%3E");
}
.controls button[data-state="mute"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M5 15H11L20 6V34L11 25H5Z'/%3E%3Cpath d='M23 13A7 7 0 0 1 23 27M23 9A11 11 0 0 1 23 31' fill='none' stroke='black' stroke-width='3'/%3E%3C/svg%3E");
}
.controls button[data-state="unmute"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M13 15H19L28 6V34L19 25H13Z'/%3E%3C/svg%3E");
}
.controls button[data-state="vol-up"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM17 9H23V16H30V22H23V29H17V22H10V16H17Z'/%3E%3C/svg%3E");
}
.controls button[data-state="vol-down"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill-rule='evenodd' d='M6 2H34Q37 2 37 5V33Q37 36 34 36H6Q3 36 3 33V5Q3 2 6 2ZM10 16H30V22H10Z'/%3E%3C/svg%3E");
}
.controls button[data-state="go-fullscreen"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M4 3H13L10 6L18 14L15 17L7 9L4 12ZM36 3H27L30 6L22 14L25 17L33 9L36 12ZM4 35H13L10 32L18 24L15 21L7 29L4 26ZM36 35H27L30 32L22 24L25 21L33 29L36 26Z'/%3E%3C/svg%3E");
}
.controls button[data-state="cancel-fullscreen"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M18 17H9L12 14L5 7L8 4L15 11L18 8ZM22 17H31L28 14L35 7L32 4L25 11L22 8ZM18 21H9L12 24L5 31L8 34L15 27L18 30ZM22 21H31L28 24L35 31L32 34L25 27L22 30Z'/%3E%3C/svg%3E");
}
```

When the `data-state` of the button is changed, the appropriate image will also be changed. All the other buttons are treated in a similar way.

### Progress bar

The {{htmlelement("div") }} container for the {{htmlelement("progress") }} element has its {{cssxref("flex-grow")}} enabled, so that it grows to fill up the remaining space in the controls. It also displays a pointer cursor to indicate it is interactive.

```css live-sample___video-player-styled
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
  height: 80%;
}
```

The {{htmlelement("progress") }} element has the following basic style set up:

```css live-sample___video-player-styled
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  color: #0095dd;
  border-radius: 2px;
  margin: 0 auto;
}
```

Like the {{htmlelement("button") }} elements, {{htmlelement("progress") }} also has a default border, which is removed here. It is also given a slight rounded corner for aesthetic reasons.

There are some browser-specific properties that need to be set to ensure that Firefox and Chrome use the required color for the progress bar:

```css live-sample___video-player-styled
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Although the same properties are set to the same value, these rules need to be defined separately, or the whole declaration may become valid if one selector isn't recognized.

### Fullscreen

Now we style the controls for fullscreen mode. Because the `<figure>` element is the one put in fullscreen, we can target it using the {{cssxref(":fullscreen")}} pseudo-class. We do a few things:

- Make the `figure` take up the whole screen with `height: 100%`
- Make the controls bar stick to the bottom while the video stays centered using flexbox
- Make the container transparent to show the native backdrop color
- Hide the `figcaption`
- Restore the background color for the controls row to ensure our black buttons are still visible when the backdrop is black.

```css live-sample___video-player-styled
figure:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
  background-color: transparent;
}
figure:fullscreen video {
  margin-top: auto;
  margin-bottom: auto;
}
figure:fullscreen figcaption {
  display: none;
}
figure:fullscreen .controls {
  background-color: #666666;
}
```

### Responsive styling

Now that the player has its basic look and feel taken care of, some other styling changes — involving media queries — need to be made in order to make it responsive.

We want to customize the controls layout when it is viewed on a smaller screen (680px/42.5em), so a breakpoint is defined here. We tweak the sizing and position properties for the buttons and progress bar so they are arranged differently:

```css live-sample___video-player-styled
@media screen and (width <= 42.5em) {
  .controls {
    height: auto;
  }

  .controls button {
    width: calc(100% / 6);
    margin-top: 2.5rem;
  }

  .controls .progress {
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 0;
    height: 2rem;
  }

  .controls .progress progress {
    width: 98%;
  }

  figcaption {
    text-align: center;
  }
}
```

The `.progress` container is now moved to the top of the control set via `position:absolute`, so it and all the buttons need to be wider. In addition, the buttons need to be pushed below the progress container so that they are visible.

## JavaScript

That's really it for the immediate styling; the next task is making a number of JavaScript changes to ensure that everything works as expected, mostly to rework the buttons logic.

```js hidden live-sample___video-player-styled
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

// Hide the default controls
video.controls = false;
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Play/Pause and mute

Now that the buttons actually look like buttons and have images that indicate what they do, some changes need to be made so that the "dual functionality" buttons (such as the play/pause button) are in the correct "state" and display the correct image. In order to facilitate this, a new function is defined called `changeButtonState()`, which accepts a type variable indicating the button's functionality:

```js live-sample___video-player-styled
function changeButtonState(type) {
  if (type === "play-pause") {
    // Play/Pause button
    if (video.paused || video.ended) {
      playPause.setAttribute("data-state", "play");
    } else {
      playPause.setAttribute("data-state", "pause");
    }
  } else if (type === "mute") {
    // Mute button
    mute.setAttribute("data-state", video.muted ? "unmute" : "mute");
  }
}
```

This function is then called by the relevant event handlers:

```js live-sample___video-player-styled
video.addEventListener("play", () => {
  changeButtonState("play-pause");
});

video.addEventListener("pause", () => {
  changeButtonState("play-pause");
});

stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;

  // Update the play/pause button's 'data-state' which allows the
  // correct button image to be set via CSS
  changeButtonState("play-pause");
});

mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  changeButtonState("mute");
});
```

You might have noticed that there are new handlers where the `play` and `pause` events are reacted to on the video. There is a reason for this! Even though the browser's default video control set has been turned off, many browsers make them accessible by right-clicking on the HTML video. This means that a user could play/pause the video from these controls, which would then leave the custom control set's buttons out of sync. If a user uses the default controls, the defined Media API events — such as `play` and `pause` — are raised so this can be taken advantage of to ensure that the custom control buttons are kept in sync. Our click also raises the `play` and `pause` events when calling the `play()` and `pause()` methods, so nothing needs to change here:

```js live-sample___video-player-styled
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

### Volume

The `alterVolume()` function, called when the player's volume buttons are clicked, also changes — it now calls a new function called `checkVolume()`:

```js live-sample___video-player-styled
function checkVolume(dir) {
  if (dir) {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }

    // If the volume has been turned off, also set it as muted
    // Note: can only do this with the custom control set as when the 'volumechange' event is raised,
    // there is no way to know if it was via a volume or a mute change
    video.muted = currentVolume <= 0;
  }
  changeButtonState("mute");
}

function alterVolume(dir) {
  checkVolume(dir);
}
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

This new `checkVolume()` function does the same thing as the `alterVolume()` but it also sets the state of the mute button depending on the video's current volume setting. `checkVolume()` is also called when the `volumechange` event is raised:

```js live-sample___video-player-styled
video.addEventListener("volumechange", () => {
  checkVolume();
});
```

### Progress and fullscreen

The [Progress bar](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#progress) and [Fullscreen](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) implementations hasn't changed.

```js hidden live-sample___video-player-styled
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});

video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});

video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});

if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
fullscreen.addEventListener("click", (e) => {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
    // Set the fullscreen button's 'data-state' which allows the
    // correct button image to be set via CSS
    fullscreen.setAttribute("data-state", "go-fullscreen");
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
    fullscreen.setAttribute("data-state", "cancel-fullscreen");
  }
});
```

## Result

> [!WARNING]
> The example video may be loud!

{{EmbedLiveSample("video-player-styled", "", 400, "", "", "", "fullscreen")}}
