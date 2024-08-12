There are two sorted arrays that both only contain integers.  
**Task** is to find a way to merge them into a single one, sorted in asc order.

Validation is not necessary. If both arr1 and arr2 are empty, then just return an empty array.

**Examples (input -> output)**
```
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
```

**source:**  https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
