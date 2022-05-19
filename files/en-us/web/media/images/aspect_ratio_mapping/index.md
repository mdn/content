---
title: Mapping the width and height attributes of media container elements to their
  aspect-ratio
slug: Web/Media/images/aspect_ratio_mapping
tags:
  - CSS
  - Images
  - aspect ratio
  - height
  - jank
  - responsive
  - width
  - performance
---

When the `width` and `height` attributes of an image are included on an HTML {{htmlelement("img")}} element, the  aspect ratio of the image can be calculated by the browser prior to the image being loaded. This aspect ratio is used to correct reserve the space needed to display the image preventing a page repaint, which is good for performance. 

## Jank problems when loading images

It is good practice to add `width` and `height` attributes to your HTML {{htmlelement("img")}} elements, so that when browsers first loaded the page, they can reserve a correctly-sized placeholder box in the layout for each image to appear in when it finally loads.

![Two screenshots the first without an image but with space reserved, the second showing the image loaded into the reserved space.](ar-guide.jpg)

Without the `width` and `height` attributes, no placeholder space is created, creating a noticable {{glossary('jank')}} in the page layout when the image is finally loaded. Page reflow and repaints are performance and usability issues.   

To keep images from breaking out of their containers in responsive designs when the container becomes narrower than the image, the following CSS can be used:

```css
img {
  max-width: 100%;
  height: auto;
}
```

While useful for responsive layouts, this causes jank — the above CSS overrides the width and height attribute information, meaning that if the image has not loaded, its height is set to 0. When the image loads after the page has been initially rendered to the screen, the page reflows creating a layout shift to make space for the newly determined height.

Browsers have implemented a mechanism for sizing images before the actual image is loaded!

The {{cssxref("aspect-ratio")}} property applies to replaced elements, and other related elements that accept `width` and `height` attributes.

This appears in the browser's internal UA stylesheet, similar to the following:

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

This affects any element acting as a container for complex or mixed visual media — {{htmlelement("embed")}}, {{htmlelement("iframe")}}, {{htmlelement("marquee")}}, {{htmlelement("object")}}, {{htmlelement("table")}}, and {{htmlelement("video")}}, in addition to actual images ({{htmlelement("img")}} and `<input type="image">`). When such an element has `width` and `height` attributes set on it, its aspect ratio will be calculated before load time, and be available to the browser.

When the `width`/`height` of an `<img>` element — as set using HTML attributes — is overridden using CSS using something like this:

```css
img {
  max-width: 100%;
  height: auto;
}
```

The aspect ratio is then used to calculate the height and therefore the correct size is applied to the `<img>` element, meaning that the aforementioned jank will not occur when the image loads.

The aspect ratio is only used to reserve space for the image on load. Once the image has loaded, the intrinsic aspect ratio of the loaded image rather than the aspect ratio from the attributes is use, ensuring it displays at the correct aspect ratio.

While CSS best practices from the last decade may have suggested omitting the `width` and `height` attributes of an image on an HTML {{htmlelement("img")}}, due to aspect ration mapping, including these two attributes is once again a best practic.

## See also

- [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)
- CSS {{cssxref('aspect-ratio')}} property
- [`aspect-ratio` media query](/en-US/docs/Web/CSS/@media/aspect-ratio)
- [The `<ratio>` data type](/en-US/docs/Web/CSS/ratio)