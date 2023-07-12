---
title: "Window: beforeunload event"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
page-type: web-api-event
browser-compat: api.Window.beforeunload_event
---

{{APIRef}}

The **`beforeunload`** event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.

This event enables a web page to trigger a confirmation dialog asking the user if they really want to leave the page. If the user confirms, the browser navigates to the new page, otherwise it cancels the navigation.

According to the specification, to show the confirmation dialog an event handler should call {{domxref("Event.preventDefault()", "preventDefault()")}} on the event.

The HTML specification states that calls to {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, and {{domxref("window.prompt()")}} methods may be ignored during this event. See the [HTML specification](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts) for more details.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforeunload", (event) => {});
onbeforeunload = (event) => {};
```

## Event type

A {{domxref("BeforeUnloadEvent")}}. Inherits from {{domxref("Event")}}.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onbeforeunload` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Security

[Sticky activation](/en-US/docs/Glossary/Sticky_activation) is required.
The user has to have interacted with the page in order for this feature to work.

## Usage notes

The `beforeunload` event suffers from the same problems as the [`unload`](/en-US/docs/Web/API/Window/unload_event) event.

Especially on mobile, the `beforeunload` event is not reliably fired. For example, the `beforeunload` event is not fired at all in the following scenario:

1. A mobile user visits your page.
2. The user then switches to a different app.
3. Later, the user closes the browser from the app manager.

Additionally, on Firefox, the `beforeunload` event is not compatible with the [back/forward cache](https://web.dev/bfcache/) (bfcache): that is, Firefox will not place pages in the bfcache if they have `beforeunload` listeners, and this is bad for performance.

However, unlike the `unload` event, there is a legitimate use case for the `beforeunload` event: the scenario where the user has entered unsaved data that will be lost if the page is unloaded.

It is recommended that developers listen for `beforeunload` only in this scenario, and only when they actually have unsaved changes, so as to minimize the effect on performance. See the Examples section below for an example of this.

See the [bfcache guide](https://web.dev/bfcache/#only-add-beforeunload-listeners-conditionally) on web.dev for more information about the problems associated with the `beforeunload` event.

## Examples

In this example a page listens for changes to a [text `input`](/en-US/docs/Web/HTML/Element/input/text). If the element contains a value, it adds a listener for `beforeunload`. If the element is empty, it removes the listener:

```js
const beforeUnloadListener = (event) => {
  event.preventDefault();
  return (event.returnValue = "");
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, { capture: true });
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {
      capture: true,
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility notes

The HTML specification states that authors should use the
{{domxref("Event.preventDefault()")}} method instead of using
{{domxref("Event.returnValue")}} to prompt the user. However, this is not yet supported
by all browsers.

When this event returns (or sets the `returnValue` property to) a value
other than `null` or `undefined`, the user will be prompted to
confirm the page unload. In older browsers, the return value of the event is displayed
in this dialog. Since Firefox 44, Chrome 51, Opera 38, and Safari 9.1, a generic
string not under the control of the webpage is shown instead of the returned
string. For example:

- Firefox displays the string, "This page is asking you to confirm that you want to
  leave - data you have entered may not be saved." (see [Firefox bug 588292](https://bugzil.la/588292)).
- Chrome displays the string, "Do you want to leave the site? Changes you made may not be saved." (see [Chrome Platform Status](https://chromestatus.com/feature/5349061406228480)).

In some browsers, calls to {{domxref("window.alert()")}},
{{domxref("window.confirm()")}}, and {{domxref("window.prompt()")}} may be ignored
during this event. See the [HTML specification](https://html.spec.whatwg.org/multipage/webappapis.html#user-prompts)
for more details.

Note also, that various browsers ignore the result of the event and do not ask the user
for confirmation at all. In such cases, the document will always be unloaded
automatically. Firefox has a switch named `dom.disable_beforeunload` in
_about:config_ to enable this behavior. As of Chrome 60, the confirmation [will be skipped](https://chromestatus.com/feature/5082396709879808) if
the user has not performed a gesture in the frame or page since it was loaded. Pressing
F5 in the page seems to count as user interaction, whereas mouse-clicking the refresh
arrow or pressing F5 with Chrome DevTools focused does not count as user interaction (as
of Chrome 81).

## See also

- Related events: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/multipage/browsing-the-web.html#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developer.chrome.com/blog/chrome-51-deprecations/#remove-custom-messages-in-onbeforeunload-dialogs)
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explains in detail why you should use `visibilitychange`, not `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api/#developer-recommendations-for-each-state) gives best-practices guidance on handling page lifecycle behavior in your web applications.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): a JavaScript library that deals with cross-browser inconsistencies in page lifecycle behavior.
- [Back/forward cache](https://web.dev/bfcache/) explains what the back/forward cache is, and its implications for various page lifecycle events.
