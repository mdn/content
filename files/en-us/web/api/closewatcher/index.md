---
title: CloseWatcher
slug: Web/API/CloseWatcher
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CloseWatcher
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The `CloseWatcher` interface listens and responds to close requests.

Some UI components have "close behavior", meaning that the component appears, and the user can close it when they are finished with it. For example: sidebars, popups, dialogs, or notifications.

Users generally expect to be able to use a particular mechanism to close these elements, and the mechanism tends to be device-specific. For example, on a device with a keyboard it might be the <kbd>Esc</kbd> key, but Android might use the back button. For built-in components, such as [popover](/en-US/docs/Web/API/Popover_API) or {{htmlelement("dialog")}} elements, the browser takes care of these differences, closing the element when the user performs the close action appropriate for the device. However, when a web developer implements their own closable UI component (for example, a sidebar), it is hard to implement this kind of device-specific close behavior. The `CloseWatcher` interface solves this problem by delivering a `close` event to the when the user executes the close action for the device.

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
