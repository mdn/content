---
title: "LaunchParams: targetURL property"
short-title: targetURL
slug: Web/API/LaunchParams/targetURL
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LaunchParams.targetURL
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

The **`targetURL`** read-only property of the {{domxref("LaunchParams")}} interface returns the target URL of the associated web app launch.

## Value

A string.

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
