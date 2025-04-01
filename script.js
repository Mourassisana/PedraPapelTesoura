function jogar() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    
    Swal.fire({
      title: 'Escolha sua jogada!',
      input: 'select',
      inputOptions: {
        'pedra': 'Pedra',
        'papel': 'Papel',
        'tesoura': 'Tesoura'
      },
      inputPlaceholder: 'Escolha...',
      showCancelButton: true,
      confirmButtonText: 'Jogar',
      cancelButtonText: 'Cancelar',
      preConfirm: (jogadorEscolha) => {
        // Escolha do computador
        const computadorEscolha = opcoes[Math.floor(Math.random() * 3)];

        // Determinação do vencedor
        let resultado = '';
        if (jogadorEscolha === computadorEscolha) {
          resultado = "Empate! Ambos escolheram " + jogadorEscolha + ".";
        } else if (
          (jogadorEscolha === 'pedra' && computadorEscolha === 'tesoura') ||
          (jogadorEscolha === 'papel' && computadorEscolha === 'pedra') ||
          (jogadorEscolha === 'tesoura' && computadorEscolha === 'papel')
        ) {
          resultado = "Você ganhou! " + jogadorEscolha + " vence " + computadorEscolha + ".";
        } else {
          resultado = "Você perdeu! " + computadorEscolha + " vence " + jogadorEscolha + ".";
        }

        // Exibindo o resultado no SweetAlert
        return Swal.fire({
          title: 'Resultado',
          text: resultado,
          icon: resultado.includes('ganhou') ? 'success' : resultado.includes('perdeu') ? 'error' : 'info',
          confirmButtonText: 'Jogar novamente'
        });
      }
    });
  }