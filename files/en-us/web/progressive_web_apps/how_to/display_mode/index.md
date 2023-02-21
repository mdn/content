---
title: Choose a display mode
slug: Web/Progressive_web_apps/How_to/Display_mode
tags:
  - PWA
  - Progressive web apps
  - App
  - Apps
  - Application
  - Web app
  - Web applications
  - How to
  - Display mode
---

Device-specific applications have their own dedicated windows. Once installed, Progressive Web Apps (PWAs) can also define how they appear in the host operating system.

## Choose a display mode in your web app manifest

Use the [`display`](/en-US/docs/Web/Manifest/display) member in your web app manifest to define the preferred display mode for your PWA.

The display mode you choose changes how much of the browser user interface is shown to the user, from showing the full browser {{Glossary("chrome")}}, to having your own dedicated window.

- `browser`: the application opens in a conventional browser tab or new window. This is also the default value if `display` is not specified in the web app manifest or has an incorrect value.
- `minimal-ui`: the application looks and feels like a standalone application, but has a minimal set of UI elements from the browser to control back and forward page navigation.
- `standalone`: the application opens in its own dedicated window.
- `fullscreen`: the entire device display area is used by the application.

If a particular display mode is not supported, the following fallback chain is used: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

### Example

Here is a web app manifest file example, showing how to define a display mode:

```json
{
  "name": "My app",
  "start_url": "/",
  "icons": [
    {
      "src": "icon.webp",
      "sizes": "48x48",
      "type": "image/webp"
    }
  ],
  "display": "standalone"
}
```

## Best practices for installed PWAs

### Create a familiar experience

The `display` manifest member is not mandatory and defaults to `browser`. This means that by default, when installed, your PWA will still open in a browser window.

However, users have specific expectations of how installed applications behave on their devices. One of these expectations is that applications have their own dedicated windows.

By using the `standalone` display mode, you can provide an app experience that is more familiar to users.

### Handle multi-page navigation

If your app is built from several HTML pages which users can navigate from and to, include navigation elements within your app's user interface.

If you can't, or don't want to, create your own navigation elements, use the `minimal-ui` display mode to make sure users can still go between pages using previous and next buttons rendered by the browser in your app's title bar.

## Customize your app depending on the display mode

When you define a display mode other than `browser` in your web app manifest, it only applies when the application is installed, not when it runs in the browser like any other webpage. You can check the display mode at runtime to detect if the app is installed or not.

Using the {{cssxref("@media/display-mode", "display-mode")}} media feature from CSS or JavaScript, you can selectively apply CSS styles or run JavaScript code in your app based on its display mode.

Here is an example showing how to use the {{cssxref("@media")}} CSS at-rule to only reveal an element on a webpage when the `standalone` display mode is enabled:

```css
.app-button {
  display: none;
}

@media (display-mode: standalone) {
  .app-button {
    display: block;
  }
}
```

Here is example showing how to use the {{domxref("window.matchMedia()")}} method to only run some code when the `standalone` display mode is enabled:

```javascript
if (window.matchMedia("(display-mode: standalone)").matches) {
  // The standalone display-mode applies, run the app-specific code.
  runAppCode();
} else {
  // The standalone display-mode does not apply, the app is not installed,
  // or the device does not support the standalone display-mode.
  // Run the website-specific code.
  runSiteCode();
}
```

## See also

- Customize your app's title bar on desktop operating systems by using the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).
