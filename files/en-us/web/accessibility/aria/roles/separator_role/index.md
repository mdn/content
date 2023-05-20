---
title: "ARIA: separator role"
slug: Web/Accessibility/ARIA/Roles/separator_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#separator
  - https://w3c.github.io/aria-practices/#range_related_properties
---

The `separator` role indicates the element is a divider that separates and distinguishes sections of content or groups of menuitems. The implicit ARIA role the native thematic break {{HTMLElement('hr')}} element is `separator`.

## Description

A separator is a divider that separates and distinguishes sections of content or groups of menuitems. There are two types of separators: a static structure that provides a visible boundary, identical to the HTML {{HTMLElement('hr')}} element, and a focusable, moveable widget.

Elements with the role `separator` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `horizontal`.

### Non-focusable separator

A non-focusable separator is a static structural element that can be used to help visually divide two groups of menu items in a menu or to provide a horizontal rule between two sections of a page. Thematic breaks that aren't focusable can still be perceivable by a screen reader user when using a reading cursor that does not depend on focus.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

In the example, an image creates a visual separator between two blog posts. The author could have used a semantic thematic break {{HTMLElement('hr')}} element and styled it with CSS to make it blue (and not have to change the image when they change the blog's theme), or the author could have encompassed each post in the semantic {{HTMLElement('article')}} element, or both.

```html
<section role="feed">
  <article>
    <h2>My first blog post</h2>
    …
  </article>
  <hr />
  <article>
    <h2>Two years later, my second post</h2>
    …
  </article>
</section>
```

```css
[role="feed"] > hr {
  height: 3px;
  background-color: blue;
}
```

An accessible name is not needed.

### Focusable separator

The separator role can be used to identify the element as a visual separator between groups of items within a menu, such as groups of `menuitemradio` or `menuitemcheckbox` elements.

If the separator is focusable, providing a visible boundary between two sections of content and enabling the user to change the relative size of the sections it separates by changing its position, the value of [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) must be set to a number reflecting the current position of the separator and the value must be updated when it changes. The [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) and [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) should also be included if they aren't set to the default values of 0 and 100, respectively.

An accessible name, with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) should be included if there is more than one focusable separator.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `separator`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `separator` element as it is a role that does not support semantic children.

For example, consider the following `separator` element, which contains a heading.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Because descendants of `separator` are presentational, the following code is equivalent:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="separator">Title of my separator</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) (default is horizontal for separator)

  - : By default, the divider for `separator` roles is assumed to be horizontal. The value can be included and set to horizontal, undefined (the default for other roles unless otherwise specified), or vertical.

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)

  - : If the separator is focusable and has a known value, the `aria-valuenow` defines the current value. If not focusable or the value is unknown, do not include this attribute.

- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) (default is 0)

  - : If the separator is focusable, and the minimum value is not 0, include the minimum value with `aria-valuemin`. If the

- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) (default is 100)

  - : If the separator is focusable, and the maximum value is not 100, include `aria-valuemax` with a value equal to or larger than `aria-valuemin`.

- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : If the separator is focusable, and the `aria-valuenow` is not optimal in providing the user with usable information, included `aria-valuetext` content will be read instead of the `aria-valuenow` value.

<!--
### Keyboard interactions

### Required JavaScript features

## Examples

## Accessibility Concerns

## Best Practices

### Prefer HTML -->

## Specifications

{{Specifications}}

## See Also

- Thematic break HTML {{HTMLElement('hr')}} element
- [Example separator in a menubar](https://w3c.github.io/aria-practices/examples/menubar/menubar-editor.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
