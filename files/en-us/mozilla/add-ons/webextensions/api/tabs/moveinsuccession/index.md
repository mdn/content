---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.moveInSuccession
---

{{AddonSidebar}}

Modifies the succession relationship for a group of tabs.

Using the {{WebExtAPIRef('tabs')}} API, a tab can be assigned a _successor_ tab in the same window. If tab B is the successor of tab A, and tab A is closed while it is the active tab, tab B will be activated next. If tab A doesn't have a successor, then the browser is free to determine which tab to activate next. If tab B is the successor of tab A, then tab A is called a _predecessor_ of tab B. A tab can have at most one successor, but it can have any number of predecessors. A tab cannot take itself or a tab in a different window as a successor.

All tabs start out with no successor; tabs only get a successor if assigned one by a WebExtension. However, the browser must not orphan a tab in a succession relationship with other tabs, if possible: if tab B is the successor of tab A, and tab C is the successor of tab B, and B is closed (or moved to another window), then tab A will take tab C as its successor. Preventing C from being orphaned in this way is called _moving a tab_ (B) _from its line of succession_.

`tabs.moveInSuccession()` takes an array of tab IDs, and moves all of those tabs from their lines of succession. It then makes each tab the successor of the previous tab in the array, forming a chain. It can optionally set the successor of the last tab in the chain to an anchor tab, which is _not_ moved from its line of succession. Additional options can control whether the tab chain is "prepended" or "appended" to the anchor tab, and whether the operation acts like a linked-list insert.

While the successor tab can be assigned with {{WebExtAPIRef('tabs.update()')}}, it is often desirable to use `tabs.moveInSuccession()` to change successors, even if only a single tab is having its successor assigned. The difference is that `browser.tabs.moveInSuccession([a], b)` moves tab `a` from its line of succession, so any predecessors of `a` will adopt `a`'s previous successor; whereas if `browser.tabs.update(a, {successorTabId: b})` is used instead, tab `a` may continue to be the successor of other tabs, which could be unexpected. Another advantage of `tabs.moveInSuccession()` is that all of the succession changes happen atomically, without having to worry about races between calls to {{WebExtAPIRef('tabs.update()')}} and {{WebExtAPIRef('tabs.get()')}} and other operations like the user closing a tab.

## Syntax

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Parameters

- `tabIds`
  - : `array` of `integer`. An array of tab `ID`s. The order of the elements in the array defines the relationship of the tabs. Any invalid tab `ID`s, or tab `ID`s corresponding to tabs not in the same window as `tabId` (or the first tab in the array, if `tabId` is omitted), will be ignored—they will keep their current successors and predecessors.
- `tabId` {{optional_inline}}
  - : `integer`. The `ID` of the tab that will be the successor of the last tab in the `tabIds` array. If this `ID` is invalid or {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, the last tab will not have a successor. Defaults to {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}

  - : `object`.

    - `append` {{optional_inline}}
      - : `boolean`. Determines whether to move the tabs in `tabIds` before or after `tabId` in the succession. If `false`, the tabs are moved before `tabId`, if `true`, the tabs are moved after `tabId`. Defaults to `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Determines whether to link up the current predecessors or successor (depending on `options.append`) of `tabId` to the other side of the chain after it is prepended or appended. If true, one of the following happens: if `options.append` is `false`, the first tab in the array is set as the successor of any current predecessors of `tabId`; if `options.append` is `true`, the current successor of tabId is set as the successor of the last tab in the array. Defaults to `false`.

## Browser compatibility

{{Compat}}
