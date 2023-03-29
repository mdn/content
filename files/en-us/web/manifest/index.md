---
title: Web app manifests
slug: Web/Manifest
browser-compat: html.manifest
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

**Web app manifests** are part of a collection of web technologies that enable [progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs).

PWAs are web applications, written using web technologies, that can be installed on a device. Installed PWAs can work offline, use regular [Web APIs](/en-US/docs/Web/API), and be fully integrated into the operating system they're installed on.

A web application manifest, as defined in the [Web Application Manifest](https://w3c.github.io/manifest/) specification, provides information about a web application in a {{Glossary("JSON")}} text file. A web application manifest is necessary for the web app to be installed on a device and behave like other OS-native apps.

A PWA's manifest includes its [name](/en-US/docs/Web/Manifest/name), [icon(s)](/en-US/docs/Web/Manifest/icons), [description](/en-US/docs/Web/Manifest/description), and ways that the PWA appears and integrates into the operating system where it's installed.

## Members

A web application manifest contains a single JSON object where the top-level keys are called _members_. A web application manifest can contain the following members:

{{ListSubpages("/en-US/docs/Web/Manifest")}}

## Example manifest

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A readable Hacker News app.",
  "icons": [
    {
      "src": "images/touch/homescreen48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

## Deploying a manifest

Web app manifests are deployed in your HTML pages using a {{HTMLElement("link")}} element in the {{HTMLElement("head")}} of a document:

```html
<link rel="manifest" href="manifest.json" />
```

The `.webmanifest` extension is specified in the [Media type registration](https://w3c.github.io/manifest/#media-type-registration) section of the specification (the response of the manifest file should return `Content-Type: application/manifest+json`). Browsers generally support manifests with other appropriate extensions like `.json` (`Content-Type: application/json`).

If the manifest requires credentials to fetch, the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute must be set to `use-credentials`, even if the manifest file is in the same origin as the current page.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Splash screens

In some browsers and operating systems, a splash screen is displayed when an installed PWA is launched. This splash screen is automatically generated and its appearance is defined by members in the web app manifest, specifically:

- [`name`](/en-US/docs/Web/Manifest/name)
- [`background_color`](/en-US/docs/Web/Manifest/background_color)
- [`icons`](/en-US/docs/Web/Manifest/icons)

## Browser compatibility

{{Compat}}

## See also

- [Progressive Web Apps (PWAs)](/en-US/docs/Web/Progressive_web_apps)
