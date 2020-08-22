<!-- markdownlint-disable MD041 -->

<img src="https://github.com/DiFronzo/deno-toolforge/blob/master/src/img/Wikimedia_Deno_Logo.svg" width="150px" height="150px" alt="some_text">

# [Deno.toolforge.org](https://deno.toolforge.org)

You wanna use a third-party library which is stored on GitHub and Deno.Land in [Deno](https://deno.land)?

Instead of writing:

```typescript
import { opn } from 'https://raw.githubusercontent.com/hashrock/deno-opn/master/opn.ts'

opn('https://example.com')
```

You can write:

```typescript
import { opn } from 'https://deno.toolforge.org/github/hashrock/deno-opn/master/opn.ts'

opn('https://example.com')
```

MIT
