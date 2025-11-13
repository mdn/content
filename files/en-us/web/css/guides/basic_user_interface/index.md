---
title: CSS basic user interface
short-title: Basic user interface
slug: Web/CSS/Guides/Basic_user_interface
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-ui-3/
  - https://drafts.csswg.org/css-ui/
sidebar: cssref
---

The **CSS basic user interface** module allows you to define the rendering and functionality of features related to the user interface, including outline properties, visual feedback for pointing devices and keyboards, and modifying the default appearance of UI widgets.

Basic user interface properties can be used to improve user experience and accessibility by providing visual cues to elements that are being interacted with, including styling mouse cursors and keyboard directional focus navigation, and styling caret cursors when an editable element has focus. The module includes features for providing outlines to focused (or unfocused) elements without impacting an element's [box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) dimensions and styling. This UI module also enables the styling of user interface controls.

## Basic user interface in action

To view how basic user interface properties can alter the appearance of UI features, interact with the elements in this sample. Note that some features in this sample improve usability while others harm user experience.

```html hidden live-sample___basicUI
<div><span contenteditable>Edit this text </span></div>
<fieldset>
  <legend>Play with these fake form controls</legend>
  <input type="checkbox" id="check" />
  <input type="radio" name="a" />
  <input type="radio" name="a" />
  <input type="range" />
  <progress></progress>
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

```css hidden live-sample___basicUI
body {
  font-family: sans-serif;
  font-size: 1.25rem;
}
[contenteditable] {
  cursor: copy;
  caret-color: magenta;
  border: 1px solid #cccccc;
}
:focus {
  outline: dashed magenta 3px;
  outline-offset: 10px;
}
* {
  accent-color: magenta;
}
div,
fieldset {
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

{{EmbedLiveSample("basicUI", "", "300px")}}

The CSS {{CSSxRef("outline")}} and {{CSSxRef("outline-offset")}} properties were used to provide feedback to users on which element currently has focus. An {{CSSxRef("accent-color")}} provides a theme color to all the form controls. The caret that appears when the text is edited has the same color thanks to the {{CSSxRef("caret-color")}} property. These can all be considered UI improvements.

Some features harm usability. The {{CSSxRef("cursor")}} property was used to change cursors from the browser default, which is confusing. The {{CSSxRef("resize")}} property prevents the second {{HTMLElement("textarea")}} from being resizable while the {{CSSxRef("pointer-events")}} property prevents the third `<textarea>` from receiving click events. It is still focusable using the keyboard.

Click "Play" in the example above to see or edit the code for the animation in the MDN Playground.

## Reference

### Properties

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, shorthand for:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

The CSS basic user interface module also defines the {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right`, and `nav-up` properties. Currently, no browsers support these features.

## Guides

- [Learn forms: advanced form styling](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Explains how {{CSSxRef("appearance")}} can be used to style form controls.

## Related concepts

- CSS {{cssxref("cursor")}} property
- SVG [`cursor`](/en-US/docs/Web/SVG/Reference/Attribute/cursor) attribute
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, and {{CSSxRef(":focus-visible")}} pseudoclasses
- {{DOMXref("CaretPosition")}} Interface

## Specifications

{{Specifications}}

## See also

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
