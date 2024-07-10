# web-development
Repositório destinado ao estudo de desenvolvimento web

# Estrutura de um website
- HTML: estrutura
- CSS: estilo
- JS: funcionalidade

![alt text](image.png)

# Elementos
- h1: título grande. Vai diminuindo de acordo com o aumento do "h", por exemplo, h1 > h2 > h3
- body: contém toda parte visível da página 
- p: parágrafo. Texto principal a ser lido
- comentários: mostra mensagens sem afetar o output do programa
- main:
- img: não tem uma closing tag. Contém o src="" que indica o caminho de onde o o code editor deve puxar a imagem. Ele também possui um alt="", que é um texto que aparece caso não se consiga mostrar a imagem. 
- HTML atributes: palavras especiais usadas dentro de uma opening tag de um elemento para controlar o comportamento do elemento. 
- a (âncora): qualquer coisa pode ser uma âncora para um link. Usa um href="" (link) e cria meio que um botão ou um link clicável como o nome que fica entre o opening e o closing tag do a. Dentro do a também existe o target que pode ser:
        - _self: abre o link na mesma página
        - _blank: abre o link em uma nova aba do navegador
        - _parent: abre o link no frame pai do atual. Se não houver um pai, comporta-se como um "_self"
        - _top: abre o link no contexto do topo da janela, removendo todos os frames. Se não houver frames, comporta-se como "_self"

- ul (unsorted list): meio que dá um tab pra iniciar uma lista com "li"
- li (list): cria os pontos * da lista de itens
- ol (ordered list): dá um tab pra lista mas numera cada item da lista com 1. 2. ...
- strong: bold a palavra
- em (enfatizar): torna a plavra italico 

*A maioria dos elementos são containers que contém informação entre a opening tag e a closing tag. Exemplo: <>hello</>*

Outros elementos não contém necessariamente informação acompanhada. Como exemplo, pode-se citar <!doctype html>. Isso avisa ao servidor para ele esperar um documento HTML usando a versão mais atual.

