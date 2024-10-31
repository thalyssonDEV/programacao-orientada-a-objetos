help_text = """
Comandos disponíveis:

  touch <nome_do_arquivo>
      Cria um novo arquivo com o nome especificado. Exemplo:
      touch novo_arquivo.txt

  echo <texto> > <nome_do_arquivo>
      Escreve o texto especificado no arquivo, sobrescrevendo o conteúdo anterior.
      Exemplo:
      echo "Olá, mundo!" > arquivo.txt

  echo <texto> >> <nome_do_arquivo>
      Adiciona o texto especificado ao final do arquivo.
      Exemplo:
      echo "Mais uma linha." >> arquivo.txt

  clear
      Limpa a tela do terminal.

  rm <nome_do_arquivo>
      Remove o arquivo especificado. Exemplo:
      rm arquivo.txt

  mv <arquivo_antigo> <novo_nome>
      Renomeia ou move o arquivo especificado para o novo nome. Exemplo:
      mv arquivo.txt novo_nome.txt

  exit
      Sai do terminal.

  help
      Exibe esta mensagem de ajuda.
"""

print(help_text)