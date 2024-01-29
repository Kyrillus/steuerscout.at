# TaxApp

Find a tax consultant that suits your needs.

## Main Techstack
[Next.js](https://nextjs.org/) + [Mantine](https://mantine.dev/) + [Supabase](https://supabase.com/)

## Additional Technologies

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

### npm scripts

#### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

#### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Supabase

#### Getting started 

When developing we want to [use Supabase in local development mode](https://supabase.com/docs/guides/cli/local-development).

The Supabase CLI uses Docker containers to manage the local development stack, therefore to get started, we have to [install Docker Desktop](https://docs.docker.com/desktop/).

Run the CLI by prefixing each command with `npx`: (or [install the Supabase CLI](https://supabase.com/docs/guides/cli/getting-started))

- `supabase start` - to start the Supabase stack (takes longer when executed the first time)
- `supabase stop` - to can stop the Supabase stack

#### Database changes

Database changes are managed through [Database migrations](https://supabase.com/docs/guides/cli/local-development#database-migrations).

Therefore we want to create migration files and add the SQL Queries that describe the changes to the database.

