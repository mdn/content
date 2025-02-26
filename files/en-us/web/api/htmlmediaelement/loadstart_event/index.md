---
title: "HTMLMediaElement: loadstart event"
short-title: loadstart
slug: Web/API/HTMLMediaElement/loadstart_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.loadstart_event
---

{{APIRef}}

The **`loadstart`** event is fired when the browser has started to load a resource.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Live example

#### HTML

```html
<div class="example">
  <button type="button">Load video</button>
  <video controls width="250"></video>

  <div class="event-log">
    <label for="eventLog">Event log:</label>
    <textarea readonly class="event-log-contents" id="eventLog"></textarea>
  </div>
</div>
```

```css hidden
.event-log-contents {
  width: 18rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.example {
  display: grid;
  grid-template-areas:
    "button log"
    "video  log";
}

button {
  grid-area: button;
  width: 10rem;
  margin: 0.5rem 0;
}

video {
  grid-area: video;
}

.event-log {
  grid-area: log;
}

.event-log > label {
  display: block;
}
```

#### JavaScript

```js
const loadVideo = document.querySelector("button");
const video = document.querySelector("video");
const eventLog = document.querySelector(".event-log-contents");
let source = null;

function handleEvent(event) {
  eventLog.textContent += `${event.type}\n`;
}

video.addEventListener("loadstart", handleEvent);
video.addEventListener("progress", handleEvent);
video.addEventListener("canplay", handleEvent);
video.addEventListener("canplaythrough", handleEvent);

loadVideo.addEventListener("click", () => {
  if (source) {
    document.location.reload();
  } else {
    loadVideo.textContent = "Reset example";
    source = document.createElement("source");
    source.setAttribute(
      "src",
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    );
    source.setAttribute("type", "video/webm");

    video.appendChild(source);
  }
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
