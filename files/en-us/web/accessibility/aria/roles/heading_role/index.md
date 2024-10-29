---
title: "ARIA: heading role"
slug: Web/Accessibility/ARIA/Roles/heading_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#heading
  - https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/#when_to_use_structural_roles
---

{{AccessibilitySidebar}}

The `heading` role defines this element as a heading to a page or section, with the [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) attribute providing for more structure.

## Description

The heading role indicates to assistive technologies that this element should be treated like a heading. Screen readers would read the text and indicate that it is formatted like a heading. In addition, the level tells assistive technologies which part of the page structure this heading represents. A level 1 heading, indicated with `aria-level="1"`, usually indicates the main heading of a page, a level 2 heading, defined with `aria-level="2"` the first subsection, a level 3 is a subsection of that, and so on.

```html
<div role="heading" aria-level="1">This is a main page heading</div>
```

This defines the text in the `<div>` to be the main heading of the page, indicated by being level 1 via the `aria-level` attribute. Opt for using the {{HTMLElement("Heading_Elements", "h1")}} (through {{HTMLElement("Heading_Elements", "h6")}}) element instead.

```html
<h1>This is a main page heading</h1>
```

### Associated WAI-ARIA roles, states, and properties

- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)
  - : The `aria-level` attribute specifies the heading level in the document structure. If no level is present, a value of 2 is the default.

### Keyboard interactions

This role does not require any special keyboard navigation. As with any heading, giving it an ID ensures it can be referenced from anchor links, making it accessible via the keyboard.

### Required JavaScript features

- Required event handlers
  - : None.
- Changing attribute values
  - : Usually not required, unless dynamically inserting content. In that case, the newly-added headings need `aria-level` attributes whose values are consistent with the rest of the document structure.

> [!NOTE]
> Instead of using a `<div>` or `<span>` with a `heading` role and `aria-level`, consider using a native {{HTMLElement("Heading_Elements", "h1")}} through {{HTMLElement("Heading_Elements", "h6")}} elements instead to indicate that this text is a heading, and what part of the structure it represents.

## Examples

The following shows a typical page structure.

```html
<div id="container">
  <div role="heading" aria-level="1">The main page heading</div>
  <p>This article is about showing a page structure.</p>
  <div role="heading" aria-level="2">Introduction</div>
  <p>An introductory text.</p>
  <div role="heading" aria-level="2">Chapter 1</div>
  <p>Text</p>
  <div role="heading" aria-level="3">Chapter 1.1</div>
  <p>More text in a sub section.</p>
</div>
```

However, instead, you should do:

```html
<div id="container">
  <h1>The main page heading</h1>
  <p>This article is about showing a page structure.</p>
  <h2>Introduction</h2>
  <p>An introductory text.</p>
  <h2>Chapter 1</h2>
  <p>Text</p>
  <h3>Chapter 1.1</h3>
  <p>More text in a sub section.</p>
</div>
```

## Accessibility concerns

> [!WARNING]
> Using [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) will hide the content of your heading from assistive technologies, reading the label instead of the heading.

If you must use the `heading` role and [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) attribute, do not go over level 6 so that you are consistent with HTML. Although theoretically you can go higher, and some screen readers may support it, the results can be unpredictable with other browser and screen reader combinations.

## Best practices

The best way to use this role is to **not use it at all**, and instead use the native heading tags {{HTMLElement("Heading_Elements", "h1")}} through {{HTMLElement("Heading_Elements", "h6")}} as shown in the example above. The `heading` role and `aria-level` attribute should only be used to retrofit accessibility on legacy code that you cannot make major changes to.

Instead of using the ARIA `heading` role, use the semantic HTML element:

| HTML Element                              | `heading` role                        |
| ----------------------------------------- | ------------------------------------- |
| {{HTMLElement("Heading_Elements", "h1")}} | `<div role="heading" aria-level="1">` |
| {{HTMLElement("Heading_Elements", "h2")}} | `<div role="heading" aria-level="2">` |
| {{HTMLElement("Heading_Elements", "h3")}} | `<div role="heading" aria-level="3">` |
| {{HTMLElement("Heading_Elements", "h4")}} | `<div role="heading" aria-level="4">` |
| {{HTMLElement("Heading_Elements", "h5")}} | `<div role="heading" aria-level="5">` |
| {{HTMLElement("Heading_Elements", "h6")}} | `<div role="heading" aria-level="6">` |

### Added benefits

None.

## Specifications

{{Specifications}}

## Precedence order

The heading role overrides the native semantic meaning of the element it is being used for. The `aria-level` attribute, in addition, determines what level of heading is being exposed.

## See also

- [`<h1>` through `<h6>`: The HTML Section Heading elements](/en-US/docs/Web/HTML/Element/Heading_Elements)
