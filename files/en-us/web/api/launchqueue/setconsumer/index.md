---
title: "LaunchQueue: setConsumer() method"
short-title: setConsumer()
slug: Web/API/LaunchQueue/setConsumer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.LaunchQueue.setConsumer
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

The **`setConsumer()`** method of the {{domxref("LaunchQueue")}} interface is used to declare the callback that will handle custom launch navigation handling in a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA). Such custom navigation is initiated via {{domxref("Window.launchQueue")}} when a PWA has been launched with a [`launch_handler`](/en-US/docs/Web/Manifest/Reference/launch_handler) `client_mode` value of `focus-existing`, `navigate-new`, or `navigate-existing`.

## Syntax

```js-nolint
setConsumer(callback)
```

### Parameters

- `callback`
  - : A callback function that handles custom navigation for the PWA. The callback is passed a {{domxref("LaunchParams")}} object instance as a parameter.

### Return value

`undefined`.

## Examples

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Assuming a music player app that gets a track passed to it to be played
      const track = params.get("track");
      if (track) {
        audio.src = track;
        title.textContent = new URL(track).pathname.substr(1);
        audio.play();
      }
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) demo app
