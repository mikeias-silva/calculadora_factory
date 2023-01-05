function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },
        pressionaBackSpace() {
            this.display.addEventListener('keydown', event => {
                if (event.keyCode === 8) {
                    event.preventDefault();
                    this.apagarUm();
                }
            });
        },
        //chama realizar conta
        pressionaEnter() {
            this.display.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        //realiza conta com eval, e try catch
        realizaConta() {
            let conta = this.display.value
            try {
                if (isNaN(eval(conta))) {
                    alert('Numero invalido!')
                    return;
                }
                this.display.value = eval(conta)

            } catch (error) {
                alert('Numero inválido!')
                return;
            }
        },
        //limpar display
        clearDisplay() {
            this.display.value = '';
        },
        //apaga ultimo item com slice
        apagarUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
        //acoes de cada botao, numero chama numero, deletar chama deletar e igual chama realizar conta
        cliqueBotoes() {
            document.addEventListener('click', event => {
                const elemento = event.target
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText)
                }
                if (elemento.classList.contains('btn-equal')) {
                    this.realizaConta()
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (elemento.classList.contains('btn-back')) {
                    this.apagarUm()
                }
            })
        },
        //numero do botao para o display
        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    }

}
const calculadora = criaCalculadora();
calculadora.inicia();