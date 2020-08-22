<!-- markdownlint-disable MD041 -->

<!--![denopkg](./src/img/Wikimedia_Deno_Logo.svg| width=48)-->

# [Deno.toolforge.org](https://deno.toolforge.org)

You wanna use a third-party library which is stored on GitHub and Deno.Land in [Deno](https://deno.land)?

Instead of writing:

```typescript
import { opn } from 'https://raw.githubusercontent.com/hashrock/deno-opn/master/opn.ts'

opn('https://example.com')
```

You can write:

```typescript
import { opn } from 'https://deno.toolforge.org/hashrock/deno-opn/opn.ts'

opn('https://example.com')
```

Branches and tags are supported, just add `@{BRANCH_OR_TAG}` to the end of repository name, like this:

```typescript
import { opn } from 'https://deno.toolforge.org/hashrock/deno-opn@master/opn.ts'

opn('https://example.com')
```