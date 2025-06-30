# Unified Master Data Structure (JSON Tree) Design

To combine all CSS, HTML, and JavaScript data into a single JSON tree, the following hierarchical structure is proposed:

```json
{
  "webPlatformData": {
    "css": {
      "properties": [
        { /* CSS Property Object */ },
        { /* ... */ }
      ],
      "atRules": [
        { /* CSS At-Rule Object */ },
        { /* ... */ }
      ],
      "functions": [
        { /* CSS Function Object */ },
        { /* ... */ }
      ],
      "selectors": [
        { /* CSS Selector Object */ },
        { /* ... */ }
      ]
    },
    "html": {
      "elements": [
        { /* HTML Element Object */ },
        { /* ... */ }
      ],
      "globalAttributes": [
        { /* HTML Global Attribute Object */ },
        { /* ... */ }
      ]
    },
    "javascript": {
      "builtins": [
        { /* JavaScript Built-in Object */ },
        { /* ... */ }
      ],
      "statements": [
        { /* JavaScript Statement Object */ },
        { /* ... */ }
      ],
      "operators": [
        { /* JavaScript Operator Object */ },
        { /* ... */ }
      ],
      "functions": [
        { /* JavaScript Function Object */ },
        { /* ... */ }
      ],
      "classes": [
        { /* JavaScript Class Object */ },
        { /* ... */ }
      ],
      "grammar": [
        { /* JavaScript Grammar Object */ },
        { /* ... */ }
      ]
    }
  }
}
```

## Object Structures:

Each object within the arrays (e.g., `CSS Property Object`, `HTML Element Object`) will contain the detailed information already extracted and displayed in the individual enhanced viewers. This includes:

- **CSS Property Object**: `name`, `status`, `initial`, `inherited`, `animation`, `media`, `appliesto`, `computed`, `percentages`, `groups`, `syntax`, `values`, `mdn`, `formalDefinition`, `stacking`, `order`.
- **CSS At-Rule Object**: `name`, `status`, `syntax`, `descriptors`, `interfaces`, `mdn`, `formalDefinition`.
- **CSS Function Object**: `name`, `status`, `syntax`, `return_type`, `mdn`, `formalDefinition`.
- **CSS Selector Object**: `name`, `status`, `syntax`, `specificity`, `mdn`, `formalDefinition`.
- **HTML Element Object**: `name`, `description`, `mdn`, `status`, `deprecated`, `categories`, `specInfo`, `supportSummary`, `specUrl`, `experimental`, `standardTrack`.
- **HTML Global Attribute Object**: `name`, `description`, `mdn`, `status`, `deprecated`, `specInfo`, `supportSummary`, `specUrl`, `experimental`, `standardTrack`.
- **JavaScript Built-in/Statement/Operator/Function/Class/Grammar Object**: `name`, `type`, `status`, `experimental`, `standardTrack`, `supportSummary`, `description`, `specInfo`, `mdn`.

## Rationale:

- **Hierarchical**: The structure is logical and easy to navigate, starting from `webPlatformData` and branching into `css`, `html`, and `javascript`, then further into specific categories within each.
- **Collapsible**: This structure is ideal for display in a tree-like viewer where branches can be expanded or collapsed.
- **Exportable**: The entire `webPlatformData` object can be directly exported as a JSON file. For XML export, a transformation will be applied to convert this JSON structure into a valid XML format.
- **Comprehensive**: All existing data from the individual viewers will be integrated into this single master structure.

This design provides a clear and organized way to manage and present the vast amount of web platform data.

