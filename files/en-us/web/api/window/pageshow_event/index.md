---
title: 'Window: pageshow event'
slug: Web/API/Window/pageshow_event
page-type: web-api-event
tags:
  - API
  - Document
  - Event
  - History
  - Navigation
  - Page
  - PageTransitionEvent
  - Reference
  - Window
  - pageshow
  - show
browser-compat: api.Window.pageshow_event
---
{{APIRef("HTML DOM")}}

The **`pageshow`** event is sent to a {{domxref("Window")}} when the browser displays the window's document due to navigation.

This includes:

- Initially loading the page
- Navigating to the page from another page in the same window or tab
- Restoring a frozen page on mobile OSes
- Returning to the page using the browser's forward or back buttons

> **Note:** During the initial page load, the `pageshow` event fires _after_ the {{domxref("Window/load_event", "load")}} event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('pageshow', (event) => { });
onpageshow = (event) => { };
```

## Event type

A {{domxref("PageTransitionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageTransitionEvent")}}

## Event properties

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : Indicates if the document is loading from a cache.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onpageshow` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

This example sets up event handlers for events listed in the array `events`. The handler, `eventLogger()`, logs the type of event that occurred to the console, and includes the value of the {{domxref("PageTransitionEvent.persisted", "persisted")}} flag on `pageshow` and `pagehide` events.

### JavaScript

```js
const events = ["pagehide", "pageshow", "unload", "load"];

const eventLogger = (event) => {
  switch (event.type) {
    case "pagehide":
    case "pageshow": {
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log(`Event: ${event.type} - ${isPersisted}`);
      break;
    }
    default:
      console.log(`Event: ${event.type}`);
      break;
  }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));
```

### HTML

```html
<p>Open the console and watch the output as you navigate to and from
this page. Try loading new pages into this tab, then navigating forward
and backward through history, noting the events' output to the log.</p>
```

### Results

{{EmbedLiveSample("Examples", 640, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.pagehide_event", "pagehide")}}
