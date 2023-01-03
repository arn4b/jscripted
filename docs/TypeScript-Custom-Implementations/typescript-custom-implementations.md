---
sidebar_position: 3
title: TypeScript Custom Implementations
---

## Partial

```typescript
// Partial means turn each property optional.

// To get the properties we can use keyof

// type A = {
//   a: number
//   b: string
// }

// type C = keyof A // 'a' | 'b'

// Then we can just use Mapped Type to map each type to optional by ?.

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
```

## Required

```ts
// Looking at the code example, we can see that the requirment is to remove the ? on each property name.

// To achieve this, we need to use the - , introduced in TypeScript 2.8.

// - allows us to remove modifiers like readonly and ?.

// type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] }; // Remove readonly and ?
// type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }; // Add readonly and ?

// So the answer to this question is simply a Mapped Type with -.

type MyRequired<Type> = {
  [P in keyof Type]-?: Type[P]
}
```