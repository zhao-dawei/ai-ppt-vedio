// store.js
import { reactive } from 'vue'

export const store = reactive({
  activeIndex: 0,
  outlineText: "第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3",
  lectureText: "讲稿1\n\t" +
                  "第一节：节目1\n\t" +
                  "第二节：节目2\n\t" +
                  "第三节：节目3\n\n" +
                "讲稿2\n\t" +
                  "第一节：节目1\n\t" +
                  "第二节：节目2\n\t" +
                  "第三节：节目3"
})