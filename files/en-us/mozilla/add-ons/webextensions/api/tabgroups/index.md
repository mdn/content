---
title: tabGroups
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups
page-type: webextension-api
browser-compat: webextensions.api.tabGroups
---

{{AddonSidebar}}

This API enables extensions to modify and rearrange tab groups.

## Permissions

To use this API, an extension must request the `"tabGroups"` [optional permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file. The `"tabGroups"` permission is not shown to users in permission prompts.

## Types

- {{WebExtAPIRef("tabGroups.Color")}}
  - : The color of a tab group.
- {{WebExtAPIRef("tabGroups.TabGroup")}}
  - : The state of a tab group.

## Properties

- {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}
  - : The tab group ID value returned when a tab isn't in a tab group.

## Functions

- {{WebExtAPIRef("tabGroups.get()")}}
  - : Returns details about a tab group.
- {{WebExtAPIRef("tabGroups.move()")}}
  - : Moves a tab group within or to another window.
- {{WebExtAPIRef("tabGroups.query()")}}
  - : Returns all grups or finds tab groups with certain properties.
- {{WebExtAPIRef("tabGroups.update()")}}
  - : Modifies the state of a tab group.

## Events

- {{WebExtAPIRef("tabGroups.onCreated")}}
  - : Fires when a tab group is created.
- {{WebExtAPIRef("tabGroups.onMoved")}}
  - : Fires when a tab group is moved, within a window or to another window.
- {{WebExtAPIRef("tabGroups.onRemoved")}}
  - : Fires when a tab group is removed.
- {{WebExtAPIRef("tabGroups.onUpdated")}}
  - : Fires when a tab group is updated.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
