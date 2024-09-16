---
title: related_applications
slug: Web/Manifest/related_applications
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.related_applications
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

The `related_applications` manifest member is used to specify one or more native applications that are related to your web application.

> [!NOTE]
> You can set the [`prefer_related_applications`](/en-US/docs/Web/Manifest/prefer_related_applications) manifest member to `true` if you prefer users to install the related native applications over your web app. However, for Chromium-based browsers, `prefer_related_applications` should be set to `false` or omitted.

## Syntax

```json-nolint
/* Single related application with both url and id */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }
]

/* Single related application with only id */
"related_applications": [
  {
    "platform": "windows",
    "id": "example.app1"
  }
]

/* Multiple related applications */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  },
  {
    "platform": "itunes",
    "url": "https://apps.apple.com/app/example-app1/id123456789"
  }
]
```

### Values

- `related_applications`

  - : An object or an array of objects, each representing a platform-specific native application related to the web app. Each object must include a `platform` property and at least one of either a `url` or an `id` (or both).

    - `platform`
      - : A string that identifies the platform on which the application can be found. This is a required property. See the [list of available platform values](https://github.com/w3c/manifest/wiki/Platforms).
    - `url`
      - : A string that represents the URL at which the platform-specific application can be found.
    - `id`
      - : A string with the ID used to represent the application on the specified platform.

## Description

A "related application" is an application accessible to the underlying platform that has a relationship with your web app. The `related_applications` manifest member lets you inform users about the platform-specific versions of your web app. These native applications, which are installable by or accessible to the underlying platform, provide functionality similar to your web app and might offer additional features or better integration with user's device. For example, you could specify a native Android application available through the Google Play Store, which offers the same core features as your web app but better integration with the device's notification system.

The `related_applications` member creates a unidirectional relationship: it indicates that the native apps are related to your web app, but does not require the native apps to reference your web app in return. You can specify multiple related applications for different platforms, giving users options across various devices and operating systems.

The `related_applications` member serves multiple purposes. If you prefer users to install a related native app instead of your web app, you can use it along with the [`prefer_related_applications`](/en-US/docs/Web/Manifest/prefer_related_applications) manifest member. By setting `prefer_related_applications` to `true`, you enable browsers to offer users a choice between installing your web app and the platform-specific version of the native app. Another scenario in which the `related_applications` information might be used is by web crawlers. They might use this data to gather more details about your web app.

## Examples

### Specifying a related native application

The following example specifies minimal information in the web app's manifest file to identify the related native app:

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

### Specifying related native applications for multiple platforms

If native versions of your web app are available on different platforms, you can specify them in your web app's manifest file like so:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    },
    {
      "platform": "itunes",
      "url": "https://apps.apple.com/app/example-app1/id123456789"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/store/detail/example-app1/9WZDNCRFHVJL"
    }
  ]
}
```

### Specifying preference for installing related native apps

If you want to indicate to browsers that you prefer users to install the native app instead of your web app, you can set `prefer_related_applications` to `true`.

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
