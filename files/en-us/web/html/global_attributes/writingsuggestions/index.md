---
title: writingsuggestions
slug: Web/HTML/Global_attributes/writingsuggestions
page-type: html-attribute
browser-compat: html.global_attributes.writingsuggestions
---

{{HTMLSidebar("Global_attributes")}}

The **`writingsuggestions`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows developers to turn on or off the writing assistance that browsers provide to users when entering text in editable fields on the web.

Certain browsers provide writing suggestions to users as they type in editable fields. Suggestions usually appear as greyed-out text positioned after the text cursor and which completes the user's sentence. While this can be helpful to users, developers might want to turn writing suggestions off in some cases, such as when providing their own form of writing suggestions.

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
