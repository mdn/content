---
title: Shapes from images
slug: Web/CSS/CSS_Shapes/Shapes_From_Images
tags:
  - CSS
  - CSS Shapes
  - Guide
---
{{CSSRef}}

In this guide, we will take a look at how we can create a shape from an image file with an alpha channel or even from a CSS Gradient. This is a very flexible way to create shapes. Rather than drawing a path with a complex polygon in CSS, you can create the shape in a graphics program and then use the path created by the pixels less opaque than a threshold value.

## Creating shapes from images

To use an image for creating a shape, the image needs to have an Alpha Channel, an area that is not fully opaque. The {{cssxref("shape-image-threshold")}} property is used to set a threshold for this opacity. Pixels that are more opaque than this value will be used to calculate the area of the shape.

In the example below, there is an image of a star with a solid red area and an area that is fully transparent. The path to the image file is used as the value for the {{cssxref("shape-outside")}} property. The content now wraps around the star shape.

{{EmbedGHLiveSample("css-examples/shapes/image/simple-example.html", '100%', 800)}}

You can use {{cssxref("shape-margin")}} to move the text away from the shape, giving a margin around the created shape and the text.

{{EmbedGHLiveSample("css-examples/shapes/image/margin.html", '100%', 800)}}

## CORS compatibility

Something that you will run into when creating shapes from an image is that the image you use must be [CORS compatible](/en-US/docs/Web/HTTP/CORS). An image hosted on the same domain as your site should work, however, if your images are hosted on a different domain such as on a CDN you should ensure that they are sending the correct headers to enable them to be used for Shapes. Due to this requirement for CORS-compatible images, if you are previewing your file locally without using a local web server, your shape will not work.

### Is it a CORS issue?

DevTools can help you to identify CORS errors. In Chrome the Console will alert you to CORS problems. In Firefox if you inspect the property you will be alerted to the fact that the image could not be loaded. This should alert you to the fact that your image cannot be used as the source of a shape due to CORS.

## Setting a threshold

The {{cssxref("shape-image-threshold")}} property enables the creation of shapes from areas which are not fully transparent. If the value of `shape-image-threshold` is `0.0` (which is the initial value) then the area must be fully transparent. If the value is `1.0` then it is fully opaque. Values in between mean that you can set a semi-transparent area as the defining area.

In the example below I am using a similar image to the initial example, however, in this image the background of the star is not fully transparent, it has a 20% opacity as created in my graphics program. If I set `shape-image-threshold` to `0.3` then I see the shape, if I set it to something smaller than `0.2` I do not get the shape.

{{EmbedGHLiveSample("css-examples/shapes/image/threshold.html", '100%', 800)}}

## Using images with generated content

In the above example, I have both used the image as the value of {{cssxref("shape-outside")}} and also added it to the page. Many demos do this as it helps to show the shape we are following, however, the `shape-outside` property is not related to the image that is displayed on the page and so you do not need to display an image to use an image to create a shape.

You do need something to float, but that could be some generated content as in the below example. I am floating generated content and using a larger star image to shape my content without displaying any image on the page.

{{EmbedGHLiveSample("css-examples/shapes/image/generated-content.html", '100%', 800)}}

## Creating shapes using a gradient

Because a [CSS gradient](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) is treated as an image, you can use a gradient to generate a shape by having transparent or semi-transparent areas as part of the gradient.

The next example uses generated content. The content has been floated, giving it a background image of a linear gradient. I am using that same value as the value of {{cssxref("shape-outside")}}. The linear gradient goes from purple to transparent. By changing the value of {{cssxref("shape-image-threshold")}}, you can decide how transparent the pixels need to be that create the shape. You can play with that value in the example below to see how the diagonal line will move across the shape depending on that value.

You could also try removing the background image completely, thus using the gradient purely to create the shape and not displaying it on the page at all.

{{EmbedGHLiveSample("css-examples/shapes/image/gradient.html", '100%', 800)}}

The next example uses a radial gradient with an ellipse, once again using a transparent part of the gradient to create the shape.

{{EmbedGHLiveSample("css-examples/shapes/image/radial-gradient.html", '100%', 800)}}

You can experiment directly in these live examples to see how changing the gradient will change the path of your shape.
