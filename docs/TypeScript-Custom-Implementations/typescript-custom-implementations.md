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

## Readonly

```ts
// The requirment is to add readonly on each property name.

// To achieve this, we can just use Mapped Type, which allows us to basically map the property to the readonly verison.


type MyReadonly<T> = { 
  readonly [P in keyof T]: T[P] 
}
```

## Record

```ts
// Looking at the description, we need to somehow create an object out of the union type.

// This is perfect use case of Mapped Type.

type MyRecord<K, V> = {
   [P in K]: V
}

// But only string, symbol and number can be used as object key, so we need to add constraint by extends

type MyRecord<K extends string | number | symbol, V> = {
   [P in K]: V
}

// A useful trick is that we can use keyof any to shorten the restraint, since keyof any would return all the possible types of object keys.

type MyRecord<K extends keyof any, V> = {
   [P in K]: V
}
```

## Pick

```ts
// The requirment is to pick some properties from the object.

// To achieve this, we can use Mapped Type to map the properties we want to pick.

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```