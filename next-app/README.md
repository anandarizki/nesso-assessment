# Next.js Landing Page

You are in the `next-app` folder. This folder contains the project that showcases converting a Figma design into frontend code.

**Live demo page: [https://nesso-next.rizki.id](https://nesso-next.rizki.id)**

### Pagespeed Insight Result

Result: [https://pagespeed.web.dev/analysis/https-nesso-next-rizki-id/u32bj3sg2r?form_factor=desktop](https://pagespeed.web.dev/analysis/https-nesso-next-rizki-id/u32bj3sg2r?form_factor=desktop)

#### Desktop

![Pagespeed Insight](docs/pagespeed.jpg)

#### Mobile

![Pagespeed Insight Mobile](docs/pagespeed-mobile.jpg)

## 💻 Installation & Running Locally

### Prerequisites

- Node.js 20.9.0 or later
- npm

### Steps

1. Clone the repository

```bash
git clone https://github.com/anandarizki/nesso-assessment.git
cd nesso-assessment/next-app
```

2. Install dependencies (ensure you are in `next-app` folder)

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open the app in your browser

```
http://localhost:3000
```

## ⛓️ Assumptions

- I assume the assessment is intended to evaluate how closely the page can be implemented to match the original design. Therefore, even though I may personally disagree with some design decisions, I kept the implementation faithful to the provided design.
- The Figma design does not provide a small-screen layout, so the mobile version is based on my own judgment.
- The icon color defined in the Figma file for the “**Brands that work with us**” section is assumed to represent the hover state.
- The card with the arrow in the “**I nostri servizi**” section is assumed to indicate a hover interaction.

## 🛠️ Development Approach

### File Structure and Atomic Design

The approach is not only about splitting code by domain, but also by layer. Components are structured from the smallest to the largest, with a one-way dependency flow from small to big. Higher-level layers cannot be accessed by lower-level ones, which keeps dependencies clear and maintainable.

Components are split into the smallest units (`/components/ui`), then composed into base components (`/components/shared`), and finally into features (`/features/*`). This `features` will be use to build the pages. The smallest units and composed components do not contain logic, as they are purely presentational UI elements.

`Features` are independent of each other. Deleting any feature folder will not affect the other features. Below is a visualization of the layer relationships.

![Layer Relation](docs/layer-relation.png)

Below is an example of the file structure related to the **Portfolio section**.

```
src/
├── app/                           # NEXT.JS ROUTING (The "Where")
│   └── page.tsx                   # Homepage
│
├── components/                    # GLOBAL UI (The "Building Blocks")
│   ├── ui/                        # "Atoms": raw primitives
│   │   ├── button.tsx
│   └── shared/                    # "Molecules": Used across features
│       └── section-wrapper.tsx    # Combination of container and typography
│
├── features/                      # BUSINESS DOMAINS (The "Meat")
│   └── portfolio-section/
│       ├── components/            # "Organisms": Portfolio Section specific UI
│       │   └── showcase-slider.tsx
│       └── index.ts               # The Public API for this feature
│
└── utils/                         # PURE HELPERS
    └── cn.ts                      # Tailwind merge utility
```

> **Trade-offs** : For a simple project, this structure may feel overly complex. However, the benefits become more apparent as the project grows, providing better scalability, clearer boundaries, and easier long-term maintenance.

### Technical Decisions

#### Tailwind CSS for styling

Not a requirement, but based on the design, Tailwind felt like the most efficient choice. The layout is relatively generic, allowing me to move quickly while keeping styles consistent. Styling lives close to the markup, so there’s no need to jump between files. During implementation, some inconsistencies in font styles, spacing, and color usage in the design slowed things down slightly compared to usual.

> **Trade-offs** : Using Tailwind CSS can result in verbose HTML, both in .tsx files and when inspecting the markup in the browser. Additionally, when the design is inconsistent, it often requires creating custom utilities or hardcoded values, which can reduce clarity and reusability..

#### Theme Tokens

Theme tokens are defined as CSS variables in global.css. This approach ensures consistency across the application, enables faster styling iteration, and provides a single source of truth for colors and design values.

```css
:root {
  --background: #ffffff;
  --foreground-100: #f1f1f1;
  --foreground-200: #f6f6f6;
  --foreground-300: #8e8e8e;
  --foreground-400: #636363;
  --foreground: #434343;
  --foreground-900: #2f3042;
  --accent: #0b5ed7;
  --max: #000;
}
```

#### TypeScript over JavaScript

Type safety improves confidence, reduces mental overhead, and eliminates the need to memorize implicit data shapes.

#### kebab-case over camelCase

All file and folder names use kebab-case. This is a common convention in modern libraries and improves consistency. It also avoids case-sensitivity issues when working with Git across different operating systems.

#### Regular functions over arrow functions

Regular function declarations are the default style in many modern libraries, including Next.js. They are also hoisted, which can be beneficial in certain scenarios.

#### Compound Component Pattern over props drilling

```js
<Card>
  <CardTitle>Hello</CardTitle>
  <CardContent>This is card</CardContent>
</Card>

//instead of

<Card
  title="Hello"
  content="This is card"
/>
```

This approach is easier to read because it follows the natural structure of HTML. It is also more flexible: elements can be rearranged, additional components can be inserted, and interactive behavior can be added when needed. That said, this is not applied strictly—some components still use props where it makes more sense. The choice depends on the use case.

#### CVA for Maintainability and Scalability

Used for scalability and type safety, rather than relying on concatenated class strings. Compared to traditional approaches—such as messy template literals, complex ternary operators, or spaghetti if/else conditions—CVA is much easier to maintain. This becomes especially valuable when a component has multiple combined conditions, such as color, size, and variant.

```
<Button
  variant="fill"
  as="a" //Use <a> tag instead of <button>, all valid html tag is allowed
  theme="gray"
  size="icon"
>
  <IconComponent />
</Button>
```

## ⚡ Performance, Accessibility, and SEO

### Responsiveness

Responsiveness is handled not only by shrinking component sizes, but also by rearranging element positions without removing any content. This is managed entirely with CSS rather than conditional logic in React, resulting in cleaner code and better performance.

### Performance & Rendering

Server-side rendering (SSR) is prioritized to take full advantage of Next.js, improving initial load time and SEO.

### Semantic HTML & SEO

HTML elements are used according to their purpose: h1 for the main title, h2 for section titles, and h3 for titles within sections. This preserves a clear and logical information hierarchy for both users and search engines.

### Image Optimization

Images are properly resized and provided with appropriate size attributes. Since images are often the largest performance bottleneck, this significantly improves page loading speed.

### Accessibility (ARIA usage)

ARIA attributes (such as aria-label and aria-controls) are added only when necessary. Not all elements require ARIA—native semantic HTML already provides accessibility information, and overusing ARIA can be redundant or even harmful to assistive technologies.

## 🧩 Interactive Component

- Mobile navigation
- Slider in the showcase section

## ⏳ What I would do with more time

- Create **[Storybook](https://storybook.js.org/)** for component documentation and isolation, making components easier to scale and maintain in the future
- Add scroll-based animations to make the page feel more interactive
- Add error handling and user feedback when an image fails to load
- Add an option to switch between dark and light mode
- Refine the design with a designer, as font sizes, spacing, and color codes are inconsistent across sections

> AI was used to help with minor vocabulary improvements while writing this README. All technical decisions and content are based on my own understanding and implementation of the project.
