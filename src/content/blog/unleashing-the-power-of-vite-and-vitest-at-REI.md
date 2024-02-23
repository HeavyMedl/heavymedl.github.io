---
author: Kurt Medley
pubDatetime: 2024-02-20T15:20:35Z
title: Unleashing the Power of Vite and Vitest at REI
featured: true
draft: false
tags:
  - vue
  - vitest
  - vite
  - front end
  - build tools
description: A story about how replacing our build tools transformed our development, boosted performance, and set the stage for a more agile and robust future.
---

> This post is published on REI's engineering blog [here](https://engineering.rei.com/frontend/front-end-build-tool-renaissance.html)

## Table of contents

## FEBS

The Front-end Build System (FEBS) is REI's internally developed set of tools that helps engineers build the assets that are eventually downloaded by customers visiting REI's online properties. FEBS has evolved over the years to support an ever-changing development landscape.

![FEBS 2 logo](@assets/images/rei-febs.png)

The first generation of FEBS was built directly in our legacy monolithic code base, a series of scripts that leveraged some programmable APIs from libraries like `gulp` and `browserify`. This code continues to serve any remaining applications living in that monolithic space.

The Co-op moved toward a more decentralized approach by introducing microservice architecture with the development of the [Alpine platform](https://engineering.rei.com/devops/how-we-built-a-microservices-platform.html). With this came a new generational iteration of [FEBS](https://engineering.rei.com/frontend/the-rei-front-end-build-system.html) that was decoupled from any individual implementation. FEBS 2 lives in REI's internal NPM registry as `@rei/febs` with several other supporting packages. It is declared as a dependency of an Alpine microsite.

Under the hood, `@rei/febs` is extending `webpack@4` to bundle web application code and `rollup@2` to bundle Vue 2 components and vanilla JavaScript libraries.

## Unforeseen consequences

Our team maintains a microsite that contains supported patterns, technologies, and most importantly, an end-to-end functional example used as a reference by other product teams. We expected `@rei/febs` to canonicalize the way teams built their front-end assets and thereby reduce any individual deviation from supported patterns, theoretically improving the interoperability ecosystem.

For most cases, `@rei/febs` did its job. However, as time went on, feature requests continued to pour in to accommodate product teams with unique business requirements. Additionally, the underlying dependencies supporting `@rei/febs` continued to change, forcing us to manually reconcile them within our packages and individual microsites.

The maintenance of iterating on `@rei/febs` and troubleshooting microsite build issues began to consume our daily lives. Worse was that `@rei/febs` was becoming bloated with logic for many unforeseen use cases.

## Inherit apparent

Perhaps you spotted the _inherent_ problem with `@rei/febs`? It's an inheritance model. `@rei/febs` extends several build tool technologies including `webpack` and `rollup`. This means that `@rei/febs` **is** `webpack`. `@rei/febs` **is** `rollup`. So, what's the issue? Inheritance models are brittle by nature (don't @ me). Any change request can require a massive overhaul of the implementation. And the more you customize, the harder it becomes to maintain until it becomes an unrecognizable, enormous blob like in _Akira_.

## This is the way

Eventually, we hit a wall when Vue 3 arrived on the scene. We built a POC that brought Vue 3 support to `@rei/febs`. We discovered that the Rollup plugin used to compile Vue 3 SFCs for our public design system, [Cedar](https://cedar.rei.com), made tree-shaking incompatible with `webpack@4`, resulting in bloated application bundles.

Even though we had a functional POC of our reference microsite using Vue 3, we were unsatisfied with the low-level work we had to do to get there. We decided to experiment with a build toolchain overhaul that dispensed with our implementations in favor of using [Vite](https://vitejs.dev/) to bundle our application. We quickly cobbled together a working solution. We liked the approach so much that we decided to move forward with it.

## Enter Vite

[Vite](https://vitejs.dev/) is a UI-framework agnostic build tool. It supports React, Svelte, Vue, and others. It's a bundler ... of bundlers. Ironically, it's a wrapper that swaps bundlers in and out for different purposes. But the key point here is that it's a wrapper maintained by an open-source community **instead** of us. Under the hood, it uses `rollup` and `esbuild`.

Vite happens to have first-class support for Vue, which makes sense, as it was built by the creator of Vue. REI is a Vue shop. Our design system, [Cedar](https://cedar.rei.com), is a Vue component library. Cedar now uses Vite to bundle its code. We'll use Vite to bundle our customer-facing Vue 3 applications. One tool to rule them all.

Besides all that, Vite is pretty sweet. It has a "no-bundler" approach to running its development server. It doesn't need to build your application before it's served.

> Vite serves source code over native ESM. This is essentially letting the browser take over part of the job of a bundler: Vite only needs to transform and serve source code on demand, as the browser requests it. Code behind conditional dynamic imports is only processed if actually used on the current screen.

## So, what is FEBS now?

FEBS 3 is the "Front-end Build System", but that system isn't an explicit dependency.

Rather, it's a curated collection of open-source tools that are declared as dependencies of Alpine microsites and NPM packages used to bundle assets. Specifically Vite and Vitest. These tools are supplemented by REI-built configurations, plugins, and patterns to support REI-specific needs.

This has alleviated us from low-level dependency management, makes future migrations and tool swaps easier, and allows engineers maximum flexibility with their application builds while always having a functional example to reference. Engineers can also lean directly on the open-source community for any issues they may have with a particular build tool.

## Lessons learned

Reflecting on the evolution of the build toolchain at REI, the intentions were good. Create a tool that would normalize the way our teams built front-end assets and prevent deviation from supported patterns.

What we learned was that we didn't need to be restrictive in the form of an explicit tool like `@rei/febs`. It's not like people couldn't get around it anyway. Instead, we simply provide sanctioned patterns and people use them. The benefits of using the raw build tool greatly outweigh customization that extends the tool directly.

![initials logo](/assets/favicon/favicon-96x96.png)
