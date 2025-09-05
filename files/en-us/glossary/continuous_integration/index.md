---
title: Continuous integration
slug: Glossary/Continuous_integration
page-type: glossary-definition
sidebar: glossarysidebar
---

Continuous integration (CI) is a software development practice in which changes to the source are frequently integrated into the main codebase.

It's an important practice whenever a team of developers is working on a shared codebase. In this situation, different developers might be making overlapping changes to the code at the same time, each in their personal branches. Frequent integration of each developer's changes makes it much less likely that conflicts will occur, and much easier to resolve them when they do.

As [Martin Fowler observes](https://martinfowler.com/articles/continuousIntegration.html#EveryonePushesCommitsToTheMainlineEveryDay):

> Integration is primarily about communication. Integration allows developers to tell other developers about the changes they have made. Frequent communication allows people to know quickly as changes develop.

A major aspect of CI is automated build and test: typically, in a CI system, as soon as a change has been committed to a repository, an automated process builds the product and runs tests. Once all the tests pass, the change can be peer-reviewed.
