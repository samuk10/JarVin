const { exec } = require('child_process');

// Caminhos para o Python e o script
const pitao = "/home/samuel/Dropbox/Notepad/My-Vault/.obsidian/scripts/venv/bin/python3";
const script = "/home/samuel/Dropbox/Notepad/My-Vault/.obsidian/scripts/dailyVerse.py";

// Função para executar o script Python e obter o versículo
async function get_bible_verse() {
  return new Promise((resolve, reject) => {
    const command = `${pitao} ${script}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o script: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`Erro no script: ${stderr}`);
        reject(stderr);
      }
      resolve(stdout.trim());  // Trim para remover quebras de linha extras
    });
  });
}

// Exportando apenas a função correta
module.exports = get_bible_verse;
