/*
    Ser autenticavel significa ter o método autenticar.
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        /* 
            "Duck type"
            * Verificar se o objeto recebido para autenticação é autenticavel verificando
            se o objeto possui uma propriedade "autenticar" e se essa propriedade é
            uma função (método), pois uma função dnetro de uma classe também é um objeto.
            Se sim => retornar true ou se não => retornar false;

        */
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}