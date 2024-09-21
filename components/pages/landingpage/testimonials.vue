<template>
  <div class="w-full mt-32 custom-bg">
    <div id="title" class="flex flex-col w-full items-center pt-28 gap-4">
      <h1 class="text-center text-lightGray-50 text-3xl font-semibold">
        Hear from Our Learners
      </h1>
      <p class="text-lightGray-200 text-center w-136">
        Discover how our platform has transformed the learning journeys of
        thousands. From career advancements to personal growth, hear firsthand
        experiences from those who have unlocked new opportunities through our
        expert-led courses.
      </p>
    </div>
    <div id="card" class="flex gap-4 justify-center items-center mt-16 pb-32">
      <button
        class="flex justify-center items-center rounded-full bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl w-12 h-12 border border-accent-500 border-opacity-10 hover:border-opacity-30"
      >
        <Icon
          name="solar:alt-arrow-left-bold"
          class="text-darkGray-400"
          size="1.6em"
        />
      </button>
      <div class="flex gap-8">
        <CardsLandingpageTestimonials />
        <CardsLandingpageTestimonials />
        <CardsLandingpageTestimonials />
      </div>
      <button
        class="flex justify-center items-center rounded-full bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl w-12 h-12 border border-accent-500 border-opacity-10 hover:border-opacity-30"
      >
        <Icon
          name="solar:alt-arrow-right-bold"
          class="text-darkGray-400"
          size="1.6em"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const reviews = [
  {
    name: "David Abhivanico",
    job: "Data Analyst",
    office: "BMW Motors",
    rating: 4,
    text: "EduSphere sangat membantu bagi saya yang baru lulus dan sedang mencari peluang di dunia Data Science. Materi yang disajikan sangat komprehensif dan mentor-mentor sangat berpengalaman. Sekarang saya bekerja di BMW Motors sebagai Data Analyst, semua ini berkat EduSphere!",
  },
  {
    name: "Rachel Matthews",
    job: "Web Developer",
    office: "Google",
    rating: 5,
    text: "I never imagined that taking courses on EduSphere would change my life this much. From a basic understanding of HTML, I am now working as a Web Developer at Google! The learning experience was immersive, and the community support was amazing. If you're aiming to enter tech, EduSphere is your gateway.",
  },
  {
    name: "佐藤 大輝 (Daiki Sato)",
    job: "ソフトウェアエンジニア",
    office: "ソニー (Sony)",
    rating: 5,
    text: "EduSphereで学んだことは、私のキャリアに大きな変化をもたらしました。特に実践的なプロジェクトが多く、仕事ですぐに役立つスキルを身につけることができました。現在、ソニーでソフトウェアエンジニアとして働いています。本当に最高の学習プラットフォームです。",
  },
  {
    name: "Kim Ji-ho",
    job: "Graphic Designer",
    office: "Samsung",
    rating: 4,
    text: "에듀스피어에서 배운 덕분에 삼성에서 그래픽 디자이너로 일하게 되었습니다. 강의 내용이 체계적이고 실습 중심이었으며, 선생님들도 언제나 친절하게 질문을 받아주셨습니다. 그래픽 디자인을 공부하려는 모든 분들에게 이 플랫폼을 추천합니다.",
  },
  {
    name: "Wang Wei",
    job: "Game Developer",
    office: "Tencent Games",
    rating: 5,
    text: "我在EduSphere学习了许多关于游戏开发的知识，从基础编程到高级3D动画技术。现在我在腾讯游戏工作，这个平台的课程和老师对我的职业生涯帮助非常大。强烈推荐给任何想成为游戏开发者的人！",
  },
  {
    name: "Jonathan Smith",
    job: "Game Developer",
    office: "Ubisoft",
    rating: 5,
    text: "EduSphere took me from a game enthusiast to a professional developer. I learned everything from basic programming to advanced 3D animation and AI development. Now, I’m working at Ubisoft, one of the top game companies in the world. If you’re dreaming of becoming a game developer, EduSphere is the place to be.",
  },
  {
    name: "Angela Li",
    job: "Data Scientist",
    office: "Tesla",
    rating: 5,
    text: "Grâce à EduSphere, j'ai pu développer des compétences en Data Science, ce qui m'a permis de décrocher un poste chez Tesla. La plateforme offre un parfait équilibre entre théorie et pratique, avec de nombreuses études de cas pertinentes. Je recommande fortement EduSphere à tous ceux qui veulent réussir dans ce domaine.",
  },
  {
    name: "Markus Levine",
    job: "Cybersecurity Specialist",
    office: "Microsoft",
    rating: 5,
    text: "Bevor ich EduSphere beigetreten bin, wusste ich nicht, wie ich eine Karriere im Bereich Cybersicherheit starten sollte. Doch dank der hervorragenden Kursstruktur und der erfahrenen Mentoren konnte ich jetzt bei Microsoft als Cybersicherheitsspezialist arbeiten. EduSphere hat mir die notwendigen Grundlagen vermittelt, um in die Arbeitswelt einzutreten.",
  },
  {
    name: "Emilia Perez",
    job: "Product Manager",
    office: "Apple",
    rating: 5,
    text: "EduSphere me ayudó a comprender todo el ciclo de desarrollo de productos, desde la conceptualización hasta el lanzamiento. Después de completar los cursos, obtuve una posición como gerente de producto en Apple. EduSphere es una plataforma de aprendizaje increíblemente completa y útil para el desarrollo profesional.",
  },
];
</script>

<style scoped>
.custom-bg {
  background-color: hsla(184, 3%, 10%, 1);
  background-image: radial-gradient(
      at 97% 2%,
      hsla(184, 3%, 10%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 27% 34%, hsla(184, 3%, 10%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(48, 87%, 50%, 0.46) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(48, 87%, 50%, 0.3) 0px, transparent 50%);
}
</style>
