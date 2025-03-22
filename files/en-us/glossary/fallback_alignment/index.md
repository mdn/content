---
title: Fallback alignment
slug: Glossary/Fallback_Alignment
page-type: glossary-definition
---

{{GlossarySidebar}}

In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_box_alignment), a fallback alignment is specified in order to deal with cases where the requested alignment cannot be fulfilled. For example, if you specify `justify-content: space-between` there must be more than one {{Glossary("alignment subject")}}. If there is not, the fallback alignment is used. This is specified per alignment method, as detailed below.

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

- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_box_alignment)
