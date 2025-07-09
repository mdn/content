---
title: CSS property value processing
short-title: Property value processing
slug: Web/CSS/CSS_cascade/Value_processing
page-type: guide
---

{{CSSRef}}

For every element in a document tree, the browser assigns a value to every CSS property that applies to that element. The rendered value of each CSS property for a given element or box is the result of a calculation based on stylesheet definitions, inheritance, the [cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade), dependencies, unit conversion, and the display environment. This guide provides an overview of the processing steps applied to define how each CSS value is ultimately rendered by exploring key concepts like specified, computed, used, and actual values.

## Property values

Every CSS property's value comes from the declaration with the greatest {{cssxref("specificity")}}. If two or more declarations with the same specificity provide different property values for the same element, the declaration value whose selector has the greatest algorithmic weight gets applied.

Each property value comes from a single property-value pair; is single value is applied from each property. Even if the value is a comma separated list of values, that list of values came from a single declaration.

To determine which specified value is applied, the user agent gathers and processes all the styles from different sources, such as inline styles, and internal and external stylesheets.

Certain properties inherit values from their parent elements unless explicitly overridden. [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance) occurs when no style information exists for a specific property on an element. If the property is inherited, the value is set to the [computed value](#computed_value) of the parent element. If the property is not inherited, its value is set to the [initial value](#initial_value) for that element.

The [cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade) determines which value should be applied when multiple conflicting styles target the same element. The cascade algorithm defines how user agents combine property values originating from different sources, scopes, and/or layers. When a selector matches an element, the property's [specified value](#specified_value) from the origin with the highest precedence gets applied, even if a selector from a lower precedence origin or layer has greater {{cssxref("specificity")}}.

After applying the cascading rules and resolving values step by step, the browser ensures the visual presentation matches the processed CSS.

## Processing stages

All elements that are part of the document's flattened element tree have declared, cascaded, specified, computed, used, and actual values. For a specific property, these values may or may not be the same. For example, if your large code base includes the CSS `p { font-size: 1.25em; }` and your HTML includes `<p>CSS is fun!</p>`, what size will the paragraph be? The {{cssxref("font-size")}} value moves through a few stages to go from the `em` specified value to the rendered `px` value.

- [Initial value](#initial_value)
- [Specified value](#specified_value)
- [Computed value](#computed_value)
- [Used value](#used_value)

These values are used to determine the final [rendered value](#rendered_values).

### Initial value

A property's **initial value** is the default value as listed in its definition table in the specification. The usage of the initial value depends on whether a property is inherited or not:

- For [inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties), the initial value is used on the _root element only_, as long as no [specified value](#specified_value) is supplied.
- For [non-inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties), the initial value is used on _all elements_, as long as no specified value is supplied.

You can explicitly set the initial value by using the {{cssxref("initial")}} keyword.

> [!NOTE]
> The initial value for can be found in the formal syntax section of each CSS property reference page. For example, the [initial value of `font-size` is `medium`](/en-US/docs/Web/CSS/font-size#formal_definition). The initial value should not be confused with the value specified by the browser's style sheet.

### Specified value

The **specified value** is the value initially assigned in the CSS file or by the `style` attribute. The specified value for a given property is determined according to the following rules:

1. If the document's style sheet explicitly specifies a value for the property, the given value will be used.
2. If the document's style sheet doesn't specify a value but it is an inherited property, the value will be taken from the parent element.
3. If none of the above apply, the element's [initial value](#initial_value) will be used.

In the example, `p { font-size: 1.25em; }`, the specified value is `1.25em`, unless the codebase includes a `font-size` declaration with greater {{cssxref("specificity")}}.

### Computed value

The **computed value** of a property is the value transferred from parent to child during inheritance. It is the result after resolving things like relative units and custom properties into absolute values, but before considering layout-specific information.

The computed value is calculated from the [specified value](#specified_value) by:

1. Handling the special values {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, and {{cssxref("unset")}}.
2. Doing the computation needed to reach the value described in the "Computed value" line in the property's definition table.

The computation needed to reach a property's computed value typically involves converting relative values (such as those in `em` units or percentages) to absolute values. For example, if an element has specified values `font-size: 16px` and `padding-top: 2em`, then the computed value of `padding-top` is `32px` (double the font size).

However, for some properties (those where percentages are relative to something that may require layout to determine, such as `width`, `margin-right`, `text-indent`, and `top`), percentage-specified values turn into percentage-computed values. Additionally, unitless numbers specified on the `line-height` property become the computed value, as specified. The relative values that remain in the computed value become absolute when the [used value](#used_value) is determined.

Given `p { font-size: 1.25em; }`, if `em` is `16px`, the computed font size for a paragraph will be `20px`.

### Used value

The **used value** is the property's value after all calculations have been performed on the [computed value](#computed_value) and it has been refined with layout-specific details (e.g., percentages resolved to actual pixel values).

Every CSS property has a used value. The used values of dimensions (e.g., {{cssxref("width")}} or {{cssxref("line-height")}}) are in pixels. The used values of shorthand properties (e.g., {{cssxref("background")}}) are consistent with those of their component properties (e.g., {{cssxref("background-color")}} or {{cssxref("background-size")}}) and with {{cssxref("position")}} and {{cssxref("float")}}.

The used value for the {{cssxref("width")}} or {{cssxref("inline-size")}} of an element is a pixel value even if the specified value of the property was set with percentages or keyword values.

If we have three container elements with their width set as `auto`, `50%`, and `inherit`:

```html hidden
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

While the three specified values, `auto`, `50%`, and `inherit`, are keyword and {{cssxref("percentage")}} values, retrieving the `width` using `window.getComputedStyle(el)["width"];` returns an [absolute length](/en-US/docs/Web/CSS/length#absolute_length_units) `px` value:

{{ EmbedLiveSample('Example', '80%', 372) }}

Change the window size or rotate your mobile device to change the size and the used values.

## Rendered values

The rendered value is called the [actual value](#actual_value), while the value retrieved via script is called the [resolved value](#resolved_value).

### Actual Value

The **actual value** of a property is the [used value](#used_value) of that property after any necessary approximations have been applied. It is the final rendered value as implemented by the browser, including adjustments for rendering quirks or limitations. For example, a {{glossary("user agent")}} that can only render borders with a whole-number pixel width may round the thickness of the border to the nearest integer.

The calculation includes these steps:

1. First, the [specified value](#specified_value) is determined based on the result of [cascading](/en-US/docs/Web/CSS/CSS_cascade/Cascade), [inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance), or using the [initial value](#initial_value).
2. Next, the [computed value](#computed_value) is calculated according to the specification (for example, a `span` with `position: absolute` will have its computed `display` changed to `block`).
3. Then, layout is calculated, resulting in the [used value](#used_value).
4. Finally, the used value is transformed according to the limitations of the local environment, resulting in the actual value.

### Resolved value

The **resolved value** of a property is the value after applying active stylesheets and resolving any basic computation those values may contain. The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} method returns a live {{domxref("CSSStyleDeclaration")}} object containing the resolved values of all CSS properties applied to a specified element. Each resolved value is either the [computed value](#computed_value) or the [used value](#used_value), depending on the property.

Historically, `getComputedStyle()` returned the computed value of an element or pseudo-element. As CSS evolved, so did the concept of "computed value", but the values returned by `getComputedStyle()` had to remain the same for backward compatibility with deployed scripts. These values are the "resolved values".

For most properties, the resolved value is the computed value, but for a few legacy properties (including {{cssxref("width")}} and {{cssxref("height")}}), it is the used value. The [CSSOM specification](https://drafts.csswg.org/cssom/#resolved-values) provides per-property details.

CSS 2.0 defined _computed value_ as the last step in a property's calculation. CSS 2.1 introduced the distinct definition of "used value". An element could then explicitly inherit the width/height of its parent, whose computed value is a percentage. For CSS properties that don't depend on layout (e.g., `display`, `font-size`, or `line-height`), the computed values and used values are the same. The following list contains the CSS 2.1 properties that _do_ depend on layout, and therefore have a different computed value and used value (taken from [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## See also

- CSS values for controlling inheritance: [`inherit`](/en-US/docs/Web/CSS/inherit), [`initial`](/en-US/docs/Web/CSS/initial), [`revert`](/en-US/docs/Web/CSS/revert), [`revert-layer`](/en-US/docs/Web/CSS/revert-layer), and [`unset`](/en-US/docs/Web/CSS/unset)
- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
