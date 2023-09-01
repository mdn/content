---
title: "@property"
slug: Web/CSS/@property
page-type: css-at-rule
browser-compat: css.at-rules.property
---

{{CSSRef}}

The **`@property`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs. It allows developers to explicitly define their {{cssxref('--*', 'CSS custom properties')}}, allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not.

The `@property` rule represents a custom property registration directly in a stylesheet without having to run any JS. Valid `@property` rules result in a registered custom property, as if {{domxref('CSS.registerProperty_static', 'registerProperty()')}} had been called with equivalent parameters.

## Syntax

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

### Descriptors

- {{cssxref("@property/syntax","syntax")}}
  - : Describes the allowable syntax for the property.
- {{cssxref("@property/inherits","inherits")}}
  - : Controls whether the custom property registration specified by `@property` inherits by default.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Sets the initial value for the property.

A valid `@property` rule represents a custom property registration, with the property name being the serialization of the in the rule's prelude.

`@property` rules require a {{cssxref("@property/syntax","syntax")}} and {{cssxref("@property/inherits","inherits")}} descriptor; if either are missing, the entire rule is invalid and must be ignored. The {{cssxref("@property/initial-value","initial-value")}} descriptor is optional only if the syntax is the <a href="https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition">universal syntax definition</a>, otherwise the descriptor is required; if it's missing, the entire rule is invalid and must be ignored.

Unknown descriptors are invalid and ignored, but do not invalidate the `@property` rule.

## Formal syntax

{{csssyntax}}

## Examples

In this example, we define two custom properties, `--item-size` and `--item-color`, that we'll use to define the size (width and height) and background color of the three following items.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

The following code uses the CSS `@property` at-rule to define a custom property named `--item-size`. The property sets the initial value to `40%`, limiting valid values to [percentage](/en-US/docs/Web/CSS/percentage) values only. This means, when used as the value for an item's size, its size will always be relative to its parent's size. The property is inheritable.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

We define a second custom property, `--item-color`, using [JavaScript](/en-US/docs/Web/JavaScript) instead of CSS. The JavaScript {{domxref('CSS.registerProperty_static', 'registerProperty()')}} method is equivalent to `@property` at-rule. The property is defined to have an initial value of `aqua`, to accept only [`<color>`](/en-US/docs/Web/CSS/color_value) values, and is not inherited.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

We use the two custom properties to style the items:

```css
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;

  /* set custom property values on parent */
  --item-size: 20%;
  --item-color: orange;
}

/* use custom properties to set item size and background color */
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}

/* set custom property values on element itself */
.two {
  --item-size: initial;
  --item-color: inherit;
}

.three {
  /* invalid values */
  --item-size: 1000px;
  --item-color: xyz;
}
```

{{ EmbedLiveSample('examples', '100%', '250px') }}

The two custom properties, `--item-size: 20%` and `--item-color: orange;` are set on the `container` parent, overriding the `40%` and `aqua` default values set when these custom properties were defined. The size is set to be inheritable; the color is not.

For item one, none of these custom properties have been set. The `--item-size` is inheritable, so the value `20%` set on its parent `container` is used. On the other hand, the property `--item-color` is not inheritable, so the value `orange` set on the parent is not considered. Instead the default initial value `aqua` is used.

For item two, CSS global keywords are set for both custom properties which are valid values for all value types and therefore valid no matter the `syntax` descriptor value. The `--item-size` is set to `initial` and uses the `initial-value: 40%;` set in the `@property` declaration. The `initial` value means the`initialValue` value for the property is used. The `--item-color` is set to `inherit`, explicitly inheriting the `orange` value from its parent even though the custom property is set to otherwise not be inherited. This is why item two is orange.

For item three, the `--item-size` value gets set to `1000px`. While `1000px` is a {{cssxref("length")}} value, the `@property` declaration requires the value be a `<percentage>`, so the declaration is not valid and is ignored, meaning the inheritable `20%` set on the parent is used. The `xyz` value is also invalid. As `registerProperty()` set `--item-color` to not be inherited, the default initial value of `aqua` is used and not the parent's `orange` value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
