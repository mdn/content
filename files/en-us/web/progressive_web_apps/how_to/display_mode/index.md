---
title: Create a standalone app
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
browser-compat: html.manifest.display
---

[Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) that are installed on a user's device can define how they appear when the user launches them. They can choose to be displayed in a web browser like websites, or have their own dedicated windows similar to how native applications work.

The value of the [web app manifest](/en-US/docs/Web/Manifest)'s [`display`](/en-US/docs/Web/Manifest/display) member defines whether, when the PWA is launched from the user's device, the installed PWA is displayed in a browser or if the PWA has its own dedicated window.

## Choose a display mode

The optional [`display`](/en-US/docs/Web/Manifest/display) member in your [web app manifest](/en-US/docs/Web/Manifest) defines the preferred display mode for your PWA. The display mode you choose changes how much of the browser user interface is shown to the user, from showing the full browser {{Glossary("chrome")}}, to having your own dedicated window.

- `browser`
  - : The application opens in a conventional browser tab or new window. This is also the default value if `display` is not specified in the web app manifest or has an incorrect value.
- `minimal-ui`
  - : The application looks and feels like a standalone application, but has a minimal set of UI elements from the browser to control back and forward page navigation.
- `standalone`
  - : The application opens in its own dedicated window.
- `fullscreen`
  - : The entire device display area is used by the application.

If a particular display mode is not supported, the following fallback chain is used: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

This means that if `fullscreen` is defined but not supported, `standalone` will be used. If `standalone` is not supported, `minimal-ui` will be used. If `minimal-ui` is not supported, the default `browser` display mode will be used.

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

The `display` manifest member is not mandatory and defaults to `browser`. This means that by default, your PWA will still open in a browser window when installed.

However, users have specific expectations of how installed applications behave on their devices. One of these expectations is that applications have their own dedicated windows.

By using the `standalone` display mode, you can provide an app experience that is more familiar to users.

### Handle multi-page navigation

If your application is built using several navigatable HTML pages, make sure to include UI elements for controlling navigation within your application.

If you don't have your own navigation elements, use the `minimal-ui` display mode to make sure users can still go between pages using previous and next buttons rendered by the browser in your app's title bar.

## Customize your app depending on the display mode

When you define a display mode other than `browser` in your web app manifest, it only applies when the application is installed. Like any other webpage, a manifest's `display` member has no effect when the PWA is not installed. You can check the display mode at runtime to detect if the app is installed or not.

Using the CSS {{cssxref("@media/display-mode", "display-mode")}} media feature or the {{domxref("Window.matchMedia")}} JavaScript feature, you can selectively apply CSS styles or run JavaScript code in your app based on its display mode.

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

In this example, the `.app-button` element will be hidden by default unless the display mode is set to `standalone`, which happens if the `display` manifest member was set to `standalone` and the app is installed on the user's device.

Here is another example showing how to use the {{domxref("window.matchMedia()")}} method to detect if the `standalone` display mode is enabled:

```javascript
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web App Manifests](/en-US/docs/Web/Manifest).
- [Display modes](https://web.dev/learn/pwa/app-design/#display-modes).
- Customize your app's title bar on desktop operating systems by using the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).
