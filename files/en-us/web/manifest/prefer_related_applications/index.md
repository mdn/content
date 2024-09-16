---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.prefer_related_applications
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

The `prefer_related_applications` manifest member is used to provide a hint to browsers about whether to prefer related native applications over your web application. It is typically used in conjunction with the [`related_applications`](/en-US/docs/Web/Manifest/related_applications) manifest member.

> [!NOTE]
> For Chromium-based browsers, `prefer_related_applications` should be set to `false` or omitted.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Values

- `prefer_related_applications`
  - : A boolean value.
    - If set to `true`, browsers might prompt users to install one of the applications listed in [`related_applications`](/en-US/docs/Web/Manifest/related_applications) instead of your web app.
    - If set to `false` or omitted, browsers will typically prefer to install your web app over related native applications, if specified.

## Examples

### Specifying preference for installing your web app

Consider a scenario where you have both a web app and native apps for your product. If you want to offer related native apps as options but prefer users to install your web app:

```json
{
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hikingapp"
    },
    {
      "platform": "itunes",
      "url": "https://apps.apple.com/store/app/hiking/id123456789"
    }
  ]
}
```

Your web app will be installed as the primary app, and browsers will not prompt users to install related native apps. However, the native apps will still be available as alternatives.

### Specifying preference for installing related native apps

In the previous scenario, if you want to encourage users to install the related native app for a better experience with certain features, you can indicate it via `prefer_related_applications`:

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hikingapp"
    },
    {
      "platform": "itunes",
      "url": "https://apps.apple.com/store/app/hiking/id123456789"
    }
  ]
}
```

Browsers might prompt users to install one of the related native app instead of your web app.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`related_applications`](/en-US/docs/Web/Manifest/related_applications) manifest member
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
