---
title: screenshots
slug: Web/Manifest/screenshots
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.screenshots
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

The `screenshots` member defines an array of screenshots intended to showcase the application. These images are intended to be used by progressive web app stores.

## Properties

The `screenshots` member is an array of objects each representing a screenshot. Each screenshot object may contain the following properties:

- `form_factor`

  - : String that represents a class of devices. This should be used only when the screenshot is only applicable for a particular form factor.

    This property may take one of the following values:

    - `"narrow"`: the screenshot is applicable only to narrow screens.
    - `"wide"`: the screenshot is applicable only to wide screens.

- `label`

  - : String that represents the accessible name of the screenshot object. This member can serve as alternative text for the screenshot.

- `platform`

  - : String that represents the platform to which the screenshot applies. This should be used when a screenshot is only applicable to a specific device or distribution platform. User agents should not show screenshots that contain a `platform` value that differs from the current platform (for example, Google Play should not show screenshots whose `platform` is `"ios"`).

    This property may take one of the following values:

    - Device platform identifiers:
      - `"android"`
      - `"chromeos"`
      - `"ipados"`
      - `"ios"`
      - `"kaios"`
      - `"macos"`
      - `"windows"`
      - `"xbox"`
    - Distribution platform identifiers:
      - `"chrome_web_store"`
      - `"itunes"`
      - `"microsoft-inbox"`
      - `"microsoft-store"`
      - `"play"`

- `sizes`
  - : String that describes the size of the image, or multiple sizes for image formats such as ICO that can contain multiple images. This property is equivalent to, and specified in the same way as, the [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attribute of the {{htmlelement("link")}} element.
- `src`
  - : String representing a URL from which the user agent can fetch the image data.
- `type`
  - : String representing the {{glossary("MIME_type", "MIME type")}} for the image.

## Examples

```json
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
