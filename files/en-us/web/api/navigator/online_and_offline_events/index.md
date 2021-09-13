---
title: Online and offline events
slug: Web/API/Navigator/Online_and_offline_events
tags:
  - AJAX
  - DOM
  - HTML5
  - Intermediate
  - NeedsUpdate
  - Offline web applications
  - Web Development
---
Some browsers implement [Online/Offline events](https://www.whatwg.org/specs/web-apps/current-work/#offline) from the [WHATWG Web Applications 1.0 specification](https://www.whatwg.org/specs/web-apps/current-work/).

## Overview

In order to build a good offline-capable web application, you need to know when your application is actually offline. You also need to know when your application has returned to an 'online' status again. Effectively, the requirements break down as such:

1.  You need to know when the user comes back online, so that you can re-synchronize with the server.
2.  You need to know when the user is offline, so that you can queue your server requests for a later time.

It is this process that online/offline events help to simplify.

Unfortunately, these events aren't fully reliable. If you need greater reliability, or if the API isn't implemented in the browser, you can use other signals to detect if you are offline including using service workers and [responses from XMLHttpRequest](http://www.html5rocks.com/en/mobile/workingoffthegrid.html#toc-xml-http-request).

## API

### `navigator.onLine`

[`navigator.onLine`](/en-US/docs/DOM/window.navigator.onLine) is a property that maintains a `true`/`false` value (`true` for online, `false` for offline).

This property is updated whenever the user switches into "Offline Mode" (File → Work Offline in Firefox). Additionally, this property should update whenever a browser is no longer capable of connecting to the network. According to the [specification](https://www.whatwg.org/specs/web-apps/current-work/#offline):

> The `navigator.onLine` attribute must return false if the user agent will not contact the network when the user follows links or when a script requests a remote page (or knows that such an attempt would fail)...

Firefox 2 updates this property when switching to/from the browser's Offline mode.  [Firefox 41](/en-US/Firefox/Releases/41#Miscellaneous) updates this property also when the OS reports a change in network connectivity on Windows, Linux, and OS X.

This property existed in older versions of Firefox and Internet Explorer (the specification based itself off of these prior implementations), so you can begin using it immediately. Network status autodetection was implemented in Firefox 2.

### "`online`" and "`offline`" events

[Firefox 3](/en-US/docs/Firefox_3_for_developers) introduces two new events: "[`online`](/en-US/docs/Web/API/document.ononline)" and "[`offline`](/en-US/docs/Web/API/document.onoffline)". These two events are fired on the `<body>` of each page when the browser switches between online and offline mode. Additionally, the events bubble up from `document.body`, to `document`, ending at `window`. Both events are non-cancellable (you can't prevent the user from coming online, or going offline).

[Firefox 41](/en-US/Firefox/Releases/41#Miscellaneous) fires these events when the OS reports a change in network connectivity on Windows, Linux, and OS X.

You can register listeners for these events in a few familiar ways:

- using [`addEventListener`](/en-US/docs/DOM/element.addEventListener) on the `window`, `document`, or `document.body`
- by setting the `.ononline` or `.onoffline` properties on `document` or `document.body` to a JavaScript `Function` object. (**Note:** using `window.ononline` or `window.onoffline` will not work for compatibility reasons.)
- by specifying `ononline="..."` or `onoffline="..."` attributes on the `<body>` tag in the HTML markup.

## Example

There's [a simple test case](https://bugzilla.mozilla.org/attachment.cgi?id=220609) that you can run to verify that the events are working (does not work in Chrome due to attaching the event listener to document.body).

Here's the JavaScript part:

```js
window.addEventListener('load', function() {
  var status = document.getElementById("status");
  var log = document.getElementById("log");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
```

A touch of CSS

```css
#status {
  position: fixed;
  width: 100%;
  font: bold 1em sans-serif;
  color: #FFF;
  padding: 0.5em;
}

#log {
  padding: 2.5em 0.5em 0.5em;
  font: 1em sans-serif;
}

.online {
  background: green;
}

.offline {
  background: red;
}
```

And the corresponding HTML:

```html
<div id="status"></div>
<div id="log"></div>
<p>This is a test</p>
```

Here's the live result

{{ EmbedLiveSample('Example', '100%', '150') }}

## Notes

If the API isn't implemented in the browser, you can use other signals to detect if you are offline including using service workers and [responses from XMLHttpRequest](http://www.html5rocks.com/en/mobile/workingoffthegrid.html#toc-xml-http-request).

## References

- ['Online/Offline events' section from the WHATWG Web Applications 1.0 Specification](https://www.whatwg.org/specs/web-apps/current-work/#offline)
- [The bug tracking online/offline events implementation in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=336359) and a [follow-up](https://bugzilla.mozilla.org/show_bug.cgi?id=336682)
- [A simple test case](https://bugzilla.mozilla.org/attachment.cgi?id=220609)
- [An explanation of Online/Offline events](http://ejohn.org/blog/offline-events/)
