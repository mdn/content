---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - contextMenus
browser-compat: webextensions.api.menus.create
---
{{AddonSidebar()}}

Creates a new menu item, given an options object defining properties for the item.

Unlike other asynchronous functions, this one does not return a promise, but uses an optional callback to communicate success or failure. This is because its return value is the ID of the new item.

For compatibility with other browsers, Firefox makes this method available via the `contextMenus` namespace as well as the `menus` namespace. Note though that it's not possible to create tools menu items (`contexts: ["tools_menu"]`) using the `contextMenus` namespace.

## Syntax

```js
browser.menus.create(
  createProperties, // object
  () => {/* … */}   // optional function
)
```

### Parameters

- `createProperties`

  - : `object`. Properties for the new menu item.

    - `checked` {{optional_inline}}
      - : `boolean`. The initial state of a checkbox or radio item: `true` for selected and `false` for unselected. Only one radio item can be selected at a time in a given group of radio items.
    - `command` {{optional_inline}}

      - : `string`. String describing an action that should be taken when the user clicks the item. Possible values are:

        - `"_execute_browser_action"`: simulate a click on the extension's browser action, opening its popup if it has one
        - `"_execute_page_action"`: simulate a click on the extension's page action, opening its popup if it has one
        - `"_execute_sidebar_action"`: open the extension's sidebar

        Clicking the item will still trigger the {{WebExtAPIRef("menus.onClicked")}} event, but there's no guarantee of the ordering here: the command may be executed before `onClicked` fires.

    - `contexts` {{optional_inline}}

      - : `array` of `{{WebExtAPIRef('menus.ContextType')}}`. Array of contexts in which this menu item will appear. If this option is omitted:

        - if the item's parent has contexts set, then this item will inherit its parent's contexts
        - otherwise, the item is given a context array of \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` of `string`. Lets you restrict the item to apply only to documents whose URL matches one of the given [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). This applies to frames as well.
    - `enabled` {{optional_inline}}
      - : `boolean`. Whether this menu item is enabled or disabled. Defaults to `true`.
    - `icons` {{optional_inline}}

      - : `object`. One or more custom icons to display next to the item. Custom icons can only be set for items appearing in submenus. This property is an object with one property for each supplied icon: the property's name should include the icon's size in pixels, and path is relative to the icon from the extension's root directory. The browser tries to choose a 16x16 pixel icon for a normal display or a 32x32 pixel icon for a high-density display. To avoid any scaling, you can specify icons like this:

        ```json
        "icons": {
                "16": "path/to/geo-16.png",
                "32": "path/to/geo-32.png"
              }
        ```

        Alternatively, you can specify a single SVG icon, and it will be scaled appropriately:

        ```json
        "icons": {
                "16": "path/to/geo.svg"
              }
        ```

        > **Note:** The top-level menu item uses the [icons](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) specified in the manifest rather than what is specified with this key.

    - `id` {{optional_inline}}1
      - : `string`. The unique ID to assign to this item. Is mandatory for non-persistent [background (event) pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 and in Manifest V3. Cannot be the same as another ID for this extension.
    - `onclick` {{optional_inline}}
      - : `function`. A function that will be called when the menu item is clicked. Event pages cannot use this: instead, they should register a listener for {{WebExtAPIRef('menus.onClicked')}}.
    - `parentId` {{optional_inline}}
      - : `integer` or `string`. The ID of a parent menu item; this makes the item a child of a previously added item. Note: If you have created more than one menu item, then the items will be placed in a submenu. The submenu's parent will be labeled with the name of the extension.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` of `string`. Similar to `documentUrlPatterns`, but lets you filter based on the `href` of anchor tags and the `src` attribute of img/audio/video tags. This parameter supports any URL scheme, even those that are usually not allowed in a match pattern.
    - `title` {{optional_inline}}

      - : `string`. The text to be displayed in the item. Mandatory unless `type` is "separator".

        You can use "`%s`" in the string. If you do this in a menu item, and some text is selected in the page when the menu is shown, then the selected text will be interpolated into the title. For example, if `title` is "Translate '%s' to Pig Latin" and the user selects the word "cool", then activates the menu, then the menu item's title will be: "Translate 'cool' to Pig Latin".

        If the title contains an ampersand "&" then the next character will be used as an access key for the item, and the ampersand will not be displayed. Exceptions to this are:

        - If the next character is also an ampersand: then a single ampersand will be displayed and no access key will be set. In effect, "&&" is used to display a single ampersand.
        - If the next characters are the interpolation directive "%s": then the ampersand will not be displayed and no access key will be set.
        - If the ampersand is the last character in the title: then the ampersand will not be displayed and no access key will be set.

        Only the first ampersand will be used to set an access key: subsequent ampersands will not be displayed but will not set keys. So "\&A and \&B" will be shown as "A and B" and set "A" as the access key.

        In some localized versions of Firefox (Japanese and Chinese), the access key is surrounded by parentheses and appended to the menu label, _unless_ the menu title itself already ends with the access key (`"toolkit(&K)"` for example). For more details, see {{bug(1647373)}}.

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. The type of menu item: "normal", "checkbox", "radio", "separator". Defaults to "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. List of view types where the menu item will be shown. Defaults to any view, including those without a `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Whether the item is shown in the menu. Defaults to `true`.

- `callback` {{optional_inline}}
  - : `function`. Called when the item has been created. If there were any problems creating the item, details will be available in {{WebExtAPIRef('runtime.lastError')}}.

### Return value

`integer` or `string`. The `ID` of the newly created item.

## Examples

This example creates a context menu item that's shown when the user has selected some text in the page. It just logs the selected text to the console:

```js
browser.menus.create({
  id: "log-selection",
  title: "Log '%s' to the console",
  contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "log-selection") {
    console.log(info.selectionText);
  }
});
```

This example adds two radio items, which you can use to choose whether to apply a green or a blue border to the page. Note that this example will need the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:", browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.menus.create({
  id: "radio-green",
  type: "radio",
  title: "Make it green",
  contexts: ["all"],
  checked: false
}, onCreated);

browser.menus.create({
  id: "radio-blue",
  type: "radio",
  title: "Make it blue",
  contexts: ["all"],
  checked: false
}, onCreated);

let makeItBlue = 'document.body.style.border = "5px solid blue"';
let makeItGreen = 'document.body.style.border = "5px solid green"';

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "radio-blue") {
    browser.tabs.executeScript(tab.id, {
      code: makeItBlue
    });
  } else if (info.menuItemId === "radio-green") {
    browser.tabs.executeScript(tab.id, {
      code: makeItGreen
    });
  }
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/contextMenus/#method-create) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
