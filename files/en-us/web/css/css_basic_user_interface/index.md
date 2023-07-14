---
title: CSS basic user interface
slug: Web/CSS/CSS_basic_user_interface
page-type: css-module
spec-urls: https://drafts.csswg.org/css-ui/
---

{{CSSRef}}

The **CSS basic user interface** module lets you define the rendering and functionality of features related to the user interface including outline properties, visual feedback to pointing device and keyboard, and altering the default appearance of UI widgets.

Basic user interface properties can be used to improve user experience and accessibility by providing visual cues to elements that are being interacted with, including styling mouse cursors and keyboard directional focus navigation, and styling caret cursors when an editable element has focus. The module provides for providing outlines to focused (or not) elements without impacting an element's [box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model) dimensions and styling. This UI module also enables the styling of user interface controls.

### Basic user interface in action

To view how basic user interface properties can alter the appearance of UI features, interact with the elements in this sample. Note that some features in this sample improve usability while others harm user experience.

{{EmbedGHLiveSample("css-examples/modules/basicUI.html", '100%', 320)}}

The CSS {{CSSxRef("outline")}} and {{CSSxRef("outline-offset")}} properties were used to provide feedback to users which element currently has focus. An {{CSSxRef("accent-color")}} provides a theme color to all the form controls. The caret that appears when the text is edit has the same color thanks to the {{CSSxRef("caret-color")}} property. These can all be considered UI improvements.

Some features harm usability. The {{CSSxRef("cursor")}} property was used to change cursors from the browser default which is confusing. The {{CSSxRef("resize")}} property prevents the second {{HTMLElement("textarea")}} from being resizable while the {{CSSxRef("pointer-events")}} property prevents the third `<textarea>` from receiving click events. It is still focusable using the keyboard.

To see the code for this basic user interface sample, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/basicUI.html).

## Reference

### Properties

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}

- {{CSSxRef("caret")}}, shorthand for:
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}} {{Experimental_Inline}}
- {{CSSxRef("nav-left")}} {{Experimental_Inline}}
- {{CSSxRef("nav-right")}} {{Experimental_Inline}}
- {{CSSxRef("nav-up")}} {{Experimental_Inline}}
- {{CSSxRef("outline")}}, shorthand for:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

## Guides

- [Using URL values for the `cursor` property](/en-US/docs/Web/CSS/CSS_basic_user_interface
  Title: CSS basic user interface/Using_URL_values_for_the_cursor_property)
  - : Explains how a URL can be used with the {{CSSxRef("cursor")}} property to produce custom cursors.
- [Learn forms: advanced form styling](/en-US/docs/Learn/Forms/Advanced_form_styling)
  - : Explains how {{CSSxRef("appearance")}} can be used to style form controls.

## Related concepts

- SVG [`cursor`](/en-US/docs/Web/SVG/Attribute/cursor) attribute
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, and {{CSSxRef(":focus-visible")}} pseudoclasses
- {{DOMXref("CaretPosition")}} Interface

## Specifications

{{Specifications}}

## See also

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
