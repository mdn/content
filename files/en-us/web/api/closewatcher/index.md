---
title: CloseWatcher
slug: Web/API/CloseWatcher
page-type: web-api-interface
browser-compat: api.CloseWatcher
status:
  - experimental
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The `CloseWatcher` API listens and responds to close requests. A close request can be for anything that the user wants to close, like a [popover](/en-US/docs/Web/API/Popover_API), a sidebar, a [dialog](/en-US/docs/Web/HTML/Element/dialog), or any UI that has an open/close interaction.

The user usually sends close requests using the <kbd>Esc</kbd> key, the back button on Android, the "z" gesture on iOS VoiceOver, and similar actions on other platforms.

{{InheritanceDiagram}}

The `CloseWatcher` interface inherits from {{domxref("EventTarget")}}.

## Constructor

- {{domxref("CloseWatcher.CloseWatcher", "CloseWatcher()")}} {{Experimental_Inline}}
  - : Creates a new `CloseWatcher` instance.

## Instance methods

_This interface also inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref("CloseWatcher.requestClose()")}} {{Experimental_Inline}}
  - : Fires a `cancel` event and if that event is not canceled with {{domxref("Event.preventDefault()")}}, proceeds to fire a `close` event, and then finally deactivates the close watcher as if `destroy()` was called.
- {{domxref("CloseWatcher.close()")}} {{Experimental_Inline}}
  - : Immediately fires the `close` event and deactivates the close watcher as if `destroy()` was called. Skips any logic in the `cancel` event handler.
- {{domxref("CloseWatcher.destroy()")}} {{Experimental_Inline}}
  - : Deactivates the close watcher so that it will no longer receive `close` events.

## Events

- {{domxref("CloseWatcher.cancel_event", "cancel")}} {{Experimental_Inline}}
  - : An event fired before the `close` event, so that `close` can be prevented from firing.
- {{domxref("CloseWatcher.close_event", "close")}} {{Experimental_Inline}}
  - : An event fired when a close request was received.

## Examples

### Using the `CloseWatcher` API

The following code example gives an overview how use use the `CloseWatcher` methods and events.

```js
// Create a new close watcher 
const watcher = new CloseWatcher();

// Listen for close requests
watcher.addEventListener("close", () => {
  // Close your UI component
  sidebar.hide();
  // Dispose the watcher instance
  watcher.destroy();
};

// Use the cancel event to interrupt the close request
watcher.addEventListener("cancel", (e) => {
  e.preventDefault();
  // Close if some condition is met
  if (condition) {
    watcher.close();
  }
};

// Trigger a close request manually
watcher.requestClose();

// Trigger the close handler, bypassing the cancel handler
watcher.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLDialogElement.close_event", "close")}} event on {{domxref("HTMLDialogElement")}}
