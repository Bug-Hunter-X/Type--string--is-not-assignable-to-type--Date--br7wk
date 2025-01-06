# TypeScript Bug: Type 'string' is not assignable to type 'Date'

This repository demonstrates a common type error in TypeScript where a string is incorrectly assigned to a Date type.  The bug occurs in the `greet` function, which attempts to use a string as a Date parameter. This illustrates the importance of proper type checking in TypeScript.

## Bug

The `bug.ts` file contains the buggy code. The `greet` function incorrectly accepts a string for the `date` parameter. Attempting to run this code will result in a TypeScript compiler error.

## Solution

The `bugSolution.ts` file provides a corrected version of the code where a new Date object is created instead, fixing the type error.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Open `bug.ts` in a TypeScript compiler or IDE.
4. Observe the TypeScript compiler error.
5. Open `bugSolution.ts` to see the corrected code.