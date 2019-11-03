# SiCA 0.5
Projeto para desenvolvimento de APS - Atividades Práticas Supervisionadas - do curso de Ciência da Computação (6º Semestre) da UNIP - Marquês.

## Escopo
Sistema de Controle Ambiental
- Sistema para cadastro de Reservas Ambientais e Eventos que causem impacto nessas reservas.
- Sistema com controle de permissões e acesso por usuário (com 3 tipos de permissão).
- Uso de processamento de imagem para o controle de acesso.

## Documentação
- O escopo do projeto é definido pela [especificação](/DOCS/ESPECIFICACOES SiCA.txt).
- A Modelagem dos dados é definida pelo [DER - Diagrama de Entidade Relacionamento](/DOCS/Diagrama de Entidade Relacionamento.pdf).
- Funções do sistema e controle de acesso podem ser encontradas no [Diagrama de Casos de Uso](/DOCS/Diagrama de Casos de Uso.jpeg).

## Arquitetura
- Para o desenvolvimento do [Back-End](/BACK-END/) foi utilizado JavaScript puro, com Node.js e Express.js.
    * [Arquitetura do servidor](/DOCS/Arquitetura do servidor).
- Para o [Front-End](/FRONT-END/), foi utilizado o Framework Angular.
- A [base de dados](/DATABASE/) foi criada utilizando a tecnologia MySQL.

## Funcionamento do sistema
- À preencher.

## TODO
- [ ] Back-End.
    - [x] Desenvolvimento da documentação.
    - [x] Desenvolvimento das [das classes de modelo de dado](/BACK-END/model).
    - [ ] Desenvolvimento dos [controladores](/BACK-END/controller).
    - [ ] Desenvolvimento do processamento de imagem para o cadastro.
    - [x] Configuração do Servidor e definição das rotas com Node.js e Express.js.
    - [ ] Controle de acesso por permissão (!!!).
    - [ ] Testes e ajustes finais.

- [ ] Front-End.
    - [ ] Desenvolvimento da documentação.
    - [ ] Desenvolvimento das telas de Cadastro.
    - [ ] Desenvolvimento das telas de remoção e atualização.
    - [ ] (Opcional) Desenvolvimento da tela de reports e gráficos. 
    - [ ] Controle de acesso por permissão (!!!).

- [ ] Banco de Dados.
    - [x] Desenvolvimento da documentação.
    - [ ] Desenvolvimento do script de criação da base de dados.
    - [ ] Testes e ajustes finais.

- [ ] Documentação.
    - [ ] Desenvolvimento dos textos. 
    - [ ] Definições técnicas do projeto.
    - [ ] Revisão ortográfica e de formatação.

- [ ] Entrega do Projeto.

------------------------------------------------------------
### Autores
- Gabriel Soares A. - Gerenciamento do projeto/Desenvolvimento Back-End.
- Lucas Amorim - Documentação.
- Lucca Kazlauskas Z. - Modelagem e desenvolvimento da base de dados.
- Luiz Henrique Braga - Documentação.
- Matheus Lopes - Desenvolvimento Front-End.
