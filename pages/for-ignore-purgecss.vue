<template>
  <div class="text-center">
    <div
      class="border-indigo-600 border-gray-900 border-blue-500 border-green-500 border-blue-600 border-pink-600 border-orange-500 hover:bg-indigo-600 hover:bg-gray-900 hover:bg-blue-500 hover:bg-green-500 hover:bg-blue-600 hover:bg-pink-600 hover:bg-orange-500"
    >
      <span>ignore purgecss</span>
    </div>
    <p>tailwind.config.js にて、</p>
    <p>safelist, whitelist, whitePatterns, whitePatternsChildren</p>
    <p>を記述してもうまく効かなく、動的に当てたいcssもパージされるため</p>
    <p>ここに削除されたくない tailwind のクラスを書いています。</p>
    <p>将来的に修正したいです。</p>
    <p>試したもの　抜粋</p>
    <br />
    <code>safelist:{ greedy: [/^text-/] } </code>
    <br />
    <code>safelist: ['text-blue-500', 'border-blue-500', 'bg-blue-500'],</code>
    <br />
    <code>whitelist: ['text-blue-500', 'border-blue-500', 'bg-blue-500'],</code>
    <br />
    <code>whitelistPatterns: [正規表現], Childrenも同様に</code>
  </div>
</template>
