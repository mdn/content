---
title: Video player styling basics
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
page-type: guide
sidebar: mediasidebar
---

In the previous [Cross browser video player article](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) we described how to build a cross-browser HTML video player using the Media and Fullscreen APIs. This follow-up article looks at how to style this custom player, including making it responsive.

## Preliminary modifications from the original example

This section summarizes the modifications that were made to the original video player example to make the styling task easier, before the bulk of the work was started.

### HTML markup

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
    <progress id="progress" value="0" min="0">
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
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

### Related CSS alteration

The previous article set the `display` property of the video controls to `block` in order to display them. This has now been changed to use a [`data-state` attribute](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states), which this code already uses to handle its [fullscreen implementation](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen).

This "data-state" idea is also used for setting the current state of buttons within the video control set, which allows specific state styling.

### JavaScript

As mentioned above, a `data-state` attribute is used in various places for styling purposes and these are set using JavaScript. Specific implementations will be mentioned at appropriate places below.

## Styling

The resultant video player style used here is rather basic — this is intentional, as the purpose is to show how such a video player could be styled and be made responsive.

> [!NOTE]
> In some cases some basic CSS is omitted from the code examples here as its use is either obvious or not specifically relevant to styling the video player.

```css live-sample___video-player-styled
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  color: #666666;
  background-color: #cccccc;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida", "Arial",
    "Helvetica", sans-serif;
}
h1 {
  color: #666666;
  font-size: 1.25rem;
  text-align: center;
  margin: 0;
  padding: 0.5rem 0;
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
figcaption {
  display: block;
  font-size: 0.75rem;
  color: #fff;
}
video {
  width: 100%;
}

/* controls */
.controls,
.controls > * {
  padding: 0;
  margin: 0;
}

/* fullscreen */
html:-ms-fullscreen {
  width: 100%;
}
:-webkit-full-screen {
  background-color: transparent;
}
video:-webkit-full-screen + .controls {
  background: #ccc; /* required for Chrome which doesn't heed the transparent value set above */
}
video:-webkit-full-screen + .controls progress {
  margin-top: 0.5rem;
}

/* hide controls on fullscreen with WebKit */
figure[data-fullscreen="true"] video::-webkit-media-controls {
  display: none !important;
}
figure[data-fullscreen="true"] {
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: 100%;
}
figure[data-fullscreen="true"] video {
  height: auto;
}
figure[data-fullscreen="true"] figcaption {
  display: none;
}
figure[data-fullscreen="true"] .controls {
  position: absolute;
  bottom: 2%;
  width: 100%;
  z-index: 2147483647;
}
figure[data-fullscreen="true"] .controls li {
  width: 5%;
}
figure[data-fullscreen="true"] .controls .progress {
  width: 68%;
}
```

### Basic styling

The HTML video and its controls are all contained within a {{htmlelement("figure") }} element, which is given a maximum width and height (based on the dimensions of the video used) and centered within the page:

```css live-sample___video-player-styled
figure {
  max-width: 64rem;
  width: 100%;
  max-height: 30.875rem;
  height: 100%;
  margin: 1.25rem auto;
  padding: 1.051%;
  background-color: #666666;
}
```

The video controls container itself also needs some styling so that it is set up the correct way:

```css live-sample___video-player-styled
.controls {
  overflow: hidden;
  background: transparent;
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

The height of the `.controls` class is set to be (a very precise!) percentage of the enclosing {{htmlelement("figure") }} element (this was worked out with experimentation based on the required button height). Its position is also specifically set to `relative`, which is required for its responsiveness (more on that later).

As mentioned earlier, a `data-state` attribute is now used to indicate whether the video controls are visible or not and these also need to be styled:

```css live-sample___video-player-styled
.controls[data-state="hidden"] {
  display: none;
}

.controls[data-state="visible"] {
  display: block;
}
```

There are a number of properties that also need to be set for all elements within the video controls:

```css live-sample___video-player-styled
.controls > * {
  float: left;
  width: 3.90625%;
  height: 100%;
  margin-left: 0.1953125%;
  display: block;
}

.controls > *:first-child {
  margin-left: 0;
}
```

All elements are floated left, as they are to be aligned next to one another, and each element is set to have a `width` of nearly 4% (again the actual value was calculated based on the required dimensions of the buttons), and a `height` of 100%. A value for `margin-left` is also set, but the first element (in this case the play/pause button) has this property overridden by the value 0.

The {{htmlelement("div") }} container for the {{htmlelement("progress") }} element also requires some specific settings; it is set to be much wider than the other child elements and its cursor value is set to be pointer:

```css live-sample___video-player-styled
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Buttons

The first major styling task to tackle is to make the video control's buttons actually look like and act like real buttons.

Each button has some basic styling:

```css live-sample___video-player-styled
.controls button {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: none;
  cursor: pointer;
  text-indent: -99999px;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

By default, all {{htmlelement("button") }} elements have a border, so this is removed. Since background images will be used to display appropriate icons, the background color of the button is set to be transparent, non-repeated, and the element should fully contain the image.

The `:hover` and `:focus` states are then set for each button that alters the opacity of the button:

```css live-sample___video-player-styled
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

To obtain appropriate button images, a set of free common control set icons was downloaded from the web. Each image was then converted to a base64 encoded string (using an online [base64 image encoder](https://www.base64-image.de/)), since the images are quite small, the resultant encoded strings are quite short.

Since some buttons have dual functionality, e.g., play/pause, and mute/unmute, these buttons have different states that need to be styled. As mentioned earlier, a `data-state` variable is used to indicate which state such buttons are currently in.

For example, the play/pause button has the following background image definitions (the full base64 strings have been omitted for brevity):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

```css hidden live-sample___video-player-styled
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNkU0NTY5NkE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNkU0NTY5NUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kBUJ9AAAAXFJREFUeNrsmLtOAkEUhneQyiAdDTExGlYMBaW9oq/ge8jlUbwkthTY2EGBLehbKK0UxsQgVK7/SWbMZo3j3mbmxPAnXyi2+fIzZ3dmRBAEHucUPO6hBhUyNXAH3umxJRZgCBo/nCKCe+DVoliUN5LUCd46lFOMwk4iPCRCiDl+Ko5X3RJOm99OEcGAyVyIrFO8lEPE9jXTBNvgRq4ba6+ZuAs5nFMwy3NQdFOcRpBSBtfgk6ugykkebZoUpGyBqyxtmhZUaYFnzoKqzcukbdoUVDkGT5wFKSVwEadNV4IqR3+16VrQkxuSVRxBVzvqKija+tQl/fafyx00u7/YBxOOU0yttcEHx9fMPphy/JJQa50krdkUrIMHjruZDdBN25ppwYOsrZkSpNZ68hDFast/Bg7Bo4nDu+7g/m/Oxc6u3+YMnBY6wTEDwXvdbmYXvDi82aKrP183xZQd0LcsSktrIC9PvV+neH1HvRZ0kC8BBgADq2RhyZa7BQAAAABJRU5ErkJggg==");
}
.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzE0QzJGQUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzAxODM5QUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r7sqzQAAANdJREFUeNrs2MEKwjAMBuDGswd9C/UdPHvy6Ft6UTyKr6RDcceawDpKHZsE2kb4Az87GOiHNLCFvPfOcs2c9ZJ/MKSrDefCaeXnQmm7M9dfpgQoDY+CsDRy9moMeKqICznGJoqHhIie/JhXvnUNmxa9KQF6I3NBfzPFANYC7uTKRtkqeyZLOyQ0dLcVPRgSAAEEEEAAAQQQwJ9ftzQ92YAHzjLKXtmT7YUVX3UA5gK+DJiaMeDNAPCaToyl9dvdTazfpMIC810QJmed3cACk7CjBrByfQQYAHwMIXlfZRgfAAAAAElFTkSuQmCC");
}
.controls button[data-state="stop"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzAxODM5M0E0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzAxODM5MkE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KkF/7gAAAOFJREFUeNrsmMsKwjAQRTNdu/ELpAUR/AVdC/6nu66kK/0hFXyBj22cQCohQqDUJFO4A4cusphDmFvaIa21klyFkl7mBltszZgt8zTHiXgzDTP/cfIEp8wtoZjP3UiGBOuMci2N60RuSIjoyo9x5ql7sdPo6+QJaiG5oMGkGIKpBddmVHuy7NKwa0gK+yronYNYIdGYQQhCEIIQhCAEIThoQZIuuPpDz0XMD1b81SHFsQUvApweIcGdAMG9nxh3u1UyJ5Vvs3VmqtD6zdSE2TCHhGJH27P0L42wo4Zg5voIMAB0bCBXvSa7VQAAAABJRU5ErkJggg==");
}
.controls button[data-state="mute"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzYxQThBMUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzYxQThBMEE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ohJkMQAAAjNJREFUeNrsmM8rRFEUx8ePxo8YokmJpMiGkIWU8mNJIZRkKcWGnfwDNgoh2ZB/gWzsKXakiSaUskP5LaMxz/fWmTqd3rx5Y96dod6pT3r33td83HPfvee9DMMwPH85MlxBV9AVjBNKkJNEzInrcpCbtI9DguMgIn8LfINrsA16QXY6BPtAmISkoETJjqmllSrBbvDJBHjcgFAM0X3g1y3YDJ7ED8tQKW0DC+BBjL0E1boEa8Cdyczw6AJV7LoYrNBa5ZKlTgtW0Foy4ghG287BLMij9hHwwfp3nRQsAmcx5OI9JFegkfr6xUwOOyGYD44s5OTNB+BZ9Ks120D9K2KWM+0KroGvOCJ2BFV4wQR4YWMuQA5l45G1d9oVDP9Szmr6VWpf2bhpal9mbet2BQ0Ngipm2LhTautkbSfpFixgm3qEUuxj976bCWamsC55o/XnoaOunNbmG3sI8+RNqRR0rNzSleJCkWLfX0vxOG0vHtrsVXpbWH/Q7CYzwYgGuSYwz6436e8Aazuym+KNJPZCGWrGJsUeGN2oi8VG3eHEUXecgOChOEEMEqqn/lXWHkjkqLMKfxLFgpq5OpZaXiwMOl1u3SYgGKBTxMsqGV5u7egoWGttFKzqGKsUJ8mSScFaoqvkb7VR8quHoR0sgnsxNij+AW0vTaEYgncWa3VPlvo6XzuHEnjtVCkdTceL+1QMwTBJbYEekJWuLwtmnz7K2NH269rA/brlCrqC/13wR4ABACa7olAORNxuAAAAAElFTkSuQmCC");
}
.controls button[data-state="unmute"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzk2MTA2OUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzk2MTA2OEE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LD0czAAAARZJREFUeNrsly8LAkEQxW/lksUgGMxWs8VgEdRgEMwmv4Lfw2TwawgaxGI2WQ0Gm0WDBv+db3SFK4K3nnMjzIMfF/exzHs7Z4Ig8CQr5QmXGlSDf2fQGONKz8kh1UwUHNUBt6hnPc5jMNgEl+ddyDNYAQcy52rQRD2U5ulDFcEcZELjZKSkuACmYXOSaiYPxiAnsQfpxib2BsUVdRqM7Owl+pL0wemVzBCU1nLc8+KS4jM+vuOjwJJi32OUbjNqUA3+wOBVusGB3e9YFOe6RU/dDJSSLup3OoIaWEoOyQ40wFpyijegCraSa2YF6mAvuQcXoGVXM7FFTaluf9WdTD/uXdcfd67dbgiyLEWty4IaVIPCdBdgAJkkaR2v57S0AAAAAElFTkSuQmCC");
}
.controls button[data-state="vol-up"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzU1OEJFREE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzU1OEJFQ0E0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1Pk2GwAAAQ9JREFUeNrsmL0KwjAQgHMOiogIPoLSQR9CcdDRxclXLIrg2mdSsYK41HjBVEJsM6XNld7BR6GF9mu4y8+BlFJQjo6gHmoEc3REyAG5qcc1cUViZPrnZAnOahazuSATl+A5oFxObDqBWSQA8MRLP3DWpeg0+jlZgpJIXUBjqrg1gmuVIRY7Hy/2lYNQ8vMZ5Rx8cw6yYNsENwVTCZRUsFndOQNkrNlXMc2A54HJKC91Peo52PUt+KBeJENk4fG7SwprsdA7ZN4PsiALVrny+BJcFdzbUtry87GzMYIvAk6pSzAhIJjYCWl2t+YibPtN9QkjV/tNheoRnvRQ1yV2R47i2zwVpe03rmIWDBAfAQYAByYx7rBsQ/AAAAAASUVORK5CYII=");
}
.controls button[data-state="vol-down"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzU1OEJGMUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzU1OEJGMEE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B37OGAAAANpJREFUeNrs2MEKwjAMBuDGk0efwSGCr6FXfU/FHeZV30hQ50U8dSmsMiLUCV0b5Q/87DDYPspCRshaazTXyGgvd4I+bc05e87V3U6UC2fLKd5MArhIDJM5c6Yh4CEjzmfXNVG3SYjowZdx5q+uZtPkZRJAq6Qv6Ge6GEAAAQQQwP61csMmUpZ9X/rNqKPYEw2j7p+BNARwHek7dM/YDNEk+B9EkwAIIIAAfgY+FZjuIeBJAfAo555cv91Mvs2W2xMWofWbR1btUaeC1ZySM5OHRthRA5i5GgEGAJmoHqaNWADvAAAAAElFTkSuQmCC");
}
.controls button[data-state="go-fullscreen"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCM0M2OUNCREE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCM0M2OUNCQ0E0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cU+iTAAAAZBJREFUeNrs2D9OwzAUBvC6iMMgBgYGpLIxIqYS0cPQKkOIuBErZ2DiDnQoHVBpaQnPEpUs13+e/T5LHfKkb6mr+BfHbh2rrusGx1yqB0pLA83ojyKpBd09xa5/4EkE1oAxaUoBa+CDa7jAIfOCv5R3IPCVskXPQX3BBwDuhvKFesRrMNKF2+UC9Zy7onw6kBMQTg/ArTknuUBzQSCQXpzRb8MFularBBkaObvvhgP0VQ4yiHMtUgkwFRnFlQCGkFUqrhTQhZxTLoz2e8omhisJNJE2zkZ6cRzgwXZLKZWK/Ka8edo1ckV5CQGT9oOJQMh2L1TDwZGXFDimXAbazykj9I6aW9X/Ilh4kBr3QVlSrnMXSS6wsn5GbOQet2/3IksAbZwLMGZ8pwhQ4344HTNvBAr04UaS0c4BtiAcC2n1/cjdsLYgXBRp9DtN3fK3IBxnJKe5L007EC6EXKFe3JfifwU/UgzcgHAmcos8WTil3AGBZ5STEqdbzwDcrOTplhQ5Sz1+609Ye2APjNSfAAMAv4p3Pa/O/tsAAAAASUVORK5CYII=");
}
.controls button[data-state="cancel-fullscreen"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCM0M2OUNCOUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzlFNDkzMUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1VELOwAAAadJREFUeNrs2EtOwzAQBuAEOAEIKsQluAAbGqSGHRIrEKveoQEWNOF0SFyGZ6GkwowlWwpm7IwdT8kiI/2LWk39yY4faiqESPpcG0nPq/fARE5xM0btrIGw7fQ4gJeQJ8gRI24MeYac+wIvICv5fcgrE1Li3lUftUZSgAeQhXpQMCGbOJ03yC51BM8gSyYkhpN95b7voA+yQtpukLbMgjsNWSRUZKXa/2wQBjJzjVwosA1ZNdowoMwtFRcKtCHNzzagsDybk/ZlItCGpAJJuK5AjVx1ANYuHAb0PYsPIZsdtpgt9RvRzuIEWa1dp1hYtqBOU3zf0qEvUK/uVmBqotI0/ffb1XBhHYBIlQyL5Dr2NlNGBBZcJ0kZAVhwniQP6qgLrS/II9dJMoF8RhhBee06jj3FGK72ANYIchwLiOFkByeQOQFYqCv9koL0BeYOnK65AzgzfgtDZqFACk7XHdI2Q9pakVTgxAPnW7lruinAfcgHE86FfIHsUUdwCvlmwmFIubde+b6DU/V3BAeuiVxoXMgqHq3hwjLyulEP98EBOAB/148AAwA7RI/R8UopbwAAAABJRU5ErkJggg==");
}
```

When the `data-state` of the button is changed, the appropriate image will also be changed. All the other buttons are treated in a similar way.

### Progress bar

The {{htmlelement("progress") }} element has the following basic style set up:

```css live-sample___video-player-styled
.controls progress {
  display: block;
  width: 100%;
  height: 81%;
  margin-top: 0.125rem;
  border: none;
  color: #0095dd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
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

Although the same properties are set to the same value, these rules need to be defined separately, otherwise Chrome ignores it.

## Responsive styling

Now that the player has its basic look and feel taken care of, some other styling changes — involving media queries — need to be made in order to make it responsive.

The player currently works fairly well until displayed on a "medium" screen (e.g., 1024px/64em) or smaller. In this case, the margins and padding on the {{ htmlelement("figure") }} element need to be removed so that all the available space is taken advantage of, and the buttons are a bit too small so this needs to be altered by setting a new height on the element that has the `.controls` class set on it:

```css
@media screen and (width <= 64em) {
  figure {
    padding-left: 0;
    padding-right: 0;
    height: auto;
  }

  .controls {
    height: 1.876rem;
  }
}
```

This works well enough until it is viewed on a smaller screen (680px/42.5em), so another breakpoint is made here. Since the height of the `.controls` class element will now vary, a fixed height is no longer required — it is therefore set to `auto`. The definitions for the elements within the `.controls` element now also need to be changed:

```css
@media screen and (width <= 42.5em) {
  .controls {
    height: auto;
  }

  .controls > * {
    display: block;
    width: 16.6667%;
    margin-left: 0;
    height: 2.5rem;
    margin-top: 2.5rem;
  }

  .controls .progress {
    position: absolute;
    top: 0;
    width: 100%;
    float: none;
    margin-top: 0;
  }

  .controls .progress progress {
    width: 98%;
    margin: 0 auto;
  }

  .controls button {
    background-position: center center;
  }

  figcaption {
    text-align: center;
    margin-top: 0.5rem;
  }
}
```

The `.progress` container is now moved to the top of the control set via `position:absolute`, so it and all the buttons need to be wider. In addition, the buttons need to be pushed below the progress container so that they are visible.

## JavaScript

That's really it for the immediate styling; the next task is making a number of JavaScript changes to ensure that everything works as expected.

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
```

### Control visibility

The first change is simple: the `data-state` for showing the video controls when JavaScript is available to the browser now needs to be set, to replace the manual `videoControls.style.display = "block"`:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Button functionality

This section looks at the JavaScript required for implementing the button functionality.

#### Play/Pause and mute

Now that the buttons actually look like buttons and have images that indicate what they do, some changes need to be made so that the "dual functionality" buttons (such as the play/pause button) are in the correct "state" and display the correct image. In order to facilitate this, a new function is defined called `changeButtonState()`, which accepts a type variable indicating the button's functionality:

```js
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

```js
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

You might have noticed that there are new handlers where the `play` and `pause` events are reacted to on the video. There is a reason for this! Even though the browser's default video control set has been turned off, many browsers make them accessible by right-clicking on the HTML video. This means that a user could play/pause the video from these controls, which would then leave the custom control set's buttons out of sync. If a user uses the default controls, the defined Media API events — such as `play` and `pause` — are raised so this can be taken advantage of to ensure that the custom control buttons are kept in sync. To ensure this, a new click handler needs to be defined for the play/pause button so that it too raises the `play` and `pause` events:

```js live-sample___video-player-styled
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

#### Volume

The `alterVolume()` function, called when the player's volume buttons are clicked, also changes — it now calls a new function called `checkVolume()`:

```js
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
```

This new `checkVolume()` function does the same thing as the `alterVolume()` but it also sets the state of the mute button depending on the video's current volume setting. `checkVolume()` is also called when the `volumechange` event is raised:

```js
video.addEventListener("volumechange", () => {
  checkVolume();
});
```

#### Progress bar

A small change also needs to be made to the click handler for the {{ htmlelement("progress") }} element. Since the enclosing {{htmlelement("figure") }} element now has `position:relative` set on it, the calculations made by this click handler are incorrect. It now also needs to take into account the offset position of the parent element:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});

video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

#### Fullscreen

The [FullScreen implementation](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hasn't changed.

```js hidden live-sample___video-player-styled
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
fullscreen.addEventListener("click", (e) => {
  handleFullscreen();
});
function handleFullscreen() {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
    setFullscreenData(false);
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
    setFullscreenData(true);
  }
}
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", state);
  // Set the fullscreen button's 'data-state' which allows the
  // correct button image to be set via CSS
  fullscreen.setAttribute(
    "data-state",
    `${state ? "cancel" : "go"}-fullscreen`,
  );
}
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Result

{{EmbedLiveSample("video-player-styled", "", 600)}}
