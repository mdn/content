---
title: 'XMLHttpRequest: progress event'
slug: Web/API/XMLHttpRequest/progress_event
tags:
  - API
  - Event
  - ProgressEvent
  - Reference
  - Web
  - XMLHttpRequest
  - progress
browser-compat: api.XMLHttpRequest.progress_event
---
{{APIRef}}

The **`progress`** event is fired periodically when a request receives more data.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Live example

#### HTML

```html
<div class="controls">
    <input class="xhr success" type="button" name="xhr" value="Click to start XHR (success)" />
    <input class="xhr error" type="button" name="xhr" value="Click to start XHR (error)" />
    <input class="xhr abort" type="button" name="xhr" value="Click to start XHR (abort)" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
    width: 25rem;
    height: 4rem;
    border: 1px solid black;
    margin: .5rem;
    padding: .2rem;
}

input {
    width: 11rem;
    margin: .5rem;
}
```

#### JS

```js
const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');
const log = document.querySelector('.event-log');

function handleEvent(e) {
    log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
    log.textContent = '';

    const xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;
}

xhrButtonSuccess.addEventListener('click', () => {
    runXHR('https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
});

xhrButtonError.addEventListener('click', () => {
    runXHR('http://i-dont-exist');
});

xhrButtonAbort.addEventListener('click', () => {
    runXHR('https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json').abort();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/load_event", "load")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}
- [Monitoring progress](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
