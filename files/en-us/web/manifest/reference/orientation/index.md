---
title: orientation
slug: Web/Manifest/Reference/orientation
page-type: web-manifest-member
browser-compat: html.manifest.orientation
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `orientation` manifest member is used to specify the default orientation for your web application.
It defines how the app should be displayed when launched and during use, in relation to the device's screen orientation, particularly on devices that support multiple orientations.

> [!NOTE]
> The app's orientation can be changed during runtime through various means, such as using the [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API).

## Syntax

```json-nolint
/* Keyword values */
"orientation": "any"
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
```

### Values

- `orientation`

  - : A string that specifies the default orientation for the web app.
    If the `orientation` member is not specified or an invalid value is provided, the web app will typically use the device's natural orientation and any user or system-level orientation settings.

    The `orientation` value must be one of the following keywords:

    - `any`

      - : Displays the web app in any orientation allowed by the device's operating system or user settings.
        It allows the app to rotate freely to match the orientation of the device when it is rotated.

    - `natural`

      - : Displays the web app in the orientation considered most natural for the device, as determined by the browser, operating system, user settings, or the screen itself. It corresponds to how the device is most commonly held or used:

        - On devices typically held vertically, such as mobile phones, `natural` is usually `portrait-primary`.
        - On devices typically used horizontally, such as computer monitors and tablets, `natural` is usually `landscape-primary`.

        When the device is rotated, the app may or may not rotate so as to match the device's natural orientation; this behavior may vary depending on the specific device, browser implementation, and user settings.

    - `portrait`

      - : Displays the web app with height greater than width.
        It allows the app to switch between `portrait-primary` and `portrait-secondary` orientations when the device is rotated.

    - `portrait-primary`

      - : Displays the web app in portrait mode, typically with the device held upright.
        This is usually the default app orientation on devices that are naturally portrait.
        Depending on the device and browser implementation, the app will typically maintain this orientation even when the device is rotated.

    - `portrait-secondary`

      - : Displays the web app in inverted portrait mode, which is `portrait-primary` rotated 180 degrees.
        Depending on the device and browser implementation, the app will typically maintain this orientation even when the device is rotated.

    - `landscape`

      - : Displays the web app with width greater than height.
        It allows the app to switch between `landscape-primary` and `landscape-secondary` orientations when the device is rotated.

    - `landscape-primary`

      - : Displays the web app in landscape mode, typically with the device held in its standard horizontal position.
        This is usually the default app orientation on devices that are naturally landscape.
        Depending on the device and browser implementation, the app will typically maintain this orientation even when the device is rotated.

    - `landscape-secondary`

      - : Displays the web app in inverted landscape mode, which is `landscape-primary` rotated 180 degrees.
        Depending on the device and browser implementation, the app will typically maintain this orientation even when the device is rotated.

## Description

To understand the `orientation` manifest member, it's important to be familiar with the following orientation-related concepts:

- **Device orientation**: Defines how the device is physically held or positioned.
- **Screen orientation**: Defines the physical orientation of the device's display.
- **App orientation**: Defines how the app's content is displayed relative to the screen orientation.

When a device is rotated, it typically changes the screen orientation. For example, rotating a mobile phone from vertical to horizontal usually switches the screen from portrait to landscape mode. Without any specific orientation set in the manifest, most apps will adjust their layout to fit this new screen orientation.

The manifest's `orientation` member allows you to control how your app responds to these changes. By specifying a preferred orientation for your app, you can decide whether your app should adapt to screen orientation changes or maintain a fixed layout regardless of how the device is held. For example, by setting `"orientation": "portrait-primary"`, you can indicate that you prefer your app to always be displayed in upright portrait mode relative to the screen, even if the device is rotated. The browser or operating system will attempt to honor this preference when possible.

The example below illustrates how a web app's layout might appear when a mobile phone is rotated. For this example, assume that the app's `orientation` value is set to `any`, allowing the app to rotate between all `orientation` values when the mobile phone is rotated. Also assume that both the phone and the browser support all orientations. The sequence shows a clockwise rotation of the phone, with each position rotated from the starting position as follows:

- Top-left: `portrait-primary` (starting position)
- Top-right: `landscape-primary` (90 degrees)
- Bottom-left: `portrait-secondary` (180 degrees)
- Bottom-right: `landscape-secondary` (270 degrees)

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device portrait-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-secondary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-secondary</code></div>
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
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-bar {
  background-color: #4285f4;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.landscape-primary,
.landscape-secondary {
  width: 300px;
  height: 200px;
}

.landscape-primary .screen,
.landscape-secondary .screen {
  width: 280px;
  height: 180px;
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(180deg);
}

.label {
  margin-top: 10px;
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Scope and default behavior

The specified `orientation` is applied to all top-level {{Glossary("Browsing context", "browsing contexts")}} of the web app.

If a browser supports the specified `orientation` value, it will use this as the default app orientation throughout the app's lifespan, unless overridden at runtime.
This means that browsers will revert to this default orientation whenever the top-level browsing context is navigated.

### Choosing a preferred orientation for your web app

By setting a specific orientation, you can ensure that your web app is displayed optimally for its content and user interface.
For example, a video app is often better suited to landscape orientation, while a reading app typically works better in portrait orientation.

Not specifying an orientation can also be a deliberate choice, allowing your web app to adapt flexibly to different devices and user preferences.

### Manifest `orientation` vs. Screen Orientation API behavior

While the `orientation` manifest member sets the default orientation of the web app, the orientation of a top-level browsing context can be changed once the web app is running using the [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API).

The `orientation` values are similar across the web app manifest and the Screen Orientation API, but their behavior and purposes differ.

- Web app manifest:

  - Suggests the preferred default orientation of the web app using the `orientation` manifest member.
  - Sets the initial orientation when the app is launched.

- Screen Orientation API:

  - Uses orientation values to lock the screen to a specific orientation.
  - Allows dynamic changes to orientation during runtime (for example, locking orientation using {{domxref("ScreenOrientation.lock", "screen.orientation.lock()")}}).

  > [!NOTE]
  > The Screen Orientation API's [`lock()`](/en-US/docs/Web/API/ScreenOrientation/lock) method has limited support across browsers.
  > Check its compatibility if you plan to use it to dynamically change screen orientation during runtime.

### Platform and browser limitations

When adding the orientation preference for your app, keep the following considerations and limitations mind:

- Browser vendors and device manufacturers decide which orientations and [`display`](/en-US/docs/Web/Manifest/Reference/display) modes are compatible.
- Certain UI/UX concerns and platform conventions may limit which screen orientations and display modes can be used together.
- Support for specific `orientation` values may vary depending on the device and platform.
- Some devices may not support all `orientation` values, such as `portrait-secondary` and `landscape-secondary`.
- Some browsers might not allow changing the default orientation of a web app while in while in certain display modes (e.g., [`"display": "browser"`](/en-US/docs/Web/Manifest/Reference/display#browser)).

## Examples

### Specifying a fixed orientation for a web app

This example sets the app's orientation to `portrait-primary`. Assuming browser and device support, the app will always display in upright portrait mode even when the device is rotated.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Setting a flexible orientation for a web app

Consider a photo viewing and editing app. In the app's manifest file, as shown below, `orientation` is set to `any`. This allows the app to be launched in the device's current orientation and adapt to both `portrait` and `landscape` orientations as users rotate their devices. This `orientation` setting will enable users to view and edit photos comfortably in whichever orientation best suits the current display or their current usage context.

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
- [Learn: Responsive Design](/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
