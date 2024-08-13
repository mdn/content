---
title: "HTML attribute: writingsuggestions"
short-title: writingsuggestions
slug: Web/HTML/Attributes/writingsuggestions
page-type: html-attribute
browser-compat: html.global_attributes.writingsuggestions
---

{{HTMLSidebar}}

The **`writingsuggestions`** global attribute allows you to turn browser-provided writing suggestions on or off.

Certain browsers provide auto-complete suggestions to users as they type in editable fields on web pages. While this can be helpful to users, you might want to turn them off in some cases, such as when providing your own form of auto-complete suggestions.

The `writingsuggestions` attribute can be set on editable fields such as {{htmlelement('input')}} or {{htmlelement('textarea')}} elements, or on other HTML elements to control the behavior of the browser's suggestions on sections of a page, or on the entire page.

## Syntax

In browsers that support them, writing suggestions are enabled by default. To disable them, set the `writingsuggestions` attribute's value to `false`. Setting the attribute's value to `true`, or omitting the value, enables writing suggestions.

To disable writing suggestions:

```html
<input type="text" writingsuggestions="false" />
```

To enable writing suggestions:

```html
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
