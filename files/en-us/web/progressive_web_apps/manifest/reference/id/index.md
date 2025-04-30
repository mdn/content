---
title: id
slug: Web/Progressive_web_apps/Manifest/Reference/id
page-type: web-manifest-member
browser-compat: manifests.webapp.id
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/Manifest/Reference")}}

The `id` manifest member is used to specify a unique identifier for your web application.

## Syntax

```json-nolint
/* Absolute URL */
"id": "https://example.com/myapp"

/* Relative URL */
"id": "myapp/v2"

/* URL with query parameters */
"id": "myapp?version=2&mode=trial"
```

### Values

- `id`
  - : A string that takes the form of a URL.
    The URL must be same-origin with the [`start_url`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) of your web app.
    If `id` is a relative URL, it is resolved using the origin of `start_url`. Any fragment in the `id` is always ignored.
    If `id` is not specified or the value is invalid in any way (such as not a string, not a valid URL, not same-origin with `start_url`), the `start_url` value is used.

## Description

The `id` manifest member serves as a unique identifier for your web app. It allows browsers to distinguish between different applications:

- When a browser comes across an app manifest with an `id` that does not correspond to an already installed application, it treats that manifest as a description of a distinct application, even if it is served from the same URL as another application.
- When a browser comes across an app manifest with an `id` that matches the identity of an already installed app, it treats the new manifest as a replacement for the existing app's manifest, even if the app is served from a different URL than the one installed previously.

> [!NOTE]
> While the `id` is processed like a URL, it does not point to a resource that can be accessed, so it is not required to be within the app's [scope](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/scope).

The `id` can also be used by services that collect lists of web apps to uniquely identify applications.

### Usage notes

A few key points to remember while using the `id` member:

- As a recommended practice, use a leading `/` to specify that the `id` is a root-relative URL path.
- Since `id` is resolved against `start_url`'s origin, `id` values such as `../foo`, `foo`, `/foo`, and `./foo` all resolve to the same identifier relative to the origin. For example, if `start_url` is `https://example.com/app/`, all these `id` values will resolve to `https://example.com/foo/`.
- Standard URL encoding and decoding rules apply when resolving the `id` value.
- Fragments in the `id` are removed during processing. For example, if `id` is set to `foo#bar`, it will be resolved as `foo`. Similarly, if `id` is undefined and the `start_url` is `https://example.com/app/#home`, `id` will resolve to `https://example.com/app/`.
- Query parameters in the `id` are preserved and included in the final resolved identifier.

### Understanding `id` resolution

Assume that the `start_url` for your app is `https://example.com/my-app/home`. The following table demonstrates how different `id` values in the manifest will be resolved:

| `id` in manifest              | Resolved `id`                      | Explanation                                                                         |
| ----------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| undefined                     | `https://example.com/my-app/home`  | Defaults to `start_url`                                                             |
| `""`                          | `https://example.com/my-app/home`  | Empty string resolves to `start_url`                                                |
| `/`                           | `https://example.com/`             | Root-relative URL                                                                   |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relative path resolved against `start_url`'s origin with query parameters preserved |
| `foo#heading`                 | `https://example.com/foo`          | Relative path resolved against `start_url`'s origin with fragment removed           |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Cross-origin URL not allowed, falls back to `start_url`                             |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Non-ASCII character encoded in URL                                                  |

## Examples

### Creating a distinct app version

Suppose you create a web app with the following manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

If you later create another version of this app with significant changes and want it to be treated as a different app, you can add the manifest as:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In this case, even though both manifest files are served from the same URL, browsers will treat the new manifest as a description of a distinct application because the `id` is different. As a result, users can have both versions installed simultaneously.

### Updating an existing app

Consider a scenario where you deploy a web app with the following manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/old-app"
}
```

However, you later decide to move the app to a different path. You would then update the manifest as follows:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/new-app"
}
```

Browsers will treat this new manifest as an update to the existing app because the `id` values match. In this case, users will receive an update to their existing app, rather than being prompted to install a new app.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`scope`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/scope) manifest member
- [`start_url`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) manifest member
