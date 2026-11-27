---
title: "`inherit()` CSS function"
short-title: inherit()
slug: Web/CSS/Reference/Values/inherit_function
page-type: css-function
browser-compat: css.types.inherit
sidebar: cssref
---

The **`inherit()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) returns the value of a [custom property](/en-US/docs/Web/CSS/Reference/Properties/--*) on the parent element. You can optionally provide a fallback value, which is used if the parent element doesn't have a value for the custom property.

## Syntax

```css
/* The parent's value of --depth */
inherit(--depth)

/* The parent's value of --depth, or 0 if it has none */
inherit(--depth, 0)

/* The parent's value of --depth, or nothing if it has none */
inherit(--depth,)
```

### Parameters

- {{cssxref("dashed-ident", "&lt;custom-property-name&gt;")}}
  - : The name of the custom property whose value you want to get from the parent element, such as `--depth`.
- Fallback {{optional_inline}}
  - : The value to use if the parent element doesn't have a value for the custom property. It can be any sequence of CSS values, and is separated from the first parameter by a comma. A comma with nothing after it, such as `inherit(--depth,)`, provides an empty fallback value.

### Return value

The parent element's [computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) of the custom property. If the parent element doesn't have a value for it, the fallback value is returned instead. If there is no fallback value either, the declaration is [invalid at computed-value time](/en-US/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

## Description

The `inherit()` function is similar to the {{cssxref("inherit")}} keyword, which sets a property to the parent element's value of the same property. However, `inherit()` has the following differences:

- It returns the parent's value of the custom property you specify, which doesn't need to be the property you're setting.
- It can be used as part of a value, for example inside a {{cssxref("calc()")}} function, instead of being the whole value.
- It accepts a fallback value.

Currently, `inherit()` only accepts custom properties. Standard properties, such as `width` or `color`, aren't supported.

### Building on the parent's value

The `inherit()` function is useful when an element's value of a custom property depends on its parent's value of the same custom property. For example, you might want to count how deeply an element is nested.

You can't do this with {{cssxref("var()")}}. A declaration such as `--depth: calc(var(--depth) + 1)` refers to the element's own `--depth` value, which creates a cycle and makes the declaration invalid. With `inherit()`, the declaration refers to the parent's value instead, so there is no cycle:

```css
.box {
  --depth: calc(inherit(--depth, 0) + 1);
}
```

The outermost `.box` element's parent doesn't have a `--depth` value, so the fallback value of `0` is used and the element's `--depth` is `1`. Each nested `.box` element then adds `1` to its parent's value. See [Styling elements by nesting depth](#styling_elements_by_nesting_depth) for a complete example.

### Substitution

The `inherit()` function works like `var()`: it is replaced with the parent's value before the property value is checked. A declaration that uses `inherit()` is valid as long as the `inherit()` function itself is written correctly. If the value that replaces `inherit()` isn't valid for the property, the declaration is invalid at computed-value time.

## Formal syntax

{{csssyntax}}

## Examples

### Styling elements by nesting depth

In this example, we use `inherit()` to work out how deeply each box is nested, and make the background of each box darker the deeper it is.

#### HTML

```html
<div class="box">
  Level 1
  <div class="box">
    Level 2
    <div class="box">
      Level 3
      <div class="box">Level 4</div>
    </div>
  </div>
</div>
```

#### CSS

Each `.box` element sets its `--depth` custom property to its parent's `--depth` value plus `1`, using `0` if the parent doesn't have a value. The lightness of each box's {{cssxref("background-color")}} is then reduced by `10%` for each level.

```css
.box {
  --depth: calc(inherit(--depth, 0) + 1);
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid steelblue;
  background-color: hsl(210 70% calc(95% - var(--depth) * 10%));
}
```

```css hidden
@layer no-support {
  @supports not (color: inherit(--a, red)) {
    body::before {
      content: "Your browser doesn't support the inherit() function";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Styling elements by nesting depth", "", 250)}}

Each nested box has a darker background than its parent.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("inherit")}} keyword
- {{cssxref("var()")}}
- [Using CSS custom properties](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
