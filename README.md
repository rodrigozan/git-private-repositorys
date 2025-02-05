# 🚀 **GitHub** Private Repos

Este script automatiza o processo de tornar todos os seus repositórios públicos do **GitHub** em privados usando a __API__ do **GitHub** e **Node.js**.

## 📌 Recursos

✅ Converte automaticamente todos os repositórios públicos em privados  
✅ Usa a __API__ do **GitHub** via `@octokit/rest`  
✅ Gerenciamento de credenciais via `.env`  
✅ Fácil de usar e configurar  

---

## 📦 Instalação

1. **Clone o repositório**  
    ```sh
    git clone https://github.com/rodrigozan/git-private-repositoryss.git
    cd github-private-repos
    ```

2. **Instale as dependências**  
    ```sh
    npm install
    ```

---

## 🔑 Configuração

Antes de rodar o script, você precisa de um **GitHub Personal Access Token** com a permissão `repo` ativada.

### **Gerando o Token**
1. Acesse [GitHub Developer Settings](https://github.com/settings/tokens)
2. Clique em **"Generate new token (classic)"**
3. Selecione **"repo"** para permitir acesso aos seus repositórios
4. Copie o token gerado

### **Criando o arquivo `.env`**
Crie um arquivo `.env` na raiz do projeto e adicione:

    ```env
    GITHUB_TOKEN=seu_token_aqui
    GITHUB_USERNAME=seu_usuario
    ```

Substitua `seu_token_aqui` pelo seu token de acesso e `seu_usuario` pelo seu nome de usuário do **GitHub**.

---

## ▶️ Uso

Para rodar o script, basta executar:

    ```sh
    npm start
    ```

O script irá buscar todos os seus repositórios públicos e convertê-los para privados.

---

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [@octokit/rest](https://github.com/octokit/rest.js) (GitHub __API__)
- [dotenv](https://github.com/motdotla/dotenv) (Gerenciamento de variáveis de ambiente)

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

## 📢 Contribuições

Contribuições são bem-vindas! Se quiser melhorar o script, sinta-se à vontade para abrir um **Pull Request**.

---

## 🐞 Relatar Problemas

Se encontrar algum problema, abra uma **issue** em:  
[https://github.com/rodrigozan/git-private-repositoryss/issues](https://github.com/rodrigozan/git-private-repositoryss/issues)

---

🚀 **Automatize seu **GitHub** e mantenha seus projetos privados com facilidade!**
