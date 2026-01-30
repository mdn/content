---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
page-type: css-at-rule
browser-compat: css.at-rules.property
sidebar: cssref
---

The **`@property`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) is used to explicitly define [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*), allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not.

> [!NOTE]
> The JavaScript {{domxref('CSS.registerProperty_static', 'registerProperty()')}} method is equivalent to the `@property` at-rule.

## Syntax

```css
@property --canBeAnything {
  syntax: "*";
  inherits: true;
}

@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}

@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: "true";
  initial-value: 200px;
}
```

The custom property name is a {{cssxref("dashed-ident")}} that starts with `--` and is followed by a valid, user-defined identifier. It is case-sensitive.

### Descriptors

- {{cssxref("@property/syntax","syntax")}}
  - : A string that describes the allowed value types for the registered custom property.
- {{cssxref("@property/inherits","inherits")}}
  - : A boolean value that controls whether the custom property registration specified by `@property` inherits by default.
- {{cssxref("@property/initial-value","initial-value")}}
  - : A value that sets the starting value for the property.

## Description

The `@property` at-rule is part of the [CSS Houdini](/en-US/docs/Web/API/Houdini_APIs) set of APIs. It allows developers to explicitly define [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*), allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not.

The `@property` rule enables custom property registration directly inside stylesheets without requiring any JavaScript. Valid `@property` rules produce registered custom properties, producing the same effect as calling {{domxref('CSS.registerProperty_static', 'registerProperty()')}} with equivalent parameters.

The following conditions must be met for the `@property` rule to be valid:

- The `@property` rule must include both the {{cssxref("@property/syntax","syntax")}} and {{cssxref("@property/inherits","inherits")}} descriptors.
  If either is missing, the entire `@property` rule is invalid and ignored.
- The `syntax` may be a data type name (such as `<color>`, `<length>`, or `<number>`, etc.), with multipliers (`+`, `#`) and combinators (`|`), a custom ident, or the universal syntax definition (`*`), meaning the syntax can be any valid token stream. The value is a {{cssxref("string")}}. As such, it must be in quotes.
- The {{cssxref("@property/initial-value","initial-value")}} descriptor is optional if the value of the `syntax` descriptor is the universal syntax definition (`syntax: "*"`).
  If the `initial-value` descriptor is required but omitted, the entire `@property` rule is invalid and ignored.
- If the value of the `syntax` descriptor is not the universal syntax definition, the {{cssxref("@property/initial-value","initial-value")}} descriptor has to be a [computationally independent](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) value.
  This means the value can be converted into a computed value without depending on other values, except for "global" definitions independent of CSS.
  For example, `10px` is computationally independent—it doesn't change when converted to a computed value. `2in` is also valid, because `1in` is always equivalent to `96px`. However, `3em` is not valid, because the value of an `em` is dependent on the parent's {{cssxref("font-size")}}.
- Unknown descriptors are invalid and ignored, but do not invalidate the `@property` rule.

If multiple valid `@property` rules are defined using the same name, the last one in stylesheet order "wins". If custom properties are registered with the same name using `@property` in CSS and `CSS.registerProperty()` in JavaScript, the JavaScript registration wins.

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we use the `@property` at-rule to declare two custom properties, and then use those properties in our style declarations.

#### HTML

```html
<p>Hello world!</p>
```

#### CSS

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: rebeccapurple;
}

@property --myWidth {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

p {
  background-color: var(--myColor);
  width: var(--myWidth);
  color: white;
}
```

#### Results

{{ EmbedLiveSample('Basic example', '100%', '60px') }}

The paragraph should be `200px` wide, with a purple background and white text.

### Animating a custom property value

In this example, we define a custom property called `--progress` using `@property`: this accepts {{cssxref("percentage")}} values and has an initial value of `25%`. We use `--progress` to define the position value of the color stops in a {{cssxref("gradient/linear-gradient")}}, specifying where a green color stops, and black starts. We then animate the value of `--progress` to `100%` over 2.5 seconds, giving the effect of animating a progress bar.

#### HTML

```html
<div class="bar"></div>
```

#### CSS

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

#### Results

{{ EmbedLiveSample('Animating a custom property value', '100%', '60px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("var")}}
- [Custom properties (`--*`)](/en-US/docs/Web/CSS/Reference/Properties/--*)
- [Registering CSS custom properties](/en-US/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS Properties and Values API](/en-US/docs/Web/CSS/Guides/Properties_and_values_api) module
- [CSS Properties and Values](/en-US/docs/Web/API/CSS_Properties_and_Values_API) API documentation
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) guide
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/Guides/Cascading_variables) module
