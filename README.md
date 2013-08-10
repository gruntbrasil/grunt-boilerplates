# Grunt Boilerplates

O **Grunt Boilerplates** foi criado para oferecer aos desenvolvedores uma forma prática para inciar um projeto com o Grunt.


## Iniciando o seu projeto

> O Grunt é uma ferramenta para automação de tarefas, que roda no terminal/shell com comandos de linha. Com ele, é possível concatenar e minificar arquivos, validar scripts (linting), otimizar imagens, realizar deploy (rsync ou ftp) e realizar mais uma infinidade de tarefas.

Para utilizar o Grunt, é necessário ter o Node.js na sua máquina.


### Instalando o Node.js

Para instalar o Node.js, siga os passos abaixo:

1. Clique neste [link](http://nodejs.org/).
2. Faça o *download* do Node.
3. Execute a instalação.

> Caso precise de mais informações, [confira este link](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)


### Instalando o Grunt

Caso já tenha instalado o Grunt, remova a versão anterior antes de mais nada:

```bash
$ npm uninstall -g grunt
```

A seguir, será necessário instalar globalmente o **Grunt CLI**. Provavelmente, você precise utilizar `sudo` (para OSX, ***nix, BSD, etc) ou rodar o *shell* como administrador (Windows).

```bash
$ npm install -g grunt-cli
```


Pronto! Com o ambiente preparado, vamos escolher o boilerplate para iniciar o desenvolvimento do projeto.

> Se precisar de ajuda, execute `grunt --help`.


## Boilerplates

### Escolhendo um Boilerplate

**Passo 1:** faça o clone deste repositório

```bash
$ git clone https://github.com/vitorbritto/grunt-boilerplates.git
```

**Passo 2:** Copie e cole a pasta com o boilerplate desejado para o seu ambiente de trabalho

**Passo 3:** Instale as dependências no boilerplate escolhido

```bash
$ sudo npm install
```

> **Importante:** o comando acima deve ser executado na pasta raiz do seu projeto.

**Passo 4:** Modifique as informações do seu projeto no arquivo `package.json`.


### Boilerplates Disponíveis

* [Grunt Boilerplate Sass](grunt-boilerplate-sass)
* [Grunt Boilerplate LESS](grunt-boilerplate-less)


## Referências

* [https://github.com/vagnervjs/grunt-boilerplate](https://github.com/vagnervjs/grunt-boilerplate)
* [https://github.com/Integralist/Grunt-Boilerplate](https://github.com/Integralist/Grunt-Boilerplate)
* [https://github.com/elemental-shift/grunt-boilerplate](https://github.com/elemental-shift/grunt-boilerplate)


## Contribua
Caso este repositório tenha sido útil, fique a vontade para [contribuir](https://github.com/gruntbrasil/grunt-boilerplates/pulls) ou deixar uma [sugestão](https://github.com/gruntbrasil/grunt-boilerplates/issues).