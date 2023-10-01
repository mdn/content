---
title: Using an external spell checker
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
page-type: guide
---

{{FirefoxSidebar}}

Starting with Firefox 3 (as well as Thunderbird 3 and SeaMonkey 2), you can now install an external spell checker using an extension.

This is _not_ for extensions who wants to add a dictionary to the built in Hunspell spell checker.

An [example](https://sourceforge.net/projects/voikko/) of a spell checker extension can be found as part of the [Voikko](https://voikko.puimula.org/) project.

## Implementing spell checker support

Implementing a spell checker requires the following steps be taken:

1. Implement a class derived from `mozISpellCheckingEngine` that implements the required functionality or accesses an external spell checker.
2. The `mozISpellCheckingEngine` method `mozISpellCheckingEngine.getDictionaryList()` should be implemented to return a list of dictionaries supported by the spell checker.
3. The extension needs to provide a registration callback. The registration callback must use `nsICategoryManager` to install into the category "spell-check-engine" an entry with a name equal to the contract ID of the class implementing the spell check functionality.
4. The extension also needs to provide an unregistration callback, which must remove the category entry.

The value of the category entry may be chosen as desired. You may, for example, choose to use it to record the path to the shared library used by the extension to handle spell checking, to make it easy to locate by other components of the extension.

## Spell check dictionary prioritization

Dictionaries provided by spell check extensions override built-in dictionaries. If multiple extensions supply dictionaries for the same language, the first one found is used.
