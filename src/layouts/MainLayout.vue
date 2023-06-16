<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-[#24292E] lg:h-[120px] md:h-[73px] h-[73px]">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="bg-[#13B497] hamburguer lg:top-[37px] md:top-[16px] top-[16px]"
        >
          <img class="" src="../assets/menu.png" alt="" />
        </q-btn>
        <q-toolbar-title>
          <img
            class="image-header lg:w-[84.79px] lg:h-[50px] w-[45px] h-[34px] top-[22px] lg:top-[32px]"
            src="../assets/logo.png"
            alt=""
        /></q-toolbar-title>

        <div class="md:!flex hidden">
          <div
            class="searchbar 2xl:w-[752px] xl:w-[400px] lg:w-[330px] lg:top-[32px] top-[16px] md:w-[330px] lg:!h-[56px]"
          >
            <input
              placeholder="Search here"
              class="border-l-[#13B497] border-2 bg-transparent"
            />
            <img class="lg:!top-[15px]" src="../assets/search.png" alt="" />
          </div>
          <q-btn
            class="bg-[#13B497] settings 2xl:!left-[1062px] 2xl:!absolute 2xl:!flex hidden"
          >
            <img class="" src="../assets/settings.png" alt="" />
          </q-btn>
        </div>

        <q-btn
          class="bg-[#13B497] bell 2xl:!absolute relative 2xl:left-[1398px] lg:mr-[10px] mr-[20px] lg:!h-[56px] lg:!w-[56px] lg:!top-[31px] lg:!p-0 md:!p-[8px]"
        >
          <img src="../assets/bell.png" alt="" />
          <q-badge class="badge"> </q-badge>
        </q-btn>
        <q-btn
          class="bg-[#13B497] chat 2xl:!flex 2xl:absolute relative hidden 2xl:left-[1476px;]"
        >
          <img src="../assets/chat.png" alt="" />
          <q-badge class="badge"> </q-badge>
        </q-btn>
        <q-btn
          class="present 2xl:!flex hidden 2xl:left-[1556px;] left-0 2xl:absolute relative"
        >
          <img src="../assets/present.png" alt="" />
          <q-badge class="badge"> </q-badge>
        </q-btn>

        <q-btn
          class="avatar 2xl:!absolute 2xl:left-[1685px] lg:mr-[10px] mr-[20px] lg:!h-[56px] lg:!w-[56px] lg:!top-[31px] md:!top-[12px]"
        >
          <img src="../assets/avatar.png" alt="" />
        </q-btn>

        <q-btn
          flat
          dense
          class="profile 2xl:!absolute 2xl:left-[1786px] 2xl:!top-[48px] xl:top-[30px] lg:top-[30px] top-[16px]"
        >
          <span class="lg:!flex md:hidden hidden">David</span>
          <img src="../assets/arrow.png" alt="" class="mb-[5px]" />
        </q-btn>
      </q-toolbar>
      <q-toolbar class="mt-[64px] h-[63px] bg-[#2D3339] lg:!flex hidden">
        <p class="ml-[83px] text-[#13B497] font-semibold">Dashboard /</p>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
});
</script>
<style>
.searchbar {
  position: absolute;
  height: 46px;
  left: 290px;
  background: #1c2126;
  border: 1px solid #2f363d;
  box-shadow: 0px 11px 23px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  padding: 10px 20px;
}
.searchbar input {
  height: 100%;
  width: 100%;
  border-top: none;
  border-right: none;
  border-bottom: none;
  padding-inline: 10px;
  font-size: 16px;
}
.searchbar img {
  top: 10px;
  right: 15px;
  position: absolute;
  color: gray;
  margin-right: 10px;
}
.settings {
  position: relative;
  width: 56px;
  height: 56px;
  top: 32px;
  border-radius: 12px;
}
.bell {
  position: relative;
  top: 12px;
  background: #2f363d;
  border-radius: 12px;
  padding: 8px;
  width: 36px;
  height: 36px;
}
.profile {
  position: relative;
  height: 24px;
  padding: 0;
}
.profile span {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
}

.chat {
  width: 56px;
  height: 56px;
  top: 31px;
  background: #2f363d;
  border-radius: 12px;
}
.present {
  width: 56px;
  height: 56px;
  top: 31px;
  background: #2f363d;
  border-radius: 12px;
}
.avatar {
  position: relative;
  width: 36px;
  top: 12px;
  height: 36px;
  border-radius: 12px;
  padding: 0;
}
.avatar img {
  border-radius: 12px;
}
.chat .badge {
  position: absolute;
  background: #d9b75f;
  top: -5px;
  right: 0;
}
.bell .badge {
  position: absolute;
  background: #d9b75f;
  top: -5px;
  right: 0;
}
.present .badge {
  background: #647280;
  position: absolute;
  top: -5px;
  right: 0;
}
.image-header {
  position: absolute;
  left: 94px;
  right: 90.69%;
  bottom: 93.93%;
}
.hamburguer {
  position: absolute;
  left: 39px;
  width: auto;
  padding: 0;
  background: transparent;
}
</style>
