<script setup lang="ts">

  import ExperienceItem from './ExperienceItem.vue';
  import { Experience } from "../../interfaces/types.ts";

  const PositionIcon = '<svg> </svg>';
  const UniversityIcon = '<svg> </svg>';

  const experiences: Experience[] = [
    {
      icon: UniversityIcon,
      title: "Admission à l'ESIEE-Paris",
      position: "Apprenti Ingénieur Informatique",
      description: "Admission à l'ESIEE-Paris en apprentissage pour un cycle d'ingénieur informatique en architecture logicielle",
      date: "2024 - 2027"
    },
    {
      icon: PositionIcon,
      title: "Développeur full stack en alternance",
      position: "eBrigade",
      description: "• Maintenance applicative de l’application et du\n" +
      "&ensp;module de gestion de souscriptions avec intégration\n" +
      "&ensp;Stripe - PHP8 SQL\n" +
      "• Développement de modules complémentaires\n" +
      "• Gestion des tickets clients\n",
      date: "2023 - 2024"
    },
    {
      icon: UniversityIcon,
      title: "BUT Informatique",
      position: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
      description: "• Développement full stack et Bash\n" +
          "• Administration de Base de données PostgreSQL\n" +
          "• Maitrise de Linux et Git\n" +
          "• DeepLearning avec Keras-NLP\n" +
          "• Gestion de projets / Recueil de besoins",
      date: "2021 - 2024"
    },
    {
      icon: UniversityIcon,
      title: "Baccalauréat général - Mention Bien",
      position: "Lycée Evariste Galois, Beaumont sur Oise",
      description: "• Spécialité Numérique et Sciences de l'Informatique\n" +
          "• Spécialité Mathématiques",
      date: "Juin 2021"
    }
  ];
</script>

<template>
  <div id="Experience" class="bg-gray-800 rounded-lg p-6 relative">
    <h2 class="text-4xl font-semibold text-center mb-6 text-cyan-600">Expérience</h2>
    <div class="flex justify-center">
      <div class="h-full w-px bg-gray-600"></div>
      <div class="ml-4">
        <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="bg-gray-700 rounded-lg p-4 mb-4 relative"
        >
          <ExperienceItem :exp="experience" />
          <div
              v-if="index < experiences.length - 1"
              class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
          >
            <div class="h-4 w-px bg-gray-600"></div>
            <div class="h-2 w-2 bg-gray-600 rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
