---
title: Fallback alignment
slug: Glossary/Fallback_Alignment
tags:
  - CSS
  - Glossary
  - alignment
---
In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment), a fallback alignment is specified in order to deal with cases where the requested alignment cannot be fulfilled. For example, if you specify `justify-content: space-between` there must be more than one [alignment subject](/en-US/docs/Glossary/Alignment_Subject). If there is not, the fallback alignment is used. This is specified per alignment method, as detailed below.

- First baseline
  - : `start`
- Last baseline
  - : `safe end`
- Baseline
  - : `start`
- Space-between
  - : `flex-start` (start)
- Space-around
  - : `center`
- Space-evenly
  - : `center`
- Stretch
  - : `flex-start` (start)

## See also

- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)
