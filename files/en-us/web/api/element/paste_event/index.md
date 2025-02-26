---
title: "Element: paste event"
short-title: paste
slug: Web/API/Element/paste_event
page-type: web-api-event
browser-compat: api.Element.paste_event
---

{{APIRef}}

The **`paste`** event of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) is fired when the user has initiated a "paste" action through the browser's user interface.

If the cursor is in an editable context (for example, in a {{HTMLElement("textarea")}} or an element with [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set to `true`) then the default action is to insert the contents of the clipboard into the document at the cursor position.

A handler for this event can access the clipboard contents by calling {{domxref("DataTransfer/getData", "getData()")}} on the event's `clipboardData` property.

To override the default behavior (for example to insert some different data or a transformation of the clipboard contents) an event handler must cancel the default action using {{domxref("Event/preventDefault", "event.preventDefault()")}}, and then insert its desired data manually.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `paste` event, but this will not affect the document's contents.

This event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling), is [cancelable](/en-US/docs/Web/API/Event/cancelable) and is [composed](/en-US/docs/Web/API/Event/composed).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Examples

### Live example

#### HTML

```html
<div class="source" contenteditable="true">Copy text from this box.</div>
<div class="target" contenteditable="true">And paste it into this one.</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JavaScript

```js
const target = document.querySelector("div.target");

target.addEventListener("paste", (event) => {
  event.preventDefault();

  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  selection.collapseToEnd();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '120px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/paste_event", "paste")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/paste_event", "paste")}}
