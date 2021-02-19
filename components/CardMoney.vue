// カード化したい。
<template>
  <ul class="ml-1 text-lg text-gray-800">
    <li>収入合計: {{ totalIncome }} 円</li>
    <li>支出合計: {{ totalExpenditures }} 円</li>
    <li>残高　　: {{ balance }} 円</li>
  </ul>
</template>

<script lang="ts">
import { expenses } from '~/components/DataExpenses'

var totalIncome = 0
var totalExpenditures = 0

for (let [key, value] of Object.entries(expenses)) {
  if (value['status'] === 0) {
    totalIncome += value['value']
  } else if (value['status'] === 1) {
    totalExpenditures += value['value']
  }
}

const balance = totalIncome - totalExpenditures

export default {
  data() {
    return { totalIncome, totalExpenditures, balance }
  },
}
</script>
