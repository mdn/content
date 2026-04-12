---
title: "ARIA: tab role"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#tab
  - https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/
sidebar: accessibilitysidebar
---

The ARIA `tab` role indicates an interactive element inside a `tablist` that, when activated, displays its associated `tabpanel`.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## Description

An element with the `tab` role controls the visibility of an associated element with the [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) role. The common user experience pattern is a group of visual tabs above, or to the side of, a content area, and selecting a different tab changes the content and makes the selected tab more prominent than the other tabs.

Elements with the role `tab` _must_ either be a child of an element with the `tablist` role, or have their `id` as part of the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) property of a `tablist`. This combination identifies to assistive technology that the element is part of a group of related elements. Some assistive technology will provide a count of the number of `tab` role elements inside a `tablist`, and inform users of which `tab` they currently have targeted. Further, an element with the `tab` role _should_ contain the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) property identifying a corresponding `tabpanel` (that has a `tabpanel` role) by that element's `id`. When an element with the `tabpanel` role has focus, or a child of it has focus, that indicates that the connected element with the `tab` role is the active tab in a `tablist`.

When elements with the `tab` role are selected or active they should have their [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) attribute set to `true`. Otherwise, their `aria-selected` attribute should be set to `false`. When a single-selectable `tablist` is selected or active, the `hidden` attribute of the other tabpanels should be set to true until the user selects the tab associated with that tabpanel. When a multi-selectable `tablist` is selected or active, its corresponding controlled `tabpanel` should have its [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) attribute set to `true` and its `hidden` attribute set to `false`, otherwise the reverse.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `tab`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) to all descendant elements of any `tab` element as it is a role that does not support semantic children.

For example, consider the following `tab` element, which contains a heading.

```html
<div role="tab"><h3>Title of my tab</h3></div>
```

Because descendants of `tab` are presentational, the following code is equivalent:

```html
<div role="tab"><h3 role="presentation">Title of my tab</h3></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="tab">Title of my tab</div>
```

### Associated roles and attributes

- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : boolean
- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `id` of element with `tabpanel` role
- [id](/en-US/docs/Web/HTML/Reference/Global_attributes/id)
  - : content

### Keyboard interactions

| Key                               | Action                                                                                                                                                                                                           |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | When focus is outside of the `tablist` moves focus to the active tab. If focus is on the active tab moves focus to the next element in the keyboard focus order, ideally the active tab's associated `tabpanel`. |
| <kbd>→</kbd>                      | Focuses and optionally activates the next tab in the tab list. If the current tab is the last tab in the tab list it activates the first tab.                                                                    |
| <kbd>←</kbd>                      | Focuses and optionally activates the previous tab in the tab list. If the current tab is the first tab in the tab list it activates the last tab.                                                                |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | When a tab has focus, activates the tab, causing its associated panel to be displayed.                                                                                                                           |
| <kbd>Home</kbd>                   | Focuses and optionally activates the first tab in the tab list.                                                                                                                                                  |
| <kbd>End</kbd>                    | Focuses and optionally activates the last tab in the tab list.                                                                                                                                                   |
| <kbd>Delete</kbd>                 | When allowed removes the currently selected tab from the tab list.                                                                                                                                               |

### Required JavaScript features

> [!NOTE]
> While there are ways to build tab-like functionality without JavaScript, there is no substitute combination using only HTML and CSS that will provide the same set of functionality that's required above for accessible tabs with content.

## Example

This example combines the role `tab` with `tablist` and elements with `tabpanel` to create an interactive group of tabbed content. Here we are enclosing our group of content in a `div`, with our `tablist` having an `aria-label` which labels it for assistive technology. Each `tab` is a `button` with the attributes previously mentioned. The first `tab` has both `tabindex="0"` and `aria-selected="true"` applied. These two attributes must always be coordinated as such—so when another tab is selected, it will then have `tabindex="0"` and `aria-selected="true"` applied. All unselected tabs must have `aria-selected="false"` and `tabindex="-1"`.

All of the `tabpanel` elements have `tabindex="0"` to make them tabbable, and all but the currently active one have the `hidden` attribute. The `hidden` attribute will be removed when a `tabpanel` becomes visible with JavaScript.

> [!NOTE]
> Setting `tabindex` on the tab panel is unnecessary if the first element in the tab panel is focusable (such as a link), because tabbing to the link will also start reading the panel's content. However, if there are any panels in the set whose first content element is not focusable, then all tabpanel elements in a tab set should be focusable, so that screen reader users can navigate to the panel content consistently.

```html
<div class="tabs">
  <div role="tablist" aria-label="Select your operating system">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      Windows
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      macOS
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Linux
    </button>
  </div>
  <div class="tab-panels">
    <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
      <p>How to run this application on Windows</p>
    </div>
    <div
      id="panel-2"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-2"
      hidden>
      <p>How to run this application on macOS</p>
    </div>
    <div
      id="panel-3"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-3"
      hidden>
      <p>How to run this application on Linux</p>
    </div>
  </div>
</div>
```

There is some basic styling applied that restyles the buttons and changes the {{cssxref("z-index")}} of `tab` elements to give the illusion of it connecting to the `tabpanel` for active elements, and the illusion that inactive elements are behind the active `tabpanel`. You need to clearly distinguish the active tab from the inactive tabs, such as thicker borders or larger size.

```css hidden
.tabs {
  padding: 1em;
}

[role="tablist"] {
  margin-bottom: -1px;
}

[role="tab"] {
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 5px 5px 0 0;
  border: 1px solid grey;
  border-bottom: 0;
  padding: 0.2em;
}

[role="tab"][aria-selected="true"] {
  z-index: 3;
  border-top-width: 4px;
}

[role="tabpanel"] {
  position: relative;
  padding: 0 0.5em 0.5em 0.7em;
  border: 1px solid grey;
  border-radius: 0 0 5px 5px;
  background: white;
  z-index: 2;
}

[role="tabpanel"]:focus {
  border-color: #356fb3;
  outline: 1px solid #356fb3;
}
```

The user interaction is handled with JavaScript. We first get references to our `tablist`, all the `tab` elements inside it, the container of our `tabpanel` elements, and all the `tabpanel` elements inside that container. This is based on some assumptions about the structure of our HTML, so if you change the structure, you will need to change this code. If you have multiple tabbed interfaces on a page, you can wrap this code in a function and pass `tabsContainer` as an argument.

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

For keyboard interactions, we listen for the [`keydown`](/en-US/docs/Web/API/Element/keydown_event) event on the `tablist`. In this demo, we chose to not activate the `tab` when the user navigates with the arrow keys, but instead only move focus. If you want to display the `tab` when it receives focus, you can call the `showTab()` function (defined later) instead of just calling `focus()` on the new tab.

```js
tabList.addEventListener("keydown", (e) => {
  const currentTab = e.target;
  const currentIndex = tabs.indexOf(currentTab);
  if (currentIndex === -1) return; // Exit if the focused element is not a tab
  let newIndex = 0;

  switch (e.key) {
    case "ArrowRight":
      newIndex = (currentIndex + 1) % tabs.length;
      break;
    case "ArrowLeft":
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      break;
    case "Home":
      newIndex = 0;
      break;
    case "End":
      newIndex = tabs.length - 1;
      break;
    default:
      return; // Exit if the key is not recognized
  }

  e.preventDefault();
  e.stopPropagation();
  tabs[newIndex].focus();
});
```

The tab panel is only activated either by pressing <kbd>Enter</kbd> or <kbd>Space</kbd> while a `tab` has focus, or by clicking on a `tab`. We first define a function `showTab()` that takes in the `tab` element to be shown.

```js
function showTab(targetTab) {
  // Unselect other tabs and set this tab as selected
  for (const tab of tabs) {
    if (tab === targetTab) continue;
    tab.setAttribute("aria-selected", false);
    tab.tabIndex = -1;
  }
  targetTab.setAttribute("aria-selected", true);
  targetTab.tabIndex = 0;

  // Hide other tab panels and show the selected panel
  const targetTabPanel = document.getElementById(
    targetTab.getAttribute("aria-controls"),
  );
  for (const panel of tabPanels) {
    if (panel === targetTabPanel) continue;
    panel.hidden = true;
  }
  targetTabPanel.hidden = false;
}
```

Now we can call this function either on a `click` event or on a `keydown` event.

```js
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    showTab(e.target);
  });
  tab.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      showTab(e.target);
    }
  });
});
```

{{EmbedLiveSample("Example", 600, 130)}}

## Best practices

It is recommended to use a {{HTMLElement('button')}} element with the role `tab` for their built-in functional and accessible features instead, as opposed to needing to add them yourself. For controlling tab key functionality for elements with the role `tab`, it is recommended to set all non-active elements to `tabindex="-1"`, and to set the active element to `tabindex="0"`.

## Precedence order

What are the related properties, and in what order will this attribute or property be read, which property will take precedence over this one, and which property will be overwritten.

## Specifications

{{Specifications}}

## See also

- HTML {{HTMLElement('button')}} element
- [KeyboardEvent.key](/en-US/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
