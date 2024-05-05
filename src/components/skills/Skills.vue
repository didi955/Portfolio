<script setup lang="ts">

  import SkillsTable from './SkillsTable.vue';
  import vueIcon from '../../assets/icons/vue.svg';
  import laravelIcon from '../../assets/icons/laravel.svg';
  import springIcon from '../../assets/icons/spring.svg';
  import mongoDB from '../../assets/icons/mongodb.svg';
  import mysqlIcon from '../../assets/icons/mysql.svg';
  import postgreSqlIcon from '../../assets/icons/postgresql.svg';
  import redisIcon from '../../assets/icons/redis.svg';
  import viteIcon from '../../assets/icons/vite.svg';
  import fastApiIcon from '../../assets/icons/fastapi.svg';
  import typescriptIcon from '../../assets/icons/typescript.svg';
  import tailwindIcon from '../../assets/icons/tailwind.svg';
  import expressIcon from '../../assets/icons/express.svg';

  import { Skill } from "../../interfaces/types.ts";


  const frontendSkills: Skill[] = [
    { name: 'VueJS', logo: vueIcon, link: 'https://vuejs.org/' },
    { name: 'ViteJS', logo: viteIcon, link: 'https://vitejs.dev/' },
    { name: 'TypeScript', logo: typescriptIcon, link: 'https://www.typescriptlang.org/' },
    { name: 'Tailwind CSS', logo: tailwindIcon, link: 'https://tailwindcss.com/' }
  ];

  const backendSkills: Skill[] = [
    { name: 'Laravel', logo: laravelIcon, link: 'https://laravel.com/' },
    { name: 'Spring', logo: springIcon, link: 'https://spring.io/' },
    { name: 'FastAPI', logo: fastApiIcon, link: 'https://fastapi.tiangolo.com/' },
    { name: 'ExpressJS', logo: expressIcon, link: 'https://expressjs.com/'}
  ];

  const databaseSkills: Skill[] = [
    { name: 'MySQL', logo: mysqlIcon, link: 'https://www.mysql.com/' },
    { name: 'PostgreSQL', logo: postgreSqlIcon, link: 'https://www.postgresql.org/' },
    { name: 'Redis', logo: redisIcon, link: 'https://redis.io/' },
    { name: 'MongoDB', logo: mongoDB, link: 'https://www.mongodb.com/' },
  ];

</script>

<template>
  <div id="Skills" class="container mx-auto p-4">
    <h2 class="text-4xl font-semibold text-center mb-6 text-cyan-600">Mes compétences</h2>
    <div class="flex flex-col md:flex-row justify-center">
      <div class="w-full md:w-1/3 p-2">
        <SkillsTable title="Front-end" :skills="frontendSkills" />
      </div>
      <div class="w-full md:w-1/3 p-2">
        <SkillsTable title="Back-end" :skills="backendSkills" />
      </div>
      <div class="w-full md:w-1/3 p-2">
        <SkillsTable title="Bases de données" :skills="databaseSkills" />
      </div>
    </div>
  </div>
</template>