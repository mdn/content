---
title: Locale-specific message reference
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
page-type: guide
---

{{AddonSidebar()}}

Each internationalized extension has at least one file named `messages.json` that provides locale-specific strings. This page describes the format of `messages.json` files.

> **Note:** For information on how to internationalize your extensions, see our [i18n](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) guide.

## messages.json example

The following code shows an example `messages.json file`, taken from our [notify-link-clicks-i18n example](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) extension. Only the "_name_" and "message" fields are required.

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

## Placement

Your `messages.json` files need to be placed inside directories named after the locale each one is supporting — `en`, `de`, `ja`, etc. These in turn need to be placed inside a directory called `_locales`, inside the root of your extension.

## Member details

This section describes each member that can appear in a `messages.json` file.

### name

Each top-level member is named after the name of the message string you are localizing, for example `"extensionName"` or `"notificationContent"` in the example above. Each name is case-insensitive, and acts as a key allowing you to retrieve the localized message text.

The name can include the following characters:

- A-Z
- a-z
- 0-9
- \_ (underscore)
- @

> **Note:** You shouldn't define names that start with @@. Such names are reserved for [predefined messages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#predefined_messages).

### message

At least this property must be set for every string. The `"message"` member contains a localized string that can contain [placeholders](#placeholders). You can use:

- _$placeholder_name$_ (case insensitive) to insert a particular placeholder (for example $URL$ in the example above) into your string.
- `$1`, `$2`, `$3`, etc. to directly insert values obtained from a {{WebExtAPIRef("i18n.getMessage()")}} call into your string.

Other points to note:

- Any number of consecutive dollar signs appearing in strings are replaced by the same number of dollar signs minus one. So, $$ > $, $$$ > $$, etc.
- When the locale file is read, tokens matching `/\$([a-z0-9_@]+)\$/i` are replaced with the matching value from the string's "placeholders" object. These substitutions happen prior to processing any `/\$\d/` tokens in the message.
- When a locale string is used, tokens matching `/\$\d+/` are replaced with the replacements passed to {{WebExtAPIRef("i18n.getMessage()")}}.
- `getMessage()` won't process calls with more than 9 placeholders/substitutions.

### description

{{optional_inline}}

The `"description"` member should contain a description of the message string's contents, aimed to provide a translator with help to create the best translation possible of the string.

### placeholders

{{optional_inline}}

The `"placeholders"` member defines one or more placeholder substrings to be used within the message — these can be used to hardcode items that you don't want translated, or refer to variables.

Each placeholder substring definition has a number of values of its own:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### placeholder name

The placeholder name is used to represent the placeholder in the substitution string (e.g. `"url"` becomes `$url$`). It is case insensitive and can contain the same characters as a message string [name](#name).

#### content

The "content" item defines the content of the placeholder. This can be a hardcoded string, such as "My placeholder", but it can also include values obtained from a {{WebExtAPIRef("i18n.getMessage()")}} call. This property is required. For more information, see [Retrieving message strings from JavaScript](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### example

{{optional_inline}}

The optional "example" item is again intended to help translators by showing them an example of how the placeholder would appear to end users, allowing them to make the best choice when localizing the file.
