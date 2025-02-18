---
title: start_url
slug: Web/Manifest/Reference/start_url
page-type: web-manifest-member
browser-compat: html.manifest.start_url
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `start_url` manifest member is used to specify the URL that should be opened when a user launches your web application, such as when tapping the application's icon on their device's home screen or in an application list.

> [!NOTE]
> The `start_url` is a hint for browsers. [Browsers have flexibility](#description) in how they the handle `start_url` and may not always use the specified value.

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
    If the value is relative, it is resolved against the manifest file's URL.

    If `start_url` is unspecified or the value is invalid (i.e., not a string, not a valid URL, or not {{glossary("origin", "same-origin")}} as the page that links to the manifest), the URL of the page that links to the manifest is used.

    > [!NOTE]
    > If [`scope`](/en-US/docs/Web/Manifest/Reference/scope) is not specified in the manifest it will be inferred from the `start_url` (or effective `start_url` if the value is undefined or invalid).

## Description

The `start_url` allows you to recommend an appropriate common entry point for all users.

When a user installs a web app, the installation happens from the page they're currently viewing.
During installation, the browser fetches the manifest file linked from this page.
While the manifest file can be served from any origin, the installation process is tied to the page where it begins.
Consider a scenario where:

- The installation page is `https://myapp.example.com/index.html`.
- The manifest file is hosted at `https://assets.cdn.com/manifest.json`.
- The `start_url` is `https://myapp.example.com/home`.

The specified `start_url` in this example will be used because it is same-origin with the page from which the app is being installed.
If the specified `start_url` were on a different origin (for example, `https://differentapp.example.com/home`), browsers would fall back to using the installation page URL as the starting point.
This ensures that web apps start only on pages within their own origin.

Note, however, that browsers are not required to use the specified URL.
They may ignore the specified value or provide users with a choice not to use it.
They may also allow users to modify the URL when creating a bookmark for the web app or at a later time.
Keep this in mind when designing your app to allow for variations in `start_url`.

### Best practices

This URL should navigate users to an important page of your app, such as a dashboard.
Consider features that users would want to access immediately after launching the app.
If your app's main page is at the root of your site, you can set the `start_url` to `/`.
You can also specify a deep link (e.g., `https://myapp.com/product/whatsnew`) to direct users to specific content within your app.
Avoid specifying a generic starting page.

For security reasons, the `start_url` must be same-origin with the manifest URL.
If a non-same-origin `start_url` is specified, browsers will fallback to using the page that links to the manifest as the default starting page.

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

Let's say the manifest file for your hiking web app is at `https://hiking-pro.com/resources/manifest.json`, and `https://hiking-pro.com/index.html` links to the manifest file.
You want users to land on the `trail-hub.html` page when they launch the app.
You can specify this starting URL in your manifest file like so:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

This `start_url` value is valid because it is same-origin with the manifest URL (`https://hiking-pro.com/resources/manifest.json`).

The following `start_url` is invalid because it is not the same-origin with the manifest URL:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In the above case, `https://hiking-pro.com/index.html` will be used as the default starting page when users launch the app.

### Specifying a relative starting URL

For your hiking app in the previous scenario, you can specify the same starting point using a relative URL, as shown below.
This relative URL will resolve to `https://hiking-pro.com/trail-hub.html` using the manifest file's URL (`https://hiking-pro.com/resources/manifest.json`) as the base.

```json
"start_url": "../trail-hub.html"
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
