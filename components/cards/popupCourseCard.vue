<template>
  <div
    class="animate__animated animate__fadeIn -top-4 w-96 h-fit flex flex-col"
    style="animation-duration: 0.2s"
  >
    <div class="w-full flex justify-center z-10">
      <Icon name="carbon:triangle-solid" size="1.8em" class="text-white" />
    </div>
    <div class="bg-white rounded-lg shadow-lg px-6 py-4 -mt-2">
      <div>
        <h1 class="text-lg font-bold line text-primary-950">
          {{ $t("data.courses.title." + props.course.id) }}
        </h1>
      </div>
      <div class="mt-2">
        <span class="text-xs text-darkGray-900">14 {{ $t("totalHours") }}</span>
        <span class="text-xs text-darkGray-900">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <span class="text-xs text-darkGray-900">Intermediate</span>
      </div>
      <div class="mt-2">
        <p class="text-sm">
          {{ $t("data.courses.description." + props.course.id) }}
        </p>
        <div class="mt-3 flex flex-col gap-2">
          <div class="flex gap-2">
            <Icon
              name="ion:checkmark-sharp"
              class="mt-0.5 w-6 text-darkGray-950"
            />
            <p class="text-sm flex-1 text-darkGray-900">
              {{ $t("data.courses.benefits[0]." + props.course.id) }}
            </p>
          </div>
          <div class="flex gap-2">
            <Icon
              name="ion:checkmark-sharp"
              class="mt-0.5 w-6 text-darkGray-950"
            />
            <p class="text-sm flex-1 text-darkGray-900">
              {{ $t("data.courses.benefits[1]." + props.course.id) }}
            </p>
          </div>
          <div class="flex gap-2">
            <Icon
              name="ion:checkmark-sharp"
              class="mt-0.5 w-6 text-darkGray-950"
            />
            <p class="text-sm flex-1 text-darkGray-900">
              {{ $t("data.courses.benefits[2]." + props.course.id) }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <button
          v-if="!isInCart"
          @click="addToCart"
          class="flex justify-center w-full gap-3 bg-accent-500 hover:bg-accent-400 py-4 rounded-lg pr-4"
        >
          <Icon
            name="solar:cart-plus-linear"
            class="ml-2 w-6 text-darkGray-950"
            size="1.4em"
          />
          <span class="text-base font-semibold text-darkGray-950">{{
            $t("landingpage.cart.addToCart")
          }}</span>
        </button>
        <button
          v-else
          @click="removeFromCart"
          class="flex justify-center w-full gap-3 bg-primary-700 hover:bg-primary-600 py-4 rounded-lg pr-4"
        >
          <Icon
            name="solar:cart-cross-linear"
            class="ml-2 w-6 text-darkGray-50"
            size="1.4em"
          />
          <span class="text-base font-semibold text-darkGray-50">{{
            $t("landingpage.cart.removeFromCart")
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartShoppingStore } from "~/stores/cartShopping";
const cartShoppingStore = useCartShoppingStore();
const props = defineProps<{ course: { [key: string]: any } }>();
const isInCart = computed(() =>
  cartShoppingStore.isItemInCart(props.course.id)
);
function addToCart() {
  const data = {
    id: props.course.id,
    image: props.course.image,
    mentor: props.course.mentor,
    price: props.course.discounted_price ?? props.course.original_price,
  };
  cartShoppingStore.addToCart(data);
}
function removeFromCart() {
  cartShoppingStore.removeFromCart(props.course.id);
}
</script>
