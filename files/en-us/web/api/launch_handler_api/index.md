---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Window.launchQueue
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

The **Launch Handler API** allows developers to control how a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) is launched — for example if it uses an existing window or creates a new one, and how the app's target launch URL is handled.

## Concepts and usage

You can specify launch behavior for your app by adding the [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) field to your web app manifest file. This has one sub-field, `client_mode`, which contains a string value specifying how the app should be launched and navigated to. For example:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

If not specified, the default `client_mode` value is `auto`. Available values are:

- `focus-existing`
  - : The most recently interacted with browsing context in a web app window is chosen to handle the launch. This will populate the target launch URL in the {{domxref("LaunchParams.targetURL", "targetURL")}} property of the {{domxref("LaunchParams")}} object passed into the {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}}'s callback function. As you'll see below, this allows you to set custom launch handing functionality for your app.
- `navigate-existing`
  - : The most recently interacted with browsing context in a web app window is navigated to the target launch URL. The target URL is still made available via {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} to allow additional custom launch navigation handling to be implemented.
- `navigate-new`
  - : A new browsing context is created in a web app window to load the target launch URL. The target URL is still made available via {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} to allow additional custom launch navigation handling to be implemented.
- `auto`
  - : The user agent decides what works best for the platform. For example, <code>navigate-existing</code> might make more sense on mobile, where single app instances are commonplace, whereas <code>navigate-new</code> might make more sense in a desktop context. This is the default value used if provided values are invalid.

When `focus-existing` is used, you can include code inside the {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}}'s callback function to provide custom handling of the {{domxref("LaunchParams.targetURL", "targetURL")}}

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> **Note:** {{domxref("LaunchParams")}} also has a {{domxref("LaunchParams.files")}} property, which returns a read-only array of {{domxref("FileSystemHandle")}} objects representing any files passed along with the launch navigation via the [`POST`](/en-US/docs/Web/HTTP/Methods/POST) method. This allows custom file handling to be implemented.

## Interfaces

- {{domxref("LaunchParams")}}
  - : Used when implementing custom launch navigation handling in a PWA. When {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} is invoked to set up the launch navigation handling functionality, the callback function inside `setConsumer()` is passed a `LaunchParams` object instance.
- {{domxref("LaunchQueue")}}
  - : When a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) is launched with a [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) `client_mode` value of `focus-existing`, `navigate-new`, or `navigate-existing`, `LaunchQueue` provides access to functionality that allows custom launch navigation handling to be implemented in the PWA. This functionality is controlled by the properties of the {{domxref("LaunchParams")}} object passed into the {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} callback function.

## Extensions to other interfaces

- {{domxref("window.launchQueue")}}
  - : Provides access to the {{domxref("LaunchQueue")}} class, which allows custom launch navigation handling to be implemented in a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA), with the handling context signified by the [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler) manifest field `client_mode` value.

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

This code is included in the PWA, and executed when the app loads, upon launch. The {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}}'s callback function extracts the search param out of the {{domxref("LaunchParams.targetURL")}} and, if it finds a `track` param, uses it to populate an {{htmlelement("audio")}} element's `src` and play the audio track that this points to.

See the [Musicr 2.0](https://launch-handler.glitch.me/) demo app for full working code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) demo app
