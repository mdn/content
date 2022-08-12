---
title: WAI-ARIA Roles
slug: Web/Accessibility/ARIA/Roles
tags:
  - ARIA
  - ARIA Roles
  - Accessibility
  - Reference
  - Roles
---
ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with object in a way that is consistent with user expectations of that type of object. <abbr>ARIA</abbr> roles can be used to describe elements that don't natively exist in HTML or exist but don't yet have full browser support.

By default, many semantic elements in HTML have a role; for example, `<input type="radio">` has the "radio" role. Non-semantic elements in HTML do not have a role; `<div>` and `<span>` without added semantics return *null*. The `role` attribute can provide semantics.

ARIA roles are added to HTML elements using `role="`*role type*`"`, where *role type* is the name of a role in the ARIA specification.  Some roles require the inclusion of associated ARIA states or properties; others are only valid in association with other roles.

For example, `<ul role="tabpanel">` will be announced as a 'tab panel' by screen readers. However, if the tab panel doesn't have nested tabs, the element with the tabpanel role is not in fact a tab panel and accessibility has actually been negatively impacted.

The [ARIA states and properties](/en-US/docs/Web/Accessibility/ARIA/Attributes) associated with each role are included in the role's pages, with each attribute also having a dedicated page.

## ARIA role types

There are 6 categories of ARIA roles:

### 1. Document structure roles

Document Structure roles are used to provide a structural description for a section of content. Most of these roles should no longer be used as browsers now support semantic HTML element with the same meaning. The roles without HTML equivalents, such as presentation, toolbar and tooltip roles, provide information on the document structure to assistive technologies such as screen readers as equivalent native HTML tags are not available.

- [toolbar](/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [tooltip](/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [feed](/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [math](/en-US/docs/Web/Accessibility/ARIA/Roles/math_role)
- [presentation](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [none](/en-US/docs/Web/Accessibility/ARIA/Roles/none_role)
- [note](/en-US/docs/Web/Accessibility/ARIA/Roles/note_role)

For most document structure roles, semantic HTML equivalent elements are available and supported. Avoid using:

- [application](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
- [article](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role) (use {{HTMLElement('article')}})
- [cell](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) (use {{HTMLElement('td')}})
- [columnheader](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) (use `{{HTMLElement('th', '&lt;th scope="col">')}}`)
- [definition](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role) (use {{HTMLElement('dfn')}}
- [directory](/en-US/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [document](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role)
- [figure](/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role) (use {{HTMLElement('figure')}} instead)
- [group](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
- [heading](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) (use {{HTMLElement('h1')}} thru {{HTMLElement('h6')}})
- [img](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role) (use {{HTMLElement('img')}} or {{HTMLElement('picture')}} instead)
- [list](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) (use either {{HTMLElement('ul')}} or {{HTMLElement('ol')}} instead)
- [listitem](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) (use {{HTMLElement('li')}} instead)
- [meter](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)  (use {{HTMLElement('meter')}} instead)
- [row](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) (use the {{HTMLElement('tr')}} with {{HTMLElement('table')}})
- [rowgroup](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) (use {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} and {{HTMLElement('tbody')}})
- [rowheader](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) (use `{{HTMLElement('th','&lt;th scope="row">')}}`)
- [separator](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (use {{HTMLElement('hr')}} if it doesn't have focus)
- [table](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) (use {{HTMLElement('table')}})
- [term](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role) (use {{HTMLElement('dfn')}})

These and [`associationlist`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`associationlistitemkey`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`associationlistitemvalue`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`blockquote`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`caption`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`code`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`deletion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`emphasis`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`insertion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`paragraph`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`strong`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`subscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), [`superscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles), and [`time`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles) are included for completeness, but in most cases are rarely, if ever, useful.

### 2. Widget roles

The various widget role are used to define common interactive patterns. Similar to the document structure roles, some of these roles duplicate the semantics of native HTML elements that are well supported, and should not be used. The difference between the two lists is that, generally, the widget roles require JavaScript interaction and the document structure roles don't necessarily.

- [scrollbar](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [searchbox](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [separator](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (when focusable)
- [slider](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [spinbutton](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [switch](/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [tab](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [tabpanel](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [treeitem](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

Avoid using [button](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role), [checkbox](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role), [gridcell](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [link](/en-US/docs/Web/Accessibility/ARIA/Roles/link_role), [menuitem](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [menuitemcheckbox](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), [menuitemradio](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), [option](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role), [progressbar](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role), [radio](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role), and [textbox](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role), which we've included for completeness. For most, semantic equivalents with accessible interactivity are available and supported. See the individual role documentation for more information.

#### Composite widget roles

- [combobox](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [menu](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [menubar](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [tablist](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [tree](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [treegrid](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

Avoid using [grid](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [listbox](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), and [radiogroup](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role), which we've included for completeness. See the individual role documentation for more information.

Note that there is also a widget role (`role="widget"`), which is an abstract role and not in the widget role category.

### 3. Landmark roles

Landmark roles provide a way to identify the organization and structure of a web page. By classifying and labeling sections of a page, structural information conveyed visually through layout is represented programmatically. Screen readers use landmark roles to provide keyboard navigation to important sections of a page. Use these sparingly. Too many landmark roles create "noise" in screen readers, making it difficult to understand the overall layout of the page.

- [banner](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role) (document {{HTMLElement('header')}})
- [complementary](/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) ({{HTMLElement('aside')}})
- [contentinfo](/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) (document {{HTMLElement('footer')}})
- [form](/en-US/docs/Web/Accessibility/ARIA/Roles/form_role) ({{HTMLElement('form')}})
- [main](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) ({{HTMLElement('main')}})
- [navigation](/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) ({{HTMLElement('nav')}})
- [region](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) ({{HTMLElement('section')}})
- [search](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)

### 4. Live region roles

Live Region roles are used to define elements with content that will be dynamically changed. Sighted users can see dynamic changes when they are visually noticeable. These roles help low vision and blind users know if content has been updated. Assistive technologies, like screen readers, can be made to announce dynamic content changes:

- [alert](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [log](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [marquee](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [status](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [timer](/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role)

### 5. Window roles

Window roles define sub-windows to the main document window, within the same window, such as pop up modal dialogs:

- [alertdialog](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [dialog](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### 6. Abstract roles

Abstract roles are only intended for use by browsers to help organize and streamline a document. They should not be used by developers writing HTML markup. Doing so will not result in any meaningful information being conveyed to assistive technologies or to users.

Avoid using [command](/en-US/docs/Web/Accessibility/ARIA/Roles/command_role), [composite](/en-US/docs/Web/Accessibility/ARIA/Roles/composite_role), [input](/en-US/docs/Web/Accessibility/ARIA/Roles/input_role), [landmark](/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role), [range](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role), [roletype](/en-US/docs/Web/Accessibility/ARIA/Roles/roletype_role), [section](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role), [sectionhead](/en-US/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), [select](/en-US/docs/Web/Accessibility/ARIA/Roles/select_role), [structure](/en-US/docs/Web/Accessibility/ARIA/Roles/structure_role), [widget](/en-US/docs/Web/Accessibility/ARIA/Roles/widget_role),and [window](/en-US/docs/Web/Accessibility/ARIA/Roles/window_role).

> **Note:** Don't use abstract roles in your sites and applications. They are for use by browsers. They are included for reference only.

> **Warning:** "Abstract roles are used for the ontology. Authors **MUST NOT** use abstract roles in content." - The <abbr>WAI-ARIA</abbr> specification

## Roles defined on MDN

The following are the reference pages covering the WAI-ARIA roles discussed on <abbr>MDN</abbr>.

{{SubpagesWithSummaries}}

## See also

- [Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [ARIA states and properties](/en-US/docs/Web/Accessibility/ARIA/Attributes)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
