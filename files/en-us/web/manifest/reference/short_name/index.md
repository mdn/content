---
title: short_name
slug: Web/Manifest/Reference/short_name
page-type: web-manifest-member
browser-compat: html.manifest.short_name
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `short_name` manifest member is used to specify a short name for your web application, which may be used when the full [`name`](/en-US/docs/Web/Manifest/Reference/name) is too long for the available space.

## Syntax

```json-nolint
/* Short names of web apps */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### Values

- `short_name`
  - : A string that specifies a short version of your web app's [`name`](/en-US/docs/Web/Manifest/Reference/name).

## Description

Browsers may use `short_name` in place of [`name`](/en-US/docs/Web/Manifest/Reference/name) when there is insufficient space to display the full name, such as on a device's home screen, in the application switcher, or in other space-constrained contexts.

Keep the following points in mind when selecting a short name for your web app:

- It should be a concise version of your app's `name`.
- While aiming for brevity, it should still be recognizable and meaningful.
- Consider how it will appear in space-constrained contexts.
- Follow the same guidelines for cultural sensitivity and trademark as for `name`.

## Examples

### Adding a short name for your web app

Consider a web app that helps users plan and log their hiking adventures. The `name` has been defined as `Trail Navigator`. A `short_name` can be added to the manifest as follows:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

The app's shorter name `TrailNav` is concise and is suitable for limited space contexts. It maintains a connection to the app's full name and is easy to remember.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`name`](/en-US/docs/Web/Manifest/Reference/name) manifest member
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
