export interface Nota {
    id: number;
    title: string;
    text: string;
}

export const NOTAS: Nota[] = [
    {
        id: 1,
        title: 'Sindrome do Pato flutuante',
        text: 'Imagine um pato em um lago flutuando e passeando como em um lindo filme em uma fazenda. A cena é serena e calma, mas o que muitos não sabem é que embaixo daquela superfície aquática, as pernas do pato em questão estão trabalhando a todo o vapor.'
    },
    {
        id: 2,
        title: 'veja se o conceito se aplica a você',
        text: 'A Síndrome do Pato Flutuante foi o termo usado pela Universidade de Stanford para simbolizar a disparidade entre aparências e a realidade. Isso se aplica, principalmente, no sentido profissional. Geralmente em um contexto da vida de pessoas que são símbolo do sucesso para a sociedade, mas, na verdade, estão desabando dentro de si, sofrendo de uma ansiedade enorme somente para passar uma imagem de competência.'
    }
]