---
title: 'ARIA: structural roles'
slug: Web/Accessibility/ARIA/Roles/structural_roles
tags: 
  - Accessibility
  - ARIA
  - roles
  - structural
  - ARIA Role
  - Abstract Role
  - ARIA structure
  - Reference
---

ARIA document structure roles are used to provide a structural description for a section of content. 

Structural ARIA roles were originally created as a bridge to inform assistive technologies of HTML5 elements when there was mixed browsers support. Some roles, like `presentation`, `toolbar` and `tooltip`, provide information on the document structure to assistive technologies in cases where equivalent native HTML tags don't exist available. Other roles, including all those on this page, are not needed as there are semantic HTML element with the same meaning that have always been supported.

> **Note:**  These structural roles all have semantic HTML equivalents. They are included here for completeness of documentation. They should not be used by web authors.

The following roles were never needed but were add to ARIA for completeness. We've included them here for completeness as well. 

## Structural roles

The following `structure` roles have HTML equivalents, which are listed below:

| ARIA role & description | HTML Equivalent | 
| ---------- | ------------   | 
| `associationlist` <br> Contains only `associationlistitemkey` children and their sibling `associationlistitemvalue`. | {{HTMLElement('dl')}} | 
| `associationlistitemkey` <br/> Must be contained in an `associationlist` | {{HTMLElement('dt')}} |
| `associationlistitemvalue` <br/> Always a sibling following an `associationlistitem` | {{HTMLElement('dd')}} | 
| `blockquote` <br/> A section of content that is quoted from another source.| {{HTMLElement('blockquote')}} | 
| `caption` <br>Visible content that names, and may also describe, a `figure`, `table`, `grid`, or `treegrid`.<br/> Only found in `figure`, `grid`, `table`, and `treegrid` <br/> Prohibited attributes: `aria-label` and `aria-labelledby` <br> The captions `id` is generally referenced by the `figure`, `grid`, `table`, or `treegrid`'s `aria-labeledby` attribute  | {{HTMLElement('caption')}} <br/> {{HTMLElement('figcaption')}} | 
| `code` <br/> A section representing a fragment of computer code. <br/> Prohibited attributes: `aria-label` and `aria-labelledby` | {{HTMLElement('code')}} | 
| `deletion`<br/>Content that is marked as removed or suggested for removal<br/> Prohibited attributes: `aria-label` and `aria-labelledby` | {{HTMLElement('del')}} | 
| `emphasis`<br/> Used to stress or emphasize content, but not to suggest imporance.<br/>Prohibited attributes: `aria-label` and `aria-labelledby` | {{HTMLElement('em')}} | 
| [`heading`](../heading_role) <br/> A heading for a section of the page.<br/>The `aria-level` attribute is required to indicate the nesting level.<br/>See the [ARIA `heading` role](../heading_role) for more information | {{HTMLElement('h1')}}, {{HTMLElement('h2')}}, {{HTMLElement('h3')}}, {{HTMLElement('h4')}}, {{HTMLElement('h5')}}, and {{HTMLElement('h6')}} |
| `insertion` | {{HTMLElement('ins')}} | 
| `paragraph` | {{HTMLElement('p')}} | 
| `strong` | {{HTMLElement('strong')}} | 
| `subscript` | {{HTMLElement('sub')}} | 
| `superscript` | {{HTMLElement('sup')}} | 
| `time` | {{HTMLElement('time')}} | 


> **Note:** The `aria-label` and `aria-labelledby` attributes are prohibited on `code`, `caption`, `deletion`, `emphasis`, `generic`, `insertion`, `mark`, `paragraph`, `presentation`, `none`, `strong`, `subscript`, `superscript`, `suggestion`, `term`, and `time`, and should only be used on interactive content.



`Structure` is a superclass [abstract role](/en-US/docs/Web/Accessibility/ARIA/Roles/#Abstract_roles) for document structures, like as [`document`](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role),
[`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), and [`sectionhead`](/en-US/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), that support the accessibility of dynamic web content by helping assistive technologies determine active content versus static document content. Some subclass roles, like
[`section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role), are in turn superclasses of other roles.

The `structure` role is the superclass for all document structure roles, which are used to provide a structural description for a section of content. Most structure roles should no longer be used as browsers now support semantic HTML element with the same meaning. The structure roles without HTML equivalents, such as the [`presentation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) which means content is presentational only, provide information on the document structure to assistive technologies such as screen readers as equivalent native HTML tags are not available.

## Best Practices

Do not use `role="structure"`. Do use HTML and subclass structure roles.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#structure","ARIA: structure role")}}                                             | {{Spec2('ARIA')}}                         |

## See Also

- [ARIA: `roletype` role](/en-US/docs/Web/Accessibility/ARIA/Roles/roletype_role)
- [ARIA: `generic` role](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [ARIA: `presentation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [ARIA: `range` role](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role)
- [ARIA: `section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `sectionhead` role](/en-US/docs/Web/Accessibility/ARIA/Roles/sectionhead_role)

<div class="hidden">
<!-- these shouldn't be used so we shouldn't link to them 
- [ARIA: `application` role](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
- [ARIA: `document` role](/en-US/docs/Web/Accessibility/ARIA/
"Roles/document_role)
- [ARIA: `rowgroup` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [ARIA: `separator` role](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
-->]
</div>

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
