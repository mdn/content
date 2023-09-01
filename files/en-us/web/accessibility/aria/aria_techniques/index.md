---
title: "Using ARIA: Roles, states, and properties"
slug: Web/Accessibility/ARIA/ARIA_Techniques
page-type: guide
---

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Annotations">ARIA annotations</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA guides</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA screen reader implementors guide</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques">Using ARIA: Roles, states, and properties</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Multipart_labels">Multipart labels</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">How to file ARIA-related bugs</a></li>
    <li class="toggle">
      <details><summary>ARIA states and properties</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>WAI-ARIA Roles</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

ARIA defines semantics that can be applied to elements, with these divided into **roles** (defining a type of user interface element) and **states** and **properties** that are supported by a role. Authors must assign an ARIA role and the appropriate states and properties to an element during its life-cycle, unless the element already has appropriate ARIA semantics (via use of an appropriate HTML element). Addition of ARIA semantics only exposes extra information to a browser's accessibility API, and does not affect a page's DOM.

## Roles

### Widget roles

- [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/en-US/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (when focusable)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

### Composite roles

The techniques below describe each composite role as well as their required and optional child roles.

- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) (including [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role), [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role), [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) roles)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role) (including [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role) role)
- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) (see [`radio role`](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role))
- [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) (including [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) and [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) roles)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

### Document structure roles

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`article`](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`definition`](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role)
- [`directory`](/en-US/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [`document`](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role)
- [`feed`](/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`figure`](/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role)
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`heading`](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`img`](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role)
- [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [`listitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`math`](/en-US/docs/Web/Accessibility/ARIA/Roles/math_role)
- [`none`](/en-US/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`note`](/en-US/docs/Web/Accessibility/ARIA/Roles/note_role)
- [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`toolbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tooltip`](/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)

### Landmark roles

- [`banner`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [`complementary`](/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [`contentinfo`](/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [`form`](/en-US/docs/Web/Accessibility/ARIA/Roles/form_role)
- [`main`](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role)
- [`navigation`](/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [`region`](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role)
- [`search`](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)

### Live Region Roles

- [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`log`](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [`marquee`](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [`status`](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [`timer`](/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role)

### Window Roles

- [`alertdialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## States and properties

### Widget attributes

- [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-modal`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
- [`aria-placeholder`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
- [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)
- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

### Live region attributes

- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

### Drag &amp; drop attributes

- [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) {{deprecated_inline}}

### Relationship attributes

- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

### MicrosoftEdge-specific properties

- [`x-ms-aria-flowfrom`](/en-US/docs/Web/Accessibility/ARIA) {{Non-standard_Inline}}
