---
title: Texel
slug: Glossary/Texel
tags:
  - 3D
  - Drawing
  - Glossary
  - Graphics
  - Texel
  - Texture
---
A **Texel** is a single-pixel within a texture map, which is an image that gets used (in whole or in part) as the image presented on a polygon's surface within a 3D rendered image. It is not to be confused with pixel which is the unit of screen space. This is one of the main differences between Texel’s and pixels, pixels are image data. Texel components are made up of subjective data, therefore they can be an image as well as a depth map.

The process of mapping the appropriate Texel’s to their corresponding points on a polygon is called **texture mapping**, which is a stage of the process of rendering a 3D image for display. Texture mapping is typically done prior to lighting the scene; however, in WebGL, lighting is performed as part of the texture mapping process.

Textures are characterised by collections of Texel’s, as how images are characterised by collections of pixels. When texture mapping occurs the renderer maps Texel’s to the appropriate pixels.

## See also

- {{interwiki("wikipedia", "Texel (graphics)")}} on Wikipedia
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
