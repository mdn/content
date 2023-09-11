---
title: Accessibility and Spacial Patterns
slug: Web/Accessibility/Accessibility_and_Spacial_Patterns
page-type: guide
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("Web/Accessibility", 1)}}
</section>

### Spatial Localization

NASA conducted research on the perception of color, and found that luminance contrast mattered greatly as to how colors are perceived. The two images below are from NASA research, specifically, from the article, "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"

![Comparison of the stability of the spatial localization of yellow vs. red. Both are roughly isoluminant with their backgrounds. The misalignment and gap between the chromatic bars and black bars is physically the same for the yellow and red but much less visually obvious for the yellow.](yellow_edge_3.gif) ![Comparison of the stability of the spatial localization of yellow vs. red. Both are roughly isoluminant with their backgrounds. The misalignment and gap between the chromatic bars and black bars is physically the same for the yellow and red but much less visually obvious for the yellow.](yellow_edge_4.gif)

"_**Spatial Localization.** Symbols which have the same luminance as their background are perceptually less securely located in space and time than are symbols with higher luminance contrast. They tend to "float" visually or be "captured" by adjacent symbols with high luminance-contrast. The phenomenon seems to be especially problematic for symbol/background combinations that differ only in the blue channel._"

### Distance between stripes

Photosensitive seizures may be caused by static images as well as animation. The mechanism for this is poorly understood, but is believed to be linked to "gamma oscillations" set up in the brain. These oscillations in the brain are a different kind of response than other kinds of neurological responses believed to cause photosensitive seizures.

Stripes and patterns are typical of the kinds of images that create problems, and stripes have been studied most closely. There's the potential for causing harm if there are more than five light-dark pairs of stripes in any orientation. They can be parallel, radial, curved or straight, and may be formed by rows of repeating elements.

In 2005, Arnold Wilkins, John Emmett, and Graham Harding evaluated the guidelines for characterizing patterned images that could precipitate seizures. They revised the guidelines to their fundamental core, and came up with a surprisingly simple, but powerful [test](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x). which they published in the paper, **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)**

> **Note:** The steps necessary to evaluate material reduce to the following:
>
> Look at the screen:
>
> - Are there more than five stripes?
> - If so, do they last longer than 0.5 s?
> - If so, does the brightness exceed the stated limit?
> - If so, categorize the motion of the pattern.
> - Are the guidelines contravened?
>
> If so, reduce brightness.

### Text and padding

WCAG standards for contrast perception do not take into account the effect of padding. For example, blue text on a gray background is easier to perceive if it is surrounded "locally" by black than by white. There is such a thing as "local" adaptation to colors. The bottom line: padding matters.

### Math

Spatial reasoning affects Math learning; consequently, spatial relationships in how math is presented affects cognition. The web developer can do something about this in the manner in which they display math. Animation figures strongly in this arena. For example, "how" an object looks when it is rotated, from different angles, how they look sliced, and how they relate to each other in space all make a difference in an ability to understand Math in spatial terms.

### Braille

Modern technology enables non-experts to print Braille. Adobe Illustrator, for example, allows one to Typeset ADA Braille for printing out.

The ability to represent spatial patterns accurate to those who are blind is critical for accessibility. For example, knowing Braille is not enough. The Braille dots have to be spatially apart from one another so as to be readable in a "human" way. The human touch does distinguish with ease braille dots that are too close or too far apart from one another.

Space has to surround the braille character. A user of braille does not lay a finger on "top" of a braille character, the user has to move her finger over the character, in the way that a sighted person must move her eyes across text written on a page.

The nature of space can change depending upon what MIME type is being used, and its version. For example, borders on SVG can extend both inward and outward from its dimensions, or for newer versions of SVG, entirely outward from it, thus reducing the space around the SVG to enable perception.

## See Also

### MDN

- [Accessibility: What users can do to browse more safely](/en-US/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [Web accessibility for seizures and physical reactions](/en-US/docs/Web/Accessibility/Seizure_disorders)
- [Web Accessibility: Understanding Colors and Luminance](/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

### Braille

- [Part 3: A Step-by-Step Guide to Typesetting ADA Braille Correctly in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Spatial Math in BrailleBlaster (4 of 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Government Literature

- [NASA: Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)

### Math

- [Spatial Reasoning: Why Math Talk is About More Than Numbers](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-about-more-numbers)

### Scientific Literature

- [Color constancy in context: Roles for local adaptation and levels of reference](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma oscillations and photosensitive epilepsy](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett, and Graham Harding

#### Contributors

Heartfelt thanks to Jim Allan of the [Diagram Center](http://diagramcenter.org/) for his discussions on the topic of alternative means of education.
