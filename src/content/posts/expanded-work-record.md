---
title: An expanded record of my work
pubDate: '2025-11-13'
---

This is my own long-form career archive. It’s public, but mostly for me. The short résumé version is <a href="/documents/cv/kurt-medley-cv-2025.pdf" target="_blank">here</a>.

## <span class="text-solid-mid">Career Highlights</span>

A selection of work that demonstrates platform impact, architectural leadership, and long-term contributions to engineering teams and systems.

- **Nuxt-Based Rendering Platform (Alpine Composer)**  
  Architected Alpine Composer, REI’s Nuxt + Uniform rendering platform for configuration-driven page creation using a Vue 3 component library.

- **Introduced Vite, Vitest & Vue 3 to REI**  
  Replaced legacy build tools with a modern Vite/Vitest workflow and established Vue 3 SSR patterns now adopted across REI. Full write-up [here](/modernizing-reis-build-system/).

- **Rewrote REI Adventures in Vue**  
  Led migration from legacy frameworks to Vue, implementing new customer journeys and improving maintainability.

- **Championed TypeScript Adoption**  
  Led org-wide TypeScript migration after VueConf 2023, producing documentation, examples, and onboarding support.

- **Rebuilt the REI Analytics Library**  
  Modernized a legacy analytics implementation using TypeScript, Vite, and Vitest, surfacing inconsistencies for future correction.

- **Standardized NPM Package Scaffolding**  
  Created and maintain REI’s official package initializer: [`create-package`](http://github.com/rei/create-package).

- **Built SSR Middleware for Vue**  
  Implemented a Dockerized Express server that provides SSR for Vue apps and integrates with Spring Boot.

- **Modernized Costco eCommerce Tooling**  
  Introduced Webpack and modern development practices, improving builds, asset delivery, and team productivity.

---

## <span class="text-solid-mid">Roles & Experience</span>

### <span class="text-solid-end">REI — Senior Software Engineer (Front-end Platforms & Integrations)</span>

Hybrid | April 2020 – Present

Lead engineer for Alpine Composer. Build and maintain applications, libraries, tooling, and infrastructure used by all product teams. Work spans platform architecture, performance, security, developer tooling, and collaboration with Design Systems, Platform Engineering, SEO, and Accessibility. Contributing engineer to Cedar.

### <span class="text-solid-end">REI Adventures — Senior Software Engineer</span>

Bellevue, WA | July 2019 – April 2020

Rebuilt the Adventures platform in Vue. Delivered core customer-facing experiences and partnered with UX, PM, and stakeholders. Participated in on-call rotations.

### <span class="text-solid-end">Costco eCommerce — Software Engineer III → I</span>

Issaquah, WA | July 2013 – July 2019 (III: 2016–2019 • II: 2014–2016 • I: 2013–2014)

Delivered front-end and full-stack features across checkout, warehouse locator, gas prices, and customer profile. Led major redesign efforts, built responsive systems, introduced modern tooling, mentored developers, and collaborated across engineering and business functions. Started as an intern working within a distributed IBM stack (WebSphere, DB2, MQ).

---

## <span class="text-solid-mid">Selected Projects & Contributions</span>

**Front-end work**

- Delivered production Vue pages for REI Adventures (landing, search, trip details, resource pages).

**Full-stack & internal tools**

- `@rei/ssr`: Dockerized Express-based SSR server for Vue.
- Climber’s Site: REI’s internal microsite archetype.
- Packwood: NPM package discovery service evolved into platform utility.
- Contributions to core Costco eCommerce customer journeys.

**Tooling, plugins & utilities**

- `@rei/create-package`: REI’s official JS/TS package initializer.
- `@rei/vite-base-config`: Standardized Vite/Vitest config.
- `@rei/vite-plugin-alpine-uploader`: Publishes assets to NetStorage.
- `@rei/vite-plugin-alpine-manifest-css`: Ensures stable CSS ordering.
- `@rei/vite-plugin-alpine-stats`: Pushes repository stats to Grafana.

**CI/CD & automation**

- Authored GitLab pipelines for internal package publishing.
- `cov-stats`: Coverage reporting system integrated with Grafana dashboards.
