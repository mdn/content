---
title: screenshots
slug: Web/Manifest/screenshots
tags:
  - Manifest
  - Screenshots
  - Web
  - Experimental
browser-compat: html.manifest.screenshots
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `screenshots` member defines an array of screenshots intended to showcase the application. These images are intended to be used by progressive web app stores.

## Examples

```json
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }
]
```

The `label` member is a string that serves as an accessible name for the screenshots. It can also serve as alternative text for the screenshots.

The `platform` member is also a string that can define the distribution platform for which the specific screenshots should apply to. If not
defined, user agents can use the screenshot's aspect ratio for displaying.

The `platform` member can be set to one of the following _general purpose_ values :

- `wide` : for screenshots applicable to wide screens only (e.g., status boards).
- `narrow` : for narrow screenshots (e.g., mobile devices, wearables).

It can also be set to `android`, `chromeos`, `ios`, `kaios`, `macos`, `windows` and `xbox` for the screenshots to display on specific operating systems or to
`chrome_web_store`, `play`, `itunes`, `microsoft-inbox` and `microsoft-store` for the screenshots to display on specific application distribution platforms.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
