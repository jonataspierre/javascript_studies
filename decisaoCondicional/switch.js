let sinal = 'azul';

switch (sinal) {

    case 'verde':
        console.log('cor ' + sinal + ' : siga');
        break;

    case 'amarelo':
        console.log('cor ' + sinal + ' : atenção');
        break;

    case 'vermelho':
        console.log('cor ' + sinal + ' : pare');
        break;

    default:
        console.log(`cor ${sinal} inválida`); //com a crase ele 'pula' a linha, bom para loops
        break;
}