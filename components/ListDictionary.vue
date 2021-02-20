<template>
  <div>
    <ul>
      <li v-for="(diction, index) in dictionary" :key="index">
        <div
          class="flex my-auto font-bold text-lg cursor-pointer"
          @click="
            $copyText(
              'https://mii.community/dictionary/#' +
                diction.idiom.replace(/ /g, '-')
            ),
              afterCopy()
          "
        >
          <span>-</span>
          <h3
            :id="diction.idiom.replace(/ /g, '-')"
            class="-mt-16 pt-16 ml-2 text-gray-900"
          >
            {{ diction.idiom }}
          </h3>
          <img
            class="my-auto ml-2 h-4 w-4"
            src="~/assets/img/mark-link.svg"
            alt="リンクを表しているマーク"
          />
        </div>
        <h4 class="text-gray-800 mt-2">{{ diction.mean }}</h4>
        <div
          v-if="index != dictionary.length - 1"
          key="not-last-child-diction"
          class="border-t border-dotted border-gray-500 my-3"
        ></div>
      </li>
    </ul>
    <div
      id="notifyCopied"
      class="text-lg fixed bottom-0 z-30 flex justify-center items-center w-64 h-12 mb-4 text-white bg-blue-400 rounded-xl shadow duration-200"
      :class="{ show: notifyCopied }"
    >
      Copied!
    </div>
  </div>
</template>

<script lang="ts">
interface Dictionary {
  idiom: string
  mean: string
}

const dictionary: Dictionary[] = [
  {
    idiom: 'みぃコミュニティ',
    mean:
      'Discord サーバー発祥のコミュニティ。2021年 1月 16日 に単なる Discord サーバーから、いろいろ生やした結果コミュニティに拡張された。',
  },
  {
    idiom: 'みぃサーバー',
    mean:
      '2020年 4月 21日に誕生したみぃコミュニティの Discord のサーバー。サーバー名は みぃ',
  },
  {
    idiom: 'みぃ様',
    mean:
      'みぃサーバーの機能を拡張している飼い猫。実態は Discord の bot である。',
  },
  {
    idiom: 'みぃメンバー',
    mean:
      'みぃコミュニティのメンバー。本拠点であるみぃサーバーのメンバーの総称。',
  },
  {
    idiom: 'みぃサイト',
    mean:
      'このサイトのこと。mii.community というドメインで運用している。最高のドメインを勝ち取れた。',
  },
  {
    idiom: 'みぃツイート',
    mean:
      'みぃメンバーのツイート(が流れるリストのことも指す)。みぃサーバー内にもみぃツイートが流れている。',
  },
  {
    idiom: 'みぃカレンダー',
    mean:
      '主にみぃメンバーの誕生日を登録している(自己申告制)。登録している場合、みぃサーバーの主要チャンネルで誕生日を迎えた人が祝われる。',
  },
  {
    idiom: 'みぃプレイリスト',
    mean:
      'みぃメンバー同士で好きな曲を共有するために生まれたプレイリスト。Spotify 版と YouTube 版がある。',
  },
  {
    idiom: '元素ガチャ',
    mean:
      'Hirosuke が開発しているアプリ。回すと何かしらの元素が排出される理系ガチャ。実は Undefined が排出されたこともあった。まだまだ開発途中らしい。',
  },
  {
    idiom: 'mii-community',
    mean:
      'GitHub Organization (グループのようなもの)の ID. 基本的にみぃ様やみぃサイトはこの GitHub Organization 内で開発される。みぃメンバーがリポジトリを作ることもできる。例) 元素ガチャ',
  },
  {
    idiom: 'カズカズムーブ',
    mean:
      'メッセージを送信してすぐに削除すること。kazukazu123123 がよく行うことから。',
  },
  {
    idiom: 'k↑z',
    mean:
      'kazukazu123123 のこと。特定の IME で zk が ↑ に変換されるため、略称の kzkz から k↑z となった。',
  },
  {
    idiom: 'ドグマグ・ララ',
    mean:
      'ドグラ・マグラのこと。みぃメンバーの間でドグラ・マグラが流行っており、愛称のようなものになった。',
  },
  {
    idiom: 'もしもし',
    mean:
      '生存確認から単なるかまってほしいとき、果ては批評・絶賛するときまで、何にでも使える便利な単語。例えば: 今使ってるエディター重くてもしもしなんだよね。',
  },
  {
    idiom: 'あとリセットボタン',
    mean:
      'リセットボタン実装願い(マジで頼む) HiraginoYuki の 15-puzzle.app にいつまで経ってもリセットボタンが実装されないことから。',
  },
  {
    idiom: 'あとタイマー',
    mean:
      'HiraginoYuki の 15-puzzle.app にいつまでもタイマーが実装されないことから囁かれるようになった。',
  },

  {
    idiom: 'なで',
    mean:
      '「なんで？」「なぜ？」など、人に理由を問う時に。略称は「nad」 例えば: A「ごめんやっぱゲームやらん」B「なで？」発祥はみぃメンバーの Assault',
  },
  { idiom: 'もり', mean: '無理。あくまでも「森」ではない。らしい。' },
  { idiom: 'エル真央', mean: 'lmao の意。' },
  { idiom: '誰よその女！！', mean: 'エル真央 への模範解答。' },
  {
    idiom: '絵',
    mean:
      '「え？」ってときにたまに使われる。元は誤変換。例えば: A「やっぱリセットボタン実装しない」B「絵」',
  },
  { idiom: 'fypo', mean: 'typo (タイプミス) の意。発言者は HiraginoYuki' },
  {
    idiom: 'fyoi',
    mean:
      'fypo の typo のこと。QWERTY配列において、po と oi が横並びなことでタイポされた。発言者は tenzyu',
  },
  {
    idiom: 'Talse',
    mean:
      'False の頭文字が T に置き換えられたもの。だぶん偽。発言者は HiraginoYuki',
  },
  {
    idiom: 'Frue',
    mean:
      'True の頭文字が F に置き換えられたもの。たぶん真。うそかも。発言者は HiraginoYuki',
  },
  {
    idiom: 'さうんど',
    mean:
      '「おと」とも言う。VC などでめっちゃうるさい人がいたり、めっちゃうるさい音が流れたときに。kazukazu123123 がよく使う。Talse かもしれない。',
  },
  {
    idiom: '台風おこすな',
    mean: 'あまりにもうるさい風の音を VC 中に流したユーザーにかける言葉。',
  },
  {
    idiom: 'ぶちぶちん',
    mean:
      'VC 中に HiraginoYuki の音声がぶちぶちなることから、Hirosuke からぶちぶちんと囁かれた。実は種族名かもしれない。',
  },
  {
    idiom: 'いい感じ',
    mean:
      'もしもしに次ぐ便利な単語。定義はものすごくいい感じにアバウトなので、いい感じだと思ったらいい感じを使おう。',
  },
  {
    idiom: 'わろた',
    mean:
      '「ワロタ」と同じようで同じじゃないらしい。面白いときやいい感じのときに使おう。わろた。',
  },
  {
    idiom:
      '【一言】ひろすけっていいます。15歳の独身男性。身長は171cmで体重は63kg。趣味は特にないかな。まあ、挙げるとしたら、読書かな。好きなものは、パセリゴーヤレタス。嫌いなものは集団心理。あと、ハーバード大卒。中学校では授業中本しか読んでなかった。友達はいらないから作ってない。ちなみにIQは130より少し上。父親が不動産会社の社長で母がパリの有名上場企業の会長。最近抜け毛が激しいのが悩み。庶民ども、どうぞよろしく。',
    mean: 'Hirosuke の自己紹介。内容は Talse だと思われる。',
  },
  {
    idiom: 'POW',
    mean:
      '「pOw」とか、「POw」とか、色々。もしもしと同じぐらい使用頻度高いかも。「Poew」や「Pew」などの、fypo やらなんやら混ざった違う奴もあるよ。例えば: A「これどう思う？」B「Pow やね」',
  },
  {
    idiom: 'ヌオー',
    mean:
      'HiraginoYuki がめっちゃヌオーにハマって、そこからめっちゃ使われるようになった。珍しくみぃ様にネタ機能として実装されていて、「ヌオー」と発言するとヌオーの画像が飛んでくる。',
  },
  {
    idiom: 'ヌ・王',
    mean:
      'みぃサーバーにおけるヌオーの進化形。「ヌ・王」と呟くと、王冠を被ったキングヌオーを召喚できる。',
  },
  {
    idiom: 'ヒラギノ節炸裂',
    mean:
      'HiraginoYuki の面白い発言を称賛するときのセリフ。これをいうと HiraginoYuki が喜ぶ、かなりかわいい。',
  },
  {
    idiom: 'バンファミリー',
    mean:
      '一時期、メンバーのニックネームが○○バンで溢れたときに生まれた言葉。バンファミリーの父は 煽音バン。',
  },
  {
    idiom: 'えろいね。─ えろくはないが。',
    mean: 'It means nothing. tenzyuしか使わない。はずだった。',
  },
  {
    idiom: 'みぃクラフト',
    mean:
      'みぃコミュニティでマルチプレイしているマインクラフト(サーバー)のこと。バニラの体制を保ったまま、いくつか便利なプラグインが入っていたりする。',
  },
  {
    idiom: 'みぃクラやることない',
    mean:
      '一時期かなり時間を溶かしたみぃマイクラが、閑散としてしまったために、言われるようになった。',
  },
  {
    idiom: 'donators (単数形)',
    mean: '2人以上が寄付してくれると思って作ったロールですが、1人でした。',
  },
  {
    idiom: 'オレら (単数形)',
    mean:
      'tenzyu がみんなそうだろうと思って話していたことが、実は tenzyu だけ該当する話だった際のツッコミ。',
  },
  {
    idiom: '優しい私にくれるの？！',
    mean:
      'ん…？　Apex 配信中の 望月よもぎ の言い間違え。優しくないことをした直後に、自分のことを優しいと言った。録画・録音しそびれたため面白さが半減してしまった。',
  },
  {
    idiom: '邪悪な機能',
    mean:
      'みぃサーバーのオンライン時間ランキングを指す。みなさん Discord に張り付いていらっしゃる。発言者は chun37',
  },
  {
    idiom: 'タイムゾーンどこ？',
    mean:
      '起きた報告の時間が異常だと、日本に住んでいないことにされる。寝る報告も同様。みぃメンバーは生活リズムが破綻しがち。',
  },
  {
    idiom: '信頼.zip',
    mean:
      '信頼されると与えられる称号(？)だいたい HiraginoYuki からプレゼントされる。',
  },
  {
    idiom: '誤解.zip',
    mean: '事実上の Hirosuke の代名詞。HiraginoYuki からの愛のある罵倒。',
  },
  {
    idiom: 'I am a pen!',
    mean: 'tenzyu が VC 中に吐き出した奇言。ときどきこの言葉で刺される。',
  },
  {
    idiom: '#インターネットやめろ',
    mean:
      'Discord のやりすぎを危惧して、お互いに掛け合った言葉。しかし Discord をやめられた者はいなかった。',
  },
  { idiom: '寝るわおやすみ', mean: '寝ない。' },
  {
    idiom:
      '進捗どうですか目進捗どうです科進捗どうですか属進捗どうですかザウルスと申します。',
    mean:
      '進捗ザウルス。みぃサーバーでは starvolt のこと。彼女が現れる前に進捗を生んでおこう。進捗どうですか？',
  },
  {
    idiom: 'セルフ品性',
    mean:
      '品性ワード（低俗、暴言など）を発言した直後に、自分で品性リアクションをつけたり、自分に対して品性と発言する行為。品性ですよ。',
  },
  {
    idiom: 'セル真央',
    mean:
      '誰よその女！ではなく、自分自身を笑っている様のこと。self lmao で selmao らしい。',
  },
  {
    idiom: 'Wikipedian',
    mean:
      'Discord 内で Wikipedia の記事を検索できる bot のこと。監督: Hirosuke, 実装: tenzyu',
  },
  {
    idiom: 'ねぇ聞いて！',
    mean: 'Hirosuke の話始め。Hirosuke の場合のみにみんなが耳を傾けている。',
  },
  {
    idiom: 'ウオオオオオオオ',
    mean:
      '「オ」の文字数は適当。何文字でもいい。めっちゃやる気が出たときなどに。',
  },
  {
    idiom: 'こんにち……',
    mean:
      '「AYY GG　こんばんは〜笑」─　夜の Krunker 中、 望月るな が HiraginoYuki を射殺しようとしたところ、返り討ちにされ、さらに怪レい日本語を矯正された。実際は時間帯ではなく文化の違いとして片付けられている(一部のみぃメンバーの生活リズムが狂っているため)。',
  },
  {
    idiom: 'JavaScript (ヤバスクリプト)',
    mean:
      'Google 翻訳エストニア語の発音。名前の通りヤバい(ひどい)コードに対して使われる言葉。',
  },
  {
    idiom: 'Japanese (ヤバニーズ)',
    mean:
      'ヤバスクリプトの派生。怪レい日本語を連発するとこう呼ばれるようになる。',
  },
  {
    idiom: '😂👍',
    mean:
      'ジョイサムズアップ。HiraginoYuki のお気に入りで、よくリアクションされる。',
  },
  {
    idiom: '雪景色事件',
    mean:
      '一部のユーザーが白単色アイコンかつニックネームを「白」に統一した事件。文章の個性だけで乗り切ろうとしていた。が、管理者権限で戻された。',
  },
  {
    idiom: 'ヌオー砲',
    mean:
      'メッセージのリアクションをポケモンのヌオーで埋めるもの。合図を送ると HiraginoYuki が実行する。',
  },
  {
    idiom: 'React やめましょうよ〜笑',
    mean:
      '元素ガチャの開発中に Hirosuke が HiraginoYuki に放った言葉。ダメだ。React は勉強しろ。',
  },
  {
    idiom: 'それって Vue でもできますよね？',
    mean: '反 React 勢力(1人)の嫌がらせ。',
  },
]
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

export default Vue.extend({
  data() {
    return { dictionary, notifyCopied: false }
  },
  mounted() {
    const hash = decodeURI(location.hash)
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash)
    }
  },
  methods: {
    afterCopy: function () {
      if (this.notifyCopied == true) {
        return
      }
      this.notifyCopied = true
      setTimeout(this.hideNotify, 3000)
    },
    hideNotify() {
      this.notifyCopied = false
    },
  },
})
</script>

<style scoped>
#notifyCopied {
  opacity: 0;
  left: calc(50% - 128px);
  transform: translateY(100%);
  &.show {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
