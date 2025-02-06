---
title: Style origin
slug: Glossary/Style_origin
page-type: glossary-definition
---

{{GlossarySidebar}}

In {{Glossary("CSS")}}, there are three categories of sources for style changes. These categories are called **style origins**. They are the **user agent origin**, **user origin**, and the **author origin**.

- User-agent origin
  - : The user agent origin is the style origin comprised of the default styles used by the user's web browser. If no other styles are applied to content, the user agent origin's styles are used while rendering elements.
- User origin
  - : The user origin is the style origin containing any CSS that the user of the web browser has added. These may be from adding styles using a developer tool or from a browser extension that automatically applies custom styles to content, such as [Stylus](https://add0n.com/stylus.html) or [Stylish](https://userstyles.org/).
- Author origin
  - : The author origin is the style origin which contains all of the styles which are part of the document, whether embedded within the {{Glossary("HTML")}} or loaded from an external stylesheet file.

The style origins are used to determine where to stop rolling back (or backtracking through) the cascade of styles that have been applied to an element when removing styles, such as when using the {{cssxref("unset")}} or {{cssxref("revert")}} keywords.

## See also

- [CSS cascading and inheritance: Cascading Origins](https://drafts.csswg.org/css-cascade-4/#cascading-origins)
