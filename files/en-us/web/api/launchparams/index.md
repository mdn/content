---
title: LaunchParams
slug: Web/API/LaunchParams
page-type: web-api-interface
status:
  - experimental
browser-compat: api.LaunchParams
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

The **`LaunchParams`** interface of the {{domxref("Launch Handler API", "Launch Handler API", "", "nocode")}} is used when implementing custom launch navigation handling in a PWA. When {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} is invoked to set up the launch navigation handling functionality, the callback function inside `setConsumer()` is passed a `LaunchParams` object instance.

Such custom navigation handling is initiated via {{domxref("Window.launchQueue")}} when a PWA has been launched with a [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) `client_mode` value of `focus-existing`, `navigate-new`, or `navigate-existing`.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("LaunchParams.files")}} {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Returns a read-only array of {{domxref("FileSystemHandle")}} objects representing any files passed along with the launch navigation via the [`POST`](/en-US/docs/Web/HTTP/Methods/POST) method.
- {{domxref("LaunchParams.targetURL")}} {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Returns the target URL of the launch.

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
