<!-- markdownlint-disable MD041 -->

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
