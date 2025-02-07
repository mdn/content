---
title: shortcuts
slug: Web/Manifest/Reference/shortcuts
page-type: web-manifest-member
browser-compat: html.manifest.shortcuts
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `shortcuts` manifest member is used to specify links to key tasks or pages within your web application.
Browsers can use this information to create a context menu, which is typically displayed when a user interacts with the web app's icon.

## Syntax

```json-nolint
/* Single shortcut with all properties */
"shortcuts": [
  {
    "name": "Today's agenda",
    "short_name": "Agenda",
    "description": "View your agenda for today",
    "url": "/today",
    "icons": [
      {
        "src": "today.png",
        "sizes": "192x192"
        }
    ]
  }
]

/* Two shortcuts with the required properties */
"shortcuts": [
  {
    "name": "Today's agenda",
    "url": "/today"
  },
  {
    "name": "Tomorrow's agenda",
    "url": "/tomorrow"
  }
]

/* Shortcut with a relative URL */
"shortcuts": [
  {
    "name": "This week's agenda",
    "url": "../agenda"
  }
]
```

### Values

- `shortcuts`

  - : An array of objects. Each object represents a key task or page in the web app.

    Each object can have one or more properties. Of these, only `name` and `url` are required.
    The possible properties include:

    - `name`

      - : A string that represents the name of the shortcut, which is displayed to users in a context menu.

    - `short_name` {{Optional_Inline}}

      - : A string that represents a short version of the shortcut's name.
        Browsers may use this in contexts where there isn't enough space to display the full name.

    - `description` {{Optional_Inline}}

      - : A string that describes the purpose of the shortcut.
        Browsers may expose this information to assistive technology, such as screen readers, which can help users understand the purpose of the shortcut.

    - `url`

      - : An app URL that opens when the associated shortcut is activated.
        The URL must be within the [scope](/en-US/docs/Web/Manifest/Reference/scope) of the web app manifest.
        If the value is absolute, it should be same-origin with the page that links to the manifest file.
        If the value is relative, it is resolved against the manifest file's URL.

    - [`icons`](/en-US/docs/Web/Manifest/Reference/icons) {{Optional_Inline}}

      - : An array of icon objects representing the shortcut in various contexts.
        This has the same format as the [`icons`](/en-US/docs/Web/Manifest/Reference/icons) manifest member.

## Description

The `shortcuts` member allows you to provide users with direct access to key features offered by your web app.
Shortcuts are usually presented to users in a context menu when they interact with the web app's icon, such as by right-clicking or long-pressing it.
When users activate a shortcut from this menu, browsers navigate them to the address specified in the `url` of the shortcut.

Browsers commonly render shortcuts in the same order as they are provided in the app's manifest file.

> [!NOTE]
> The presentation and the number of shortcuts shown to users is at the discretion of browsers and/or the operating system.
> For example, browsers may truncate the list of declared shortcuts to remain consistent with the conventions or limitations of the host operating system.

### Benefits of adding shortcuts

Shortcuts can enhance user experience by:

- Providing direct navigation to frequently used features or pages within the web app
- Making your web app feel more platform-native and familiar to users.

For example, shortcuts can be used to link directly to a user's timeline within a social media app or provide fast access to a user's recent orders in an e-commerce context.

### Best practices for adding shortcuts

When creating shortcuts for your web app, keep the following guidelines in mind:

- Keep the shortcut names short but descriptive enough to clearly convey their purpose to users.
- Ensure that shortcut URLs are within the scope of your web app.
- Include icons for shortcuts to improve visual recognition.
  Provide icons in multiple sizes to ensure quality display across different devices and contexts.
- Order the shortcuts from most to least important, based on the relevance and usage of features to which they link.
- Prefer adding a few important shortcuts. A long list can not only overwhelm users, but may also be truncated by some platforms or browsers.

## Examples

### Defining shortcuts for a task management web app

Consider a task management app. This example shows how to add two shortcuts. The "New Task" shortcut will take users directly to the task creation page, and the "Today's Tasks" shortcut will provide quick access to their list of tasks for the current day.

```json
{
  "name": "TaskPro",
  "short_name": "Tasks",
  "start_url": "/dashboard",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "New Task",
      "short_name": "Add",
      "description": "Quickly add a new task",
      "url": "/tasks/new"
    },
    {
      "name": "Today's Tasks",
      "short_name": "Today",
      "description": "View your tasks for today",
      "url": "/tasks/today"
    }
  ]
}
```

### Adding shortcut icons and using relative URLs

Building on the previous example, the code below adds icons to the two shortcuts and demonstrates the use of a relative URL in an additional third shortcut. The `../projects` URL will be resolved relative to the app manifest's URL. For example, if the app manifest file is located at `/dashboard/manifest.json`, this shortcut would navigate to `/projects`.

```json
{
  "name": "TaskPro",
  "short_name": "Tasks",
  "start_url": "/dashboard",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "New Task",
      "short_name": "Add",
      "description": "Quickly add a new task",
      "url": "/tasks/new",
      "icons": [
        {
          "src": "/images/add.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "Today's Tasks",
      "short_name": "Today",
      "description": "View your tasks for today",
      "url": "/tasks/today",
      "icons": [
        {
          "src": "/images/calendar.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "All Projects",
      "short_name": "Projects",
      "description": "View all your projects",
      "url": "../projects"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`icons`](/en-US/docs/Web/Manifest/Reference/icons) manifest member
- [`scope`](/en-US/docs/Web/Manifest/Reference/scope) manifest member
- [`start_url`](/en-US/docs/Web/Manifest/Reference/start_url) manifest member
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- How to [expose common actions as shortcuts](/en-US/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
