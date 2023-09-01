---
title: "Window: launchQueue property"
short-title: launchQueue
slug: Web/API/Window/launchQueue
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.launchQueue
---

{{APIRef}}{{SeeCompatTable}}

The `launchQueue` read-only property of the {{domxref("Window")}} interface provides access to the {{domxref("LaunchQueue")}} class, which allows custom launch navigation handling to be implemented in a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA), with the handling context signified by the [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) manifest field `client_mode` value.

The custom launch navigation handling functionality is controlled by the properties of the {{domxref("LaunchParams")}} object passed into the {{domxref("LaunchQueue.setConsumer()")}} callback function.

## Value

A {{domxref("LaunchQueue")}} object instance.

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

- {{domxref("Launch Handler API", "Launch Handler API", "", "nocode")}}
- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) demo app
