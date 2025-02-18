---
title: prefer_related_applications
slug: Web/Manifest/Reference/prefer_related_applications
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.prefer_related_applications
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

The `prefer_related_applications` manifest member is used to provide a hint to browsers whether to prefer installing native applications specified in the [`related_applications`](/en-US/docs/Web/Manifest/Reference/related_applications) manifest member over your web application.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Values

- `prefer_related_applications`
  - : A boolean value:
    - If set to `true`, browsers may prompt users to install one of the applications listed in [`related_applications`](/en-US/docs/Web/Manifest/Reference/related_applications) instead of your web app.
    - If set to `false` or omitted, browsers will prefer to install your web app over related native applications.
      > [!NOTE]
      > For Chromium-based browsers, `prefer_related_applications` should be set to `false` or omitted to make your web app installable.

## Examples

### Specifying preference for installing your web app

Consider a scenario where you have both a web app and native apps for your product available on Google Play Store and Windows Store. If you want to offer related native apps as options but prefer users to install your web app, you can set it up in your manifest file as shown below. Browsers will promote your web app for installation. The native apps will still be available as alternatives.

```json
{
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/detail/9nqx6sv74srz"
    }
  ]
}
```

### Specifying preference for installing the related native app

To encourage users to install your native Android hiking app from Google Play Store in preference to the web app, you can configure your web app's manifest file as shown below.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`related_applications`](/en-US/docs/Web/Manifest/Reference/related_applications) manifest member
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
