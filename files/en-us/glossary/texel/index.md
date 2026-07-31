---
title: Texel
slug: Glossary/Texel
page-type: glossary-definition
sidebar: glossarysidebar
---

In 3D graphics, a **texel** is a single pixel within a texture. _Textures_ are images presented on a polygon's surface within a 3D rendered image. A texture is characterized by a collection of texels, similar to how an image is characterized by a collection of pixels.

A pixel in a raster image file is a series of bits containing color data, and sometimes opacity data, which maps to display pixels on an output device such as a computer monitor. When a pixel belongs to an image used as a texture resource, it is called a 'texture pixel' or shortened to 'texel'. Instead of mapping directly to screen pixels, a texel's data is mapped to a location in the coordinate space of the 3D object being modeled. Textures can be used to convey color and other surface qualities such as depth and reflectivity. Multiple textures may be layered to create complex surface overlays.

The process of mapping texels onto the corresponding points of a polygon is called **texture mapping**, and it is one stage in rendering a 3D image for display. Because the texture's texels (the source grid) rarely line up one-to-one with the screen's pixels (the destination grid), the renderer applies **texture filtering** to smooth the result: when a single texel covers many screen pixels the effect is _magnification_, and when many texels map to a single screen pixel the effect is _minification_. The final output is a flattened 2D projection of the 3D model, with the texture 'wrapped' around its surface.

During the render pipeline, texture mapping is typically done prior to lighting the scene; however, in WebGL, lighting is performed as part of the texture mapping process.

## See also

- [Texel (graphics)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) on Wikipedia
- [Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping) on Wikipedia
- [Texture filtering](https://en.wikipedia.org/wiki/Texture_filtering) on Wikipedia
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
