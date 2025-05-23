/*
  5153 - IndexOf
  -------
  by Pineapple (@Pineapple0919) #medium #array

  ### Question

  Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

  ```ts
  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
  ```

  > View on GitHub: https://tsch.js.org/5153
*/

/* _____________ Your Code Here _____________ */

type IndexOf<T extends any[], U, Count extends any[] = []> =
  T extends [infer F, ...infer L]
    ? Equal<F, U> extends true
      ? Count['length']
      : IndexOf<L, U, [...Count, F]>
    : -1

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
  Expect<Equal<IndexOf<[], 1>, -1>>, // Edge case: empty array
  Expect<Equal<IndexOf<[undefined, null, false], null>, 1>>, // Test with null
  Expect<Equal<IndexOf<[undefined, null, false], undefined>, 0>>, // Test with undefined
  Expect<Equal<IndexOf<[true, false, true], true>, 0>>, // Test with boolean true
  Expect<Equal<IndexOf<[true, false, true], false>, 1>>, // Test with boolean false
  Expect<Equal<IndexOf<[1, 2, 3, 4, 5], 6>, -1>>, // Test with non-existent element
  Expect<Equal<IndexOf<[1, 2, 3, 4, 5], 5>, 4>>, // Test with last element
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5153/answer
  > View solutions: https://tsch.js.org/5153/solutions
  > More Challenges: https://tsch.js.org
*/
