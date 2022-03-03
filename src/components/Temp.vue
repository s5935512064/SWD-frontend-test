<script>
import { ref, onMounted } from "vue";
import JobTable from "src/components/table/JobTable.vue";
import { jobListColumn } from "src/util/constant/column";
import { getJobList, baseURL } from "src/util/service";
import UpdateJob from "src/components/pop-up/UpdateJob.vue";
import JobsComment from "src/components/pop-up/JobsComment.vue";
import dayjs from "dayjs";

export default {
  components: {
    JobTable,
    JobsComment,
    UpdateJob,
  },
  setup() {
    const id = ref(null);
    const columns = ref(jobListColumn);
    const rows = ref([]);
    const tempRow = ref([]);
    const title = ref(null);
    const roadInformation = ref(null);
    const params = ref([]);
    const iri = ref(null);
    const actionType = ref(null);
    const isShowDialog = ref(null);
    const roadName = ref(null);

    const dateFormat = (date) => {
      const day = dayjs(date).format("YYYY-MM-DD");
      const time = dayjs(date).format("HH:MM:ss");

      return { day, time };
    };

    const initRows = async () => {
      const jobs = await getJobList();

      rows.value = jobs.map((x) => {
        const format = {
          segmentID: x.road_segment.id,
          irregularityId: x.irregularity.id,
          id: x.id,
          roadname: x.road_segment.name,
          type: x.irregularity.type,
          estimateLocation: `${baseURL}/${x.irregularity.media[0].url}`,
          createdDate: dateFormat(x.createdAt).day,
          endDate: dateFormat(x.endAt).day,
          status: x.status,
          priority: x.priority,
          commentCount: x.comments.length,
          ...x,
        };
        return format;
      });
    };

    const clearRows = () => {
      rows.value = [];
    };

    onMounted(async () => {
      await initRows();
    });
    return {
      columns,
      rows,
      tempRow,
      isShowDialog,
      actionType,
      id,
      title,
      roadInformation,
      params,
      iri,
      roadName,
      initRows,
      clearRows,
    };
  },
  props: {
    // ...your custom props
  },

  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],
  methods: {
    async closeDialog() {
      this.clearRows();
      this.initRows();
      this.hide();
    },
    comment(data) {
      this.isShowDialog = "comment";

      this.actionType = data;

      this.show();
    },
    updateJob(data) {
      this.isShowDialog = "updateJob";
      this.actionType = data;

      console.log(data);
      this.show();
    },
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
  },
};
</script>
