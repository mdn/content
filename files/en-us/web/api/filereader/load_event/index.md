---
title: 'FileReader: load event'
slug: Web/API/FileReader/load_event
page-type: web-api-event
tags:
  - API
  - Event
  - FileReader
  - Web
  - load
browser-compat: api.FileReader.load_event
---
{{APIRef}}

The `load` event is fired when a file has been read successfully.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('load', (event) => { });

onload = (event) => { };
```

## Event type

A {{domxref("ProgressEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Event properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer value indicating the amount of work already performed by the underlying process. The ratio of work done can be calculated by dividing `total` by the value of this property. When downloading a resource using HTTP, this only counts the body of the HTTP message, and doesn't include headers and other overhead.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer representing the total amount of work that the underlying process is in the progress of performing. When downloading a resource using HTTP, this is the `Content-Length` (the size of the body of the message), and doesn't include the headers and other overhead.

## Examples

### Live example

#### HTML

```html
<div class="example">

    <div class="file-select">
        <label for="avatar">Choose a profile picture:</label>
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg">
    </div>

    <img src="" class="preview" height="200" alt="Image preview">

    <div class="event-log">
        <label for="eventLog">Event log:</label>
        <textarea readonly class="event-log-contents" id="eventLog"></textarea>
    </div>

  </div>
```

```css hidden
img.preview {
  margin: 1rem 0;
}

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
              "select  log"
              "preview log";
}

.file-select {
  grid-area: select;
}

.preview {
  grid-area: preview;
}

.event-log {
  grid-area: log;
}

.event-log>label {
  display: block;
}

.event-log-contents {
  resize: none;
}
```

#### JavaScript

```js
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector('img.preview');
const eventLog = document.querySelector('.event-log-contents');
const reader = new FileReader();

function handleEvent(event) {
    eventLog.textContent += `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        preview.src = reader.result;
    }
}

function addListeners(reader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

function handleSelected(e) {
    eventLog.textContent = '';
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        addListeners(reader);
        reader.readAsDataURL(selectedFile);
    }
}

fileInput.addEventListener('change', handleSelected);
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '300px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("FileReader.loadstart_event")}}, {{domxref("FileReader.loadend_event")}}, {{domxref("FileReader.progress_event")}}, {{domxref("FileReader.error_event")}}, {{domxref("FileReader.abort_event")}}
