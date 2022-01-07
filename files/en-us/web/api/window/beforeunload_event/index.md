---
title: 'Window: beforeunload event'
slug: Web/API/Window/beforeunload_event
tags:
  - Event
  - Reference
  - Window
browser-compat: api.Window.beforeunload_event
---
{{APIRef}}

The **`beforeunload`** event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}}
      </td>
    </tr>
  </tbody>
</table>

This event enables a web page to trigger a confirmation dialog asking the user if they really want to leave the page. If the user confirms, the browser navigates to the new page, otherwise it cancels the navigation.

According to the specification, to show the confirmation dialog an event handler should call {{domxref("Event.preventDefault()", "preventDefault()")}} on the event.

To combat unwanted pop-ups, browsers may not display prompts created in `beforeunload` event handlers unless the page has been interacted with, or may even not display them at all.

The HTML specification states that calls to {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, and {{domxref("window.prompt()")}} methods may be ignored during this event. See the [HTML specification](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts) for more details.

## Usage notes

The `beforeunload` event suffers from the same problems as the [`unload`](/en-US/docs/Web/API/Window/unload_event) event.

Especially on mobile, the `beforeunload` event is not reliably fired. For example, the `beforeunload` event is not fired at all in the following scenario:

1.  A mobile user visits your page.
2.  The user then switches to a different app.
3.  Later, the user closes the browser from the app manager.

The `beforeunload` event is not compatible with the [back/forward cache](https://web.dev/bfcache/) (bfcache), because many pages using this event assume that the page will not continue to exist after the event is fired. To combat this, browsers will not place pages in the bfcache if they have `beforeunload` listeners, and this is bad for performance.

However, unlike the `unload` event, there is a legitimate use case for the `beforeunload` event: the scenario where the user has entered unsaved data that will be lost if the page is unloaded.

It is recommended that developers listen for `beforeunload` only in this scenario, and only when they actually have unsaved changes, so as to minimize the effect on performance. See the Examples section below for an example of this.

See the [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-beforeunload-event) guide for more information about the problems associated with the `beforeunload` event.

## Examples

In this example a page listens for changes to a [text `input`](/en-US/docs/Web/HTML/Element/input/text). If the element contains a value, it adds a listener for `beforeunload`. If the element is empty, it removes the listener:

```js
const beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = "Are you sure you want to exit?";
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, {capture: true});
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

See [WindowEventHandlers/onbeforeunload](/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#browser_compatibility) for more details on how various browsers handle this event.

## See also

- Related events: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explains in detail why you should use `visibilitychange`, not `beforeunload`/`unload`.
- [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#developer-recommendations-for-each-state) gives best-practices guidance on handling page lifecyle behavior in your web applications.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): a JavaScript library that deals with cross-browser inconsistencies in page lifecyle behavior.
- [Back/forward cache](https://web.dev/bfcache/) explains what the back/forward cache is, and its implications for various page lifecycle events.
