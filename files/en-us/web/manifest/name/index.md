---
title: name
slug: Web/Manifest/name
page-type: web-manifest-member
browser-compat: html.manifest.name
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `name` manifest member is used to specify the name of your web application as it's typically displayed to users.

## Syntax

```json
"name": "<app-name>"
```

### Keys

- `name`
  - : A string that specifies the full name of your web app.

## Description

The `name` manifest member serves as the {{Glossary("Accessible_name", "accessible name")}} for your installed app. It is displayed to users in various contexts, such as in a list of other installed web apps, as a label for your app's icon, or in the application switcher or task manager. In space-constrained contexts, such as on a device's home screen or in the application switcher, where the full `name` may not fit, the [`short_name`](/en-US/docs/Web/Manifest/short_name) value may be used instead, if available.

> [!NOTE]
> For Chromium-based browsers, a `name` or `short_name` is required in the manifest for the web app to be installable.

Consider the following points when selecting a name for your web app:

- How well it indicates the purpose or nature of your app
- Whether it is clear and easy to understand and remember
- Its length, especially if you're not providing a separate `short_name`
- How it will appear in different contexts, such as in app lists or home screen
- Its uniqueness compared to existing apps
- Its cultural sensitivity and appropriateness for your target audience
- How well it translates or is perceived in different languages if your app targets a global audience
- Whether it has any trademark conflicts

## Examples

### Adding a name for your web app

For a web app that helps users navigate trails and plan their hiking adventures, you can add the following `name` to the app manifest:

```json
"name": "Trail Navigator"
```

The app name `Trail Navigator` effectively describes the app's purpose, is easy to read and remember, and is likely to be understood by a wide audience. It uses familiar terms that outdoor enthusiasts might readily understand.

If you want, you can also add a `short_name`:

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`short_name`](/en-US/docs/Web/Manifest/short_name) manifest member
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
