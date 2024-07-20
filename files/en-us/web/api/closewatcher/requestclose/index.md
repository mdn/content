---
title: "CloseWatcher: requestClose() method"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CloseWatcher.requestClose
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`requestClose()`** method of the {{domxref("CloseWatcher")}} interface fires a `cancel` event and if that event is not canceled with {{domxref("Event.preventDefault()")}}, proceeds to fire a `close` event, and then finally deactivates the close watcher as if `destroy()` was called.

## Syntax

```js-nolint
requestClose()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the `requestClose()` method

In this example, you have your own UI component (a picker), and you want to support both the platform's default close method (e.g. the <kbd>Esc</kbd> key) and your custom close method (a close button).

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
