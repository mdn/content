---
title: WindowEventHandlers.onbeforeunload
slug: Web/API/WindowEventHandlers/onbeforeunload
tags:
  - API
  - Event Handler
  - HTML DOM
  - Property
  - Reference
  - Window
browser-compat: api.WindowEventHandlers.onbeforeunload
---
{{APIRef("HTML DOM")}}

The **`onbeforeunload`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{domxref("Window.beforeunload_event", "beforeunload")}} events. These events fire when a window is about to
{{event("unload")}} its resources. At this point, the document is still visible and the
event is still cancelable.

> **Note:** To combat unwanted pop-ups, some browsers don't display
> prompts created in `beforeunload` event handlers unless the page has been
> interacted with. Moreover, some don't display them at all.

> **Note:** You shouldn't use the
> [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event)
> event with `sendBeacon()`. See the
> [`Navigator.sendBeacon()`](/en-US/docs/Web/API/Navigator/sendBeacon)
> page for more details and best practices.

Typically, it is better to use {{domxref("EventTarget.addEventListener",
  "window.addEventListener()")}} and the {{domxref("Window.beforeunload_event", "beforeunload")}} event, instead of
`onbeforeunload`.

## Value

An [event handler](/en-US/docs/Web/Events/Event_handlers).

## Examples

This example prompts the user before unloading.

The HTML specification states that authors should use the
{{domxref("Event.preventDefault()")}} method instead of using
{{domxref("Event.returnValue")}} to prompt the user.

```js
window.addEventListener('beforeunload', function (e) {
  // Cancel the event
  e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  // Chrome requires returnValue to be set
  e.returnValue = '';
});
```

Guarantee the browser unload by removing the _returnValue_ property of the event

```js
window.addEventListener('beforeunload', function (e) {
  // the absence of a returnValue property on the event will guarantee the browser unload happens
  delete e['returnValue'];
});
```

## Notes

When your page uses JavaScript to render content, the JavaScript may stop when leaving
and then navigating back to the page. You can bind to `window.onbeforeunload`
to prevent the browser from fully caching the page. If you do so, JavaScript in the page
will be triggered on the subsequent return visit and update the content as desired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The HTML specification states that authors should use the
{{domxref("Event.preventDefault()")}} method instead of using
{{domxref("Event.returnValue")}} to prompt the user. However, this is not yet supported
by all browsers.

When this event returns (or sets the `returnValue` property to) a value
other than `null` or `undefined`, the user will be prompted to
confirm the page unload. In older browsers, the return value of the event is displayed
in this dialog. Starting with Firefox 44, Chrome 51, Opera 38, and Safari 9.1, a generic
string not under the control of the webpage will be shown instead of the returned
string. For example:

- Firefox displays the string, "This page is asking you to confirm that you want to
  leave - data you have entered may not be saved." (see {{bug("588292")}}).
- Chrome displays the string, "Do you want to leave this site? Changes you made may
  not be saved." (see [Chrome Platform
  Status](https://www.chromestatus.com/feature/5349061406228480)).

Internet Explorer does not respect the `null` return value and will display
this to users as "null" text. You have to use `undefined` to skip the prompt.

In some browsers, calls to {{domxref("window.alert()")}},
{{domxref("window.confirm()")}}, and {{domxref("window.prompt()")}} may be ignored
during this event. See the [HTML specification](https://www.w3.org/TR/html5/webappapis.html#user-prompts)
for more details.

Note also, that various browsers ignore the result of the event and do not ask the user
for confirmation at all. In such cases, the document will always be unloaded
automatically. Firefox has a switch named `dom.disable_beforeunload` in
_about:config_ to enable this behavior. As of Chrome 60, the confirmation [will be skipped](https://www.chromestatus.com/feature/5082396709879808) if
the user has not performed a gesture in the frame or page since it was loaded. Pressing
F5 in the page seems to count as user interaction, whereas mouse-clicking the refresh
arrow or pressing F5 with Chrome DevTools focused does not count as user interaction (as
of Chrome 81).
