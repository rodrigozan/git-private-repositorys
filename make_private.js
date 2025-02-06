require('dotenv').config();

(async () => {
  const { Octokit } = await import("@octokit/rest");

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  async function makeReposPrivate() {
    try {
      const { data: repos } = await octokit.repos.listForAuthenticatedUser({ per_page: 100 });

      for (const repo of repos) {
        if (!repo.private) {
          console.log(`Tornando privado: ${repo.name}`);
          try {
            await octokit.repos.update({
              owner: process.env.GITHUB_USERNAME,
              repo: repo.name,
              private: true
            });
            console.log(`Repositório ${repo.name} agora é privado.`);
          } catch (updateError) {
            console.error(`Erro ao tornar o repositório ${repo.name} privado:`, updateError.message);
            // Continuar para o próximo repositório
          }
        }
      }

      console.log("Processamento concluído. Alguns repositórios podem não ter sido atualizados.");
    } catch (error) {
      console.error("Erro geral:", error);
    }
  }

  makeReposPrivate();
})();
