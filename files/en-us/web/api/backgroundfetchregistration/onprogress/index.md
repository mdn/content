---
title: BackgroundFetchRegistration.onprogress
slug: Web/API/BackgroundFetchRegistration/onprogress
tags:
  - API
  - Property
  - Reference
  - onprogress
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.onprogress
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`onprogress`** EventHandler of the {{domxref("BackgroundFetchRegistration")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes background fetch events.

The event fires when any of the following properties change:

- `uploaded`
- `downloaded`
- `result`
- `failureReason`

## Syntax

```js
BackgroundFetchRegistration.onprogress = function;
BackgroundRegistration.addEventListener('progress', function);
```

Where `function` is the JavaScript function to execute.

## Example

The following example demonstrates how to log the progress of a download. The code first checks that a `downloadTotal` was provided when the background fetch was registered. This is then used to calculate the percentage, based on the `downloaded` property.

```js
bgFetch.addEventListener('progress', () => {
  if (!bgFetch.downloadTotal) return;
  const percent = Math.round(bgFetch.downloaded / bgFetch.downloadTotal * 100);
  console.log(`Download progress: ${percent}%`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
