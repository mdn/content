---
title: Using Firefox 1.5 caching
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
page-type: guide
---

{{FirefoxSidebar}}

[Firefox 1.5](/en-US/docs/Mozilla/Firefox/Releases/1.5) uses in-memory caching for entire Web pages, including their JavaScript states, for a single browser session. Going backward and forward between visited pages requires no page loading and the JavaScript states are preserved. This feature, referred to by some as **bfcache** (for "Back-Forward Cache"), makes page navigation very fast. This caching state is preserved until the user closes the browser.

There are instances in which Firefox doesn't cache pages. Below are some common programmatic reasons that a page is not cached:

- the page uses an `unload` or `beforeunload` handler;
- the page sets "cache-control: no-store".
- the site is HTTPS and page sets at least one of:

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - with "Expires: 0" or "Expires" with a date value in the past relative to the value of the "Date" header (unless "Cache-Control: max-age=" is also specified);

- the page is not completely loaded when the user navigates away from it or has pending network requests for other reasons (e.g., `XMLHttpRequest`));
- the page has running IndexedDB transactions;
- the top-level page contains frames (e.g., {{HTMLElement("iframe")}}) that are not cacheable for any of the reasons listed here;
- the page is in a frame and the user loads a new page within that frame (in this case, when the user navigates away from the page, the content that was last loaded into the frames is what is cached).

This new caching feature changes page loading behavior, and Web authors may want to:

- know that a page has been navigated to (when it is being loaded from a user's cache)
- define page behavior when a user leaves the page (while still enabling the page to be cached)

Two new browser events enable Web authors to do both.

## New browser events

If you use these new events, your pages will continue to display properly in other browsers (we've tested earlier versions of Firefox, Internet Explorer, Opera, and Safari), and will use this new caching functionality when loaded in Firefox 1.5.

Note: as of 10-2009 development versions of Safari added support for these new events (see [the WebKit bug](https://webkit.org/b/28758)).

Standard behavior for Web pages is:

1. User navigates to a page.
2. As the page loads, inline scripts run.
3. Once the page is loaded, the `onload` handler fires.

Some pages include a fourth step. If a page uses an `unload` or `beforeunload` handler, it fires when the user navigates away from the page. If an `unload` handler is present, the page will not be cached.

When a user navigates to a cached page, inline scripts and the `onload` handler do not run (steps 2 and 3), since in most cases, the effects of these scripts have been preserved.

If the page contains scripts or other behaviors that fire during loading that you want to continue to execute every time the user navigates to the page, or if you want to know when a user has navigated to a cached page, use the new `pageshow` event.

If you have behaviors that fire when a user navigates away from the page, but you want to take advantage of this new caching feature, and therefore don't want to use the unload handler, use the new `pagehide` event.

### pageshow event

This event works the same as the `load` event, except that it fires every time the page is loaded (whereas the `load` event doesn't fire in Firefox 1.5 when the page is loaded from cache). The first time the page loads, the `pageshow` event fires just after the firing of the `load` event. The `pageshow` event uses a boolean property called `persisted` that is set to `false` on the initial load. It is set to `true` if it is not the initial load (in other words, it is set to true when the page is cached).

Set any JavaScript that you want to run every time a page loads to run when the `pageshow` event fires.

If you call JavaScript functions as part of the `pageshow` event, you can ensure these functions are called when the page is loaded in browsers other than Firefox 1.5 by calling the `pageshow` event as part of the `load` event, as shown in the sample later in this article.

### pagehide event

If you want to define behavior that occurs when the user navigates away from the page, but you don't want to use the `unload` event (which would cause the page to not be cached), you can use the new `pagehide` event. Like `pageshow`, the `pagehide` event uses a boolean property called `persisted`. This property is set to `false` if the page is not cached by the browser and set to `true` if the page is cached by the browser. When this property is set to `false`, the `unload` handler, if present, fires immediately after the `pagehide` event.

Firefox 1.5 tries to simulate load events in the same order they would occur when the page is initially loaded. Frames are treated the same way as the top-level document. If the page contains frames, then when the cached page is loaded:

- `pageshow` events from each frame fire before the `pageshow` event in the main document fires.
- When the user navigates away from the cached page, the `pagehide` event from each frame fires before the `pagehide` event in the main document.
- For navigation that occurs inside a single frame, events fire only in the affected frame.

## Sample code

The sample below illustrates a page that uses both the `load` and `pageshow` events. This sample page behaves as follows:

- In browsers other than Firefox 1.5, the following occurs each time the page loads: the `load` event triggers the `onLoad` function, which calls the `onPageShow` function (as well as an additional function).
- In Firefox 1.5, the first time the page is loaded, the `load` event operates the same way as in other browsers. In addition, the `pageshow` event fires, and as `persisted` is set to `false`, no additional action occurs.
- In Firefox 1.5, when the page is loaded from cache, only the `pageshow` event fires. As `persisted` is set to `true`, only the JavaScript actions in the `onPageShow` function are triggered.

In this example:

- The page calculates and displays the current date and time each time the page is loaded. This calculation includes the seconds and milliseconds so you can easily test the functionality.
- The cursor is placed in the Name field of the form the first time the page is loaded. In Firefox 1.5, when the user navigates back to the page, the cursor remains in the field it was when the user navigated away from the page. In other browsers, the cursor moves back to the Name field.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Order query Firefox 1.5 Example</title>
    <style type="text/css">
      body,
      p {
        font-family: Verdana, sans-serif;
        font-size: 12px;
      }
    </style>
    <script>
      function onLoad() {
        loadOnlyFirst();
        onPageShow();
      }

      function onPageShow() {
        // Calculate current time
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        var mil = currentTime.getMilliseconds();
        var displayTime =
          month +
          "/" +
          day +
          "/" +
          year +
          " " +
          hour +
          ":" +
          min +
          ":" +
          sec +
          ":" +
          mil;
        document.getElementById("time-field").value = displayTime;
      }

      function loadOnlyFirst() {
        document.zipForm.name.focus();
      }
    </script>
  </head>
  <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Order query</h2>

    <form
      name="zipForm"
      action="http://www.example.com/formresult.html"
      method="get">
      <label for="time-field">Date and time:</label>
      <input type="text" id="time-field" /><br />
      <label for="name">Name:</label>
      <input type="text" id="name" /><br />
      <label for="address">Email address:</label>
      <input type="text" id="address" /><br />
      <label for="order">Order number:</label>
      <input type="text" id="order" /><br />
      <input type="submit" name="submit" value="Submit Query" />
    </form>
  </body>
</html>
```

In contrast, if the above page did not listen for the `pageshow` event and handled all calculations as part of the `load` event (and instead was coded as shown in the sample code fragment below), both the cursor position and date/time would be cached in Firefox 1.5 when the user navigated away from the page. When the user returned to the page, the cached date/time would display.

```html
<head>
  <script>
    function onLoad() {
      loadOnlyFirst();

      // Calculate current time
      var currentTime = new Date();
      var year = currentTime.getFullYear();
      var month = currentTime.getMonth() + 1;
      var day = currentTime.getDate();
      var hour = currentTime.getHours();
      var min = currentTime.getMinutes();
      var sec = currentTime.getSeconds();
      var mil = currentTime.getMilliseconds();
      var displayTime =
        month +
        "/" +
        day +
        "/" +
        year +
        " " +
        hour +
        ":" +
        min +
        ":" +
        sec +
        ":" +
        mil;
      document.getElementById("time-field").value = displayTime;
    }

    function loadOnlyFirst() {
      document.zipForm.name.focus();
    }
  </script>
</head>

<body onload="onLoad();"></body>
```

## Developing Firefox extensions

Firefox 1.5 [extensions](/en-US/docs/Mozilla/Add-ons) need to allow for this caching functionality. If you are developing a Firefox extension that you want to be compatible with both 1.5 and earlier versions, make sure that it listens for the `load` event for triggers that can be cached and listens for the `pageshow` event for triggers that shouldn't be cached.

For instance, the Google Toolbar for Firefox should listen for the `load` event for the autolink function and to the `pageshow` event for the PageRank function in order to be compatible with both 1.5 and earlier versions.
