// store.js
import { reactive } from 'vue'

export const store = reactive({
  activeIndex: 0,
  outlineText: "第一章：项目背景（为什么学）\n\n\t第一节：企业培训中课程制作的痛点和需求\n\t第二节：使用AI辅助课程制作的背景和动机\n\n" +
      "第二章：创新方案（是什么、有什么）\n\n\t第一节：什么是“AI做课”辅助课程制作\n\t第二节：“AI做课”有哪些功能\n\n课程大纲生成\n\n课程内容生成\n\n课程PPT生成\n\n课程视频生成\n\n" +
      "其他：试题制作、课程宣传图制作等",
  contentText: "内容一：项目背景（为什么学）\n\n\t第一节：企业培训中课程制作的痛点和需求\n\t第二节：使用AI辅助课程制作的背景和动机\n\n" +
  "内容二：创新方案（是什么、有什么）\n\n\t第一节：什么是“AI做课”辅助课程制作\n\t第二节：“AI做课”有哪些功能\n\n课程大纲生成\n\n课程内容生成\n\n课程PPT生成\n\n课程视频生成\n\n" +
  "其他：试题制作、课程宣传图制作等",
  lectureText: "项目背景（为什么学）\n\n\t" +
                  "第一节：在企业培训中，我们经常面临着课程制作的各种痛点和需求。传统的课程制作方式缺乏创新和互动性，难以满足员工的学习需求和提高培训效果。另外，不同岗位的员工面临的挑战和需求各不相同，因此需要定制化设计培训内容。跨地域的企业培训也面临着课程覆盖面和灵活性的问题。此外，企业还需要控制培训成本和评估培训效果。\n\t" +
                  "第二节：使用AI辅助课程制作的背景和动机\n" +
      " 随着人工智能技术的发展，AI课程制作成为了解决上述痛点和需求的创新方案。AI辅助课程制作利用人工智能技术，帮助我们快速制作高质量的课程内容。AI可以自动生成课程大纲、内容、PPT、视频等，大大节省了课程制作的时间和人力成本。同时，AI还可以根据学员的个性化需求和反馈进行实时调整和优化，提高了培训效果\n\t" +
                  "第三节：使用AI辅助课程制作的背景和动机\n" +
      " 随着人工智能技术的发展，AI课程制作成为了解决上述痛点和需求的创新方案。AI辅助课程制作利用人工智能技术，帮助我们快速制作高质量的课程内容。AI可以自动生成课程大纲、内容、PPT、视频等，大大节省了课程制作的时间和人力成本。同时，AI还可以根据学员的个性化需求和反馈进行实时调整和优化，提高了培训效果\n\n" +
                "讲稿2\n\t" +
                  "第一节：使用AI辅助课程制作的背景和动机\n" +
      " 随着人工智能技术的发展，AI课程制作成为了解决上述痛点和需求的创新方案。AI辅助课程制作利用人工智能技术，帮助我们快速制作高质量的课程内容。AI可以自动生成课程大纲、内容、PPT、视频等，大大节省了课程制作的时间和人力成本。同时，AI还可以根据学员的个性化需求和反馈进行实时调整和优化，提高了培训效果\n\t" +
                  "第二节：使用AI辅助课程制作的背景和动机\n" +
      " 随着人工智能技术的发展，AI课程制作成为了解决上述痛点和需求的创新方案。AI辅助课程制作利用人工智能技术，帮助我们快速制作高质量的课程内容。AI可以自动生成课程大纲、内容、PPT、视频等，大大节省了课程制作的时间和人力成本。同时，AI还可以根据学员的个性化需求和反馈进行实时调整和优化，提高了培训效果\n\t" +
                  "第三节：使用AI辅助课程制作的背景和动机\n" +
      " 随着人工智能技术的发展，AI课程制作成为了解决上述痛点和需求的创新方案。AI辅助课程制作利用人工智能技术，帮助我们快速制作高质量的课程内容。AI可以自动生成课程大纲、内容、PPT、视频等，大大节省了课程制作的时间和人力成本。同时，AI还可以根据学员的个性化需求和反馈进行实时调整和优化，提高了培训效果",
  streamOutline: "I. 项目背景\rA. 企业培训中课程制作的痛点和需求\rB. 使用AI辅助课程制作的背景和动机\rII. 创新方案\rA. 什么是“AI做课”辅助课程制作\rB. “AI做课”有哪些功能\r1. 课程大纲生成\r2. 课程内容生成\r3. 课程PPT生成\r4. 课程视频生成\r5. 其他：试题制作、课程宣传图制作等\rIII. 产品展示\rA. 生成课程大纲操作\rB. 生成课程内容操作\rC. 生成PPT操作\rD. 生成视频操作\rE. 其他操作：试题制作、课程宣传图制作等\rIV. 实践案例\rA. 播放操作视频\rV. 总结与展望\rA. “AI做课”的潜力和前景\rB. 项目团队分工",
  streamContent: "I. 项目背景\rA. 企业培训中课程制作的痛点和需求\rB. 使用AI辅助课程制作的背景和动机\rII. 创新方案\rA. 什么是“AI做课”辅助课程制作\rB. “AI做课”有哪些功能\r1. 课程大纲生成\r2. 课程内容生成\r3. 课程PPT生成\r4. 课程视频生成\r5. 其他：试题制作、课程宣传图制作等\rIII. 产品展示\rA. 生成课程大纲操作\rB. 生成课程内容操作\rC. 生成PPT操作\rD. 生成视频操作\rE. 其他操作：试题制作、课程宣传图制作等\rIV. 实践案例\rA. 播放操作视频\rV. 总结与展望\rA. “AI做课”的潜力和前景\rB. 项目团队分工",
  streamLecture: "I. 项目背景\rA. 企业培训中课程制作的痛点和需求\rB. 使用AI辅助课程制作的背景和动机\rII. 创新方案\rA. 什么是“AI做课”辅助课程制作\rB. “AI做课”有哪些功能\r1. 课程大纲生成\r2. 课程内容生成\r3. 课程PPT生成\r4. 课程视频生成\r5. 其他：试题制作、课程宣传图制作等\rIII. 产品展示\rA. 生成课程大纲操作\rB. 生成课程内容操作\rC. 生成PPT操作\rD. 生成视频操作\rE. 其他操作：试题制作、课程宣传图制作等\rIV. 实践案例\rA. 播放操作视频\rV. 总结与展望\rA. “AI做课”的潜力和前景\rB. 项目团队分工"
    })