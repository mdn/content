---
title: ARIA States and Properties
slug: Web/Accessibility/ARIA/Attributes
tags:
  - ARIA
  - ARIA States and Properties
  - ARIA attributes
  - Accessibility
  - Reference
  - States
  - Properties
---
This page lists reference pages covering all the WAI-ARIA attributes discussed on MDN. 

ARIA attributes enable modifying an element's states and properties as defined in the accessibility tree. 

> **Note:** ARIA is only modify the accessibility tree for any element and therefore how assistive technology presents the content to your users. ARIA doesn't change anything about an elements function or behavior. When not using semantic HTML elements for their intended purpose and default functionality, you must use JavaScript to manage behavior, focus, and ARIA states.

## ARIA attribute types

There are 4 categories of ARIA states and properties:

1. ### Widget Attributes
   - [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 	
   - [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) 	
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
   
2. ### Live Region Attributes
   - [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
   - [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
   - [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
   - [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
   
3. ### Drag-and-Drop Attributes
   - [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
   - [`aria-grabbed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed)
   
4. ### Relationship Attributes
     - [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) 	 	 	
     - [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) 	 		
    - [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 	 		
    - [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) 	 		
    - [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) 	 	 	
    - [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 	 	
    - [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) 	 	 	
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
    
## Global ARIA attributes

Some states and properties are applicable to all host language elements regardless of whether a role is applied. These are defined as "Global" attributes. Global states and properties are supported by all roles and by all base markup elements.

Many of the above attributes are global, meaning they can be included on any element unless specifically disallowed:

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) 	 	 	
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) 	 	 	
- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) 	 	 	
- [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) 	 		
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 	 	 		 	
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) 
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) 	 		
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) 	 	 	
- [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) 	 	 	
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage) 	 		
- [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto) 	 	 	
- [`aria-grabbed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) 	 	 	
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 	 	 	
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 	 	 	
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) 	 	 	
- [`aria-keyshortcuts`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) 	 		
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) 	 	 	
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 	 	 	
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) 	 	 	
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) 	 	 	
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 	 	 	
- [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 	

By "specifically disallowed", all the above attributes are global except for `aria-label` and `aria-labelledby` properties which are not allowed on elements with role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/Presentation_role) nor it's synonym [`none`](/en-US/docs/Web/Accessibility/ARIA/Roles/None_role) role.    

## States and properties defined on MDN

The following are the reference pages covering the WAI-ARIA states and properties discussed on <abbr title="Mozilla Developer Network">MDN</abbr>.

{{SubpagesWithSummaries}}

## See also

* [Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

<section id="Quick_links">

1. [**WAI-ARIA attributes**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
