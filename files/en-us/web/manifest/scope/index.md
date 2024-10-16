---
title: scope
slug: Web/Manifest/scope
page-type: web-manifest-member
browser-compat: html.manifest.scope
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `scope` manifest member is used to specify the top-level URL path that contains your web application, determining which pages and subdirectories are part of the web app and where the manifest is applied.
Web pages within the defined scope are presented distinctly so that users can recognize when they are navigating within the app.

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

The `scope` member defines the set of URLs that is considered part of your web app when the manifest is applied.

It enables deep linking into your web app from other applications. For example, if your hiking app's scope is `https://hikingapp.com/trails/`, a weather app can directly link to `https://hikingapp.com/trails/trailA/trail-conditions`. Note that deep linking is possible even without defining a scope, but defining it allows you to control pages that are considered part of your web app.

### Fallback scope behavior

The `scope` is invalid if `start_url` is not a subset of the `scope` URL. For example:

- Invalid: `scope` is `/app/` and `start_url` is `/index.html`.
  In this case, the fallback `scope` will be the root directory `/`.
- Valid: `scope` is `/app/` and `start_url` is `/app/home.html`.
  `start_url` is within the scope.

If `scope` is missing or invalid, it defaults to `start_url`, with the filename, query, and fragment removed. For example:

- If `start_url` is `https://example.com/app/index.html?user=123#home`, the scope will be `https://example.com/app/`.
- If `start_url` is `/pages/welcome.html`, the scope will be `/pages/` on the same origin.
- If `start_url` is `/pages/` (the trailing slash is important), the scope will be `/pages/`.

If you rely on the fallback behaviour of `scope`, ensure that URLs of all pages in your app begin with the parent path of `start_url`.
To avoid issues with scope determination in this way, it's recommended to explicitly specify `scope` in your manifest file.

### Scope matching mechanism

String matching for the scope URL uses a simple prefix match, not the path structure.
For example, if the `scope` is set as `/prefix`, it will match URLs starting with `/prefix`, including `/prefix-of/index.html` and `/prefix/index.html`. Note that `/prefix-of/index.html` matches even though `prefix-of` is not an exact match with the scope `/prefix`.

For this reason, it's recommended to define a scope ending with a `/`.
Setting the `scope` as `/prefix/` ensures it will match only the pages within the `/prefix/` directory, preventing unintended matches.

### In-scope and out-of-scope behavior

A URL is considered to be "within scope" if its path begins with the URL path defined in `scope`.
For example, if the `scope` is set to `/app/`, then the URLs `/app/`, `/app/page.html`, and `/app/dashboard/index.html` are all considered within scope, while `/` or `/page.html` are not.

When a user navigates to a URL, browsers use the scope to determine if the resource is within your web app's application context. For in-scope pages, browsers maintain the application context and preserve the app-like experience. They may present these pages differently to indicate to users that they are navigating within the application.

When a user navigates to a web page that is not within the scope of your web app's application context, browsers may display a prominent UI element, which clearly shows the URL or at least its origin, including whether it is served over a secure connection.
This UI element will be different from what users see when navigating within the app's scope.
This behavior aims to make users aware that they have navigated away from your web app.

> [!NOTE]
> The existence of a `scope` doesn't prevent users from navigating to URLs outside of the defined scope while the manifest is applied.
> Off-scope navigations are not blocked by browsers and are not opened in a new top-level browsing context.

## Examples

### Specifying an absolute URL for scope

Suppose the manifest file for your web app is linked from `https://hikingapp.com/index.html`, and you want the scope to include all the subdirectories. You can specify this scope using an absolute URL that is same-origin with manifest file URL, as shown below. This ensures that pages like `https://hikingapp.com/store` and `https://hikingapp.com/company` are part of your web app.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Specifying a relative URL for scope

If your manifest file's URL is `https://hikingapp.com/resources/manifest.json`, and you want the scope to be `https://hikingapp.com/app/`, you can define it as a relative URL:

```json
{
  "scope": "../app/"
}
```

### Defining a web app for a specific section of your site

If you have a website with multiple sections, but you want your web app to focus on a specific section, you can define the `scope` as:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

With this setup, pages like `https://hikingapp.com/store/products` are part of your web app, but `https://hikingapp.com/company/` is out of your web app's scope. For off-scope URLs, browsers may display different UI elements to let users know they've navigated away from the app.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
