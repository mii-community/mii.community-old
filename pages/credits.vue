<template>
  <div class="wrapper">
    <main class="container mx-auto">
      <div class="flex">
        <h1 class="heading text-5xl">Credits</h1>
        <img
          class="force-16 md:force-32 my-auto ml-4"
          src="~/assets/img/team.svg"
          alt="メンバーを表すイラスト"
        />
      </div>

      <div class="container fade mt-6">
        <h2 id="Donators" class="heading text-2xl mt-2 mb-3">Donators</h2>
        <card-donator></card-donator>
        <h2 id="Contributors" class="heading text-2xl mt-6 mb-3">
          Contributors
        </h2>
        <card-contributor></card-contributor>
        <div class="mt-8 mb-4 pl-4 border-l-2 border-gray-600">
          <p>
            Donatorsには、みぃコミュニティに寄付してくださった方の
            名前と一言コメント を載せています。
          </p>
          <p>
            Contributorsには、なんらかの形で貢献してくださった方の
            名前と貢献内容 を載せています。
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
