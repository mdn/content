---
title: LaunchQueue
slug: Web/API/LaunchQueue
page-type: web-api-interface
status:
  - experimental
browser-compat: api.LaunchQueue
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

The **`LaunchQueue`** interface of the {{domxref("Launch Handler API", "Launch Handler API", "", "nocode")}} is available via the {{domxref("Window.launchQueue")}} property. When a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) is launched with a [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) `client_mode` value of `focus-existing`, `navigate-new`, or `navigate-existing`, {{domxref("LaunchQueue")}} provides access to functionality that allows custom launch navigation handling to be implemented in the PWA. This functionality is controlled by the properties of the {{domxref("LaunchParams")}} object passed into the {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} callback function.

{{InheritanceDiagram}}

## Instance Methods

- {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} {{Experimental_Inline}}
  - : Contains a callback function that handles custom launch navigation for a PWA.

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
