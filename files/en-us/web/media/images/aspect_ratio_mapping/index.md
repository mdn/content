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

When the `width` and `height` attributes of an image are included on an HTML {{htmlelement("img")}} element, the aspect ratio of the image can be calculated by the browser prior to the image being loaded. This aspect ratio is used to reserve the space needed to display the image, reducing or even preventing a layout shift when the image is downloaded and painted to the screen. Reducing layout shift is a major component of good user experience and web performance.

## Jank problems when loading images

Browsers begin rendering content as HTML is parsed, often before all assets, including images, are downloaded. It is a good practice to add `width` and `height` attributes to your HTML {{htmlelement("img")}} elements, so that when browsers first render the page, they can reserve a correctly-sized placeholder box for each image to appear in when the images are loaded.

![Two screenshots the first without an image but with space reserved, the second showing the image loaded into the reserved space.](ar-guide.jpg)

Without the `width` and `height` attributes, no placeholder space is created, creating a noticeable {{glossary('jank')}}, or layout shift, in the page when the image loads after the page is rendered. Page reflow and repaints are performance and usability issues.

In responsive designs, when a container is narrower than an image, the following CSS is generally used to keep images from breaking out of their containers:

```css
img {
  max-width: 100%;
  height: auto;
}
```

While useful for responsive layouts, this causes jank when width and height information are not included, as if no height information is present when the `<img>` element is parsed but before the image has loaded, this CSS effectively has set the height to 0. When the image loads after the page has been initially rendered to the screen, the page reflows and repaints creating a layout shift as it creates space for the newly determined height.

Browsers have a mechanism for sizing images before the actual image is loaded. When an `<img>`, `<video>`, or `<input type="button">` element has `width` and `height` attributes set on it, its aspect ratio is calculated before load time, and is available to the browser, using the dimensions provided.

The aspect ratio is then used to calculate the height and therefore the correct size is applied to the `<img>` element, meaning that the aforementioned jank will not occur, or be minimal if the listed dimensions are not fully accurate, when the image loads.

The aspect ratio is used to reserve space only on the image load. Once the image has loaded, the intrinsic aspect ratio of the loaded image, rather than the aspect ratio from the attributes, is used. This ensures that it displays at the correct aspect ratio even if the attribute dimensions are not accurate.

While developer best practices from the last decade may have recommended omitting the `width` and `height` attributes of an image on an HTML {{htmlelement("img")}}, due to aspect ratio mapping, including these two attributes is considered a developer best practice.

## See also

- [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)
- CSS {{cssxref('aspect-ratio')}} property
- [`aspect-ratio` media query](/en-US/docs/Web/CSS/@media/aspect-ratio)
- [The `<ratio>` data type](/en-US/docs/Web/CSS/ratio)
