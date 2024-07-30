---
title: JSON type representation
slug: Glossary/JSON_type_representation
page-type: glossary-definition
---

{{GlossarySidebar}}

{{glossary("JSON")}} is a convenient and widely used format for serializing objects, arrays, numbers, strings, booleans, and null.
[JSON does not support all data types allowed by JavaScript](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences), which means that JavaScript objects that use these incompatible types cannot be directly serialized to JSON.

The _JSON type representation_ of a JSON-incompatible object is an equivalent JavaScript object with properties encoded such that the information _can_ be serialized to JSON.
This typically has the same properties as the original object for compatible data types, while incompatible properties are converted/serialized to compatible types.
For example, buffer properties in the original object might be {{Glossary("base64", "base64url")}}-encoded to strings in the JSON-type representation.

An object that cannot automatically be serialized to JSON using the [`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method can define an instance method named `toJSON()` that returns the _JSON-type representation_ of the original object.
[`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) will then use `toJSON()` to get the object to stringify, instead of the original object.
[`PublicKeyCredential.toJSON()`](/en-US/docs/Web/API/PublicKeyCredential/toJSON) and [`Performance.toJSON()`](/en-US/docs/Web/API/Performance/toJSON) are examples of this approach.

A JSON string serialized in this way can be deserialized back to the _JSON-type representation_ object using [`JSON.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
It is common to provide a converter method, such as {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}, to convert the _JSON-type representation_ back to the original object.
