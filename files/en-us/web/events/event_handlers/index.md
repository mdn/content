---
title: Event handling (overview)
slug: Web/Events/Event_handlers
---

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create _event handler_ code that will run when an event fires, allowing web pages to respond appropriately to change.

This page provides a very brief "reminder" of how to work with events and event handlers. New developers should instead read [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events).

## What are the available events?

Events are documented in and/or below the pages for the JavaScript objects that emit them. For example, to find out events fired on the browser window or the current document see the events sections in [`Window`](/en-US/docs/Web/API/Window#events) and [`Document`](/en-US/docs/Web/API/Document#events).

You can use the [Event reference](/en-US/docs/Web/Events#event_index) to find out what JavaScript objects fire events for particular APIs, e.g. animation, media, and so on.

## Registering event handlers

There are two recommended approaches for registering handlers. Event handler code can be made to run when an event is triggered by assigning it to the target element's corresponding _onevent_ property, or by registering the handler as a listener for the element using the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method. In either case the handler will receive an object that conforms to the [`Event` interface](/en-US/docs/Web/API/Event) (or a [derived interface](/en-US/docs/Web/API/Event#introduction)). The main difference is that multiple event handlers can be added (or removed) using the event listener methods.

> **Warning:** A third approach for setting event handlers using HTML onevent attributes is not recommended! They inflate the markup and make it less readable and harder to debug. For more information see [Inline event handlers](/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these).

### Using onevent properties

By convention, JavaScript objects that fire events have a corresponding "onevent" properties (named by prefixing "on" to the name of the event). These properties are called to run associated handler code when the event is fired, and may also be called directly by your own code.

To set event handler code you can just assign it to the appropriate onevent property. Only one event handler can be assigned for every event in an element. If needed the handler can be replaced by assigning another function to the same property.

Below we show how to set a simple `greet()` function for the `click` event using the `onclick` property.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Note that an object representing the event is passed as the first argument to the event handler. This event object either implements or is derived from the {{domxref("Event")}} interface.

### EventTarget.addEventListener

The most flexible way to set an event handler on an element is to use the {{domxref("EventTarget.addEventListener")}} method. This approach allows multiple listeners to be assigned to an element, and for listeners to be _removed_ if needed (using {{domxref("EventTarget.removeEventListener")}}).

> **Note:** The ability to add and remove event handlers allows you to, for example, have the same button performing different actions in different circumstances. In addition, in more complex programs cleaning up old/unused event handlers can improve efficiency.

Below we show how a simple `greet()` function can be set as a listener/event handler for the `click` event (you could use a lambda function instead of a named function if desired). Note again that the event is passed as the first argument to the event handler.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

The method can also take additional arguments/options to control aspects of how the events are captured and removed. More information can be found on the {{domxref("EventTarget.addEventListener")}} reference page.

#### Using an Abort Signal

A notable event listener feature is the ability to use an abort signal to clean up multiple event handlers at the same time.

This is done by passing the same {{domxref("AbortSignal")}} to the {{domxref("EventTarget/addEventListener()", "addEventListener()")}} call for all the event handlers that you want to be able to remove together. You can then call {{domxref("AbortController/abort()", "abort()")}} on the controller owning the `AbortSignal`, and it will remove all event handlers that were added with that signal. For example, to add an event handler that we can remove with an `AbortSignal`:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // pass an AbortSignal to this handler
```

Then the event handler created by the code above can be removed like this:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events">Introduction to events</a></li>
    <li><a href="/en-US/docs/Web/Events">Event reference</a></li>
  </ol>
</section>
