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
This page lists reference pages covering all the WAI-ARIA roles discussed on MDN. For a full list of roles, see [Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with object in a way that is consistent with user expectations of that type of object. ARIA roles can be used to describe elements that don't natively exist in HTML or exist but don't yet have full browser support. By default, semantic elements have a role; `<p>` has the "paragraph" role, `<input type="radio">` has the "radio" role. Non-semantic elements do not have a role; `<div>` and `<span>` without added semantics return *null*. The `role` attribute can provide semantics.

ARIA roles are HTML attributes. They are added to elements using role="*role type*", where *role type* is the name of a role in the ARIA specification.  Some roles require the inclusion of associated ARIA states or properties; others are only valid in association with other roles.

For example, `<ul role="tabpanel">` will be announced as a 'tab panel' by screen readers. However, if the tab panel doesn't have nested tabs, the element with the tabpanel role is not in fact a tab panel and accessibility has actually been negatively impacted. 

The states and properties associated with each role are included in the role's pages, listed below.


## ARIA role types

There are 6 categories of ARIA roles:


### 1. Document structure roles

Document Structure roles are used to provide a structural description for a section of content. Most of these roles should no longer be used as browsers now support semantic HTML element with the same meaning. The roles without HTML equivalents, such as presentation, toolbar and tooltip roles, provide information on the document structure to assistive technologies such as screen readers as equivalent native HTML tags are not available. 

  - [toolbar](/en-US/docs/Web/Accessibility/ARIA/roles/toolbar_role)
  - [tooltip](/en-US/docs/Web/Accessibility/ARIA/roles/tooltip_role)
  - [feed](/en-US/docs/Web/Accessibility/ARIA/roles/feed_role)
  - [math](/en-US/docs/Web/Accessibility/ARIA/roles/math_role)
  - [presentation](/en-US/docs/Web/Accessibility/ARIA/roles/presentation_role) / [none](/en-US/docs/Web/Accessibility/ARIA/roles/none_role)
  - [note](/en-US/docs/Web/Accessibility/ARIA/roles/note_role)

For most document structure roles, semantic HTML equivalent elements are available and supported. Avoid using [application](/en-US/docs/Web/Accessibility/ARIA/roles/Application_Role), [article](/en-US/docs/Web/Accessibility/ARIA/roles/Article_Role) (use {{HTMLElement('article')}}), [cell](/en-US/docs/Web/Accessibility/ARIA/roles/Cell_Role) (use {{HTMLElement('td')}}), [columnheader](/en-US/docs/Web/Accessibility/ARIA/roles/columnheader_role) (use {{HTMLElement('th', '&lt;th scope="col">')}}), [definition](/en-US/docs/Web/Accessibility/ARIA/roles/definition_role) (use {{HTMLElement('dd')}} in a {{HTMLElement('dl')}}), [directory](/en-US/docs/Web/Accessibility/ARIA/roles/directory_role), [document](/en-US/docs/Web/Accessibility/ARIA/roles/Document_Role), [figure](/en-US/docs/Web/Accessibility/ARIA/roles/Figure_Role) (use {{HTMLElement('figure')}} instead), [group](/en-US/docs/Web/Accessibility/ARIA/roles/group_role), [heading](/en-US/docs/Web/Accessibility/ARIA/roles/heading_role) (use {{HTMLElement('h1')}} thru {{HTMLElement('h6')}}), [img](/en-US/docs/Web/Accessibility/ARIA/roles/Img_role) (use {{HTMLElement('img')}} or {{HTMLElement('picture')}} instead), [list](/en-US/docs/Web/Accessibility/ARIA/roles/List_role) (use either {{HTMLElement('ul')}} or {{HTMLElement('ol')}} instead), [listitem](/en-US/docs/Web/Accessibility/ARIA/roles/Listitem_role) (use {{HTMLElement('li')}} instead), [meter](/en-US/docs/Web/Accessibility/ARIA/roles/Meter_role)  (use {{HTMLElement('meter')}} instead), [row](/en-US/docs/Web/Accessibility/ARIA/roles/Row_Role) (use the {{HTMLElement('tr')}} with {{HTMLElement('table')}}), [rowgroup](/en-US/docs/Web/Accessibility/ARIA/roles/Rowgroup_Role) (use {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} and {{HTMLElement('tbody')}}), [rowheader](/en-US/docs/Web/Accessibility/ARIA/roles/rowheader_role) (use {{HTMLElement('tr','&lt;tr col="row">')}}), [separator](/en-US/docs/Web/Accessibility/ARIA/roles/separator_role) (use {{HTMLElement('hr')}} if it doesn't have focus), [table](/en-US/docs/Web/Accessibility/ARIA/roles/Table_Role) (use {{HTMLElement('table')}}), and [term](/en-US/docs/Web/Accessibility/ARIA/roles/term_role) (use {{HTMLElement('dfn')}} or {{HTMLElement('dt')}} in a {{HTMLElement('dl')}}).  These are included for completeness, but in most cases are rarely, if ever, useful.


### 2. Widget roles

The various widget role are used to define common interactive patterns. Similar to the document structure roles, some of these roles duplicate the semantics of native HTML elements that are well supported, and should not be used. The difference between the two lists is that, generally, the widget roles require JavaScript interaction and the document structure roles don't necessarily. 

  - [scrollbar](/en-US/docs/Web/Accessibility/ARIA/roles/scrollbar_role)
  - [searchbox](/en-US/docs/Web/Accessibility/ARIA/roles/searchbox_role)
  - [separator](/en-US/docs/Web/Accessibility/ARIA/roles/separator_role) (when focusable)
  - [slider](/en-US/docs/Web/Accessibility/ARIA/roles/slider_role)
  - [spinbutton](/en-US/docs/Web/Accessibility/ARIA/roles/spinbutton_role)
  - [switch](/en-US/docs/Web/Accessibility/ARIA/roles/Switch_role)
  - [tab](/en-US/docs/Web/Accessibility/ARIA/roles/Tab_Role)
  - [tabpanel](/en-US/docs/Web/Accessibility/ARIA/roles/Tabpanel_Role)
  - [treeitem](/en-US/docs/Web/Accessibility/ARIA/roles/treeitem_role)

Avoid using [button](/en-US/docs/Web/Accessibility/ARIA/roles/button_role), [checkbox](/en-US/docs/Web/Accessibility/ARIA/roles/checkbox_role), [gridcell](/en-US/docs/Web/Accessibility/ARIA/roles/Gridcell_role), [link](/en-US/docs/Web/Accessibility/ARIA/roles/link_role), [menuitem](/en-US/docs/Web/Accessibility/ARIA/roles/menuitem_role), [menuitemcheckbox](/en-US/docs/Web/Accessibility/ARIA/roles/menuitemcheckbox_role), [menuitemradio](/en-US/docs/Web/Accessibility/ARIA/roles/menuitemradio_role), [option](/en-US/docs/Web/Accessibility/ARIA/roles/option_role), [progressbar](/en-US/docs/Web/Accessibility/ARIA/roles/progressbar_role), [radio](/en-US/docs/Web/Accessibility/ARIA/roles/radio_role), and [textbox](/en-US/docs/Web/Accessibility/ARIA/roles/textbox_role), which we've  included for completeness. For most, semantic equivalents with accessible interactivity are available and supported. See the individual role documention for more information.

#### Composite widget roles

  - [combobox](/en-US/docs/Web/Accessibility/ARIA/roles/combobox_role)
  - [menu](/en-US/docs/Web/Accessibility/ARIA/roles/menu_role)
  - [menubar](/en-US/docs/Web/Accessibility/ARIA/roles/menubar_role)
  - [tablist](/en-US/docs/Web/Accessibility/ARIA/roles/tablist_role)
  - [tree](/en-US/docs/Web/Accessibility/ARIA/roles/tree_role)
  - [treegrid](/en-US/docs/Web/Accessibility/ARIA/roles/treegrid_role)

Avoid using [grid](/en-US/docs/Web/Accessibility/ARIA/roles/Grid_Role), [listbox](/en-US/docs/Web/Accessibility/ARIA/roles/listbox_role), and [radiogroup](/en-US/docs/Web/Accessibility/ARIA/roles/radio_role), which we've included for completeness. See the individual role documention for more information.

Note that there is also a widget role (`role="widget"`), which is an abstract role and not in the widget role category.


### 3. Landmark roles

Landmark roles provide a way to identify the organization and structure of a web page. By classifying and labeling sections of a page, structural information conveyed visually through layout is represented programmatically. Screen readers use landmark roles to provide keyboard navigation to important sections of a page. Use these sparingly. Too many landmark roles create "noise" in screen readers, making it difficult to understand the overall layout of the page.

  - [banner](/en-US/docs/Web/Accessibility/ARIA/roles/Banner_role) (document {{HTMLElement('header')}})
  - [complementary](/en-US/docs/Web/Accessibility/ARIA/roles/Complementary_role) ({{HTMLElement('aside')}})
  - [contentinfo](/en-US/docs/Web/Accessibility/ARIA/roles/Contentinfo_role) (document {{HTMLElement('footer')}})
  - [form](/en-US/docs/Web/Accessibility/ARIA/roles/Form_Role) 
  - [main](/en-US/docs/Web/Accessibility/ARIA/roles/Main_role) ({{HTMLElement('main')}})
  - [navigation](/en-US/docs/Web/Accessibility/ARIA/roles/Navigation_Role) ({{HTMLElement('nav')}})
  - [region](/en-US/docs/Web/Accessibility/ARIA/roles/Region_role) ({{HTMLElement('section')}})
  - [search](/en-US/docs/Web/Accessibility/ARIA/roles/Search_role)


### 4. Live region roles

Live Region roles are used to define elements with content that will be dynamically changed. Sighted users can see dynamic changes when they are visually noticeable. These roles help low vision and blind users know if content has been updated. Assistive technologies, like screen readers, can be made to announce dynamic content changes:

  - [alert](/en-US/docs/Web/Accessibility/ARIA/roles/Alert_Role)
  - [log](/en-US/docs/Web/Accessibility/ARIA/roles/log_role)
  - [marquee](/en-US/docs/Web/Accessibility/ARIA/roles/Marquee_Role)
  - [status](/en-US/docs/Web/Accessibility/ARIA/roles/status_role)
  - [timer](/en-US/docs/Web/Accessibility/ARIA/roles/timer_role)


### 5. Window roles

Window roles define sub-windows to the main document window, within the same window, such as pop up modal dialogs: 

  - [alertdialog](/en-US/docs/Web/Accessibility/ARIA/roles/alertdialog_role)
  - [dialog](/en-US/docs/Web/Accessibility/ARIA/roles/dialog_role)


### 6. Abstract roles

Abstract roles are only intended for use by browsers to help organize and streamline a document. They should not be used by developers writing HTML markup. Doing so will not result in any meaningful information being conveyed to assistive technologies or to users.

Avoid using [command](/en-US/docs/Web/Accessibility/ARIA/roles/command_role), [composite](/en-US/docs/Web/Accessibility/ARIA/roles/composite_role), [input](/en-US/docs/Web/Accessibility/ARIA/roles/input_role), [landmark](/en-US/docs/Web/Accessibility/ARIA/roles/landmark_role), [range](/en-US/docs/Web/Accessibility/ARIA/roles/range_role), [roletype](/en-US/docs/Web/Accessibility/ARIA/roles/roletype_role), [section](/en-US/docs/Web/Accessibility/ARIA/roles/section_role), [sectionhead](/en-US/docs/Web/Accessibility/ARIA/roles/sectionhead_role), [select](/en-US/docs/Web/Accessibility/ARIA/roles/select_role), [structure](/en-US/docs/Web/Accessibility/ARIA/roles/structure_role), [widget](/en-US/docs/Web/Accessibility/ARIA/roles/widget_role),and [window](/en-US/docs/Web/Accessibility/ARIA/roles/window_role).

> **Note:** Don't use abstract roles in your sites and applications. They are for use by browsers. They are included for reference only. 

> **Warning:** "Abstract roles are used for the ontology. Authors **MUST NOT** use abstract roles in content." - The WAI-ARIA specification


## Roles defined on MDN

The following are the reference pages covering the WAI-ARIA roles discussed on <abbr title="Mozilla Developer Network">MDN</abbr>.

{{SubpagesWithSummaries}}


## See also

* [Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)


<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
