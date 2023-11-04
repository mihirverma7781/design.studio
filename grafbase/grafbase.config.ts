import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({
    min: 3,
    max: 20,
  }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional().unique(),
  linkedinUrl: g.url().optional().unique(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model("Project", {
  title: g.string().length({
    min: 3,
    max: 200,
  }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url().unique(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
