---
title: Color contrast
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
page-type: guide
---

{{AccessibilitySidebar}}

The [color contrast](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) between background and foreground content (that is, usually text) should be great enough to ensure legibility.

When designing readable interfaces for different vision capabilities, the WCAG guidelines recommend the following contrast ratios:

| Type of content                                                                 | Minimum ratio (AA rating) | Enhanced ratio (AAA rating) |
| ------------------------------------------------------------------------------- | ------------------------- | --------------------------- |
| Body text                                                                       | 4.5 : 1                   | 7 : 1                       |
| Large-scale text (120-150% larger than body text)                               | 3 : 1                     | 4.5 : 1                     |
| Active user interface components and graphical objects such as icons and graphs | 3 : 1                     | Not defined                 |

These ratios do not apply to "incidental" text, such as inactive controls, logotypes, or purely decorative text.

See the [Solution](#solution) section below for further information.

Having good color contrast on your site benefits all your users, but it is particularly beneficial to users with certain types of color blindness and other similar conditions, who experience low contrast, and have trouble differentiating between similar colors. This is because they don't see bright and dark areas as readily as those without such conditions, and therefore have trouble seeing edges, borders, and other details.

It is good to have a cool design on your website, but the design is worthless if your users can't read your content.

## Examples

Let's have a look at some simple HTML and CSS code:

```html
<div class="good">Good contrast</div>
<div class="bad">Bad contrast</div>
```

```css
div {
  /* General div styles here */
}

.good {
  background-color: #5a80a9;
}

.bad {
  background-color: #400064;
}
```

Both pieces of text have their default black color.

### Good Contrast

The "good" `<div>` has a neon blue background, which makes the text easy to read:

```html
<div class="good">Good contrast</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.good {
  background-color: #5a80a9;
}
```

{{EmbedLiveSample('Good_Contrast', '100%', '100')}}

### Bad Contrast

The "bad" `<div>` on the other hand has a very dark purple background, which makes the text much harder to read:

```html
<div class="bad">Bad contrast</div>
```

```css
div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px black;
}

.bad {
  background-color: #400064;
}
```

{{EmbedLiveSample('Bad_Contrast', '100%', '100')}}

## Solution

When choosing a color scheme for your website, choose foreground and background colors that have good contrast. Make the color contrast as good as it can be within your design constraints — ideally go for the AAA rating (see 1.4.6 below), but at least meet the AA rating (see 1.4.3 below).

If you are including non-text content such as video or animation, you should follow 1.4.11 (again, see below).

To check your contrast as you make your color choices, use a tool such as WebAIM's [Color Contrast Checker](https://webaim.org/resources/contrastchecker/).

You can also check color contrast on the fly using Firefox's Developer Tools — see the [Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) guide, and in particular the section [Check for accessibility issues](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues). Try using it on the live examples in the description section.

## Related WCAG success criteria

- [1.4.3 Minimum contrast (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

  - : The color contrast between background and foreground content should be at a minimum level to ensure legibility:

    - Text and its background should have a contrast ratio of at least 4.5:1.
    - Heading (or just larger) text should have a ratio of at least 3:1. Larger text is defined as at least 18pt, or 14pt bold.

- [1.4.6 Enhanced contrast (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced)

  - : This follows, and builds on, criterion 1.4.3.

    - Text and its background should have a contrast ratio of at least 7:1.
    - Heading (or just larger) text should have a ratio of at least 4.5:1.

- [1.4.11 Non-Text Contrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast) (added in 2.1)
  - : There should be a minimum color contrast ratio of 3 to 1 for user interface components and graphical objects.

## See also

- [Color and color contrast](/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
- [Multiple labels](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels)
- [Understanding Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
