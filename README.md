# StudentHub – Student Information Website

Activity 2: Building Your Own Reusable Components (ITE 18)

A Nuxt.js + Tailwind CSS website that shows student information using **reusable Vue components** and **props**.
All student records are **fictional sample data** made for this demo.

## How to run

Use Node.js 24.15.0 or a newer Node.js 24 release.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:3000).

## Pages

| Page | File | Components used |
| --- | --- | --- |
| Home (`/`) | `app/pages/index.vue` | AppButton, StudentCard (3), InfoCard (2) |
| Students (`/students`) | `app/pages/students.vue` | AppButton (year filters), StudentCard (6) |

Both pages use `app/layouts/default.vue` for the shared header and footer.

## Reusable components (`app/components/`)

| Component | Props | What it does |
| --- | --- | --- |
| `AppHeader.vue` | none | Site name and navigation links with `NuxtLink`. |
| `AppFooter.vue` | none | Copyright line with the site name and current year. |
| `StudentCard.vue` | `name`, `studentId`, `course`, `yearLevel` (required); `avatar`, `section`, `email` (optional) | Shows one student. Has no data of its own; the page passes everything in. |
| `InfoCard.vue` | `title`, `description` (required); `accent` (optional) | A card for any informational text. |
| `AppButton.vue` | `label` (required); `color`, `type`, `to` (optional) | A styled button. `color` changes its look; `to` turns it into a link; emits `click`. |

Student data lives in one place, `app/data/students.ts`. Pages loop over this list with `v-for`
and pass each student to `<StudentCard>` through props, so there is no repeated card HTML.

## Project structure

```
app/
├── app.vue
├── assets/css/main.css      # Tailwind import
├── components/              # The 5 reusable components
├── data/students.ts         # Fictional sample records
├── layouts/default.vue      # Page frame
└── pages/
    ├── index.vue
    └── students.vue
public/
└── images/avatars/          # Placeholder avatar images
```
#
