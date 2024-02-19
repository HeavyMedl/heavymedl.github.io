---
layout: ../layouts/CVLayout.astro
title: "Curriculum vitae"
---

> TL;DR You're viewing my expanded curriculum vitae / résumé. If you're looking for a summative CV in PDF form, click here.

## Table of contents

---

## Bio

Kurt Medley is a Computer Science graduate, full-stack engineer, and industry professional with 10+ years of experience. Kurt possesses outstanding analytical abilities and is adept at solving complex problems through a blend of industry-standard and innovative technologies. With lead designation over many high-profile projects for major retail corporations, Kurt ensures the delivery of optimized, resilient, and well-tested software.

---

## [Education](/edu/)

### The Evergreen State College

#### B.Sc in Computer Science

Awarded: 2013

### South Puget Sound Community College

#### AA in Music Theory and Composition

Awarded: 2009

---

## Industry achievements

Here are some industry achievements that I am proud of.

### Facilitated REI's migration to Vite, Vitest, and Vue 3 at REI

TODO

### Introduced TypeScript to the FED community at REI

TODO

### Rewrote REI's analytics library in TypeScript

TODO

### Canonicalizing how NPM packages are scaffolded at REI

TODO

### Introduced modern build tools at Costco

TODO

### SSR?

TODO

---

## Experience

### Senior Software Engineer | Front-end Platform @ REI

Hybrid | April 2020 - Present

As a front-end platform engineer, I contribute to a suite of applications, build-tool plugins, and configurations used by all product engineering teams at REI. Our team is responsible for the R&D of front-end patterns as well as vetting technologies that are ultimately adopted by all REI product engineering teams. While we're focused on front-end technology, the nature of our work necessitates collaboration with fellow platform engineering teams, development with Java and Node.js, interfacing with vendor instrumentations, and more.

Additionally, we:

- provide support in the form of troubleshooting to teams experiencing runtime or setup issues.
- mitigate security vulnerabilities in our front-end ecosystem.
- track emerging technologies and trends in the industry. We also provide E2E technology direction and guidance.
- work closely with other enablement teams including Design Systems, Platform Engineering, Web Performance, SEO, and Accessibility.
- contribute to [Cedar](https://cedar.rei.com), REI's design system written in **Vue**.

### Senior Software Engineer | Front-end @ REI Adventures

Bellevue, WA | July 2019 - April 2020

TODO - WIP

On the REI Adventures product engineering team for REI. Followed a standard SDLC using agile methodologies and ceremonies to

- Rewrote the [REI adventures](https://www.rei.com/adventures) property with **Vue.js**.
- Decommissioned overlapping frameworks
- on-call responsibilities

### Software Engineer III | Full-stack @ Costco eCommerce

Issaquah, WA | July 2016 - July 2019

I led several more complex projects including bringing SMS notifications to our LTL (less-than-truckload) carriers, another site redesign effort that brought React to Costco, bringing gas prices to the Costco warehouse locator, and bringing a member validation service to customer profiles. In addition to writing code, these projects required me to create timelines that balanced project requirements with stakeholder deadlines, lead teams of off-shore contractors, and mentor junior developers.

### Software Engineer II | Full-stack @ Costco eCommerce

Issaquah, WA | July 2014 - July 2016

As my tenure with Costco matured, I began to lead more projects of increasing significance. One such project was our responsive design project. In this project, my team and I interfaced with BAs, UX designers, business stakeholders, QA, and on/off-site consultants to deliver a modern responsive site using then-modern build tools including Webpack 2, SCSS, and Mocha. We established order from the chaos of spaghetti/cowboy code using industry-standard tools and patterns.

### Software Engineer I | Full-stack @ Costco eCommerce

Issaquah, WA | July 2013 - July 2014

After my internship, I was hired as a full-stack software engineer working for Costco eCommerce. I worked with fellow engineers on many projects spanning the entire stack. I was given a bi-weekly on-call responsibility to triage production issues which had me collaborating with our Dev Ops, Sterling OMS, and Networking teams. During this time I:

- integrated internal and external web services
- performed general maintenance of applications
- built a manual authentication service that allowed customers to manage their membership details

### Software Engineer Intern | Full-stack @ Costco eCommerce

Issaquah, WA | April 2013 - July 2013

Started my SW career with a software engineering internship at the Costco HQ in Issaquah, WA. I was embedded within the Costco eCommerce team responsible for delivering [costco.com](https://www.costco.com) and [costco.ca](https://www.costco.ca). I was introduced to Costco's large, distributed architecture and a suite of [un]customized IBM products including WebSphere Commerce, DB2, and MQ.

---

## Industry projects

The following is a subset of notable projects from my industry experience divided by company and role.

### [REI](https://www.rei.com)

#### Front-end Platform

**Vite plugins, utilities, and configurations**

- [`@rei/create-package`](https://github.com/rei/create-package) is an NPM initializer written with Node and TypeScript and is the officially supported way to create NPM packages at REI.
- `@rei/vite-base-config` is the primary Vite and Vitest configuration module consumed by all product engineering teams at REI. It offers a baseline set of configuration defaults aligned with business requirements. Supported by unit tests, this configuration guarantees our Vue applications are optimized and contain the polyfills required by our browser-support matrix.
- `@rei/vite-plugin-alpine-uploader` is a Vite plugin that facilitates uploading assets compiled by **Vite** to Akamai NetStorage, our CDN. This enables teams to source their bundled assets from the CDN, which improves the speed and availability of these assets for customers.
- `@rei/vite-plugin-alpine-manifest-css` is a Vite plugin that alters the CSS property of entries defined in the manifest generated by Vite builds. It ensures the correct injection order of CSS chunk assets.
- `@rei/vite-plugin-alpine-stats` is a Vite plugin that does static analysis of a repository to provide statistics on the code. Once these statistics are compiled, they are sent to Grafana.

**Middleware**

- `@rei/ssr` is an Express application that runs alongside Spring Boot and facilitates server-rendering **Vue** applications. This is used by all product engineering teams using Vue as their UI framework.

**Back-end**

- Wrote a Spring Boot interceptor that makes HTTP requests to the `@rei/ssr` Express server.
- Wrote a custom Thymeleaf dialect within Spring Boot for the back-end integration of **Vite**-compiled assets.

**CI/CD**

- Wrote the GitLab CI/CD **bash** scripts for NPM modules used to publish NPM packages to REI's private NPM registry in Sonatype Nexus.
- `cov-stats` is a Node.js script that automatically sends unit test coverage results to the Grafana Front-End-Unit-Test Coverage board so that we can track project code coverage over time. It is integrated into GitLab CI as a job executed after a successful publish to REI's NPM registry

**Web applications**

- Climber's Site is REI's internal archetypal microsite used as a reference for all product engineering teams. It's written with Vue, Vite, Vitest, and Spring Boot.
- Packwood is an NPM package discovery tool used for reporting. It began as a hackathon project but became a fixture in the developer platform ecosystem. It's written with Vue, Vite, Vitest, and Spring Boot.

#### [REI Adventures](https://www.rei.com/adventures)

### [Costco eCommerce](https://www.costco.com)

TODO

- **Gas prices online**
- **Site redesign**
- **SEO improvements**
- **Member-only purchase**
- **SMS notifications**
- **Responsive redesign**
- **CRM and manual authentication**
