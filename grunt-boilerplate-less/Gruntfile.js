"use strict";

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var appConfig = {

        // Definindo os diretórios
        dirs: {
            js:   "assets/js",
            less: "assets/less",
            css:  "assets/css",
            img:  "assets/images"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner:
        "\n" +
        "/*\n" +
         " * -------------------------------------------------------\n" +
         " * Projeto: <%= pkg.title %>\n" +
         " * Versão: <%= pkg.version %>\n" +
         " *\n" +
         " * Autor:  <%= pkg.author.name %>\n" +
         " * Site:     <%= pkg.author.url %>\n" +
         " * Contato: <%= pkg.author.email %>\n" +
         " *\n" +
         " *\n" +
         " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>\n" +
         " * -------------------------------------------------------\n" +
         " */\n" +
         "\n",

        // Observação de mudanças nos arquivos
        watch: {
            options: {
                livereload: false
            },
            css: {
                files: ["<%= dirs.less %>/{,*/}*.less"],
                tasks: ["less", "notify:less"]
            },
            js: {
                files: ["<%= jshint.all %>"],
                tasks: ["jshint", "uglify", "notify:js"]
            },
            html: {
                files: [
                    // carregamento automático do browser para as atualizações das extensões abaixo
                    "/*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}"
                ]
            }
        },

        // Validação de arquivos
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [
                "Gruntfile.js",
                "<%= dirs.js %>/main.js"
            ]
        },

        // Minificação e concatenação de arquivos
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
                files: {
                    "<%= dirs.js %>/main.min.js": [
                    "<%= dirs.js %>/main.js"
                    ]
                }
            }
        },

        // Compilacão de arquivos LESS para CSS
        less: {
            dist: {
                options: {
                    // ieCompat: true, // Compatível com o IE8
                    // report: 'gzip' // Verificar performance do LESS
                    banner: "<%= banner %>",
                    yuicompress: true // Comprime o arquivo de saída com o ccsmin.js
                },
                files: {
                    "<%= dirs.css %>/style.css": [
                    "<%= dirs.less %>/*.less"
                    ]
                }
            }
        },

        // Otimização de imagens
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: "<%= dirs.img %>/",
                    src: "<%= dirs.img %>/**",
                    dest: "<%= dirs.img %>/"
                }]
            }
        },

        // Notificações
        notify: {
          less: {
            options: {
              title: "LESS - <%= pkg.title %>",
              message: "Compilado e minificado com sucesso!"
            }
          },
          js: {
            options: {
              title: "Javascript - <%= pkg.title %>",
              message: "Minificado e validado com sucesso!"
            }
          },
          image: {
            options: {
              title: "<%= pkg.title %>",
              message: "Imagens otimizadas com sucesso!"
            }
          }
        },

        // Deploy via FTP
        "ftp-deploy": {
            build: {
                auth: {
                    host: "ftp.dominio.com.br",
                    port: 21,
                    authKey: "key1"
                },
                src: "/",
                dest: "/caminho/para/meu-projeto",
                exclusions: [
                    ".DS_Store",
                    "**/.DS_Store",
                    "**/Thumbs.db",
                    ".git/*",
                    ".gitignore",
                    "assets/less/*",
                    "node_modules/*",
                    ".ftppass",
                    ".jshintrc",
                    "Gruntfile.js",
                    "package.json",
                    "README.md",
                    "LICENSE.md"
                ]
            }
        }

    };


    // Iniciando as configurações do Grunt
    grunt.initConfig(appConfig);


    // Registrando as tarefas
    // --------------------------
    
    // Tarefa padrão
    grunt.registerTask( "default", [ "jshint", "less", "uglify" ] );

    // Observar mudanças dos arquivos
    grunt.registerTask( "watch-files", [ "watch" ]);

    // Optimizar imagens
    grunt.registerTask( "optimize", [ "imagemin", "notify:image" ] );

    // Deploy via FTP
    grunt.registerTask( "deploy", [ "ftp-deploy" ] );
    
    
    // Aliases para as tarefas
    grunt.registerTask( "w", [ "watch" ] );
    grunt.registerTask( "o", [ "optimize" ] );
    grunt.registerTask( "d", [ "deploy" ] );

};
