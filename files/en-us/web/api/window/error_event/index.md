---
title: "Window: error event"
short-title: error
slug: Web/API/Window/error_event
page-type: web-api-event
browser-compat: api.Window.error_event
---

{{APIRef}}

The `error` event is fired on a {{domxref("Window")}} object when a resource failed to load or couldn't be used — for example if a script has an execution error.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (message, source, lineno, colno, error) => {};
```

> [!NOTE]
> For historical reasons, `onerror` on `Window` and {{domxref("WorkerGlobalScope")}} objects is the only event handler property that receives more than one argument.

## Event type

The event object is a {{domxref("ErrorEvent")}} instance if it was generated from a user interface element, or an {{domxref("Event")}} instance otherwise.

{{InheritanceDiagram("ErrorEvent")}}

## Description

### Event handler property

For historical reasons, the `onerror` event handler property, on `Window` and {{domxref("WorkerGlobalScope")}} objects only, has different behavior from other event handler properties.

Note that this only applies to handlers assigned to `onerror`, not to handlers added using `addEventListener()`.

#### Cancellation

Most event handlers assigned to event handler properties can cancel the event's default behavior by returning `false` from the handler:

```js
textarea.onkeydown = () => false;
```

However, for an event handler property to cancel the default behavior of the `error` event of `Window`, it must instead return `true`:

```js
window.onerror = () => true;
```

When canceled, the error won't appear in the console, but the current script will still stop executing.

#### Arguments

The event handler's signature is asymmetric between `addEventListener()` and `onerror`. The event handler passed to `Window.addEventListener()` receives a single {{domxref("ErrorEvent")}} object, while the `onerror` handler receives five arguments, matching the {{domxref("ErrorEvent")}} object's properties:

- `message`

  - : A string containing a human-readable error message describing the problem. Same as {{domxref("ErrorEvent.message")}}.

    > [!NOTE]
    > In HTML, the [content event handler attribute](/en-US/docs/Web/HTML/Attributes#event_handler_attributes) `onerror` on the {{HTMLElement("body")}} element attaches `error` event listeners to `window` (_not_ the `<body>` element). For this event handler, the first parameter is called `event`, not `message`, although it still contains a string; that is, you would use `<body onerror="console.error(event)">` to log the error message.

- `source`
  - : A string containing the URL of the script that generated the error.
- `lineno`
  - : An integer containing the line number of the script file on which the error occurred.
- `colno`
  - : An integer containing the column number of the script file on which the error occurred.
- `error`
  - : The error being thrown. Usually an {{jsxref("Error")}} object.

```js
window.onerror = (a, b, c, d, e) => {
  console.log(`message: ${a}`);
  console.log(`source: ${b}`);
  console.log(`lineno: ${c}`);
  console.log(`colno: ${d}`);
  console.log(`error: ${e}`);

  return true;
};
```

> [!NOTE]
> These parameter names are observable with an [HTML event handler attribute](/en-US/docs/Web/HTML/Attributes#event_handler_attributes), where the first parameter is called `event` instead of `message`.

This special behavior only happens for the `onerror` event handler on `window`. The [`Element.onerror`](/en-US/docs/Web/API/HTMLElement/error_event) handler still receives a single {{domxref("ErrorEvent")}} object.

## Examples

### Live example

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");

window.addEventListener("error", (event) => {
  log.textContent = `${log.textContent}${event.type}: ${event.message}\n`;
  console.log(event);
});

const scriptError = document.querySelector("#script-error");
scriptError.addEventListener("click", () => {
  const badCode = "const s;";
  eval(badCode);
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This event on `Element` targets: {{domxref("HTMLElement/error_event", "error")}} event
