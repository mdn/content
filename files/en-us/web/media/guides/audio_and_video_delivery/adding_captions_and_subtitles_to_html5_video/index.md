---
title: Adding captions and subtitles to HTML video
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
page-type: guide
sidebar: mediasidebar
---

In other articles we looked at how to [build a cross-browser video player](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) using the {{ domxref("HTMLMediaElement") }} and {{ domxref("Window.fullScreen") }} APIs, and also at how to [style the player](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). This article will take the same player and show how to add captions and subtitles to it, using [the WebVTT format](/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) and the {{ htmlelement("track") }} element.

In this article, our example uses an excerpt from the [Sintel open movie](https://durian.blender.org/), created by the [Blender Foundation](https://www.blender.org/about/foundation/).

## HTML and video captions

Before diving into how to add captions to the video player, there are a number of things that we will first mention, which you should be aware of before we start.

### Captions versus subtitles

[Captions and subtitles are not the same thing](https://screenfont.ca/learn/): they have significantly different audiences, and convey different information, and it is recommended that you read up on the differences if you are not sure what they are. They are however implemented in the same way technically, so the material in this article will apply to both.

For this article we will refer to the text tracks displayed as subtitles, as their content is aimed at hearing people who have difficulty understanding the language of the film, rather than deaf or hard-of-hearing people.

### The `<track>` element

HTML allows us to specify subtitles for a video using the {{ htmlelement("track") }} element. The various attributes of this element allow us to specify such things as the type of content that we're adding, the language it's in, and of course a reference to the text file that contains the actual subtitle information.

### WebVTT

The files that contain the actual subtitle data are text files that follow a specified format, in this case the [Web Video Text Tracks](/en-US/docs/Web/API/WebVTT_API) (WebVTT) format.

Video providers (such as the [Blender Foundation](https://www.blender.org/about/foundation/)) provide captions and subtitles in a text format with their videos, but they're usually in the SubRip Text (SRT) format. These can be easily converted to WebVTT using an online converter.

## Modifications to the HTML and CSS

This section summarizes the modifications made to the previous article's code in order to facilitate the addition of subtitles to the video. If you are not interested in this, and just want to get straight into the JavaScript and more relevant CSS, skip to the [Subtitle implementation](#subtitle_implementation) section.

In this example we are using a different video, [Sintel](https://durian.blender.org/), as it actually has some speech in it and therefore is better for illustrating how subtitles work!

### HTML markup

As mentioned above, we need to make use of the new HTML `<track>` element to add our subtitle files to the HTML video. We actually have our subtitles in three different languages — English, German, and Spanish — so we will reference all three of the relevant VTT files by adding `<track>` elements inside our HTML `<video>` element:

```html-nolint hidden live-sample___video-player-with-captions
<figure id="videoContainer">
```

```html live-sample___video-player-with-captions
<video id="video" controls preload="metadata">
  <source src="/shared-assets/videos/sintel-short.mp4" type="video/mp4" />
  <source src="/shared-assets/videos/sintel-short.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="/shared-assets/misc/sintel-en.vtt"
    default />
  <track
    label="Deutsch"
    kind="subtitles"
    srclang="de"
    src="/shared-assets/misc/sintel-de.vtt" />
  <track
    label="Español"
    kind="subtitles"
    srclang="es"
    src="/shared-assets/misc/sintel-es.vtt" />
</video>
```

As you can see, each `<track>` element has the following attributes set:

- `kind` is given a value of `subtitles`, indicating the type of content the files contain
- `label` is given a value indicating which language that subtitle set is for — for example `English` or `Deutsch` — these labels will appear in the user interface to allow the user to easily select which subtitle language they want to see.
- `src` is assigned a valid URL pointing to the relevant WebVTT subtitle file in each case.
- `srclang` indicates what language each subtitle files' contents are in.
- The `default` attribute is set on the English `<track>` element, indicating to the browser that this is the default subtitle file definition to use when subtitles have been turned on and the user has not made a specific selection.

In addition to adding the `<track>` elements, we have also added a new button to control the subtitles menu that we will build. As a consequence, the video controls now look as follows:

```html live-sample___video-player-with-captions
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
  <button id="subtitles" type="button" data-state="subtitles">
    <span>CC</span>
  </button>
</div>
```

```html hidden live-sample___video-player-with-captions
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

### CSS changes

```css hidden live-sample___video-player-with-captions
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
  position: relative;
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
.controls {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 2rem;
  position: relative;
}
.controls[data-state="hidden"] {
  display: none;
}
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
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
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
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
  height: 80%;
}
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  color: #0095dd;
  border-radius: 2px;
  margin: 0 auto;
}
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
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
@media screen and (width <= 42.5em) {
  .controls {
    height: auto;
  }

  .controls button {
    width: calc(100% / 7);
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

There's almost no change to the CSS from the previous version, except one place where we replace `width: calc(100% / 6)` with `width: calc(100% / 7)` to account for the new button. We also set `position: relative` on the figure, so the subtitle menu popup could be positioned relative to it.

No image is used for the captions button, so it is styled as:

```css live-sample___video-player-with-captions
.controls button[data-state="subtitles"] {
  padding: 2px;
}
.controls button[data-state="subtitles"] span {
  max-width: 100%;
  width: 2rem;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #666666;
  background-color: black;
  border-radius: 4px;
}
```

There are also other CSS changes that are specific to some extra JavaScript implementation, but these will be mentioned at the appropriate place below.

## Subtitle implementation

A lot of what we do to access the video subtitles revolves around JavaScript. Similar to the video controls, if a browser supports HTML video subtitles, there will be a button provided within the native control set to access them. However, since we have defined our own video controls, this button is hidden, and we need to define our own.

Browsers do vary as to what they support, so we will be attempting to bring a more unified UI to each browser where possible. There's more on browser compatibility issues later on.

```js hidden live-sample___video-player-with-captions
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
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
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
video.addEventListener("volumechange", () => {
  checkVolume();
});
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

### Initial setup

As with all the other buttons, one of the first things we need to do is store a handle to the subtitles' button:

```js live-sample___video-player-with-captions
const subtitles = document.getElementById("subtitles");
```

We also initially turn off all subtitles, in case the browser turns any of them on by default:

```js live-sample___video-player-with-captions
for (const track of video.textTracks) {
  track.mode = "hidden";
}
```

The `video.textTracks` property contains an array of all the text tracks attached to the video. We loop through each one and set its `mode` to `hidden`.

Note: The [WebVTT API](/en-US/docs/Web/API/WebVTT_API) gives us access to all the text tracks that are defined for an HTML video using the `<track>` element.

### Building a caption menu

Our aim is to use the `subtitles` button we added earlier to display a menu that allows users to choose which language they want the subtitles displayed in, or to turn them off entirely.

We have added the button, but before we make it do anything, we need to build the menu that goes with it. This menu is built dynamically, so that languages can be added or removed later by editing the `<track>` elements within the video's markup.

All we need to do is to go through the video's `textTracks`, reading their properties and building the menu up from there:

```js live-sample___video-player-with-captions
const subtitleMenuButtons = [];
let subtitlesMenu;
if (video.textTracks) {
  const df = document.createDocumentFragment();
  subtitlesMenu = df.appendChild(document.createElement("ul"));
  subtitlesMenu.className = "subtitles-menu";
  subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
  for (const track of video.textTracks) {
    subtitlesMenu.appendChild(
      createMenuItem(
        `subtitles-${track.language}`,
        track.language,
        track.label,
      ),
    );
  }
  videoContainer.appendChild(subtitlesMenu);
}
```

This code creates a {{ domxref("documentFragment") }}, which is used to hold an unordered list containing our subtitles menu. First of all an option is added to allow the user to switch all subtitles off, and then buttons are added for each text track, reading the language and label from each one.

The creation of each list item and button is done by the `createMenuItem()` function, which is defined as follows:

```js live-sample___video-player-with-captions
function createMenuItem(id, lang, label) {
  const listItem = document.createElement("li");
  const button = listItem.appendChild(document.createElement("button"));
  button.setAttribute("id", id);
  button.className = "subtitles-button";
  if (lang.length > 0) button.setAttribute("lang", lang);
  button.value = label;
  button.setAttribute("data-state", "inactive");
  button.appendChild(document.createTextNode(label));
  button.addEventListener("click", (e) => {
    // Set all buttons to inactive
    subtitleMenuButtons.forEach((button) => {
      button.setAttribute("data-state", "inactive");
    });

    // Find the language to activate
    const lang = button.getAttribute("lang");
    for (const track of video.textTracks) {
      // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
      if (track.language === lang) {
        track.mode = "showing";
        button.setAttribute("data-state", "active");
      } else {
        track.mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
}
```

This function builds the required {{ htmlelement("li") }} and {{ htmlelement("button") }} elements, and returns them so they can be added to the subtitles menu list. It also sets up the required event listeners on the button to toggle the relevant subtitle set on or off. This is done by setting the required subtitle's `mode` attribute to `showing`, and setting the others to `hidden`.

Once the menu is built, it is then inserted into the DOM at the bottom of the videoContainer.

Initially the menu is hidden by default, so an event listener needs to be added to our subtitles button to toggle it:

```js live-sample___video-player-with-captions
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### Subtitle menu CSS

We also added some rudimentary styling for the newly created subtitles menu:

```css live-sample___video-player-with-captions
.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 3rem;
  right: 0;
  background: #666666;
  list-style-type: none;
  margin: 0;
  width: 100px;
  padding: 10px;
}

.subtitles-menu li {
  padding: 0;
  text-align: center;
}

.subtitles-menu li button {
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## Styling the displayed subtitles

One of the less well known about and supported features of WebVTT is the ability to style the individual subtitles (something called text cues) [via CSS](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet).

The `::cue` pseudo-element is the key to targeting individual text track cues for styling, as it matches any defined cue. There are only a handful of CSS properties that can be applied to a text cue:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} shorthand properties
- {{ cssxref("outline") }} shorthand properties
- {{ cssxref("font") }} shorthand properties, including {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

For example, to change the text color of the text track cues you can write:

```css live-sample___video-player-with-captions
::cue {
  color: #cccccc;
}
```

If the WebVTT file uses [voice spans](/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#voice_tag_vv), which allow cues to be defined as having a particular "voice":

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Then this specific 'voice' will be stylable like so:

```css live-sample___video-player-with-captions
::cue(v[voice="Test"]) {
  color: white;
  background: #0095dd;
}
```

## Result

{{EmbedLiveSample("video-player-with-captions", "", 400, "", "", "", "fullscreen")}}
