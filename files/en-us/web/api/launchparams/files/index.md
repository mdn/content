---
title: "LaunchParams: files property"
short-title: files
slug: Web/API/LaunchParams/files
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LaunchParams.files
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

The **`files`** read-only property of the {{domxref("LaunchParams")}} interface returns an array of {{domxref("FileSystemHandle")}} objects representing any files passed along with the launch navigation via the [`POST`](/en-US/docs/Web/HTTP/Methods/POST) method.

## Value

A read-only array of {{domxref("FileSystemHandle")}} objects.

## Examples

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files) {
      const files = launchParams.files;
      for (file in files) {
        // Do stuff with file handles
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
