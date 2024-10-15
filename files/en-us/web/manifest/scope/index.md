---
title: scope
slug: Web/Manifest/scope
page-type: web-manifest-member
browser-compat: html.manifest.scope
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `scope` manifest member is used to specify a URL that determines which pages are considered to be part of your web application.
It restricts the URLs to which the manifest is applied.

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

> > It provides a way to "deep link" into your web app from other applications. For example, an email app could use the scope to open a specific page within your web app directly.

### Fallback behavior

When `scope` is missing or invalid, it defaults to `start_url`. For example:

- If `start_url` is `https://example.com/app/index.html?user=123#home`, the scope will be `https://example.com/app/`.
- If `start_url` is `/pages/welcome.html`, the scope will be `/pages/` on the same origin.
- If `start_url` is `/pages/` (the trailing slash is important), the scope will be `/pages/`.

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

Suppose the manifest file for your web app is linked from `https://example.com/index.html`, and you want the scope to include all the subdirectories. You can specify this scope using an absolute URL that is same-origin with manifest file URL, as shown below. This ensures that pages like `https://example.com/store` and `https://example.com/company` are part of your web app.

```json
{
  "scope": "https://example.com/"
}
```

### Specifying a relative URL for scope

If your manifest file's URL is `https://example.com/resources/manifest.json`, and you want the scope to be `https://example.com/app/`, you can define it as a relative URL:

```json
{
  "scope": "../app/"
}
```

### Defining a web app for a specific section of your site

If you have a website with multiple sections, but you want your web app to focus to on a specific section, you can define the `scope` as:

```json
{
  "name": "My Web App",
  "start_url": "https://example.com/store/",
  "scope": "https://example.com/store/"
}
```

With this setup, pages like `https://example.com/store/products` are part of your web app, but `https://example.com/company/` is out of your web app's scope. For off-scope URLs, browsers may display different UI elements to let users know they've navigated away from the app.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
