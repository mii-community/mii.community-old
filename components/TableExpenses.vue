<template>
  <table class="container w-full border-2 border-gray-500">
    <caption class="text-xl pl-1 text-left">
      2021
    </caption>
    <tr class="bg-white">
      <th class="py-2 text-center border border-2 border-gray-500">日付</th>
      <th class="py-2 text-center border border-2 border-gray-500">概要</th>
      <th class="py-2 text-center border border-2 border-gray-500">収支</th>
    </tr>
    <tr v-for="(expense, index) in expenses" :key="index">
      <td class="text-center px-1 border border-dashed border-gray-500">
        {{ expense.date }}
      </td>
      <td class="min-w-24 pl-2 p-2 border border-dashed border-gray-500">
        {{ expense.desc }}
      </td>
      <td
        class="w-20 py-1 border border-dashed border-gray-500"
        :class="{
          'bg-green-200': expense.status == 0,
          'bg-red-200': expense.status == 1,
        }"
      >
        <div class="flex w-full">
          <span class="text-right pr-1 w-full">{{ expense.value }} 円</span>
        </div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { expenses } from '~/components/DataExpenses'

export default {
  data() {
    return { expenses }
  },
}
</script>
