import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const SiteMetadata = {
  title: 'Tycatch Factory Site',
  description: 'Desarrollo de Software a Medida. Creamos aplicaciones personalizadas que se adaptan perfectamente a tus necesidades.',
  author: {
    name: 'Tycatch_tv',
    twitter: '@trycatch_tv',
    url: 'https://trycatch.tv/',
    email: 'judlup@trycatch.tv',
    whatsappNumber: '+573164907627',
  },
  org: {
    name: 'Tycatch Factory',
    twitter: '@trycatch_tv',
    url: 'https://trycatchfactory.com',
    email: 'judlup@trycatch.tv',
    description:
      'Somos una comunidad de desarrolladores apasionados y expertos dedicados a crear soluciones de software innovadoras que no solo cumplen, sino que superan las expectativas de nuestros clientes.'
  },
};
const serviceCollection = defineCollection({
  type: "data",
  schema: z.object({
    desarrolloWeb: z.object({
      namePage: z.string(),
      title: z.string(),
      description: z.string(),
      levelEstructureTeam: z.array(z.string()),
    }),
    desarrolloMmobile: z.object({
      namePage: z.string(),
      title: z.string(),
      description: z.string(),
      levelEstructureTeam: z.array(z.string()),
    })
  }),
});
const projectsCollections = defineCollection({
  type: "data",
  schema: z.object({
    sistemaInventario: z.object({
      title: z.string(),
      description: z.string(),
      characteristics: z.array(z.string())

    }),
    sistemaFacturacion: z.object({
      title: z.string(),
      description: z.string(),
      characteristics: z.array(z.string())

    })

  })
})
export const collections = {
  service: serviceCollection,
  project: projectsCollections
};

