# Projeto: Node RED
## Descrição Geral
Este projeto é composto por um frontend desenvolvido em React + Vite e um backend em C# ASP.NET com acesso a banco de dados MySQL utilizando o Entity Framework (EF) com os pacotes Pomelo.EntityFrameworkCore.MySql para integração com MySQL. O sistema permite gerenciar corretoras, onde os dados são consumidos de APIs externas e de um banco de dados próprio.

O frontend consome tanto a BrasilAPI quanto a API REST personalizada para lidar com informações de corretoras, como cadastro, pesquisa e remoção de CNPJ.

## Estrutura do Projeto
Frontend
  * Framework: React + Vite

Bibliotecas:
  * react
  * vite

Funcionalidades:
  * Consumo de APIs externas e internas.
  * Listagem de corretoras cadastradas.
  * Integração com APIs da BrasilAPI para consulta de corretoras e CEP.

Backend
Tecnologia:
  * C# ASP.NET
    
Banco de Dados:
  * MySQL
    
ORM:
  * Entity Framework Core
    
Pacotes:
  * Microsoft.EntityFrameworkCore
  * Microsoft.EntityFrameworkCore.Design
  * Microsoft.EntityFrameworkCore.Tools
  * Pomelo.EntityFrameworkCore.MySql
      
Funcionalidades:
  * API REST com rotas para buscar, cadastrar e remover CNPJs de corretoras.

## Requisitos para Startar a Aplicação
## Frontend
Pré-requisitos:

  * Node.js instalado (versão recomendada: 16+)
  * Gerenciador de pacotes npm ou yarn

Instruções:

Clone o repositório do frontend.
No diretório do projeto, execute:
  * npm install
    
Para iniciar o servidor de desenvolvimento, execute:
  * npm run dev

A aplicação estará disponível em http://localhost:5173.

## Backend
Pré-requisitos:
  * .NET SDK 6.0 ou superior
  * MySQL Server

Ferramentas e Pacote NuGet:
  * Microsoft.EntityFrameworkCore.Tools
  * Microsoft.EntityFrameworkCore.Design
  * Pomelo.EntityFrameworkCore.MySql

## Configuração do Banco de Dados:

Com o MySQL Server rodando. Configure a conexão com o banco de dados no arquivo appsettings.json do projeto:

{

  "ConnectionStrings": {
  
    "DefaultConnection": "Server=localhost;Database=NomeDoBancoDeDados;User=usuario;Password=senha;"
  
  }

}

No diretório do projeto backend, execute o comando para aplicar as migrations e criar o banco de dados:
* dotnet ef database update

## Startando o Backend:

No diretório do projeto backend, execute o comando:
  * dotnet run

A API estará disponível em https://localhost:7218.

## APIs consumidas:

BrasilAPI (externas):

  * GET https://brasilapi.com.br/api/cep/v2/{cep}: Para pesquisa de CEPs.
  * GET https://brasilapi.com.br/api/cvm/corretoras/v1: Para listar todas as corretoras cadastradas na BrasilAPI.
  * GET https://brasilapi.com.br/api/cvm/corretoras/v1/{cnpj}: Para pesquisa de corretoras pelo CNPJ.

## API interna (Backend):
  * GET https://localhost:7218/api/Corretora: Busca todos os CNPJs cadastrados no banco de dados.
  * POST https://localhost:7218/api/Corretora: Cadastra um novo CNPJ. O CNPJ é enviado no corpo da requisição.
  * DELETE https://localhost:7218/api/Corretora?id={cnpj}: Remove um CNPJ do banco de dados. O ID é passado como query string.
