---
title: start_url
slug: Web/Manifest/start_url
page-type: web-manifest-member
browser-compat: html.manifest.start_url
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `start_url` manifest member is used to specify the URL that should be opened when a user launches your web application, such as when tapping the application's icon on their device's home screen or in an application list.

> [!NOTE]
> The `start_url` is a hint for browsers. [Browsers have flexibility](#browser_flexibility) in how they the handle `start_url` and may not always use the specified value.

## Syntax

```json-nolint
/* Absolute URLs */
"start_url": "https://example.com/myapp"
"start_url": "https://myapp.com/home"

/* Relative URLs */
"start_url": "/"
"start_url": "../index.html"
```

### Values

- `start_url`

  - : A string that represents the starting URL of a web app.
    The URL can be absolute or relative.
    If the value is relative, it is resolved against the manifest URL.

    The `start_url` must be within the [scope](/en-US/docs/Web/Manifest/scope) of the web app and must be same-origin with the manifest URL.

    If `start_url` is unspecified or the value is invalid (i.e., not a string, not a valid URL, or not same-origin with the manifest URL), the URL of the page that links to the manifest is used.

## Description

### Best practices

To ensure the same entry point to your app for all users, specify a `start_url`.
This URL should navigate users to an important page of your app, such as a dashboard.
Consider features that users would want to access immediately after launching the app.
If your app's main page is at the root of your site, you can set the `start_url` to `/`.
You can also specify a deep link (e.g., `https://myapp.com/product/whatsnew`) to direct users to specific content within your app.
Avoid specifying a generic starting page.

For security reasons, the `start_url` must be same-origin with the manifest URL.
If a non-same-origin `start_url` is specified, browsers will fallback to using the page that links to the manifest as the default starting page.

### Browser flexibility

Browsers may ignore the specified `start_url` value or provide users with a choice not to use it.
Browsers may allow users to modify the URL, such as when creating a bookmark for the web app or at any later time.
As a result, the `start_url` you specify may not be the one ultimately used.
It is important for you to keep this in mind while designing your app to allow for variations in `start_url`.

## Privacy considerations

- **Fingerprinting**:

  Encoding strings into `start_url` to uniquely identify users (e.g., server-assigned identifiers, such as `?user=123`, `/user/123/`, or `https://user123.foo.bar`) creates a persistent fingerprint.
  Users may not be aware that their privacy-sensitive information can persist even after they've cleared site data.
  It is bad practice to include any information in `start_url` that could uniquely identify users.

  Browsers may offer protection against this type of fingerprinting.
  For example, when users clear data from an origin, browsers may prompt them to uninstall apps that are within that origin's scope.
  This removes any potential fingerprint from the app's `start_url`.

- **Launch tracking**:

  Adding parameters to a `start_url` to indicate that the app was launched from outside the browser (e.g., `"start_url": "index.html?launcher=homescreen"`) can be useful for analytics and customizations.
  However, this information could be used as part of a user's digital fingerprint.
  Consider the potential privacy implications when implementing such tracking.

## Examples

### Specifying an absolute starting URL

Let's say the manifest file for your hiking web app is at `https://hikingpro.com/resources/manifest.json`, and `https://hikingpro.com/index.html` links to the manifest file.
You want users to land on the `trailhub.html` page when they launch the app.
You can specify this starting URL in your manifest file like so:

```json
"start_url": "https://hikingpro.com/trailhub.html"
```

This `start_url` value is valid because it is same-origin with the manifest URL (`https://hikingpro.com/resources/manifest.json`).

The following `start_url` is invalid because it is not the same-origin with the manifest URL:

```json example-bad
"start_url": "https://other-domain.com/trailhub.html"
```

In the above case, `https://hikingpro.com/index.html` will be used as the default starting page when users launch the app.

### Specifying a relative starting URL

For your hiking app in the previous scenario, you can specify the same starting point using a relative URL, as shown below.
This relative URL will resolve to `https://hikingpro.com/trailhub.html` using the manifest file's URL (`https://hikingpro.com/resources/manifest.json`) as the base.

```json
"start_url": "../trailhub.html"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Application_context", "Application context")}}
- {{Glossary("Same-origin_policy", "Same-origin policy")}}
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
- [Security on the web](/en-US/docs/Web/Security)
