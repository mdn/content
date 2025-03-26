---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
page-type: web-api-overview
browser-compat: api.Document.visibilityState
---

{{DefaultAPISidebar("Page Visibility API")}}

The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page.

This is especially useful for saving resources and improving performance by letting a page avoid performing unnecessary tasks when the document isn't visible.

## Concepts and usage

When the user minimizes the window, switches to another tab, or the document is entirely obscured by another window, the API sends a {{domxref("document.visibilitychange_event", "visibilitychange")}} event to let listeners know the state of the page has changed. You can detect the event and perform some actions or behave differently. For example, if your web app is playing a video, it can pause the video when the user puts the tab into the background, and resume playback when the user returns to the tab. The user doesn't lose their place in the video, the video's soundtrack doesn't interfere with audio in the new foreground tab, and the user doesn't miss any of the video in the meantime.

Visibility states of an {{HTMLElement("iframe")}} are the same as the parent document. Hiding an `<iframe>` using CSS properties (such as {{cssxref("display", "display: none;")}}) doesn't trigger visibility events or change the state of the document contained within the frame.

### Use cases

Let's consider a few use cases for the Page Visibility API.

- A site has an image carousel that shouldn't advance to the next slide unless the user is viewing the page
- An application showing a dashboard of information doesn't want to poll the server for updates when the page isn't visible
- A site wants to switch off sounds when a device is in standby mode (user pushes power button to turn screen off)

Developers have historically used imperfect proxies to detect this. For example, watching for {{domxref("Window/blur_event", "blur")}} and {{domxref("Window/focus_event", "focus")}} events on the window helps you know when your page is not the active page, but it does not tell you that your page is actually hidden to the user. The Page Visibility API addresses this.

> [!NOTE]
> While {{domxref("Window.blur_event", "onblur")}} and {{domxref("Window.focus_event", "onfocus")}} will tell you if the user switches windows, it doesn't necessarily mean it's hidden. Pages only become hidden when the user switches tabs or minimizes the browser window containing the tab.

### Policies in place to aid background page performance

Separately from the Page Visibility API, user agents typically have a number of policies in place to mitigate the performance impact of background or hidden tabs. These may include:

- Most browsers stop sending {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} callbacks to background tabs or hidden {{ HTMLElement("iframe") }}s in order to improve performance and battery life.
- Timers such as {{domxref("Window.setTimeout", "setTimeout()")}} are throttled in background/inactive tabs to help improve performance. See [Reasons for delays longer than specified](/en-US/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) for more details.
- Browsers implement budget-based background timeout throttling. This operates in a similar way across modern browsers, with the details being as follows:

  - In Firefox, windows in background tabs each have their own time budget in milliseconds — a max and a min value of +50 ms and -150 ms, respectively. Chrome is very similar except that the budget is specified in seconds.
  - Windows are subjected to throttling after 30 seconds, with the same throttling delay rules as specified for window timers (again, see [Reasons for delays longer than specified](/en-US/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome, this value is 10 seconds.
  - Timer tasks are only permitted when the budget is non-negative.
  - Once a timer's code has finished running, the duration of time it took to execute is subtracted from its window's timeout budget.
  - The budget regenerates at a rate of 10 ms per second, in both Firefox and Chrome.

Some processes are exempt from this throttling behavior. In these cases, you can use the Page Visibility API to reduce the tabs' performance impact while they're hidden.

- Tabs which are playing audio are considered foreground and aren't throttled.
- Tabs running code that's using real-time network connections ([WebSockets](/en-US/docs/Web/API/WebSockets_API) and [WebRTC](/en-US/docs/Web/API/WebRTC_API)) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) processes are also left unthrottled in order to avoid timeouts.

## Extensions to other interfaces

### Instance properties

The Page Visibility API adds the following properties to the {{domxref("Document")}} interface:

- {{domxref("Document.hidden")}} {{ReadOnlyInline}}
  - : Returns `true` if the page is in a state considered to be hidden to the user, and `false` otherwise.
- {{domxref("Document.visibilityState")}} {{ReadOnlyInline}}

  - : A string indicating the document's current visibility state. Possible values are:

    - `visible`
      - : The page content may be at least partially visible. In practice this means that the page is the foreground tab of a non-minimized window.
    - `hidden`
      - : The page's content is not visible to the user, either due to the document's tab being in the background or part of a window that is minimized, or because the device's screen is off.

### Events

The Page Visibility API adds the following events to the {{domxref("Document")}} interface:

- {{domxref("Document.visibilitychange_event", "visibilitychange")}}
  - : Fired when the content of a tab has become visible or has been hidden.

## Examples

### Pausing audio on page hide

This example pauses playing audio when the page is hidden and resumes playing when the page becomes visible again.
The `<audio>` element controls allow the user to toggle between playing and paused audio.
The boolean `playingOnHide` is used to prevent audio from playing if the page changes to a `visible` state, but the media wasn't playing on page hide.

```css hidden
audio {
  width: 100%;
}
```

#### HTML

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>
```

#### JavaScript

```js
const audio = document.querySelector("audio");

let playingOnHide = false;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else {
    // Page became visible! Resume playing if audio was "playing on hide"
    if (playingOnHide) {
      audio.play();
    }
  }
});
```

#### Result

{{EmbedLiveSample("Pausing audio on page hide", "", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.visibilityState")}}
- {{domxref("Document.hidden")}}
- [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
