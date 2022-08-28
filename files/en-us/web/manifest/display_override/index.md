---
title: display_override
slug: Web/Manifest/display_override
tags:
  - Manifest
  - Web
  - display
  - display_override
  - Experimental
browser-compat: html.manifest.display_override
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The [`display`](/en-US/docs/Web/Manifest/display) member is used to determine the developer's preferred display mode for a website. It follows a process where the browser falls back to the next display mode if the requested one is not supported. In some advanced use cases, this fallback process might not be enough.

The `display_override` member solves this by letting the developer provide a sequence of display modes that the browser will consider before using the `display` member. Its value is an array of display modes that are considered in-order, and the first supported display mode is applied.

## Values

Display override objects are display-mode strings, the possible values are:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Display Mode</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>fullscreen</code></td>
      <td>
        All of the available display area is used and no user agent
        {{Glossary("chrome")}} is shown.
      </td>
    </tr>
    <tr>
      <td><code>standalone</code></td>
      <td>
        The application will look and feel like a standalone application. This
        can include the application having a different window, its own icon in
        the application launcher, etc. In this mode, the user agent will exclude
        UI elements for controlling navigation, but can include other UI
        elements such as a status bar.
      </td>
    </tr>
    <tr>
      <td><code>minimal-ui</code></td>
      <td>
        The application will look and feel like a standalone application, but
        will have a minimal set of UI elements for controlling navigation. The
        elements will vary by browser.
      </td>
    </tr>
    <tr>
      <td><code>browser</code></td>
      <td>
        The application opens in a conventional browser tab or new window,
        depending on the browser and platform. This is the default.
      </td>
    </tr>
    <tr>
      <td><code>window-controls-overlay</code></td>
      <td>
        This display mode only applies when the application is in a separate PWA
        window and on a desktop operating system. The application will opt-in to
        the Window Controls Overlay feature, where the full window surface area
        will be available for the app's web content and the window control buttons
        (maximize, minimize, close, and other PWA-specific buttons) will appear
        as an overlay above the web content.
      </td>
    </tr>
  </tbody>
</table>

## Example

In the example below, the browser will consider the following display-mode fallback chain in this order: `fullscreen` → `minimal-ui` → `standalone`.

```json
{
  "display_override": ["fullscreen", "minimal-ui"],
  "display": "standalone",
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Preparing for the display modes of tomorrow](https://web.dev/display-override/)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/window-controls-overlay/)
