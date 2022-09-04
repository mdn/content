---
title: 'ARIA: document structural roles'
slug: Web/Accessibility/ARIA/Roles/structural_roles
tags:
  - Accessibility
  - ARIA
  - roles
  - structural
  - ARIA Role
  - structural Roles
  - ARIA structure
  - Reference
spec-urls: https://w3c.github.io/aria/#document_structure_roles
---

ARIA document-structure roles are used to provide a structural description for a section of content.

Structural ARIA roles were originally created as a bridge to inform assistive technologies of HTML5 elements that were not yet fully supported in browsers. Some roles, like `presentation`, `toolbar` and `tooltip`, provide information on the document structure to assistive technologies in cases where equivalent native HTML elements don't exist. Other roles, including those listed in the table below, are not needed, as there are semantic HTML elements with the same meanings. In many cases, these equivalent HTML elements have always been supported.

> **Note:**  These structural roles all have semantic HTML equivalents. They are included here for completeness of documentation. Preferably, they should not be used by web authors.

Some structural roles, like [`suggestion`](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role), don't have HTML equivalents, and therefore have separate documentation. Some structural roles with HTML equivalents, like [`heading`](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role), have ARIA-attribute requirements. They are listed below with links to their individual role documentation.

Most of the following roles were never needed but were added to ARIA for completeness. We've included them here for completeness as well.

## Structural roles with HTML equivalents

The structure roles with HTML equivalents are listed below:

| ARIA role & description | HTML Equivalent |
| ---------- | ------------   |
| **`associationlist`** <br> Contains only `associationlistitemkey` children and their sibling `associationlistitemvalue`. | {{HTMLElement('dl')}} |
| **`associationlistitemkey`** <br/> Must be contained in an `associationlist`. | {{HTMLElement('dt')}} |
| **`associationlistitemvalue`** <br/> Always a sibling following an `associationlistitemkey`. | {{HTMLElement('dd')}} |
| **`blockquote`** <br/> A section of content that is quoted from another source.| {{HTMLElement('blockquote')}} |
| **`caption`** <br>Visible content that names, and may also describe, a `figure`, `table`, `grid`, or `treegrid`.<br/> Only found in those 4 roles. A caption's `id` is generally referenced by a `figure`, `grid`, `table`, or `treegrid`'s `aria-labelledby` attribute.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`.   | {{HTMLElement('caption')}} <br/> {{HTMLElement('figcaption')}} |
| **`code`** <br/> A section representing a fragment of computer code. <br/> Prohibited attributes: `aria-label` and `aria-labelledby`. | {{HTMLElement('code')}} |
| **`deletion`** <br/>Content that is marked as removed or suggested for removal.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`. | {{HTMLElement('del')}} |
| **`emphasis`** <br/> Used to stress or emphasize content, but not to suggest importance.<br/>Prohibited attributes: `aria-label` and `aria-labelledby`. | {{HTMLElement('em')}} |
| [`figure`](/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role) <br/>Container for a graphical document, images, code snippets, or example text.| {{HTMLElement('figure')}} |
| [`heading`](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) <br/> A heading for a section of the page.<br/>The `aria-level` attribute is required to indicate the nesting level.<br/>See the [`heading` role](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) for more information. | {{HTMLElement('h1')}}, {{HTMLElement('h2')}}, {{HTMLElement('h3')}}, {{HTMLElement('h4')}}, {{HTMLElement('h5')}}, and {{HTMLElement('h6')}} |
| **`image`** <br/>Container for a collection of elements that form an image. Synonym for `img` role. | {{HTMLElement('img')}} |
| [`img`](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role) <br/>Container for a collection of elements that form an image. <br/>Accessible name is required. <br/>See the [`img` role](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role) for more information.| {{HTMLElement('img')}} |
| **`insertion`** <br/>Content that is marked as added or content that is being suggested for addition.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`.| {{HTMLElement('ins')}} |
| [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)<br/>A section containing `listitem` elements.<br/> See [`list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) for more information | {{HTMLElement('ol')}}<br/>{{HTMLElement('ul')}} |
| [`listitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)<br/>A single item in a `list` or `directory`.<br/>Must be contained in a `list` (like `<li>`).<br>See [`listitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) for more information. | {{HTMLElement('li')}} |
| [`mark`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role)<br/>Marked or highlighted for reference or notation purposes.<br>See [`mark` role](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role) for more information. | {{HTMLElement('mark')}} |
| [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) <br/>A scalar measurement within a known range, or a fractional value.<br/>Accessible name required. `aria-valuenow` required.<br/>See [`meter` role](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) for more information. | {{HTMLElement('meter')}} |
| **`paragraph`** <br/>A paragraph of content.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`. | {{HTMLElement('p')}} |
| **`strong`** <br/>Important, serious, or urgent content.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`. | {{HTMLElement('strong')}} |
| **`subscript`** <br/>One or more subscripted characters.<br/>Only use if absence of role would change the content's meaning.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`. | {{HTMLElement('sub')}} |
| **`superscript`** <br/>One or more superscripted characters.<br/>Only use if absence of role would change the content's meaning.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`.| {{HTMLElement('sup')}} |
| [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role)<br/>Word or phrase with an optional corresponding definition.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`.<br/>See [`term` role](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role) for more information. | {{HTMLElement('dfn')}} |
| **`time`** <br> A valid date or time string format list a specific point in time.<br/> Prohibited attributes: `aria-label` and `aria-labelledby`.| {{HTMLElement('time')}} |

> **Note:** The `aria-label` and `aria-labelledby` attributes are prohibited on `code`, `caption`, `deletion`, `emphasis`, `generic`, `insertion`, `mark`, `paragraph`, `presentation`, `none`, `strong`, `subscript`, `superscript`, `suggestion`, `term`, and `time`, and should only be used on interactive content.

## Best Practices

Do not use structural roles. Opt for HTML semantic elements instead.

## Specifications

{{Specifications}}

## See Also

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
