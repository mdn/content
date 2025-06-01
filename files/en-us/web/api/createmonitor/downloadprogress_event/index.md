---
title: "CreateMonitor: downloadprogress event"
short-title: downloadprogress
slug: Web/API/CreateMonitor/downloadprogress_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.CreateMonitor.downloadprogress_event
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`downloadprogress`** event of the {{domxref("CreateMonitor")}} interface is fired when progress is made on the AI model download.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("downloadprogress", (event) => { })

ondownloadprogress = (event) => { }
```

## Event type

A {{domxref("ProgressEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Examples

See the main {{domxref("CreateMonitor")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
