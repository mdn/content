---
title: Texel
slug: Glossary/Texel
page-type: glossary-definition
sidebar: glossarysidebar
---

In 3D graphics, a **texel** is a single pixel within a texture. _Textures_ are images presented on a polygon's surface within a 3D rendered image. A texture is characterized by a collection of texels, similar to how an image is characterized by a collection of pixels.

A pixel in a raster image file is a series of bits containing color data, and sometimes opacity data, which maps to display pixels on an output device such as a computer monitor. When a pixel belongs to an image used as a texture resource, it is called a 'texture pixel' or shortened to 'texel'. Instead of mapping directly to screen pixels, a texel's data is mapped to a location in the coordinate space of the 3D object being modeled. Textures can be used to convey color and other surface qualities such as depth and reflectivity. Multiple textures may be layered to create complex surface overlays.

The process of assigning positions in a 2D texture image to points on a polygon so the renderer can sample texels for the model's surface is called **texture mapping**. Texture mapping is a stage of the process of rendering a 3D image for display. The texture image's texel grid and the output display's pixel grid usually do not line up one-to-one. When the renderer samples the texture between texels or maps multiple texels to one screen pixel, it applies **texture filtering** to smooth the result (texture _magnification_ or _minification_). The final output of the rendering process is a flattened 2D projection of the 3D model, where the texture has been 'wrapped' around the model.

During the render pipeline, texture mapping is typically done prior to lighting the scene; however, in WebGL, lighting is performed as part of the texture mapping process.

## See also

- [Texel (graphics)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) on Wikipedia
- [Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping) on Wikipedia
- [Texture filtering](https://en.wikipedia.org/wiki/Texture_filtering) on Wikipedia
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
