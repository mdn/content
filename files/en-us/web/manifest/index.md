---
title: Web app manifests
slug: Web/Manifest
page-type: landing-page
browser-compat: html.manifest
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

A **web application manifest**, defined in the [Web Application Manifest](https://w3c.github.io/manifest/) specification, is a {{Glossary("JSON")}} text file that provides information about a web application.

The most common use for a web application manifest is to provide information that the browser needs to install a [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) on a device, such as the app's name and icon.

A web application manifest contains a single JSON object where the top-level keys are called _members_.

## Members

This section lists the members that may appear in the manifest.

All members are optional in the specification, but some applications require some members to be present. For example, [PWAs must provide certain manifest members](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

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
