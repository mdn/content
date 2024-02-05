---
title: Templates in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
page-type: guide
---

{{FirefoxSidebar}}

Templates have been significantly improved in Firefox 3. The key improvement allows the use of [custom query processors](/en-US/docs/How_to_implement_a_custom_XUL_query_processor_component) to handle other types of datasources besides RDF. A new query syntax makes this possible. Built-in support for SQL ([mozStorage](/en-US/docs/Storage)) and XML datasources is also provided. A full description of the new features available for templates [is available](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox bug 285631](https://bugzil.la/285631))

### Other template improvements

- Relational conditions have been added to allow for more precise control over what results match a rule. This allows, for example, matching of results that start or end with certain strings, or that are before or after other values.
- A flag, `dont-recurse`, has been added to prevent recursion from happening such that only one level of results are generated
- APIs have been added to the template builder to retrieve a result object representing an output item.
- The XUL sort service is more robust and [sorts](/en-US/docs/XUL/Template_Guide/Sorting_Results) both content and non-content trees better. It also allows sorting of non-template built content. ([Firefox bug 335122](https://bugzil.la/335122))

### See also

- [Firefox 3 for developers](/en-US/docs/Mozilla/Firefox/Releases/3)
