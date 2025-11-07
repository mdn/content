---
title: CSS property value processing
short-title: Property value processing
slug: Web/CSS/CSS_cascade/Value_processing
page-type: guide
sidebar: cssref
---

For every element in a document tree, the browser assigns a value to every CSS property that applies to that element. The rendered value of each CSS property for a given element or box is the result of a calculation based on stylesheet definitions, inheritance, the [cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade), dependencies, unit conversion, and the display environment. This guide provides an overview of the processing steps applied to define how each CSS value is ultimately rendered by exploring key concepts like specified, computed, used, and actual values.

## Property values

Every style applied to an element or pseudo-element is based on a single CSS property declaration. Each CSS property has only one value. The value that is applied is determined by the [cascaded values](#cascaded_value) of all the declarations of that property that apply to that element or pseudo-element, with the single value applied coming from the property declaration that ranks highest in the [cascade sorting order](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) based on the [cascade algorithm](/en-US/docs/Web/CSS/CSS_cascade/Cascade).

When there are multiple [declared values](#declared_value), with multiple declarations, providing the same or different property values for the same element, each property value must still come from a single property name-value pair as only a single value is applied from each property, even if the value is a comma-separated list of values.

To determine which [declared value](#declared_value) is applied, the user agent gathers and processes all the styles from different sources, such as inline styles, and internal and external stylesheets.

The [cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade) determines which value should be applied when multiple conflicting styles target the same element. The [cascade algorithm](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) defines how user agents combine property values originating from different sources, scopes, and/or [layers](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers). When a selector matches an element, the property's [declared value](#declared_value) from the [origin](/en-US/docs/Web/CSS/CSS_cascade/Cascade#origin_types) with the highest precedence gets applied, even if a selector from a lower precedence [origin](/en-US/docs/Web/CSS/CSS_cascade/Cascade#origin_types) or [layers](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) has greater {{cssxref("specificity")}}.

Certain properties inherit values from their parent elements unless explicitly overridden. [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance) may occur when no style information exists for a specific property on an element. If the property is inherited, the value is set to the [computed value](#computed_value) of the parent element. If the property is not inherited, its value is set to the [initial value](#initial_value) for that element.

After applying the [cascading](#cascading) rules and defaulting values step by step, the browser ensures the visual presentation matches the processed CSS.

## Processing overview

Before diving into the individual value stages, it's important to understand the three main phases that occur in value processing; [filtering](#filtering), [cascading](#cascading), and [defaulting](#defaulting).

### Filtering

**Filtering** is the process of identifying all declarations that apply to each element. A declaration applies to an element only if:

- The declaration belongs to a style sheet that currently applies to this document
- Any [conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) (like {{cssxref("@media")}} or {{cssxref("@supports")}}) that contain the declaration are currently true.
- The declaration belongs to a style rule whose selector matches the element
- The declaration is syntactically valid: the property name is recognized by the browser and the value matches the expected syntax for that property

Only valid declarations become declared values. Declarations with invalid property names or invalid values get filtered out according to [CSS error handling rules](/en-US/docs/Web/CSS/CSS_syntax/Error_handling).

In this example, only the {{cssxref("font-size")}} and {{cssxref("font-weight")}} declarations are processed. The [CSS parser filters out errors](/en-US/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors), ignoring or "filtering" out the declaration with the invalid property name:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

When filtering is complete, every element has zero or more [declared values](#declared_value) for every CSS property. These declared values are the starting point for the [cascading](#cascading) processing stage.

### Cascading

[Cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade) resolves conflicts when multiple declarations apply to the same property on the same element. Cascade sorts declarations using [the cascade sorting order](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) algorithm.

For example, both {{cssxref("font-size")}} declarations match `<p class="large">CSS is fun!</p>`, but the second declaration gets applied because it has higher {{cssxref("specificity")}}. Both declarations have author origin, but the second selector has specificity of `0-1-1` while the first has `0-0-1`:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

After cascading, the browser determines the [**cascaded value**](#cascaded_value) for each property on each element. This is the value used in the next processing stage; [defaulting](#defaulting).

### Defaulting

**Defaulting** ensures every property on every element has a value. This involves applying default property values when no CSS declarations explicitly set that property value.
This involves:

- Setting **inherited values** for [inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties)
- Setting **initial values** for [non-inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties)

As a result of defaulting, every property is guaranteed to have a [specified value](#specified_value).

Note that explicit defaulting keywords ([`initial`](/en-US/docs/Web/CSS/Reference/Values/initial), [`inherit`](/en-US/docs/Web/CSS/Reference/Values/inherit), [`unset`](/en-US/docs/Web/CSS/Reference/Values/unset), [`revert`](/en-US/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/en-US/docs/Web/CSS/Reference/Values/revert-layer)) are also resolved to their corresponding values to determine the [specified value](#specified_value).

## Processing stages

All elements that are part of the document's flattened element tree have [declared](#declared_value), [cascaded](#cascaded_value), [specified](#specified_value), [computed](#computed_value), [used](#used_value), and [actual](#actual_value) values. For a specific property, these values may or may not be the same. For example, if your large code base includes the CSS `p { font-size: 1.25em; }` and your HTML includes `<p class="large">CSS is fun!</p>`, what size will the paragraph be? The {{cssxref("font-size")}} value moves through a few stages to go from the `em` specified value to the rendered `px` value.

The value processing stages are:

- [Declared value](#declared_value)
- [Cascaded value](#cascaded_value)
- [Specified value](#specified_value)
- [Computed value](#computed_value)
- [Used value](#used_value)
- [Actual value](#actual_value)

These values are used to determine the final [rendered value](#rendered_values).

### Declared value

A **declared value** is any syntactically valid value from a declaration that applies to an element. An element can have zero or more declared values for each property. These values come from style sheets (author, user, or user-agent) and are identified during the [filtering](#filtering) stage.

Continuing our example, in which our stylesheet includes an occurrence of `p { font-size: 1.25em; }` and the document linking to that stylesheet includes `<p class="large">CSS is fun!</p>`, there may be other `font-size` declarations that could potentially apply to the same paragraph. The user-agent stylesheet might set `font-size: 1em` for all paragraphs, while another author declaration sets `font-size: 2em` for elements with class "large":

```css
/* User agent styles */
p {
  font-size: 1em;
}

/* author styles */
p {
  font-size: 1.25em;
}

.large {
  font-size: 2em;
}
```

There may be many other `font-size` declarations in our stylesheets, but only declarations whose selectors match the element become declared values. In this example, as our `<p>` element has `class="large"`, all three declarations are declared values for this element.

### Cascaded value

The **cascaded value** is the declared value that wins the [cascade](#cascading). There is at most one cascaded value per property per element.

From our declared values, author styles win over user agent styles. Within the same origin, higher specificity styles win over lower specificity styles. In this case, the cascaded value would be `font-size: 2em`, from the author origin with specificity `0-1-1`:

```css
font-size: 2em;
```

If there are no declared values for a property, there is no cascaded value, which means the [specified value](#specified_value) for that property is determined by the [defaulting](#defaulting) process.

### Specified value

The **specified value** is the result of the [defaulting](#defaulting) process. It is guaranteed to exist for every property on every element. The specified value is determined as follows:

1. If there is a [cascaded value](#cascaded_value), the cascaded value is the specified value.
2. If there is _no_ cascaded value and the property is [inherited](/en-US/docs/Web/CSS/CSS_cascade/Inheritance), the specified value is the [computed value](#computed_value) of the parent element.
3. If there is _no_ cascaded value and the property is _not_ inherited, the specified value is the property's [initial value](#initial_value).

In our example, since we have a [cascaded value](#cascaded_value) of `2em`, this becomes the specified value:

```css
font-size: 2em;
```

For properties without cascaded values, the defaulting process determines the value. For example, if `color` is not specified, the `color` is inherited from the parent's computed value since it's an inherited property. If `margin` is not specified, the `initial` value of `0` is used as `margin` is not an [inherited property](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties):

```css
color: inherit;
margin: 0;
```

#### Initial value

A property's **initial value** is the default value as listed in its definition table in the specification. The initial value is used during defaulting when:

- For [inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties), the initial value is used on the _root element only_, which has no parent element, when no cascaded value exists.
- For [non-inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties), the initial value is used on _all elements_ when no cascaded value exists.

You can explicitly set the initial value by using the {{cssxref("initial")}} keyword.

> [!NOTE]
> The initial value can be found in the formal syntax section of each CSS property reference page. For example, the [initial value of `font-size` is `medium`](/en-US/docs/Web/CSS/Reference/Properties/font-size#formal_definition). The initial value should not be confused with the value specified by the browser's style sheet.

### Computed value

The **computed value** of a property is the value transferred from parent to child during inheritance. It is the result after resolving things like relative units and custom properties into absolute values, but before considering layout-specific information.

The computed value is calculated from the [specified value](#specified_value) by:

1. Handling the special values {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, and {{cssxref("unset")}}.
2. Doing the computation needed to reach the value described in the "Computed value" line in the property's definition table.

The computation needed to reach a property's computed value typically involves converting relative values (such as those in `em` units or percentages) to absolute values. For example, if an element has specified values `font-size: 16px` and `padding-top: 2em`, then the computed value of `padding-top` is `32px` (double the font size).

However, for some properties (those where percentages are relative to something that may require layout to determine, such as `width`, `margin-right`, `text-indent`, and `top`), percentage-specified values turn into percentage-computed values. Additionally, unitless numbers specified on the `line-height` property become the computed value, as specified. The relative values that remain in the computed value become absolute when the [used value](#used_value) is determined.

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

While the three specified values, `auto`, `50%`, and `inherit`, are keyword and {{cssxref("percentage")}} values, retrieving the `width` using `window.getComputedStyle(el)["width"];` returns an [absolute length](/en-US/docs/Web/CSS/Reference/Values/length#absolute_length_units) `px` value:

{{ EmbedLiveSample('Example', '80%', 372) }}

Change the window size or rotate your mobile device to change the size and the used values.

## Rendered values

The rendered value is called the [actual value](#actual_value), while the value retrieved via script is called the [resolved value](#resolved_value).

### Actual value

The **actual value** of a property is the [used value](#used_value) of that property after any necessary approximations have been applied. It is the final rendered value as implemented by the browser, including adjustments for rendering quirks or limitations. For example, a {{glossary("user agent")}} that can only render borders with a whole-number pixel width may round the thickness of the border to the nearest integer.

The calculation includes these steps:

1. First, the [specified value](#specified_value) is determined based on the result of [cascading](/en-US/docs/Web/CSS/CSS_cascade/Cascade), [inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance), or using the [initial value](#initial_value).
2. Next, the [computed value](#computed_value) is calculated according to the specification (for example, a `span` with `position: absolute` will have its computed `display` changed to `block`).
3. Then, layout is calculated, resulting in the [used value](#used_value).
4. Finally, the used value is transformed according to the limitations of the local environment, resulting in the actual value.

### Resolved value

The **resolved value** of a property is the value after applying active stylesheets and resolving any basic computation those values may contain. The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} method returns a live {{domxref("CSSStyleDeclaration")}} object containing the resolved values of all CSS properties applied to a specified element. Each resolved value is either the [computed value](#computed_value) or the [used value](#used_value), depending on the property.

Historically, `getComputedStyle()` returned the computed value of an element or pseudo-element. As CSS evolved, so did the concept of "computed value", but the values returned by `getComputedStyle()` had to remain the same for backward compatibility with deployed scripts. These values are the "resolved values".

For most properties, the resolved value is the computed value, but for a few legacy properties (including {{cssxref("width")}} and {{cssxref("height")}}), it is the used value. The [CSSOM specification](https://drafts.csswg.org/cssom/#resolved_values) provides per-property details.

CSS 2.0 defined _computed value_ as the last step in a property's calculation. CSS 2.1 introduced the distinct definition of "used value". An element could then explicitly inherit the width/height of its parent, whose computed value is a percentage. For CSS properties that don't depend on layout (e.g., `display`, `font-size`, or `line-height`), the computed values and used values are the same. The following list contains the CSS 2.1 properties that _do_ depend on layout, and therefore have a different computed value and used value (taken from [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## See also

- CSS values for controlling inheritance: [`inherit`](/en-US/docs/Web/CSS/Reference/Values/inherit), [`initial`](/en-US/docs/Web/CSS/Reference/Values/initial), [`revert`](/en-US/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/en-US/docs/Web/CSS/Reference/Values/revert-layer), and [`unset`](/en-US/docs/Web/CSS/Reference/Values/unset)
- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
