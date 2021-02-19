interface Expense {
  date: string
  desc: string
  value: number
  status: number // 0: 収入, 1: 支出
}

export const expenses: Expense[] = [
  {
    date: '1/17',
    desc: 'IFTTT プロ版 (1ヶ月)',
    value: 550,
    status: 1,
  },
  {
    date: '2/9',
    desc: '寄付: PayPal',
    value: 1000,
    status: 0,
  },
  {
    date: '2/9',
    desc: 'Fee : PayPal',
    value: 76,
    status: 1,
  },
  {
    date: '2/9',
    desc: 'ドメイン代: mii.community (1年間)',
    value: 3850,
    status: 1,
  },
]
