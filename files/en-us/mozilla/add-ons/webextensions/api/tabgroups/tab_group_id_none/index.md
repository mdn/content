---
title: tabGroups.TAB_GROUP_ID_NONE
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TAB_GROUP_ID_NONE
page-type: webextension-api-property
browser-compat: webextensions.api.tabGroups.TAB_GROUP_ID_NONE
sidebar: addonsidebar
---

The tab group ID value returned when a tab isn't in a tab group.

Its value is `-1`.

This value can appear as `groupId` in these API functions:

- {{WebExtAPIRef("tabs.group()")}}
- {{WebExtAPIRef("tabs.ungroup()")}}
- {{WebExtAPIRef("tabs.query()")}}
- {{WebExtAPIRef("tabs.Tab")}}

The `tabGroups.TAB_GROUP_ID_NONE` constant is part of the `tabGroups` namespace, which is only available when the [`tabGroups` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabGroups#permissions) is granted. If your extension doesn't require the `tabGroups` permission, use `-1` instead of `tabGroups.TAB_GROUP_ID_NONE`.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
