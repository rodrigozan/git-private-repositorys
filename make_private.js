require('dotenv').config();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function makeReposPrivate() {
  try {
    const { data: repos } = await octokit.repos.listForAuthenticatedUser({ per_page: 100 });

    for (const repo of repos) {
      if (!repo.private) {
        console.log(`Tornando privado: ${repo.name}`);
        await octokit.repos.update({
          owner: process.env.GITHUB_USERNAME,
          repo: repo.name,
          private: true
        });
      }
    }

    console.log("Todos os repositórios públicos foram tornados privados!");
  } catch (error) {
    console.error("Erro:", error);
  }
}

makeReposPrivate();
