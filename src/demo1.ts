const getSum = (arr: number[], legacy?: boolean): number => {
  if (legacy) {
    let sum = 0
    arr.map(o => sum += o)

    return sum
  } else {
    return arr.reduce((acc, val, i) => {
      const res = acc + val

      console.log(`iteration ${i}:`, res)
      return res
    })
  }
}

// Assign arrays
const numbers: number[] = [10, 20, 30, 40, 10, 20, 30, 40]

// Log sum
console.log('result:', getSum(numbers))
