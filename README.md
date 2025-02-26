Expo Camera QR - Projeto com Leitura de QR Code e Banco de Dados MySQL
Este projeto tem como objetivo realizar a leitura de códigos QR utilizando a câmera do dispositivo móvel. Os dados lidos são enviados para um banco de dados MySQL, onde são armazenados para processamento posterior.

📌 Tecnologias utilizadas
React Native (com Expo) → Interface do usuário
Expo Camera → Leitura de QR Codes
Node.js e Express → Servidor backend
MySQL → Armazenamento dos dados

🚀 Passo a passo para configurar e rodar o projeto

1 - Clonar o repositório
Abra um terminal e execute o seguinte comando:
> git clone https://github.com/PauloBraga2/expo_camera_bd_mysql.git

2 - Configurar o banco de dados MySQL
Certifique-se de que o MySQL está instalado e rodando na sua máquina. Em seguida, execute os seguintes comandos para criar o banco de dados e a tabela:

"CREATE DATABASE qr_codes;  
USE qr_codes;  

CREATE TABLE qr_codes (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  data VARCHAR(255) NOT NULL,  
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);  

SELECT * FROM qr_codes; -- Para visualizar os dados da tabela"

3 - Configurar o servidor backend
. Alterar as credenciais do MySQL
Abra o arquivo server.js localizado na pasta qr-code-server e modifique as credenciais do banco de dados conforme necessário:
> const connection = mysql.createConnection({
  host: 'localhost',  
  user: 'root',  
  password: 'sua_senha',  
  database: 'qr_codes'  
});
⚠️ Se estiver rodando o backend em outra máquina na rede, você precisará verificar o IP correto do servidor MySQL e configurar o acesso remoto.

4 - Instalar as dependências do backend
Abra um terminal no VS Code e navegue até a pasta qr-code-server:
> cd qr-code-server

Agora, instale as dependências necessárias:
> npm install  
> npm install mysql2  
> npm install axios  
> npm install --save-dev @types/axios  

5️ - Iniciar o servidor backend
Após instalar as dependências, inicie o servidor backend com o seguinte comando:
> node server.js

Se tudo estiver correto, você verá a mensagem:
"Conectado ao banco de dados MySQL  
Servidor rodando na porta 4000  "

6 - Instalar as dependências do frontend
Abra um novo terminal no VS Code e navegue até a pasta expo_camera_qr:
> cd expo_camera_qr

Agora, instale as dependências necessárias:
> npm install  
> npx expo install expo-camera  

7️ - Configurar o IP no frontend (caso esteja em uma rede diferente)
Se o backend e o frontend estiverem rodando em redes diferentes, será necessário atualizar o IP do servidor no arquivo App.tsx, localizado na pasta expo_camera_qr.

No Windows, execute o seguinte comando para encontrar seu endereço IPV4:
- ipconfig
No Mac/Linux, execute o seguinte comando para encontrar seu endereço IPV4:
- ifconfig

Copie o endereço IPv4 da máquina onde o backend está rodando.
No arquivo App.tsx, altere a seguinte linha para refletir o IP correto:
> axios.post('http://SEU_IP_AQUI:4000/api/qr-codes', { data })
Se esse ajuste não for feito corretamente, o aplicativo não conseguirá se conectar ao backend.

8 - Iniciar o frontend
Com as dependências instaladas, inicie o Expo no frontend com o seguinte comando:
> npx expo start
Isso abrirá o Expo no navegador ou terminal, exibindo um QR Code.

9 - Rodar o aplicativo no celular
Baixe o aplicativo Expo Go:
Android → Play Store
iOS → App Store
Abra o Expo Go e escaneie o QR Code que apareceu no navegador.
O app será carregado automaticamente no seu celular.

10 - Testar a leitura de QR Code
Agora que tudo está rodando:
✅ Escaneie um QR Code com a câmera do aplicativo.
✅ Os dados serão enviados automaticamente para o backend.
✅ O servidor armazenará os dados no banco de dados MySQL.

👥 Integrantes do Projeto:
Paulo Braga Uchôa Filho;

Raimundo Pereira de Oliveira Filho;

Valdemiro Gabriel Oliveira dos Santos Nascimento;

Yara Beatriz Ferreira Gomes;

Maria Luana da Silva.

Observações:
Sempre que trocar de rede Wi-Fi, atualize o IP no App.tsx.
Se ocorrer um erro de conexão, verifique se o servidor backend está rodando corretamente.
Caso o Expo não consiga acessar a câmera, vá nas configurações do dispositivo e conceda permissão.
