---
title: name
slug: Web/Manifest/Reference/name
page-type: web-manifest-member
browser-compat: html.manifest.name
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `name` manifest member is used to specify the full name of your web application as it's usually displayed to users, such as in application lists or as a label for your application's icon.

## Syntax

```json-nolint
/* Full names of web apps */
"name": "Daily Task Planner"
"name": "Recipe and Pantry Tracker"
```

### Values

- `name`
  - : A string that specifies the full name of your web app.

## Description

The `name` manifest member serves as the {{Glossary("Accessible_name", "accessible name")}} for your installed app. It is displayed to users in various contexts, such as in a list of other installed web apps, as a label for your app's icon, or in the application switcher or task manager.

In space-constrained contexts where the full `name` may not fit, such as on a device's home screen or in the application switcher, the value of the [`short_name`](/en-US/docs/Web/Manifest/Reference/short_name) property (if defined) may be used instead.

### Best practices for naming your web app

Consider the following factors when selecting a name for your web app:

- Length of the name, especially if you're not providing a separate `short_name`
- How well it indicates the purpose or nature of your app
- Whether it is clear and easy to understand and remember
- How it appears in different contexts, such as in app lists or home screen
- How easily it can be differentiated from other similar apps
- Cultural sensitivity and appropriateness for your target audience
- How well it translates or is perceived in different languages if your app target is a global audience
- Potential trademark conflicts

## Examples

### Adding a name for your web app

For a web app that helps users navigate trails and plan their hiking adventures, you might add the following `name` to the app manifest:

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

- [`short_name`](/en-US/docs/Web/Manifest/Reference/short_name) manifest member
- [The web app manifest](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) for making your web app installable
