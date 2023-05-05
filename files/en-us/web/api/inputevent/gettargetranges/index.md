---
title: "InputEvent: getTargetRanges() method"
short-title: getTargetRanges()
slug: Web/API/InputEvent/getTargetRanges
page-type: web-api-instance-method
browser-compat: api.InputEvent.getTargetRanges
---

{{APIRef("UI Events")}}

The **`getTargetRanges()`** method of the {{domxref("InputEvent")}} interface returns an array of static ranges that will be affected by a change to the DOM if the input event is not canceled.

This allows web apps to override text edit behavior before the browser modifies the DOM tree, and provides more control over input events to improve performance.

## Syntax

```js-nolint
getTargetRanges()
```

### Parameters

None.

### Return value

An array of {{domxref("StaticRange")}} objects.

## Examples

### Feature Detection

The following function returns true if `beforeinput`, and thus
`getTargetRanges`, is supported.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Basic usage

The following example selects a `contenteditable` element and utilizes the
[`beforeinput`](/en-US/docs/Web/API/HTMLElement/beforeinput_event)
event to log the result of `getTargetRanges()`.

```js
const editableElem = document.querySelector('[contenteditable="true"]');

editableElem.addEventListener("beforeinput", (e) => {
  const targetRanges = e.getTargetRanges();
  console.log(targetRanges);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
