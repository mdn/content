---
title: Texel
slug: Glossary/Texel
page-type: glossary-definition
sidebar: glossarysidebar
---

In 3D graphics, a **texel** is a single pixel within a texture. _Textures_ are images presented on a polygon's surface within a 3D rendered image. A texture is characterized by a collection of texels, similar to how an image is characterized by a collection of pixels.

A pixel in a raster image file is a series of bits containing color data, and sometimes opacity data, which maps to display pixels on an output device such as a computer monitor. When a pixel belongs to an image used as a texture resource, it is called a 'texture pixel' or shortened to 'texel'. Instead of mapping directly to screen pixels, a texel's data is mapped to a location in the coordinate space of the 3D object being modeled. Textures can be used to convey color and other surface qualities such as depth and reflectivity. Multiple textures may be layered to create complex surface overlays.

**Texture mapping** associates positions on a model's surface, often stored as UV coordinates on polygons, with positions in a 2D texture image. During rendering, the renderer uses those coordinates to sample texels from the texture and apply the sampled values to the surface. Because the size and orientation of the textured surface on screen usually differ from the texture image's resolution, a screen pixel may sample between texels or combine multiple texels. **Texture filtering** defines how those samples are chosen or blended for texture _magnification_ or _minification_.

During the render pipeline, texture mapping is typically done prior to lighting the scene; however, in WebGL, lighting is performed as part of the texture mapping process.

## See also

- [Texel (graphics)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) on Wikipedia
- [Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping) on Wikipedia
- [Texture filtering](https://en.wikipedia.org/wiki/Texture_filtering) on Wikipedia
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
