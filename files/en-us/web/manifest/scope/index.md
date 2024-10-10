---
title: scope
slug: Web/Manifest/scope
page-type: web-manifest-member
browser-compat: html.manifest.scope
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `scope` manifest member is used to define the navigation scope of your web application.
It restricts the web pages that can be navigated while the manifest is applied.

## Syntax

```json-nolint
/* Absolute URL */
"scope": "https://example.com/myapp/"

/* Relative URL */
"scope": "/myapp/"

/* Scope limited to a specific directory */
"scope": "/myapp/dashboard/"
```

### Values

- `scope`

  - : A string that represents a URL.
    The URL can be absolute or relative.
    If the value is relative, it is resolved against the manifest file's URL.
    The [`start_url`](/en-US/docs/Web/Manifest/start_url) must be within the defined scope.

    If `scope` is unspecified or the value is invalid (i.e., not a string, not a valid URL, or `start_url` is not within scope), the `start_url` value is used as a fallback, with the filename, query, and fragment removed.

## Description

The `scope` member specifies the navigation boundaries of your web app, that is, pages that are considered part of the app and that are not. You can add a `scope` for your web app to ensure users remain within the {{Glossary("Application_context", "application's context")}} while navigating your app.

### Fallback behavior

When `scope` is missing or invalid, it defaults to `start_url`. For example:

- If `start_url` is `https://example.com/app/index.html?user=123#home`, the navigation scope will be `https://example.com/app/`.
- If `start_url` is `/pages/welcome.html`, the navigation scope will be `/pages/` on the same origin.
- If `start_url` is `/pages/` (the trailing slash is important), the navigation scope will be `/pages/`.

If you rely on the fallback behaviour of `scope`, ensure that URLs of all pages in your app begin with the parent path of `start_url`.
To avoid potential issues with scope determination in this way, it's recommended to explicitly specify `scope` in your manifest file.

### String matching for scope

String matching for the scope URL uses a simple prefix match, not the path structure.
For example, the target URL string `/prefix-of/resource.html` will match an app with `scope` set as `/prefix`, even though the path segment name is not an exact match.
To avoid unexpected behavior, it's recommended to use a scope ending with a `/`.

### Navigation scope

A URL is considered to be "within scope" if its path begins with the URL path defined in `scope`.
For example, if the `scope` is set to `/app/`, then the URLs `/app/`, `/app/page.html`, and `/app/dashboard/index.html` will all be considered within scope, while `/` or `/page.html` will not be considered within the scope of the application's context.

If a user navigates to a web page that is not within the scope of your web app's context, browsers may display a prominent UI element, which clearly shows the URL or at least its origin, including whether it is served over a secure connection.
This UI element will typically be different from what users see when navigating within the app's scope.
This behavior aims to make users aware that they have navigated away from your web app.

> [!NOTE]
> The existence of a `scope` doesn't prevent navigation to URLs outside of the defined scope while the manifest is applied.
> Off-scope navigations are not blocked and not opened in a new top-level browsing context.

## Examples

### Specifying an absolute URL for scope

Consider a scenario where the manifest file for your web app is linked from `https://example.com/index.html`, and you want the navigation scope to include all the subdirectories. You can specify this scope such that it is same-origin with manifest file URL:

```json
{
  "scope": "https://example.com/"
}
```

### Specifying a relative URL for scope

Suppose your manifest file's URL is `https://example.com/resources/manifest.json`, and you want the navigation scope to be `https://example.com/app/`. In this case, you can define the `scope` as a relative URL like so:

```json
{
  "scope": "../app/"
}
```

### Limiting navigation to a specific part in your web app

If you have a web app with multiple sections, but you want to limit the navigation to one section, you can define the `scope` as:

```json
{
  "name": "My Web App",
  "start_url": "https://example.com/store/",
  "scope": "https://example.com/store/"
}
```

Users will be able to navigate to `https://example.com/store/products`, but navigating to `https://example.com/company/` will be out of scope for your web app. For off-scope URLs, browsers may display different UI elements to let users know they've navigated away from the app.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
