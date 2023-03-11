---
title: Tips and Tricks
slug: Mozilla/Add-ons/WebExtensions/Tips
page-type: guide
---

{{AddonSidebar}}

This page contains various tips and tricks which should be useful to many people developing extensions using WebExtension APIs.

## Using advanced JavaScript features from ECMAScript 2015 and 2016

Firefox [supports many features of ECMAScript 2015](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) out of the box. Several new and experimental features, however, are not available to the Web or WebExtensions by default. If you want to use these features, it's best to transpile your code using a tool such as [Babel](https://babeljs.io/).

Beware that anything below this line is outdated information and has been removed from Babel 6.

Babel provides transformations for the vast majority of ES2015 features, and enables them by default. Since Firefox already fully supports most of these, it's best to configure Babel to ignore them. We suggest creating a `.babelrc` file, or a `babel` section in your project's `package.json` file containing the following:

```json
{
  "env": {
    "firefox": {
      "sourceMaps": "inline",
      "blacklist": [
        "es5.properties.mutators",
        "es6.arrowFunctions",
        "es6.destructuring",
        "es6.forOf",
        "es6.parameters",
        "es6.properties.computed",
        "es6.properties.shorthand",
        "es6.spec.symbols",
        "es6.spread",
        "es6.tailCall",
        "es6.templateLiterals",
        "es6.regex.sticky",
        "es6.regex.unicode"
      ]
    }
  }
}
```

Then, to compile an individual script, run:

```bash
BABEL_ENV=firefox babel <filename>
```

Or, to compile every JavaScript file under the directory `src` and place the compiled files in `compiled`, copying over non-JavaScript files in the process, run:

```bash
BABEL_ENV=firefox babel -Dd compiled src
```
