---
title: "Element: beforeinput event"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
page-type: web-api-event
browser-compat: api.Element.beforeinput_event
---

{{APIRef}}

The DOM **`beforeinput`** event fires when the value of an {{HTMLElement("input")}} or {{HTMLElement("textarea")}} element is about to be modified. But in contrast to the {{domxref("Element/input_event", "input")}} event, it does not fire on the {{HTMLElement("select")}} element. The event also applies to elements with {{domxref("HTMLElement.contentEditable", "contenteditable")}} enabled, and to any element when {{domxref("Document.designMode", "designMode")}} is turned on.

This allows web apps to override text edit behavior before the browser modifies the DOM tree, and provides more control over input events to improve performance.

In the case of `contenteditable` and `designMode`, the event target is the **editing host**. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

> [!NOTE]
> Not every user modification results in `beforeinput` firing. Also the event may fire but be non-cancelable. This may happen when the modification is done by autocomplete, by accepting a correction from a spell checker, by password manager autofill, by {{Glossary("Input method editor", "IME")}}, or in other ways. The details vary by browser and OS. To override the edit behavior in all situations, the code needs to handle the `input` event and possibly revert any modifications that were not handled by the `beforeinput` handler. See bugs [1673558](https://bugzil.la/1673558) and [1763669](https://bugzil.la/1763669).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforeinput", (event) => {});

onbeforeinput = (event) => {};
```

## Event type

An {{domxref("InputEvent")}}. Inherits from {{domxref("UIEvent")}}.

{{InheritanceDiagram("InputEvent")}}

## Event properties

_This interface inherits properties from its parents, {{DOMxRef("UIEvent")}} and {{DOMxRef("Event")}}._

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : Returns a string with the inserted characters. This may be an empty string if the change doesn't insert text (for example, when deleting characters).
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DataTransfer")}} object containing information about richtext or plaintext data being added to or removed from editable content.
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : Returns the type of change for editable content such as, for example, inserting, deleting, or formatting text.
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : Returns a {{JSxRef("Boolean")}} value indicating if the event is fired after {{domxref("Element/compositionstart_event", "compositionstart")}} and before {{domxref("Element/compositionend_event", "compositionend")}}.

## Examples

### Feature Detection

The following function returns true if `beforeinput`, and thus `getTargetRanges`, is supported.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Simple logger

This example logs the current value of the element, immediately before replacing that value with the new one applied to the {{HtmlElement("input")}} element.

#### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("beforeinput", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Result

{{EmbedLiveSample("Simple_logger")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related event: {{domxref("Element/input_event", "input")}}
