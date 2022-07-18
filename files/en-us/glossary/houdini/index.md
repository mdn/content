---
title: Houdini
slug: Glossary/Houdini
tags:
  - CSS
  - CSS API
  - Glossary
  - Houdini
  - Reference
---
Houdini is a set of low level APIs that give developers the power to extend CSS, providing the ability to hook into the styling and layout process of a browser's rendering engine. Houdini gives developers access to the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) ([CSSOM](/en-US/docs/Glossary/CSSOM)), enabling developers to write code the browser can parse as CSS.

The benefit of Houdini is that developers can create CSS features without waiting for web standards specifications to define them and without waiting for every browser to fully implement the features.

While many of the features Houdini enables can be created with JavaScript, interacting directly with the CSSOM before JavaScript is enabled provides for faster parse times. Browsers create the CSSOM —  including layout, paint, and composite processes — before applying any style updates found in scripts: layout, paint, and composite processes are repeated for updated JavaScript styles to be implemented. Houdini code doesn't wait for that first rendering cycle to be complete. Rather, it is included in that first cycle, creating renderable, understandable styles.

## See also

- [Houdini](/en-US/docs/Web/Guide/Houdini)
- [CSSOM](/en-US/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API)
