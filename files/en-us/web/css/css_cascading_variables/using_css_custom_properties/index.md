---
title: Using CSS custom properties (variables)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
page-type: guide
---

{{CSSRef}}

**Custom properties** (sometimes referred to as **CSS variables** or **cascading variables**) are entities defined by CSS authors that represent specific values to be reused throughout a document. They are set using the {{cssxref("@property")}} at-rule or by [custom property syntax](/en-US/docs/Web/CSS/--*) (e.g., **`--primary-color: blue;`**). Custom properties are accessed using the CSS {{cssxref("var", "var()")}} function (e.g., **`color: var(--primary-color);`**).

Complex websites have very large amounts of CSS, and this often results in a lot of repeated CSS values. For example, it's common to see the same color used in hundreds of different places in stylesheets. Changing a color that's been duplicated in many places requires a search and replace across all rules and CSS files. Custom properties allow a value to be defined in one place, then referenced in multiple other places so that it's easier to work with. Another benefit is readability and semantics. For example, `--main-text-color` is easier to understand than the hexadecimal color `#00ff00`, especially if the color is used in different contexts.

Custom properties defined [using two dashes (`--`)](/en-US/docs/Web/CSS/--*) are subject to the [cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade) and inherit their value from their parent.
The {{cssxref("@property")}} at-rule allows more control over the custom property and lets you specify whether it inherits its value from a parent, what the initial value is, and the type constraints that should apply.

> [!NOTE]
> Variables do not work inside media queries and container queries.
> You can use the {{cssxref("var", "var()")}} function in any part of a value in any property on an element.
> You cannot use {{cssxref("var", "var()")}} for property names, selectors, or anything aside from property values, which means you can't use it in a media query or container query.

## Declaring custom properties

In CSS, you can declare a custom property using two dashes as a prefix for the property name, or by using the {{cssxref("@property")}} at-rule.
The following sections describe how to use these two methods.

### Using a prefix of two dashes (`--`)

A custom property prefixed with two dashes begins with `--`, followed by the property name (e.g., `--my-property`), and a property value that can be any [valid CSS value](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units).
Like any other property, this is written inside a ruleset.
The following example shows how to create a custom property `--main-bg-color` and uses a [`<named-color>`](/en-US/docs/Web/CSS/named-color) value of `brown`:

```css
section {
  --main-bg-color: brown;
}
```

The selector given to the ruleset ([`<section>`](/en-US/docs/Web/HTML/Element/section) elements in the example above) defines the scope in which the custom property can be used.
For this reason, a common practice is to define custom properties on the {{cssxref(":root")}} pseudo-class, so that it can be referenced globally:

```css
:root {
  --main-bg-color: brown;
}
```

This doesn't always have to be the case: you maybe have a good reason for limiting the scope of your custom properties.

> [!NOTE]
> Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.

### Using the `@property` at-rule

The {{cssxref("@property")}} at-rule allows you to be more expressive with the definition of a custom property with the ability to associate a type with the property, set default values, and control inheritance.
The following example creates a custom property called `--logo-color` which expects a [`<color>`](/en-US/docs/Web/CSS/color_value):

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

If you want to define or work with custom properties in JavaScript instead of directly in CSS, there is a corresponding API for this purpose.
You can read about how this works in the [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API) page.

### Referencing custom properties with `var()`

Regardless of which method you choose to define a custom property, you use them by referencing the property in a {{cssxref("var", "var()")}} function in place of a standard property value:

```css
details {
  background-color: var(--main-bg-color);
}
```

## First steps with custom properties

Let's start with some HTML that we would like to apply some styles to.
There is a `<div>` that acts as a container that includes some child elements, some with nested elements:

```html
<div class="container">
  <div class="one">
    <p>One</p>
  </div>
  <div class="two">
    <p>Two</p>
    <div class="three">
      <p>Three</p>
    </div>
  </div>
  <input class="four" placeholder="Four" />
  <textarea class="five">Five</textarea>
</div>
```

We will use the following CSS to style a few different elements based on their classes (some layout rules are not shown below so we can focus on colors).
Depending on their classes, we're giving elements `cornflowerblue` or `aquamarine` background colors:

```css hidden
/* Set fonts, borders and padding */
body {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* For each class, set some colors */
.one {
  background-color: cornflowerblue;
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: cornflowerblue;
}
.four {
  background-color: cornflowerblue;
}
.five {
  background-color: cornflowerblue;
}
```

This produces the following result:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

There's an opportunity to use custom properties to replace repetitive values across these rules.
After defining `--main-bg-color` in the `.container` scope and referencing its value in multiple places, the updated styles look like this:

```css
/* Define --main-bg-color here */
.container {
  --main-bg-color: cornflowerblue;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

## Using the :root pseudo-class

For some CSS declarations, it is possible to declare this higher in the cascade and let CSS inheritance solve this problem. For non-trivial projects, this is not always possible. By declaring a custom property on the {{cssxref(":root")}} pseudo-class and using it where needed throughout the document, a CSS author can reduce the need for repetition:

```css
/* Define --main-bg-color here */
:root {
  --main-bg-color: cornflowerblue;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

This leads to the same result as the previous example, yet allows for one canonical declaration of the desired property value (`--main-bg-color: cornflowerblue;`), which is very useful if you want to change the value across the entire project later.

## Inheritance of custom properties

A custom property defined using two dashes `--` instead of `@property` always inherits the value of its parent.
This is demonstrated in the following example:

```html live-sample___dash-custom-property-inheritance
<div class="one">
  <p>One</p>
  <div class="two">
    <p>Two</p>
    <div class="three"><p>Three</p></div>
    <div class="four"><p>Four</p></div>
  </div>
</div>
```

```css hidden live-sample___dash-custom-property-inheritance
div {
  color: black;
  font-family: sans-serif;
  width: 75%;
  height: 80%;
  margin: 4px;
  border: 2px black solid;
  display: inline-block;
}

p {
  margin: 0;
}

.one {
  height: 250px;
}

.two {
  height: 80%;
}

.three {
  height: 40%;
}

.four {
  height: 40%;
}
```

```css live-sample___dash-custom-property-inheritance
div {
  background-color: var(--box-color);
}

.two {
  --box-color: cornflowerblue;
}

.three {
  --box-color: aquamarine;
}
```

{{embedlivesample("dash-custom-property-inheritance", "100%", "280px")}}

The results of `var(--box-color)` depending on inheritance are as follows:

- `class="one"`: _invalid value_, which is the default value of a custom property defined in this way
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (inherited from its parent)

One aspect of custom properties that the examples above demonstrate is that they don't behave exactly like variables in other programming languages.
The value is computed where it is needed, not stored and reused in other places of a stylesheet.
For instance, you cannot set a property's value and expect to retrieve the value in a sibling's descendant's rule.
The property is only set for the matching selector and its descendants.

### Using `@property` to control inheritance

The `@property` at-rule lets you explicitly state whether the property inherits or not.
The following example creates a custom property using the `@property` at-rule.
Inheritance is disabled, there's a [`<color>`](/en-US/docs/Web/CSS/color_value) data type defined, and an initial value of `cornflowerblue`.

The parent element sets `--box-color` to a value of `green` and uses `--box-color` as a value for its background color.
The child element also uses `background-color: var(--box-color)`, and we would expect it to have the color `green` if inheritance was enabled (or if it was defined using the double dash syntax).

```html live-sample___at-property-inheritance
<div class="parent">
  <p>Parent element</p>
  <div class="child">
    <p>Child element with inheritance disabled for --box-color.</p>
  </div>
</div>
```

```css hidden live-sample___at-property-inheritance
div {
  color: white;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
```

```css live-sample___at-property-inheritance
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

.parent {
  --box-color: green;
  background-color: var(--box-color);
}

.child {
  width: 80%;
  height: 40%;
  background-color: var(--box-color);
}
```

Because `inherits: false;` is set in the at-rule, and a value for the `--box-color` property is not declared within the `.child` scope, the initial value of `cornflowerblue` is used instead of `green` that would have been inherited from the parent:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Custom property fallback values

You can define fallback values for custom properties using the `var()` function, and the `initial-value` of the `@property` at-rule.

> [!NOTE]
> Fallback values aren't used to fix compatibility issues for when CSS custom properties are not supported, as the fallback value won't help in this case.
> Fallbacks cover the case where the browser supports CSS custom properties and is able to use a different value if the desired variable isn't defined yet or has an invalid value.

### Defining fallbacks in the `var()` function

Using the [`var()`](/en-US/docs/Web/CSS/var) function, you can define multiple **fallback values** when the given variable is not yet defined; this can be useful when working with [Custom Elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) and [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

The first argument to the function is the name of the custom property. The second argument to the function is an optional fallback value, which is used as the substitution value when the referenced custom property is invalid.
The function accepts two parameters, assigning everything following the first comma as the second parameter. If the second parameter is invalid, the fallback will fail. For example:

```css
.one {
  /* Red if --my-var is not defined */
  color: var(--my-var, red);
}

.two {
  /* pink if --my-var and --my-background are not defined */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Invalid: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

Including a custom property as a fallback, as seen in the second example above (`var(--my-var, var(--my-background, pink))`), is the correct way to provide more than one fallback with `var()`.
You should be aware of the performance impact of this method, however, as it takes more time to parse through the nested variables.

> [!NOTE]
> The syntax of the fallback, like that of [custom properties](https://www.w3.org/TR/css-variables/#custom-property), allows commas. For example, `var(--foo, red, blue)` defines a fallback of `red, blue` — anything between the first comma and the end of the function is considered a fallback value.

### Fallbacks using the `@property` initial value

Aside from using `var()`, the `initial-value` defined in the `@property` at-rule can be used as a fallback mechanism.
In fact, we've already seen this in the [`@property` inheritance](#using_property_to_control_inheritance) section.

<!-- cSpell:ignore aqumarine -->

The following example sets an initial value of `--box-color` to `cornflowerblue` using the `@property` at-rule.
In the ruleset following the at-rule, we want to set `--box-color` to `aquamarine`, but there's a typo in the value name.
The same is true for the third `<div>` where we've used `2rem` for the custom property that's expecting a valid [`<color>` value](/en-US/docs/Web/CSS/color_value).
Both `2rem` and `aqumarine` are invalid color values, so the initial value of `cornflowerblue` is applied:

```css live-sample___at-property-initial-value
@property --box-color {
  syntax: "<color>";
  initial-value: cornflowerblue;
  inherits: false;
}

.one {
  --box-color: aquamarine;
  background-color: var(--box-color);
}

.two {
  --box-color: aqumarine;
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem;
  background-color: var(--box-color);
}
```

```css hidden live-sample___at-property-initial-value
div {
  color: white;
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
.one {
  color: black;
}
```

```html hidden live-sample___at-property-initial-value
<div class="one">
  <p>One</p>
</div>
<div class="two">
  <p>Two.</p>
</div>
<div class="three">
  <p>Three.</p>
</div>
```

{{embedlivesample("at-property-initial-value", "100%", "150px")}}

## Invalid custom properties

Each CSS property can be assigned a defined [set of values](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units).
If you try to assign a value to a property that is outside its set of valid values, it's considered _invalid_.

When the browser encounters an invalid value for a regular CSS property (for example, a value of `16px` for the {{cssxref("color")}} property), it discards the declaration, and elements are assigned the values that they would have had if the declaration did not exist.
In the following example, we see what happens when a regular CSS declaration is invalid; `color: 16px;` is discarded and the previous `color: blue` rule is applied instead:

```html live-sample___invalid-property
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-property
p {
  color: blue;
}

p {
  /* oops, not a valid color */
  color: 16px;
}
```

{{EmbedLiveSample('invalid-property', 100, 50)}}

However, when the values of custom properties are parsed, the browser doesn't yet know where they will be used, so it must consider nearly all values as _valid_.
Unfortunately, these valid values can be used, via the `var()` functional notation, in a context where they might not make sense.
Properties and custom variables can lead to invalid CSS statements, leading to the concept of _valid at computed time_.

When the browser encounters an invalid `var()` substitution, then the [initial](/en-US/docs/Web/CSS/CSS_cascade/initial_value) or [inherited](/en-US/docs/Web/CSS/CSS_cascade/Inheritance) value of the property is used.
This example is just like the last one, except we use a custom property.

The browser substitutes the value of `--text-color` in place of `var(--text-color)`, but `16px` is not a valid property value for {{cssxref("color")}}.
After substitution, the property doesn't make sense., so the browser handles this situation in two steps:

1. Check if the property {{cssxref("color")}} is inheritable. It is, but this `<p>` doesn't have any parent with the `color` property set. So we move on to the next step.
2. Set the value to its **default initial value**, which is black.

```html live-sample___invalid-custom-property
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-custom-property
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property', 100, 50)}}

For such cases, the `@property` at-rule can prevent unexpected results by allowing to define the initial value of the property:

```html live-sample___invalid-custom-property-fallbacks
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-custom-property-fallbacks
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property-fallbacks', 100, 50)}}

## Values in JavaScript

To use the values of custom properties in JavaScript, it is just like standard properties.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## See also

- [Custom property syntax](/en-US/docs/Web/CSS/--*)
- {{cssxref("@property")}} at-rule
- [`var()`](/en-US/docs/Web/CSS/var)
- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
