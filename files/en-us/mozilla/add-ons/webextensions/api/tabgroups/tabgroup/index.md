---
title: tabGroups.tabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/tabGroup
page-type: webextension-api-type
browser-compat: webextensions.api.tabGroups.tabGroup
---

{{AddonSidebar}}

The state of a tab group.

## Type

Values of this type are strings. Possible values are:

- `collapsed`
  - : `boolean`. Whether the tab group is collapsed or expanded in the tab strip.
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}. The name of the user-selected color for the tab group's label and icons.
- `id`
  - : `integer` The unique ID of the tab group. Contains the {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}} value when the tab isn't in a tab group.
- `title`
  - : `string`. The user-defined name of the tab group.
- `windowId`
  - : `integer`. The unique ID of the window the tab group is in.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
