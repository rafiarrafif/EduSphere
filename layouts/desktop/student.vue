<template>
  <div class="flex w-full h-screen">
    <div
      id="sidebar"
      class="flex bg-white w-72 h-full shadow-lg border-r-1 border-primary-900"
    >
      <div class="flex flex-col w-full">
        <div class="w-full h-36"></div>
        <div class="flex flex-col mx-4 w-fill-available">
          <SidebarNavigation />
          <SidebarNavigation />
        </div>
      </div>
    </div>
    <div id="main-viewport" class="w-full bg-primary-50">
      <slot />
    </div>
  </div>
</template>
