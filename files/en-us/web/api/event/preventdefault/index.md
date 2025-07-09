---
title: "Event: preventDefault() method"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
page-type: web-api-instance-method
browser-compat: api.Event.preventDefault
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`preventDefault()`** method of the {{domxref("Event")}} interface tells the {{Glossary("user agent")}} that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

The event continues to propagate as usual,
unless one of its event listeners calls
{{domxref("Event.stopPropagation", "stopPropagation()")}}
or {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}},
either of which terminates propagation at once.

As noted below, calling **`preventDefault()`** for a
non-cancelable event, such as one dispatched via
{{domxref("EventTarget.dispatchEvent()")}}, without specifying
`cancelable: true` has no effect.

If a passive listener calls `preventDefault()`, nothing will happen and a console warning may be generated.

> [!NOTE]
> Look for better alternatives than using `preventDefault()` to block default actions. For example, you can use the `disabled` or `readonly` attribute on a form control to prevent it from being interacted with, use [HTML constraint validation](/en-US/docs/Web/HTML/Guides/Constraint_validation) to reject invalid input, or use the {{cssxref("overflow")}} property to prevent scrolling.

## Syntax

```js-nolint
preventDefault()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Blocking default click handling

Toggling a checkbox is the default action of clicking on a checkbox. This example
demonstrates how to prevent that from happening:

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### Result

{{EmbedLiveSample("Blocking_default_click_handling")}}

## Notes

Calling `preventDefault()` during any stage of event flow cancels the event,
meaning that any default action normally taken by the implementation as a result of the
event will not occur.

You can use {{domxref("Event.cancelable")}} to check if the event is cancelable.
Calling `preventDefault()` for a non-cancelable event has no effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
