---
title: CreateMonitor
slug: Web/API/CreateMonitor
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CreateMonitor
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`CreateMonitor`** interface provides information on the progress of an AI model download or some fine-tuning data for the model.

It can be used via:

- {{domxref("Summarizer.create_static", "Summarizer.create()")}}
- {{domxref("LanguageDetector.create_static", "LanguageDetector.create()")}}
- {{domxref("Translator.create_static", "Translator.create()")}}

{{InheritanceDiagram}}

## Events

_Inherits events from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} {{Experimental_Inline}}
  - : Fired when progress is made on the AI model download.

## Examples

### Basic `CreateMonitor` usage

A `CreateMonitor` instance is used via the `monitor` property of an AI API's `create()` method ({{domxref("Summarizer.create_static", "Summarizer.create()")}} is shown below). The `monitor` property takes a callback function as a value, the argument of which is the `CreateMonitor` instance. You can then monitor download progress via the instance's {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event.

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  monitor(monitor) {
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
