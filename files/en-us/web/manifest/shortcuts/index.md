---
title: shortcuts
slug: Web/Manifest/shortcuts
page-type: web-manifest-member
browser-compat: html.manifest.shortcuts
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `shortcuts` member defines an array of shortcuts or links to key tasks or pages within a web app. A user agent can use these values to assemble a context menu to be displayed by the operating system when a user engages with the web app's icon. When user invokes a shortcut, the user agent will navigate to the address given by shortcut's `url` member.

### Values

Shortcut objects may contain the following values (only `name` and `url` are required):

- `name`

  - : A string that can be displayed to the user in a context menu.</td>

- `short_name` {{Optional_Inline}}

  - : A string that can be displayed where there is insufficient space to display the full name of the shortcut.

- `description` {{Optional_Inline}}

  - : A string that describes the purpose of the shortcut. It may be exposed to assistive technology.

- `url`

  - : A URL within the application that opens when the shortcut is activated.

- `icons` {{Optional_Inline}}
  - : A set of icons that represent the shortcut.
    They can be used, e.g., in the context menu. When included, the icon set must include a 96x96 pixel icon.

## Examples

The following is a list of shortcuts a calendar app might have:

```json
"shortcuts" : [
  {
    "name": "Today's agenda",
    "url": "/today",
    "description": "List of events planned for today"
  },
  {
    "name": "New event",
    "url": "/create/event"
  },
  {
    "name": "New reminder",
    "url": "/create/reminder"
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating shortcut action menus for PWAs](/en-US/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
