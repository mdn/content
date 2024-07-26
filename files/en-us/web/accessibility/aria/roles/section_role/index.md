---
title: "ARIA: section role"
slug: Web/Accessibility/ARIA/Roles/section_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#section
---

{{AccessibilitySidebar}}

The **`section` role**, an abstract role, is a superclass role for renderable structural containment components.

> [!NOTE]
> The `section` role is an [abstract role](/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). It is included here for completeness of documentation. It **should not be used** by web authors.

## Description

The structural `section` role is an abstract role for categorizing all the section subclass roles. The role must not be used. Some subclasses, like [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role),
[`note`](/en-US/docs/Web/Accessibility/ARIA/Roles/note_role), and [`tooltip`](/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role) are useful, and can be used to add semantics when no semantic HTML elements quite fit the purpose of a component. Others, like [`code`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`figure`](/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role), and [`subscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), aren't necessary, as there are HTML element equivalents. In this case, {{HTMLElement('code')}} {{HTMLElement('figure')}} and {{HTMLElement('sub')}}, respectively.

## Best Practices

Do not use.

## Specifications

{{Specifications}}

## See also

- [ARIA: `structure` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structure_role)
- [ARIA: `alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `associationlist` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `associationlistitemkey` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `associationlistitemvalue` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `blockquote` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `caption` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `cell` role](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [ARIA: `code` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `definition` role](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role)
- [ARIA: `deletion` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `emphasis` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `figure` role](/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role)
- [ARIA: `group` role](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
- [ARIA: `img` role](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role)
- [ARIA: `insertion` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `landmark` role](/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `mark` role](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [ARIA: `marquee` role](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `math` role](/en-US/docs/Web/Accessibility/ARIA/Roles/math_role)
- [ARIA: `note` role](/en-US/docs/Web/Accessibility/ARIA/Roles/note_role)
- [ARIA: `paragraph` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `status` role](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA: `strong` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `subscript` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `suggestion` role](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [ARIA: `superscript` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `table` role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [ARIA: `tabpanel` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [ARIA: `term` role](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role)
- [ARIA: `time` role](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [ARIA: `tooltip` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
