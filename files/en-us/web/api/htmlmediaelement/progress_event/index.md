---
title: 'HTMLMediaElement: progress event'
slug: Web/API/HTMLMediaElement/progress_event
page-type: web-api-event
tags:
  - API
  - Event
  - HTMLMediaElement
  - Reference
  - Web
  - progress
browser-compat: api.HTMLMediaElement.progress_event
---
{{APIRef}}

The **`progress`** event is fired periodically as the browser loads a resource.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('progress', (event) => {});

onprogress = (event) => { };
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
  margin: .2rem;
  padding: .2rem;
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
  margin: .5rem 0;
}

video {
  grid-area: video;
}

.event-log {
  grid-area: log;
}

.event-log>label {
  display: block;
}
```

#### JavaScript

```js
const loadVideo = document.querySelector('button');
const video = document.querySelector('video');
const eventLog = document.querySelector('.event-log-contents');
let source = null;

function handleEvent(event) {
    eventLog.textContent += `${event.type}\n`;
}

video.addEventListener('loadstart', handleEvent);
video.addEventListener('progress', handleEvent);
video.addEventListener('canplay', handleEvent);
video.addEventListener('canplaythrough', handleEvent);

loadVideo.addEventListener('click', () => {

    if (source) {
        document.location.reload();
    } else {
        loadVideo.textContent = "Reset example";
        source = document.createElement('source');
        source.setAttribute('src', 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4');
        source.setAttribute('type', 'video/mp4');

        video.appendChild(source);
    }
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
