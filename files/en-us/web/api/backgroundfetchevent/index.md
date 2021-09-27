---
title: BackgroundFetchEvent
slug: Web/API/BackgroundFetchEvent
tags:
  - API
  - Interface
  - Reference
  - BackgroundFetchEvent
browser-compat: api.BackgroundFetchEvent
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`BackgroundFetchEvent`** interface of the {{domxref('Background Fetch API','','',' ')}} is the event type for background fetch events dispatched on the {{domxref("ServiceWorkerGlobalScope", "service worker global scope")}}.

It is the event type passed to `onbackgroundfetchabort` and `onbackgroundfetchclick`.

## Constructor

- {{domxref("BackgroundFetchEvent.BackgroundFetchEvent()", "BackgroundFetchEvent()")}}
  - : Creates a new `BackgroundFetchEvent` object. This constructor is not typically used, as the browser creates these objects itself and provides them to background fetch event callbacks.

## Properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("BackgroundFetchEvent.registration")}}{{ReadOnlyInline}}
  - : Returns the {{domxref("BackgroundFetchRegistration")}} that the event was initialized to.

### Event handlers

None.

## Methods

None.

## Examples

In this example, if the user clicks on the user interface displaying the download progress, a new window will open. The current {{domxref("BackgroundFetchRegistration")}} is returned by calling `event.registration`.

```js
addEventListener('backgroundfetchclick', (event) => {
  const bgFetch = event.registration;

  if (bgFetch.result === 'success') {
    clients.openWindow('/latest-podcasts');
  } else {
    clients.openWindow('/download-progress');
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
