Expo Camera QR - Projeto com Leitura de QR Code e Banco de Dados MySQL
Este projeto tem como objetivo realizar a leitura de códigos QR utilizando a câmera do dispositivo móvel. Os dados lidos são enviados para um banco de dados MySQL, que armazena essas informações para processamento posterior.

Tecnologias utilizadas: React Native (com Expo), Expo Camera para leitura de QR Codes, Node.js e Express para o servidor backend, e MySQL para armazenamento dos dados.

A aplicação permite que o usuário escaneie códigos QR utilizando a câmera do dispositivo. Após a leitura do código, os dados do QR são enviados para um servidor, que os armazena no banco de dados MySQL. O backend utiliza o server.js para criar a conexão com o MySQL e salvar os dados recebidos.

Pré-requisitos
Antes de começar, certifique-se de que você tem o Node.js instalado em sua máquina. Você também precisará do Expo CLI para rodar a aplicação no seu dispositivo móvel e do MySQL instalado e configurado.

Instalação e Execução
Primeiro, clone o repositório para sua máquina local com o comando git clone https://github.com/PauloBraga2/expo_camera_bd_mysql.git. Em seguida, navegue até a pasta do projeto e instale as dependências necessárias com cd expo_camera_qr e npm install. Caso a dependência expo-camera não esteja instalada, execute npx expo install expo-camera.

Agora, para configurar o banco de dados MySQL, certifique-se de que o MySQL esteja rodando na sua máquina. Crie um banco de dados (por exemplo, qr_codes_db) e altere as configurações de conexão no arquivo server.js para refletir seu banco de dados MySQL.

Navegue até a pasta do backend (qr-code-server) e instale as dependências necessárias com cd ../qr-code-server e npm install.

Agora, inicie o servidor backend com node server.js. O servidor estará rodando na porta 4000 por padrão, esperando receber os dados do frontend.

Agora, volte para a pasta do frontend (expo_camera_qr) e inicie o aplicativo Expo com cd ../expo_camera_qr e npx expo start. Isso abrirá o Expo no navegador, fornecendo um QR Code que você pode escanear com o Expo Go no seu celular. Para instalar o Expo Go, basta procurar o aplicativo na Play Store (Android) ou na App Store (iOS) e instalá-lo no seu dispositivo.

Com o Expo Go instalado, abra o aplicativo, escaneie o QR Code que apareceu no seu navegador e o app será carregado diretamente no seu celular.

Agora você pode testar o sistema, escaneando QR Codes. Quando um código é escaneado, os dados são enviados para o servidor backend, que os armazena no banco de dados MySQL.

Integrantes do Projeto:
- Paulo Braga Uchôa Filho;
- Raimundo Pereira de Oliveira Filho;
- Valdemiro Gabriel Oliveira dos Santos Nascimento;
- Yara Beatriz Ferreira Gomes;
- Maria Luana da Silva.
