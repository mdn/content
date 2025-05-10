---
title: CreateMonitor
slug: Web/API/CreateMonitor
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CreateMonitor
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`CreateMonitor`** interface of the Writing Assistance APIs ({{domxref("Summarizer API", "Summarizer API", "", "nocode")}} provides information on the progress of an AI model download or some fine-tuning data for the model.

{{InheritanceDiagram}}

## Events

_Inherits events from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} {{Experimental_Inline}}
  - : Fired when progress is made on the AI model download.

## Examples

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  monitor: (monitor) => {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`download progress: ${e.loaded}/${e.total}`);
    });
  },
});

const summary = await summarizer.summarize(myText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
