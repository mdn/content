---
title: "SVGGraphicsElement: paste event"
short-title: paste
slug: Web/API/SVGGraphicsElement/paste_event
page-type: web-api-event
browser-compat: api.Element.paste_event
---

{{APIRef}}

The **`paste`** event is fired on an {{domxref("SVGGraphicsElement")}} when the user has initiated a "paste" action through the browser's user interface.

If the cursor is in an editable context (for example, in a {{HTMLElement("textarea")}} or an element with [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set to `true`) then the default action is to insert the contents of the clipboard into the document at the cursor position.

A handler for this event can access the clipboard contents by calling {{domxref("DataTransfer/getData", "getData()")}} on the event's `clipboardData` property.

To override the default behavior (for example to insert some different data or a transformation of the clipboard contents) an event handler must cancel the default action using {{domxref("Event/preventDefault", "event.preventDefault()")}}, and then insert its desired data manually.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `paste` event, but this will not affect the document's contents.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Example

### HTML

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg
  viewBox="0 0 140 30"
  width="600"
  height="320"
  xmlns="http://www.w3.org/2000/svg">
  <foreignObject x="5" y="-10" width="90" height="20">
    <input xmlns="http://www.w3.org/1999/xhtml" value="Copy this text" />
  </foreignObject>
  <text x="5" y="30" id="element-to-paste-text" tabindex="1">
    Paste it here
  </text>
</svg>
```

### CSS

```css
input {
  font-size: 10px;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  border: 1px solid black;
}
```

### JavaScript

```js
document
  .getElementById("element-to-paste-text")
  .addEventListener("paste", (evt) => {
    evt.target.textContent = evt.clipboardData
      .getData("text/plain")
      .toUpperCase();
    evt.preventDefault();
  });
```

### Result

{{EmbedLiveSample("Example", "620", "340")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`cut`](/en-US/docs/Web/API/SVGGraphicsElement/cut_event), [`copy`](/en-US/docs/Web/API/SVGGraphicsElement/copy_event)
- This event on HTML {{domxref("Element")}} targets: [`paste`](/en-US/docs/Web/API/Element/paste_event)
- This event on {{domxref("Document")}} targets: [`paste`](/en-US/docs/Web/API/Document/paste_event)
- This event on {{domxref("Window")}} targets: [`paste`](/en-US/docs/Web/API/Window/paste_event)
