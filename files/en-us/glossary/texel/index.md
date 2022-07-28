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
In 3D graphics, a **Texel** is a single pixel within a texture.  **Textures** are images that are presented on a polygon's surface within a 3D rendered image.  A texture is characterized by a collection of texels, as how an image is characterized by a collection of pixels. 

It is not to be confused with pixel which is the unit of screen space. This is one of the main differences between texels and pixels, pixels are image data. Texel components are made up of subjective data, therefore they can be an image as well as a depth map.

The process of mapping the appropriate texels to their corresponding points on a polygon is called **texture mapping**, which is a stage of the process of rendering a 3D image for display. Texture mapping is typically done prior to lighting the scene; however, in WebGL, lighting is performed as part of the texture mapping process.

When texture mapping occurs the renderer maps texels to the appropriate pixels.

## See also

- {{interwiki("wikipedia", "Texel (graphics)")}} on Wikipedia
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
