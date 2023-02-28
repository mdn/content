---
title: Customize the colors of your app window
slug: Web/Progressive_web_apps/How_to/Colors
tags:
  - PWA
  - Progressive web apps
  - App
  - Apps
  - Application
  - Web app
  - Web applications
  - How to
  - Theme color
  - Background color
browser-compat:
  - html.manifest.theme_color
  - html.manifest.background_color
---

When building Progressive Web Apps (PWAs), it's important to consider not only the appearance of the content your app displays but also the way the app appears on the user's device once installed. One way to customize the app window is by using the [`theme_color`](/en-US/docs/Web/Manifest/theme_color) and [`background_color`](/en-US/docs/Web/Manifest/background_color) web app manifest members.

By using the `theme_color` and `background_color` members in your PWA manifest, you can create a more polished experience for your users. These small details can help make your PWA feel more like a native app.

## Customize the app window background color

Use the `background_color` manifest member in your PWA to define the color that appears in the application window before the app's stylesheets have loaded.

The color you choose should match the `background-color` CSS property in your app's stylesheet for a smooth transition between launching the web application and loading its content.

### Example

Here is a web app manifest file example, showing how to define a background color:

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
  "display": "standalone",
  "background_color: "peachpuff"
}
```

## Define a theme color

In addition to customizing the background color of your app window, you can use the `theme_color` member in your PWA manifest to define the color of certain operating system and browser UI elements that your PWA may use.

Different devices, operating systems, and browsers apply the `theme_color` member differently. For example:

- On Android devices, the color is applied to the browser {{Glossary("chrome")}} and task switcher background.
- On Windows, the color is used to customize the title bar of your standalone app window.

Choose a `theme_color` that complements your PWA's overall design and branding and works well across a variety of devices and platforms to ensure a consistent user experience.

### Example

Here is a web app manifest file example, showing how to define a theme color:

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
  "display": "standalone",
  "theme_color: "peachpuff"
}
```

### Relationship with the `theme-color` meta element value

The [`theme-color`](/en-US/docs/Web/HTML/Element/meta/name/theme-color) value for the {{htmlattrxref("name", "meta")}} attribute of the {{htmlelement("meta")}} element can be used to define a theme color per webpage. This is different from the `theme_color` manifest member which you define globally for your app.

If both are set, the `theme-color` meta element value overrides the `theme_color` manifest member. This lets you define a global color for your app, and override it on specific pages.

Note that on certain browsers like Safari on macOS, or Chrome on Android, the `theme-color` meta element value is used to style the browser interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web App Manifests](/en-US/docs/Web/Manifest).
- [Meta Theme Color and Trickery](https://css-tricks.com/meta-theme-color-and-trickery/)
