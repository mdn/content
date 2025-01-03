---
title: Use of color
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color
page-type: guide
---

{{AccessibilitySidebar}}

While [color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) is often primarily an aesthetic choice, the _use of color_ on a website pertains to _using color to communicate information_. WCAG guideline 1.4.1 on the use of color requires that "color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element."

## Solution

Use another factor in addition to color to convey information. For example, to indicate form validation errors, you can change the labels of the relevant fields by another font attribute as well as by color. Icons and symbols should differ by shape as well as by color.

To accommodate users with color vision disorders ("color blindness"), be careful when using a "stoplight" color metaphor, with green indicating "good" values and red indicating "bad" values. Users with red-green color blindness have trouble distinguishing red and green, and so may not be able to tell these values apart. Using an additional factor to signal "good" vs. "bad" is necessary. Avoid pure red and green in this situation; a reddish-orange and a bluish-green are distinguishable by color blind users, while still conveying the cultural "good" and "bad" meanings to users with normal color vision. [Color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) can be helpful in this context, as well, if one color is darker or lighter than the other.

## Related WCAG success criteria

- [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color)
  - : Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

## See also

- [Understanding Success Criterion 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
- [Color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Color and color contrast](/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast) in the Accessibility tutorials
