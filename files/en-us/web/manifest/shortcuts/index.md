---
title: shortcuts
slug: Web/Manifest/shortcuts
tags:
  - Manifest
  - Web
  - shortcuts
  - Experimental
browser-compat: html.manifest.shortcuts
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `shortcuts` member defines an array of shortcuts or links to key tasks or pages within a web app. A user agent can use these values to assemble a context menu to be displayed by the operating system when a user engages with the web app's icon. When user invokes a shortcut, the user agent will navigate to the address given by shortcut's `url` member.

## Shortcut item values

Shortcut objects may contain the following values (only `name` and `url` are required):

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Member</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td> A string that can be displayed to the user in a context menu.</td>
    </tr>
    <tr>
      <td><code>short_name</code></td>
      <td>
        A string that can be displayed where there is insufficient space to
        display the full name of the shortcut.
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>
         A string that describes the purpose of the shortcut. It may be exposed
        to assistive technology.
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>
         A URL within the application that opens when the shortcut is activated.
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        A set of icons that represent the shortcut. They can be used, e.g., in
        the context menu. When included, the icon set must include a 96x96 pixel
        icon.
      </td>
    </tr>
  </tbody>
</table>

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
