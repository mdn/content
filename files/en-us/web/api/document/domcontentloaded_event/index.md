---
title: "Document: DOMContentLoaded event"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
page-type: web-api-event
browser-compat: api.Document.DOMContentLoaded_event
---

{{APIRef}}

The **`DOMContentLoaded`** event fires when the HTML document has been completely parsed, and all deferred scripts ([`<script defer src="…">`](/en-US/docs/Web/HTML/Reference/Elements/script#defer) and [`<script type="module">`](/en-US/docs/Web/HTML/Reference/Elements/script#module)) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

`DOMContentLoaded` does not wait for stylesheets to load, however deferred scripts _do_ wait for stylesheets, and the `DOMContentLoaded` event is queued after deferred scripts. Also, scripts which aren't deferred or async (e.g., `<script>`) will wait for already-parsed stylesheets to load.

A different event, {{domxref("Window/load_event", "load")}}, should be used only to detect a fully-loaded page. It is a common mistake to use `load` where `DOMContentLoaded` would be more appropriate.

Usually, to avoid running a script before the DOM it manipulates has been fully constructed, you can simply place the script at the end of the document body, immediately before the closing `</body>` tag, without wrapping it in an event listener.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js-nolint
addEventListener("DOMContentLoaded", (event) => { })
```

> [!NOTE]
> There is no `onDOMContentLoaded` event handler property for this event.

## Event type

A generic {{domxref("Event")}}.

## Examples

### Basic usage

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

### Delaying DOMContentLoaded

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // This synchronous script is going to delay parsing of the DOM,
  // so the DOMContentLoaded event is going to launch later.
</script>
```

### Checking whether loading is already complete

Sometimes your script may run after the `DOMContentLoaded` event has already fired. This typically happens when the script runs asynchronously. Common scenarios include:

- A module that is dynamically imported after the document is already loaded.
- A script that is included via `<script async>`.
- A script that is dynamically injected into the page.
- Code that resumes after an asynchronous operation, such as `await fetch(...)`, including after a top-level await in a module.

In these cases, you should check the document's `readyState` before adding a `DOMContentLoaded` listener, or your setup logic may not execute at all. For synchronous scripts (without `async`) that are already present in the initial markup, this situation does not occur. The document waits for the script to execute before firing `DOMContentLoaded`, so you are always sure that setup logic in the listener will be executed.

Consider the following script file in isolation:

```js
function doSomething() {
  console.info("DOM loaded");
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}
```

The script can't enforce how it's included by the HTML. If it's included via `<script async>`, or it's dynamically injected, then by the time it executes, `DOMContentLoaded` has already fired. To ensure that `doSomething()` always runs when the script loads, we need to have two paths, one that immediately runs `doSomething` if the document is already loaded, and another that runs `doSomething` once the document is loaded.

> [!NOTE]
> There's no race condition here — it's not possible for the document to be loaded between the `if` check and the `addEventListener()` call. JavaScript has run-to-completion semantics, which means if the document is loading at one particular tick of the event loop, it can't become loaded until the next cycle, at which time the `doSomething` handler is already attached and will be fired.

> [!NOTE]
> `document.readyState` is set to `"interactive"` after the completion of the HTML parser but before the execution of scripts with `defer` or `type="module"`. `DOMContentLoaded` is fired after the execution of these scripts, but before the execution of scripts with `async`. `document.readyState` is set to `"complete"` after the execution of async scripts. This means that during the execution of deferred and module scripts, `document.readyState` is `"interactive"` but it's still possible to attach `DOMContentLoaded` listeners and make them fire as usual. In practice, executing `doSomething()` a little earlier is fine unless it relies on some global state set up by other deferred/module scripts.

### Live example

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
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

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += "DOMContentLoaded\n";
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
