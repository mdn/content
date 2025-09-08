---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
page-type: web-manifest-member
status:
  - experimental
browser-compat: manifests.webapp.related_applications
sidebar: pwasidebar
---

{{SeeCompatTable}}

The `related_applications` manifest member is used to specify one or more applications that are related to your web application. These can include native applications and even to self-define the web application to leverage web APIs.
It can also be used with the [`prefer_related_applications`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) manifest member, which indicates a preference for installing either a related native application or your web application.

## Syntax

```json-nolint
/* Related native application on one platform specified by both url and id */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }
]

/* Related native application on one platform specified only by id */
"related_applications": [
  {
    "platform": "windows",
    "id": "example.app1"
  }
]

/* Related native applications on two platforms */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  },
  {
    "platform": "amazon",
    "url": "https://www.amazon.com/product/dp/B000XA1000"
  }
]

/* Self-defining web application on one platform specified only by id */
"related_applications": [
  {
    "platform": "webapp",
    "id": "com.example.app1"
  }
]
```

### Values

- `related_applications`
  - : An array of objects, each representing a platform-specific application related to the web app. Each object must include a `platform` property and at least one of either a `url` or an `id` (or both).
    - `platform`
      - : A string that identifies the platform on which the application can be found.
        Examples include `amazon` (Amazon App Store), `play` (Google Play Store), `windows` (Windows Store), and `webapp` (self-define your PWA in its own manifest).
        See the complete list of possible [platform values](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : A string that represents the URL at which the platform-specific application can be found.
        If not specified, an `id` must be provided.
    - `id` {{Optional_Inline}}
      - : A string with the ID used to represent the application on the specified platform.
        If not specified, a `url` must be provided.

## Description

A "related application" is the web app itself or {{Glossary("native")}} application that provides functionality similar to your web app, often with additional features or better integration with users' devices.

The `related_applications` manifest member lets you identify the platform-specific applications that are related to your web app.
For example, consider you have a native Android app for your product available through the Google Play Store.
It provides the same core features as your web app and integrates better with the device's notification system.
You can use `related_applications` to specify this native Android app in your web app's manifest file.

Some key points about the `related_applications` member include:

- It allows you to specify multiple related apps on different platforms, giving users options for native apps across various devices and operating systems.
- It creates a unidirectional relationship between your web app and the specified platform.
  The native apps are not required to reference your web app in return.
- The data may be used by web crawlers to gather more information about the native apps related to your web app, potentially improving discoverability of these apps.
- When used with the [`prefer_related_applications`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) member set to `true`, it enables browsers to suggest installing the related native app instead of your web app.

  > [!NOTE]
  > For Chromium-based browsers, `prefer_related_applications` should be set to `false` or omitted to make your web app installable.

## Examples

### Specifying a related native application

This example shows how to specify a related native Android app in your web app's manifest file. It uses minimal information to identify the native app available on the Google Play Store:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

### Specifying related native applications on multiple platforms

If native versions of your web app are available on both Google Play Store and Windows Store, you can specify them in your web app's manifest file like so:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/store/detail/example-app1/9WZDNCRFHVJL"
    }
  ]
}
```

### Specifying preference for installing a related native app

If you want to indicate to browsers that you prefer users to be given the option to install your native app, available on the Google App Store, instead of your web app, you can set `prefer_related_applications` to `true`. Browsers may then prompt users to install the native Android app instead of your web app.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

### Specifying a related web application

This example shows how to specify the self-defining entry for PWAs in your web app's manifest file.

```json
{
  "related_applications": [
    {
      "platform": "webapp",
      "id": "com.example.app1"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefer_related_applications`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) manifest member
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
- {{domxref("Navigator.getInstalledRelatedApps()")}} for checking if your web app is installed. This requires specification of the unique `id` field in this manifest member.
