<template>
  <div @closeDrawer="closeDrawer">
    <div v-if="children.length == 0" @click="getMethod">
      <q-item clickable v-ripple :inset-level="level">
        <q-item-section v-if="icon" avatar>
          <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>{{ title }}</q-item-section>
      </q-item>
    </div>
    <div v-else @click="getMethod" @closeDrawer="closeDrawer">
      <div v-if="children.length > 0">
        <!-- {{children}} -->
        <q-expansion-item
          expand-separator
          :icon="icon"
          :label="title"
          :caption="caption"
          :header-inset-level="level"
          default-closed
        >
          <EssentialLink v-for="child in children" :key="child" v-bind="child">
          </EssentialLink>
        </q-expansion-item>
      </div>
      <div v-else>
        <q-item clickable v-ripple :inset-level="level">
          <q-item-section>{{ title }}</q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },
    icon: {
      type: String,
      default: "",
    },
    level: {
      type: String,
      default: "",
    },
    children: [],
  },
  methods: {
    closeDrawer(isDrawerOpen) {
      this.leftDrawerOpen = isDrawerOpen;
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
});
</script>
