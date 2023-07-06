---
title: "@property"
slug: Web/CSS/@property
page-type: css-at-rule
browser-compat: css.at-rules.property
---

{{CSSRef}}

The **`@property`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs. It allows developers to explicitly define their {{cssxref('--*', 'CSS custom properties')}}, allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not.

The `@property` rule represents a custom property registration directly in a stylesheet without having to run any JS. Valid `@property` rules result in a registered custom property, as if {{domxref('CSS.registerProperty_static', 'registerProperty')}} had been called with equivalent parameters.

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

In this example, we define two custom properties, `--item-size` and `--item-color`, that we'll use to style items.

The following code defines `--item-size` property using CSS {{cssxref('@property')}} at-rule. The property accepts only [percentage](/en-US/docs/Web/CSS/percentage) values. That means an item's size will always be relative to its parent's size. The property is inheritable.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

For defining `--item-color` we'll use [JavaScript](/en-US/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'registerProperty')}}, which is equivalent to `@property` at-rule. The property accepts only color values and is not inherited.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

The following code creates the items styled using our custom properties.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Now let us style the items.

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

In the output above, for the property `--item-size`:

- for item one, as we have not set any value in any CSS rule for the item, value `20%` is inherited from the parent `.container`.
- for item two, the `initial` value means to use the default `40%` from the property definition.
- for item three, value `1000px` is not a valid value, because it is not a percentage. So the inherited value `20%` is used.

In the output above, for the property `--item-color`:

- for item one, as the property is not inheritable and it is not set in any CSS rule for the item, default value `aqua` is used.
- for item two, using `inherit` we've forced the inheritance, even though the property is not inheritable, the value `orange` set on parent is used.
- for item three, value `xyz` is an invalid color, so default `aqua` is used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
