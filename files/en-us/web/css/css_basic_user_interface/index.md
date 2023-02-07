---
title: CSS Basic User Interface
slug: Web/CSS/CSS_Basic_User_Interface
page-type: css-module
tags:
  - CSS
  - CSS Basic User Interface
  - Guide
  - Overview
  - Reference
spec-urls: 
  - https://drafts.csswg.org/css-ui/
  - https://www.w3.org/TR/css-ui-3/
---

{{CSSRef}}

The **CSS basic user interface** module lets you define the rendering and functionality of features related to the user interface including outline properties, visual feedback to pointing device and keyboard, and altering the default appearance of UI widgets.

Basic user interface properties can be used to improve user experience and accessibility by providing visual cues to elements that are being interacted with, including styling mouse cursors and keyboard directional focus navigation, and styling caret cursors when an editable element has focus. The module provides for providing outlines to focused (or not) elements without impacting an element's [box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model) dimensions and styling. This UI module also enables the styling of user interface controls.

### Basic user interface in action

To view how basic user interface properties can alter the appearance of UI features, interact with the elements in this sample. Note that some features in this sample improve usability while others harm user experience.

```html hidden
<div><span contenteditable>Edit this text </span></div>
<fieldset><legend>Play with these fake form controls</legend>
    <input type="checkbox" id="check">
    <input type="radio" name="a">
    <input type="radio" name="a">
    <input type="range">
    <progress>
</fieldset>
<fieldset>
  <legend>Be careful not to ruin usability: try resizing these.</legend>
  <textarea>
  cursor: wait;
  </textarea>
  <textarea>
  resize: none;
  </textarea>
  <textarea>
  pointer-events: none;
  </textarea>
</fieldset>
```

```css hidden
body {
  font-family: sans-serif;
  font-size: 1.25rem;
}
[contenteditable] {
  cursor: copy;
  caret-color: magenta;
  border: 1px solid #ccc;
}
:focus {
  outline: dashed magenta 3px;
  outline-offset: 10px;
}
* {
  accent-color: magenta;
}
div, fieldset {
  margin: 20px;
}

textarea:nth-of-type(1) {
  cursor: wait;
}
textarea:nth-of-type(2) {
  resize: none;
}
textarea:nth-of-type(3) {
  pointer-events: none;
}
```

{{ EmbedLiveSample('Basic_user_interface_in_action', "630", "300") }}

The CSS {{CSSxRef("outline")}} and {{CSSxRef("outline-offset")}} properties were used to provide feedback to users which element currently has focus. An {{CSSxRef("accent-color")}} provides a theme color to all the form controls. The caret that appears when the text is edit has the same color thanks to the {{CSSxRef("caret-color")}} property. These can all be considered UI improvements.

Some features harm usability. The {{CSSxRef("cursor")}} property was used to change cursors from the browser default which is confusing. The {{CSSxRef("resize")}} property prevents the second {{HTMLElement("textarea")}} from being resizable while the {{CSSxRef("pointer-events")}} property prevents the third `<textarea>` from receiving click events. It is still focusable using the keyboard.

To see the code for this basic user interface sample, [view the source on Github](https://github.com/mdn/content/blob/main/files/en-us/web/css/CSS_Basic_User_Interface/index.md).

## Reference

### Properties

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("caret")}} shorthand
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}} {{Experimental_Inline}}
- {{CSSxRef("nav-left")}} {{Experimental_Inline}}
- {{CSSxRef("nav-right")}} {{Experimental_Inline}}
- {{CSSxRef("nav-up")}} {{Experimental_Inline}}
- {{CSSxRef("outline-color")}}
- {{CSSxRef("outline-style")}}
- {{CSSxRef("outline-width")}}
- {{CSSxRef("outline")}} shorthand
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Previously, the {{CSSxRef("box-sizing")}} and {{CSSxRef("text-overflow")}} CSS properties were part of the basic user interface module, but were moved to the [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) and [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) modules, respectively. The {{CSSxRef("ime-mode")}} property has been deprecated and should not be used. An `input-security` property is under consideration, but is the provenance of HTML.

## Guides

- [Using URL values for the `cursor` property](/en-US/docs/Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property)
  - : Explains how a URL can be used with the {{CSSxRef("cursor")}} property to produce custom cursors.

## Related concepts

- SVG [`cursor`](/en-US/docs/Web/SVG/Attribute/cursor) attribute
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, and {{CSSxRef(":focus-visible")}} pseudoclasses
- {{DOMXref("CaretPosition")}} Interface

## Specifications

{{Specifications}}

## See also

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
