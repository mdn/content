---
title: tabGroups.TabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TabGroup
page-type: webextension-api-type
browser-compat: webextensions.api.tabGroups.TabGroup
sidebar: addonsidebar
---

The state of a tab group.

## Type

Values of this type are strings. Possible values are:

- `collapsed`
  - : `boolean`. Whether the tab group is collapsed or expanded in the tab strip.
    - In Firefox, a collapsed group can contain the active tab. The inactive tabs are collapsed.
    - In Chrome, groups are collapsed completely. If the group contains the active tab when it's collapsed, the active tab is moved to the first tab to the right of the group. If there is no tab to the right of the group, it's moved to the tab immediately to the left of the group.
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}. The name of the user-selected color for the tab group's label and icons.
- `id`
  - : `integer`. The unique ID of the tab group. Can't be {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}. The ID of a closed tab group may be reused when a tab group is restored, but this isn't guaranteed by the API. To identify tab groups across browser restarts, look at other properties and the tabs within the tab groups.
- `title`
  - : `string`. The user-defined name of the tab group.
- `windowId`
  - : `integer`. The unique ID of the window the tab group is in.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
