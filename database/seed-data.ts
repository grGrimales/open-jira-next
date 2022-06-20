interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendientes: To install and save in your package.json dependencies, run the command below using npm",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "EN progreso: To install and save in your package.json dependencies, run the command below using npm",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      description:
        "Finalizado: To install and save in your package.json dependencies, run the command below using npm",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};
