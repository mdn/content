---
title: "InputEvent: getTargetRanges() method"
short-title: getTargetRanges()
slug: Web/API/InputEvent/getTargetRanges
page-type: web-api-instance-method
browser-compat: api.InputEvent.getTargetRanges
---

{{APIRef("UI Events")}}

The **`getTargetRanges()`** method of the {{domxref("InputEvent")}} interface returns an array of {{domxref("StaticRange")}} objects that will be affected by a change to the DOM if the input event is not canceled.

This allows web apps to override text edit behavior before the browser modifies the DOM tree, and provides more control over input events to improve performance.

Depending on the value of `inputType` and the current editing host, the expected return value of this method varies:

<table>
  <thead>
    <tr>
      <th>inputType</th>
      <th>Editing host</th>
      <th>Response of <code>getTargetRanges()</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"historyUndo"</code> or <code>"historyRedo"</code></td>
      <td>Any</td>
      <td>empty Array</td>
    </tr>
    <tr>
      <td>All remaining</td>
      <td><code>contenteditable</code></td>
      <td>
        an Array of
        {{domxref("StaticRange")}}
        objects associated with event
      </td>
    </tr>
    <tr>
      <td>All remaining</td>
      <td>
        <a href="/en-US/docs/Web/HTML/Element/input"><code>input</code></a>
        or <a href="/en-US/docs/Web/HTML/Element/textarea"><code>textarea</code></a>
      </td>
      <td>
        an empty Array
      </td>
    </tr>
  </tbody>
</table>

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
[`beforeinput`](/en-US/docs/Web/API/Element/beforeinput_event)
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
