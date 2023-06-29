---
title: Create a standalone app
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
page-type: how-to
---

{{PWASidebar}}

[Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) that are installed on a user's device can define how they appear when the user launches them. They can choose to be displayed in a web browser, just like websites, or have their own dedicated windows similar to how OS-native applications work.

Users tend to have specific expectations of how installed applications behave on their devices. One of these expectations is that applications have their own dedicated windows.

By using the [web app manifest](/en-US/docs/Web/Manifest)'s [`display`](/en-US/docs/Web/Manifest/display) member, you can define whether the installed PWA is displayed in a browser or has its own dedicated window when the PWA is launched from the user's device.

## Use the standalone display mode

To use a standalone display mode and give your PWA its own dedicated window, add the [`display`](/en-US/docs/Web/Manifest/display) member to your [web app manifest](/en-US/docs/Web/Manifest) and set its value to `standalone`:

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

Note that there are other display modes available, such as `browser`, `minimal-ui`, and `fullscreen`. The display mode you choose changes how much of the browser user interface is shown to the user, from showing all of it, to having your own dedicated window. To learn more about all the available display mode and about how they fallback when one is not supported, see the documentation about the [`display`](/en-US/docs/Web/Manifest/display) member.

## Best practices

### Handle multi-page navigation

If your application is built using several navigable HTML pages, make sure to include UI elements for controlling navigation within your application.

If you don't have your own navigation elements, use the `minimal-ui` display mode to make sure users can still go between pages using previous and next buttons rendered by the browser in your app's title bar.

## Customize your app depending on the display mode

When you define a display mode other than `browser` in your web app manifest, it only applies when the application is installed. Like any other webpage, a manifest's `display` member has no effect when the PWA is not installed. You can check the display mode at runtime to detect if the app is installed or not.

Using the CSS {{cssxref("@media/display-mode", "display-mode")}} media feature or the {{domxref("Window.matchMedia()")}} JavaScript feature, you can selectively apply CSS styles or run JavaScript code in your app based on its display mode.

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

## See also

- [Web App Manifests](/en-US/docs/Web/Manifest).
- [Display modes](https://web.dev/learn/pwa/app-design/#display-modes).
- Customize your app's title bar on desktop operating systems by using the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).
