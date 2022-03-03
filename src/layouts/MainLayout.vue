<template>
  <q-layout view="hHh LpR lff">
    <q-header elevated class="bg-grey-9 text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          v-show="!leftDrawerOpen"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="row items-center q-py-sm q-gutter-x-md">
          <q-btn @click="$router.push('/')" flat>
            <img
              style="width: 200px; max-width: 80vw"
              src="../assets/logo.png"
            />
          </q-btn>
          <q-input
            style="max-width: 350px"
            outlined
            dense
            bg-color="white"
            color="black"
            class="border-none outline-none q-pl-xl"
            placeholder="Search Here"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-icon name="format_list_bulleted" />
          <q-icon name="dashboard" />
          <q-icon name="map" />
        </q-toolbar-title>

        <div class="q-gutter-x-xs">
          <q-btn flat round dense icon="notifications" />
          <q-btn flat round dense icon="mode_comment" />
          <span>Hi, admin</span>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :breakpoint="500"
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
    >
      <q-list separator>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "../components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  data() {
    return {
      leftDrawer: ref(false),
    };
  },

  components: {
    EssentialLink,
  },
  setup() {
    const $q = useQuasar();
    const linksList = [
      {
        title: "Overview",
        icon: "cloud_queue",
        link: "/",
        useMethod: "",
        level: "0",
        children: [],
      },
      {
        title: "Report",
        icon: "description",
        link: "/",
        useMethod: "",
        level: "0",
        children: [],
      },

      {
        title: "Map",
        icon: "map",
        link: "/",
        useMethod: "",
        level: "0",
        children: [],
      },
      {
        title: "Location",
        icon: "explore",
        link: "/",
        useMethod: "",
        level: "0",
        children: [],
      },
      {
        title: "Device Management",
        icon: "format_list_bulleted",
        link: "/",
        useMethod: "",
        level: "0",
        children: [
          {
            title: "Sensor",
            icon: "signal_cellular_alt",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Gateway",
            icon: "router",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Camera",
            icon: "photo_camera",
            link: "/",
            level: "1",
            children: [],
          },
        ],
      },
      {
        title: "Manage Work",
        icon: "format_list_bulleted",
        link: "/",
        useMethod: "",
        level: "0",
        children: [
          {
            title: "Work Management",
            icon: "work",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Work Status",
            icon: "badge",
            link: "/",
            level: "1",
            children: [],
          },
        ],
      },
      {
        title: "Setting",
        icon: "format_list_bulleted",
        link: "/",
        useMethod: "",
        level: "0",
        children: [
          {
            title: "Alert",
            icon: "info",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Network",
            icon: "wifi",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Location Setting",
            icon: "explore",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "User",
            icon: "person",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Permission Setting",
            icon: "manage_accounts",
            link: "/",
            level: "1",
            children: [],
          },
          {
            title: "Form",
            icon: "description",
            link: "/",
            level: "1",
            children: [],
          },
        ],
      },
      {
        title: "Logout",
        icon: "logout",
        link: "/",
        useMethod: "",
        level: "0",
        children: [],
      },
    ];
    const leftDrawerOpen = ref(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
    $q.platform.is.mobile;
  },
};
</script>
