---
title: CloseWatcher
slug: Web/API/CloseWatcher
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CloseWatcher
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The `CloseWatcher` interface listens and responds to close requests. The user usually sends close requests using the <kbd>Esc</kbd> key, the back button on Android, the "z" gesture on iOS VoiceOver, and similar actions on other platforms. Custom UI components don't respond to these close requests like built-in components ([popover](/en-US/docs/Web/API/Popover_API) or [dialog](/en-US/docs/Web/HTML/Element/dialog)) do. The `CloseWatcher` API abstracts device-specific close methods and delivers a `close` event that custom UI components can use to deliver a device-integrated close behaviour.

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
  - : Immediately fires the `close` event, without firing `cancel` first, and deactivates the close watcher as if `destroy()` was called.
- {{domxref("CloseWatcher.destroy()")}} {{Experimental_Inline}}
  - : Deactivates the close watcher so that it will no longer receive `close` events.

## Events

- {{domxref("CloseWatcher.cancel_event", "cancel")}} {{Experimental_Inline}}
  - : An event fired before the `close` event, so that `close` can be prevented from firing.
- {{domxref("CloseWatcher.close_event", "close")}} {{Experimental_Inline}}
  - : An event fired when a close request was received.

## Examples

### Processing close requests

In this example, you have your own UI component (a picker) and you want to support both, the platform's default close method (e.g. the <kbd>Esc</kbd> key) and your custom close method (a close button).

You create a `CloseWatcher` to handle all `close` events.

The `onclick` handler of your UI component can call `requestClose` to request a close and to route your close request through the same `onclose` handler the platform close method uses.

```js
const watcher = new CloseWatcher();
const picker = setUpAndShowPickerDOMElement();
let chosenValue = null;

watcher.onclose = () => {
  chosenValue = picker.querySelector("input").value;
  picker.remove();
};

picker.querySelector(".close-button").onclick = () => watcher.requestClose();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLDialogElement.close_event", "close")}} event on {{domxref("HTMLDialogElement")}}
