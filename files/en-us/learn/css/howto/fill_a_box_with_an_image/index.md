---
title: How to fill a box with an image without distorting it
slug: Learn/CSS/Howto/Fill_a_box_with_an_image
page-type: learn-faq
---

{{LearnSidebar}}

In this guide you can learn a technique for causing an HTML image to completely fill a box.

## Using object-fit

When you add an image to a page using the HTML {{htmlelement("img")}} element, the image will maintain the size and {{glossary("aspect ratio")}} of the image file, or that of any HTML [`width`](/en-US/docs/Web/HTML/Element/img#width) or [`height`](/en-US/docs/Web/HTML/Element/img#height) attributes. Sometimes you would like the image to completely fill the box that you have placed it in. In that case you first need to decide what happens if the image is the wrong aspect ratio for the container.

1. The image should completely fill the box, retaining aspect ratio, and cropping any excess on the side that is too big to fit.
2. The image should fit inside the box, with the background showing through as bars on the too-small side.
3. The image should fill the box and stretch, which may mean it displays at the wrong aspect ratio.

The {{cssxref("object-fit")}} property makes each of these approaches possible. In the example below you can see how different values of `object-fit` work when using the same image. Select the approach that works best for your design.

{{EmbedGHLiveSample("css-examples/howto/object-fit.html", '100%', 800)}}
