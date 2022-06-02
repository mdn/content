---
title: display
slug: Web/Manifest/display
tags:
  - Manifest
  - Web
  - display
browser-compat: html.manifest.display
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `display` member is a string that determines the developers' preferred display mode for the website. The display mode changes how much of browser UI is shown to the user and can range from `browser` (when the full browser window is shown) to `fullscreen` (when the app is fullscreened).

> **Note:** The browser follows a pre-defined fallback chain if it does not support a given mode: `fullscreen` → `standalone` → `minimal-ui` → `browser`, with `browser` being the default value if the `display` member is not specified.

> **Note:** You can selectively apply CSS to your app based on the display mode, using the {{cssxref("@media/display-mode", "display-mode")}} media feature. This can be used to provide a consistent user experience between launching a site from a URL and launching it from a desktop icon.

## Values

The possible values are:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Display Mode</th>
      <th scope="col">Description</th>
      <th scope="col">Fallback Display Mode</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>fullscreen</code></td>
      <td>
        All of the available display area is used and no user agent
        {{Glossary("chrome")}} is shown.
      </td>
      <td><code>standalone</code></td>
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
      <td><code>minimal-ui</code></td>
    </tr>
    <tr>
      <td><code>minimal-ui</code></td>
      <td>
        The application will look and feel like a standalone application, but
        will have a minimal set of UI elements for controlling navigation. The
        elements will vary by browser.
      </td>
      <td><code>browser</code></td>
    </tr>
    <tr>
      <td><code>browser</code></td>
      <td>
        The application opens in a conventional browser tab or new window,
        depending on the browser and platform. This is the default.
      </td>
      <td>(None)</td>
    </tr>
  </tbody>
</table>

## Example

```json
"display": "standalone"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
