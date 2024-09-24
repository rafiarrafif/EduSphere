<template>
  <div class="w-full bg-accent-500 flex justify-center -pl-2 pt-16 pb-12">
    <div class="w-200 mx-16 max-2xl:w-full">
      <div
        class="h-fit flex justify-between max-sm:flex-col max-sm:justify-center"
      >
        <div class="flex flex-col gap-2 max-sm:items-center">
          <LogoLarge />
          <p
            class="flex w-64 font-medium text-accent-950 mt-2 max-sm:text-center"
          >
            Empowering learners worldwide with top-tier online courses. Unlock
            your potential today!
          </p>
          <div class="flex gap-1.5 items-center max-sm:mt-2">
            <a href="">
              <Icon
                name="ic:baseline-facebook"
                size="2em"
                class="text-accent-900"
              />
            </a>
            <a href="">
              <Icon
                name="mdi:twitter-circle"
                size="2em"
                class="text-accent-900"
              />
            </a>
            <a href="">
              <Icon
                name="mage:instagram-circle"
                size="2em"
                class="text-accent-900"
              />
            </a>
            <a href="https://iitc.nounoz.com" target="_parent">
              <Icon name="ph:globe-bold" size="1.9em" class="text-accent-900" />
            </a>
          </div>
        </div>
        <div class="h-fit text-accent-950 mt-4 flex flex-col max-sm:mt-6">
          <h1 class="font-extrabold text-2xl max-sm:text-center">Contact</h1>
          <p class="font-medium mt-2 max-sm:text-center">+62 857-0070-8384</p>
          <p class="font-medium max-sm:text-center">mikasa@nounoz.com</p>
        </div>
      </div>
      <div class="px-32 mt-6">
        <div class="h-1 bg-black rounded-full custom-br" />
      </div>
      <div class="flex flex-col justify-center text-center text-sm mt-6">
        <h1 class="text-accent-800">
          Created for the Intermedia Amikom competition. Organizers can share
          it, but selling is prohibited.
        </h1>
        <h1 class="text-accent-900">Copyright remains with the ABBS Team.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-br {
  background: rgb(153, 115, 11);
  background: -moz-linear-gradient(
    90deg,
    rgba(153, 115, 11, 0) 0%,
    rgba(153, 115, 11, 0.7000176779696253) 50%,
    rgba(153, 115, 11, 0) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(153, 115, 11, 0) 0%,
    rgba(153, 115, 11, 0.7000176779696253) 50%,
    rgba(153, 115, 11, 0) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(153, 115, 11, 0) 0%,
    rgba(153, 115, 11, 0.7000176779696253) 50%,
    rgba(153, 115, 11, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#99730b",endColorstr="#99730b",GradientType=1);
}
</style>
