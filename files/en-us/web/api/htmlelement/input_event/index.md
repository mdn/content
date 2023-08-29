---
title: "HTMLElement: input event"
short-title: input
slug: Web/API/HTMLElement/input_event
page-type: web-api-event
browser-compat: api.HTMLElement.input_event
---

{{APIRef}}

The **`input`** event fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.

The event also applies to elements with {{domxref("HTMLElement.contentEditable", "contenteditable")}} enabled, and to any element when {{domxref("Document.designMode", "designMode")}} is turned on. In the case of `contenteditable` and `designMode`, the event target is the _editing host_. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

For `<input>` elements with `type=checkbox` or `type=radio`, the `input` event should fire whenever a user toggles the control, per the [HTML Living Standard specification](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). However, historically this has not always been the case. Check compatibility, or use the {{domxref("HTMLElement/change_event", "change")}} event instead for elements of these types.

For {{htmlelement("textarea")}} and {{htmlelement("input")}} elements that accept text input (`type=text`, `type=tel`, etc.), the interface is {{DOMxRef("InputEvent")}}; for others, the interface is {{DOMxRef("Event")}}.

> **Note:** The `input` event is fired every time the `value` of the element changes. This is unlike the {{domxref("HTMLElement/change_event", "change")}} event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("input", (event) => {});

oninput = (event) => {};
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

This example logs the value whenever you change the value of the {{HtmlElement("input")}} element.

### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - {{domxref("HTMLElement/change_event", "change")}}
  - {{domxref("HTMLInputElement/invalid_event", "invalid")}}
