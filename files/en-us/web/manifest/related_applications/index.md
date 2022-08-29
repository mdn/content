---
title: related_applications
slug: Web/Manifest/related_applications
tags:
  - Manifest
  - Web
  - related_applications
  - Experimental
browser-compat: html.manifest.related_applications
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

The `related_applications` field is an array of objects specifying native applications that are installable by, or accessible to, the underlying platform — for example, a native Android application obtainable through the Google Play Store. Such applications are intended to be alternatives to the manifest's website that provides similar/equivalent functionality — like the native app equivalent.

> **Note:** Developer can specify that the native applications are preferred over the web application by setting `prefer_related_applications` to `true`.

## Examples

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }
]
```

## Related application values

Application objects may contain the following values:

| Member     | Description                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `platform` | The platform on which the application can be found. [List of available values](https://github.com/w3c/manifest/wiki/Platforms) |
| `url`      | The URL at which the application can be found.                                                                                 |
| `id`       | The ID used to represent the application on the specified platform.                                                            |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
