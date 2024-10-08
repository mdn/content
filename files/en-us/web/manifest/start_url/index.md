---
title: start_url
slug: Web/Manifest/start_url
page-type: web-manifest-member
browser-compat: html.manifest.start_url
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `start_url` manifest member is used to specify the URL that should be loaded when a user launches your web application, such as when tapping the app's icon on the home screen or in a device's application menu.

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
    The value must be same-origin with the page that links to the manifest file.
    If the value is relative, it is resolved against the manifest file's URL.
    If `start_url` is unspecified or the value is invalid (i.e., not a string, not a valid URL, or not same-origin with the linking page), the URL of the page that links to the manifest file is used as a fallback.

## Description

The `start_url` must be same-origin with the page that links to the manifest file for security reasons. If the URL is missing or invalid, the linking page is used as a fallback to ensure there's always a valid starting point for the app.

Browsers have flexibility in how they handle `start_url`. They may:

- Ignore the specified value.
- Provide users with a choice not to use it.
- Allow users to inspect and modify the URL, such as when creating a bookmark for the web app or any time later. Therefore, when developing your app, keep in mind that the `start_url` may be altered. This flexibility provided by browsers can help protect user privacy. See [Privacy considerations](#privacy_considerations) for more details.

> [!NOTE]
> For Chromium-based browsers, a `start_url` is required in the manifest for the web app to be installable.

## Privacy considerations

- **Fingerprinting**:

  While you can potentially encode strings into `start_url` that uniquely identify a user (e.g., server-assigned identifiers, such as `?user=123`, `/user/123/`, or `https://user123.foo.bar`), it is considered a bad practice.
  The information would represent a fingerprint that remains even when users clear site data, without users being aware of this privacy-sensitive information.

  > [!NOTE]
  > It is recommended that you don't include any information in `start_url` that could uniquely identify users.

  Browsers may offer protection against this type of fingerprinting.
  For example, when a user clears data from an origin, the browser may prompt users to uninstall apps that are within the scope of that origin.
  This would remove any potential fingerprint from the app's `start_url`.

- **Launch tracking**:

  You can potentially add a `start_url` to indicate that the app was launched from outside the browser (e.g., `"start_url": "index.html?launcher=homescreen"`). While this can be useful for analytics and other customizations, be cautious about potential privacy implications. This information could be used as part of a user's digital fingerprint.

## Examples

### Specifying an absolute starting URL

Let's say the manifest file for your web app is at `https://example.com/resources/manifest.json` and is linked from `https://example.com/index.html`.
You want a custom starting point when users launch the installed app from their devices, which is different from the default entry page for your web app.
You can specify this starting URL in your manifest file like so:

```json
"start_url": "https://example.com/dashboard.html"
```

- The `start_url` value above is valid because it is same-origin with `https://example.com/index.html`.
- If you don't specify a `start_url`, the browser will fallback to using `https://example.com/index.html`.
- The `start_url` below is invalid because it is not same-origin with the linking page, so the browser will fallback to using `https://example.com/index.html`:

```json example-bad
"start_url": "https://other-domain.com/dashboard.html"
```

### Specifying a relative starting URL

You could specify the same starting point using a relative URL as shown below.
This relative URL will resolve to `https://example.com/dashboard.html` using the manifest file's URL (`https://example.com/resources/manifest.json`) as the base.

```json
"start_url": "../dashboard.html"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
