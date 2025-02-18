---
title: description
slug: Web/Manifest/Reference/description
page-type: web-manifest-member
browser-compat: html.manifest.description
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `description` manifest member is used to explain the core features or functionality of your web application.
This text helps users understand your app's purpose when viewing it in an app store.

> [!NOTE]
> The `description` member is optional, and app stores may not use this text when presenting your app.

## Syntax

```json-nolint
"description": "Track your daily tasks and plan your projects efficiently."
```

### Values

- `description`
  - : A string that describes your web app.

## Description

The `description` member is supplementary metadata that does not affect the app's runtime behavior or how browsers present the app.
Its value is used in app stores and other distribution platforms to help users understand what your app does.
Additionally, it provides an accessible description of your installed app.

## Examples

### Adding a description for a meal planning web app

Simple `description` in left-to-right language:

```json
{
  "name": "Meal Planner",
  "description": "Plan your weekly meals and automatically generate shopping lists. Track nutrition and discover recipes."
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
