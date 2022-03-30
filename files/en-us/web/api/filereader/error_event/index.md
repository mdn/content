---
title: 'FileReader: error event'
slug: Web/API/FileReader/error_event
tags:
  - API
  - Error
  - Event
  - FileReader
  - ProgressEvent
  - Reference
  - Web
  - onerror
browser-compat: api.FileReader.error_event
---
{{APIRef}}

The `error` event is fired when the read failed due to an error (for example, because the file was not found or not readable).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', event => { });

onerror = event => { };
```

## Event type

An {{domxref("ProgressEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Event properties

{{page("/en-US/docs/Web/API/ProgressEvent", "Properties")}}

## Examples

```js
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

function handleSelected(e) {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {

        reader.addEventListener('error', () => {
            console.error(`Error occurred reading file: ${selectedFile.name}`);
        });

        reader.addEventListener('load', () => {
            console.error(`File: ${selectedFile.name} read successfully`);
        });

        reader.readAsDataURL(selectedFile);
    }
}

fileInput.addEventListener('change', handleSelected);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.abort_event", "abort")}}
