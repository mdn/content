---
title: orientation
slug: Web/Manifest/orientation
page-type: web-manifest-member
browser-compat: html.manifest.orientation
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `orientation` manifest member is used to specify the default screen orientation for your web application, which defines how it should be displayed when launched and during use, particularly on mobile devices.

## Syntax

```json-nolint
/* Keyword values */
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
"orientation": "any"

```

### Values

- `orientation`

  - : A string with a keyword value, which includes:

    - `natural`

      - : Displays the web app in the most natural orientation(s) for the device, as determined by the operating system, browser, user settings or the screen itself.
        Typically, this is `portrait-primary` for mobile phones and `landscape-primary` for computer monitors and tablets.

        On devices with a natural portrait orientation:

        - `portrait-primary` is 0 degrees.
        - `landscape-primary` is 90 degrees.
        - `portrait-secondary` is 180 degrees (vertical flip from `portrait-primary`).
        - `landscape-secondary` is 270 degrees (horizontal flip from `landscape-primary`).

        On devices with a natural landscape orientation:

        - `landscape-primary` is 0 degrees.
        - `portrait-primary` is 90 degrees.
        - `landscape-secondary` is 180 degrees (vertical flip from `landscape-primary`).
        - `portrait-secondary` is 270 degrees (horizontal flip from `portrait-primary`).

        This setting restricts the web app to the device's inherent orientation preference, which may be a single orientation or a limited set of orientations considered natural for that device.

    - `portrait`

      - : Displays the web app in portrait mode, where the screen height is greater than the screen width.
        This is a general setting that may include `portrait-primary` or `portrait-secondary` or both, depending on the platform convention.

    - `portrait-primary`

      - : Displays the web app in the primary portrait mode.
        On devices with a natural portrait orientation, this is the same as the natural orientation (0 degrees).
        On devices with a natural landscape orientation, this is 90 degrees clockwise from the natural orientation.

    - `portrait-secondary`

      - : Displays the web app in the secondary portrait mode.
        This is typically the default `portrait` orientation.
        On devices with a natural portrait orientation, this is upside down (180 degrees).
        On devices with a natural landscape orientation, this is 270 degrees clockwise from the natural orientation.

    - `landscape`

      - : Displays the web app in landscape mode, where the screen width is greater than the screen height.
        This is a general setting that may include `landscape-primary` or `landscape-secondary` or both, depending on the platform convention.

    - `landscape-primary`

      - : Displays the web app in the primary landscape mode.
        This is typically the default `landscape` orientation.
        On devices with a natural landscape orientation, this is the same as the natural orientation (0 degrees).
        On devices with a natural portrait orientation, this is 90 degrees clockwise from the natural orientation.

    - `landscape-secondary`

      - : Displays the web app in the secondary landscape mode.
        On devices with a natural landscape orientation, this is upside down (180 degrees).
        On devices with a natural portrait orientation, this is 270 degrees clockwise from the natural orientation.

    - `any`
      - : Displays the web app in any orientation allowed by the device's operating system or user settings.
        This includes all possible orientations: `portrait-primary`, `portrait-secondary`, `landscape-primary`, and `landscape-secondary`.
        This setting is the most flexible and allows the web app to be rotated freely between any of these orientations as permitted by the device.

## Description

Use the `orientation` manifest member to specify how your web app should be displayed on devices with variable screen orientations.
This is particularly useful for mobile devices and tablets, where users can rotate the device.

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device">
      <div class="screen"></div>
      <div class="button"></div>
    </div>
    <div class="label">Portrait Primary</div>
  </div>
  <div class="orientation">
    <div class="device landscape">
      <div class="screen"></div>
      <div class="button"></div>
    </div>
    <div class="label">Landscape Primary</div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen"></div>
      <div class="button"></div>
    </div>
    <div class="label">Portrait Secondary</div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen"></div>
      <div class="button"></div>
    </div>
    <div class="label">Landscape Secondary</div>
  </div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
}

.orientation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.device {
  width: 200px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
}

.screen {
  width: 180px;
  height: 280px;
  border-radius: 20px;
  background-color: lightgrey;
  margin: 10px;
}

.button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: darkgrey;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.landscape {
  transform: rotate(90deg);
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(270deg);
}

.label {
  margin-top: 10px;
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

By setting a specific orientation, you can ensure that your web app is displayed in the most optimal way for its content and user interface.
For example, a video app is often better suited in landscape orientation, while a reading app typically works better in portrait orientation.

### Scope and default behavior

The specified orientation is applied to all top-level {{Glossary("Browsing context", "browsing contexts")}} of the web app.

If a browser supports the value of the `orientation` member as the default screen orientation, it serves as the default screen orientation for the life of the web app (unless overridden by some other means at runtime).
This means that browsers will revert to this default screen orientation whenever the top-level browsing context is navigated.

### Manifest vs. Screen Orientation API behavior

The `orientation` values are similar across the web app manifest and the [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API), but their behavior and purpose differ.

- Web app manifest
  - The `orientation` manifest member suggests a preferred default orientation for the web app.
  - It sets the initial orientation when the app is launched.
- Screen Orientation API
  - It uses the orientation values to actively lock the screen to a specific orientation.
  - It allows dynamic changes to orientation during runtime (e.g., `screen.orientation.lock()`)

> [!NOTE]
> While the `orientation` manifest member sets the default orientation of the web app, the orientation of a top-level browsing context can be changed once the web app is running. This can be done through various means, such as using the [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API).

Remember that although it is encouraged, browsers may or may not implement the Screen Orientation API.

### Platform and browser limitations

Certain UI/UX concerns and platform conventions may limit which screen orientations and [`display`]((/en-US/docs/Web/Manifest/display) modes can be used together.
Browser vendors and device manufacturers decide which orientations and display modes are compatible.
For example, some browsers might not allow changing the default screen orientation of a web app while in [`"display": "browser"`](/en-US/docs/Web/Manifest/display#browser) mode.

Support for specific values may vary depending on the device and platform.
For example, some devices may not support `portrait-secondary` or `landscape-secondary` orientations.

## Examples

### Setting the default orientation for a web app

This example sets the default orientation to `portrait-primary`, which is a typical natural orientation for most mobile devices.

```json
{
  "name": "My Web App"
  "orientation": "portrait-primary"
}
```

### Setting the default orientation for a photo viewing and editing app

Consider this example of a photo viewing and editing app that works on both mobile phones and tablets. In the app's manifest file, as shown below, the `orientation` is set to `any`, allowing the app to launch in the device's current orientation. The main gallery view of the app adapts to both `portrait` and `landscape` orientations. When a user selects an image for detailed viewing or editing, the app can use the Screen Orientation API to suggest `landscape` orientation for a wider editing canvas on tablets.

```json
{
  "name": "PhotoGallery Pro",
  "short_name": "PhotoGal",
  "description": "A professional photo gallery and editing application",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "any",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.photogallery"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API)
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Using media queries for device orientation](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Responsive Design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
