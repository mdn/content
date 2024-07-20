---
title: display
slug: Web/Manifest/display
page-type: web-manifest-member
browser-compat: html.manifest.display
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `display` manifest member is used to specify your preferred display mode for the web application. The display mode determines how much of the browser UI is shown to the user when the app is launched within the context of an operating system. You can choose to show the full browser interface or hide it to provide a more app-like experience.

## Syntax

```json
"display": "standalone"
```

### Values

The value of the `display` member is a string. The possible values include `fullscreen`, `standalone`, `minimal-ui`, and `browser`. If a browser does not support the specified display mode, it follows a pre-defined fallback chain: `fullscreen` → `standalone` → `minimal-ui` → `browser`. If `display` is not specified, the default value `browser` is used.

- `fullscreen`

  - : Opens the app with browser UI elements hidden and uses the entirety of the available display area. Use this value for apps where fullscreen engagement is crucial and desired. For example, use it for a game app that can take up the entire screen without any browser controls visible, providing a fully immersive gaming experience.

    **Note:** The `fullscreen` value of the manifest's `display` member works separately from the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API). The `fullscreen` display mode changes the state of the entire browser window to full screen, while the Fullscreen API only makes a specific element within the window go full screen. Therefore, a web app can be in `fullscreen` display mode while {{DOMxRef("Document.fullscreenElement")}} is `null` and {{DOMxRef("Document.fullscreenEnabled")}} is `false`.

- `standalone`

  - : Opens the app to look and feel like a standalone native app. This can include the app having a different window and its own icon in the app launcher. The browser will exclude UI elements such as a URL bar but can still include other UI elements such as the status bar. For example, use it for a task manager app that opens in its own window without the browser's URL bar, while still displaying the device's status bar for battery and notifications, thereby providing an integrated experience.

- `minimal-ui`

  - : Opens the app to look and feel like a standalone app but with a minimal set of UI elements for navigation. The specific elements can vary by browser but typically include navigation controls like back, forward, reload, and possibly a way to view the app's URL. Additionally, the browser may include platform-specific UI elements that provide functionality for sharing and printing content. Use this value for apps where displaying a minimal browser interface is beneficial. For example, use it for a news reading or other general reading apps that show only the essential browser controls like back and reload buttons, providing a cleaner and less distracting interface.

- `browser`
  - : Opens the app in a conventional browser tab or new window, using the platform-specific convention for opening links. Use this value for apps that are designed to be used within a browser context, where full browser functionality is needed. This is the default value if no `display` mode is specified.

## Description

After a browser applies a `display` mode to an {{Glossary("application context")}}, it becomes the default display mode for the top-level browsing context. The browser may override this display mode for security reasons or provide users with a means for switching to another `display` mode.

Use the {{cssxref("@media/display-mode", "display-mode")}} media feature to determine the current `display` mode applied by the browser, which is useful for ensuring your app behaves as expected in different display contexts. Additionally, the `display-mode` media feature allows you to adjust your app's styles based on the `display` mode currently being used. This can help provide a consistent user experience regardless of whether the website is launched from a URL or from a desktop icon.

**Note:** The value of the `display-mode` media feature reflects the actual `display` mode being used, which might differ from the one requested in the manifest's `display`, because the browser might not support the requested mode.

As shown in the code below, you can adjust an app's style depending on the `display-mode` used.

```css
@media (display-mode: standalone) {
  body {
    background-color: #f0f0f0; /* Light grey background for standalone mode */
  }
}

@media (display-mode: fullscreen) {
  body {
    background-color: #000000; /* Black background for fullscreen mode */
  }
}
```

## Examples

The following example manifest file for the web app named "HackerWeb" defines how the app should appear and behave when installed on a user's device. The `display` member is set to `standalone`, which specifies that the app should open in a separate window without the typical browser UI elements like the URL bar.

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "description": "A readable Hacker News app",
  "icons": [
    {
      "src": "images/icons/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
