# 🚀 **GitHub Private Repos**

This script automates the process of making all your **GitHub** public repositories private using the **GitHub API** and **Node.js**.

## 📌 Features

✅ Automatically converts all public repositories to private  
✅ Uses the **GitHub API** via `@octokit/rest`  
✅ Credential management via `.env`  
✅ Easy to use and configure  

---

## 📦 Installation

1. **Clone the repository**  
    ```sh
    git clone https://github.com/rodrigozan/git-private-repositoryss.git
    cd github-private-repos
    ```

2. **Install dependencies**  
    ```sh
    npm install
    ```

---

## 🔑 Configuration

Before running the script, you need a **GitHub Personal Access Token** with the `repo` permission enabled.

### **Generating the Token**
1. Go to [GitHub Developer Settings](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Select **"repo"** to allow access to your repositories
4. Copy the generated token

### **Creating the `.env` file**
Create a `.env` file in the project root and add:

   ```env
   GITHUB_TOKEN=your_token_here
   GITHUB_USERNAME=your_username
   ```

Replace `your_token_here` with your access token and `your_username` with your **GitHub** username.

---

## ▶️ Usage

To run the script, simply execute:

   ```sh
   npm start
   ```

The script will fetch all your public repositories and convert them to private.

---

## 🛠 Technologies Used

- [Node.js](https://nodejs.org/)
- [@octokit/rest](https://github.com/octokit/rest.js) (GitHub **API**)
- [dotenv](https://github.com/motdotla/dotenv) (Environment variable management)

---

## 📄 License

This project is licensed under the [MIT](LICENSE) license.

---

## 📢 Contributions

Contributions are welcome! If you want to improve the script, feel free to open a **Pull Request**.

---

## 🐞 Report Issues

If you encounter any issues, open an **issue** at:  
[https://github.com/rodrigozan/git-private-repositoryss/issues](https://github.com/rodrigozan/git-private-repositoryss/issues)

---

🚀 **Automate your **GitHub** and keep your projects private with ease!**