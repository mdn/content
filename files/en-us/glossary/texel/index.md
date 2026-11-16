---
title: Texel
slug: Glossary/Texel
page-type: glossary-definition
sidebar: glossarysidebar
---

In 3D graphics, a **texel** (short for "texture pixel") is an individual element of a texture. A texture consists of a grid of texels, much as a raster image consists of a grid of [pixels](/en-US/docs/Glossary/Pixel). Textures are rendered onto 3D surfaces to convey qualities such as color, depth, and reflectivity. Multiple textures may be layered to create complex surface overlays.

**Texture mapping** associates points on a model's surface with positions in a texture, commonly through texture coordinates (a.k.a. UV coordinates) assigned to polygon vertices. During rendering, these coordinates are interpolated across the polygon and used to sample the texture. A fragment's sampling location may fall between texel centers, or its footprint in texture space may cover multiple texels. **Texture filtering** determines how texel values are selected or combined during texture _magnification_ or _minification_.

In programmable graphics APIs such as [WebGL](/en-US/docs/Glossary/WebGL), texture sampling and lighting calculations are controlled by shaders and may be performed together in the same shader.

## See also

- [Texel (graphics)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) on Wikipedia
- [Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping) on Wikipedia
- [Texture filtering](https://en.wikipedia.org/wiki/Texture_filtering) on Wikipedia
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
