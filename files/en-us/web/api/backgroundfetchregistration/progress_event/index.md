---
title: "BackgroundFetchRegistration: progress event"
short-title: progress
slug: Web/API/BackgroundFetchRegistration/progress_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.progress_event
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`progress`** event of the {{domxref("BackgroundFetchRegistration")}} interface thrown when the associated background fetch progresses.

Practically, this event is fired when any of the following properties will return a new value:

- {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
- {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
- {{domxref("BackgroundFetchRegistration.result", "result")}}, or
- {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set the `onprogress` event property on the relevant {{domxref("BackgroundFetchRegistration")}} object.

```js-nolint
addEventListener("progress", (event) => { })
onprogress = (event) => { }
```

## Event type

A generic {{domxref("Event")}} with no added properties.

## Example

The following example demonstrates how to log the progress of a download. The code first checks that a `downloadTotal` was provided when the background fetch was registered. This is then used to calculate the percentage, based on the `downloaded` property.

```js
bgFetch.addEventListener("progress", () => {
  if (!bgFetch.downloadTotal) return;
  const percent = Math.round(
    (bgFetch.downloaded / bgFetch.downloadTotal) * 100,
  );
  console.log(`Download progress: ${percent}%`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
