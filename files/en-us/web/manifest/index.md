---
title: Web app manifests
slug: Web/Manifest
tags:
  - App
  - Manifest
  - PWA
  - Progressive web apps
  - Reference
  - Web
browser-compat: html.manifest
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

**Web app manifests** are part of a collection of web technologies called [progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs), which are websites that can be installed to a device's homescreen without an app store. Unlike regular web apps with simple homescreen links or bookmarks, PWAs can be downloaded in advance and can work offline, as well as use regular [Web APIs](/en-US/docs/Web/API).

A web application manifest, as defined in the [Web Application Manifest](https://w3c.github.io/manifest/) specification, provides information about a web application in a {{Glossary("JSON")}} text file, necessary for the web app to be downloaded and be presented to the user similarly to a native app (e.g., be installed on the homescreen of a device, providing users with quicker access and a richer experience). PWA manifests include its name, author, icon(s), version, description, and list of all the necessary resources (among other things).

## Members

Web application manifests can contain the following keys. Click on each one to link through to more information about it:

{{ListSubpages("/en-US/docs/Web/Manifest")}}

## Example manifest

```json
{
  "$schema": "https://json.schemastore.org/web-manifest-combined.json",
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A readable Hacker News app.",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
  }]
}
```

## Deploying a manifest

Web app manifests are deployed in your HTML pages using a {{HTMLElement("link")}} element in the {{HTMLElement("head")}} of a document:

```html
<link rel="manifest" href="manifest.json">
```

The `.webmanifest` extension is specified in the [Media type registration](https://w3c.github.io/manifest/#media-type-registration) section of the specification (the response of the manifest file should return `Content-Type: application/manifest+json`). Browsers generally support manifests with other appropriate extensions like `.json` (`Content-Type: application/json`).

If the manifest requires credentials to fetch, the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute must be set to `use-credentials`, even if the manifest file is in the same origin as the current page.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials">
```

## Splash screens

In some browsers (Chrome 47 and later, for example), a splash screen is displayed for sites launched from a homescreen. This splash screen is auto-generated from properties in the web app manifest, specifically:

- [`name`](/en-US/docs/Web/Manifest/name)
- [`background_color`](/en-US/docs/Web/Manifest/background_color)
- The icon in the [`icons`](/en-US/docs/Web/Manifest/icons) array that is closest to 128dpi for the device.

## Browser compatibility

{{Compat}}

## See also

- [Progressive Web Apps (PWAs)](/en-US/docs/Web/Progressive_web_apps)
