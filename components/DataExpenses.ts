interface Expense {
  date: string
  desc: string
  value: number
  status: number // 0: 収入, 1: 支出
}

export const expenses: Expense[] = [
  {
    date: '1/17',
    desc: 'IFTTT プロ版契約 (1ヶ月)',
    value: 550,
    status: 1,
  },
  {
    date: '2/9',
    desc: 'ドメイン契約支援: PayPal',
    value: 1000,
    status: 0,
  },
  {
    date: '2/9',
    desc: '手数料 : PayPal',
    value: 76,
    status: 1,
  },
  {
    date: '2/9',
    desc: 'ドメイン契約: mii.community (1年間)',
    value: 3850,
    status: 1,
  },
  {
    date: '2/22',
    desc: 'ドメイン契約: genso-gacha.com (1年間)',
    value: 1540,
    status: 1,
  },
]
