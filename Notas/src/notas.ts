export interface Nota {
    id: number;
    title: string;
    text: string;
}

export const NOTAS: Nota[] = [
    {
        id: 1,
        title: 'Lorem',
        text: 'Curabitur eu diam nec diam aliquam tincidunt et quis odio. Aenean iaculis tempor risus, sollicitudin dictum nisi gravida id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque imperdiet at orci sit amet imperdiet. Quisque mollis enim et finibus pellentesque. Praesent vel posuere metus. Integer faucibus arcu sed dolor blandit, non ornare eros faucibus. Quisque nec elit eget augue interdum volutpat. Donec ac justo et leo maximus molestie. Integer tempor lectus vel tincidunt rutrum. Suspendisse nec maximus dui, in vestibulum augue. Proin suscipit sapien sem, quis eleifend tellus interdum vel. Fusce vestibulum, felis ut consectetur sollicitudin, ipsum lectus imperdiet massa, vel sagittis velit nunc placerat augue.'
    },
    {
        id: 2,
        title: 'Pato flutuante',
        text: 'termo usado pela Universidade de Stanford para simbolizar a disparidade entre aparências e a realidade. Isso se aplica, principalmente, no sentido profissional. Geralmente em um contexto da vida de pessoas que são símbolo do sucesso para a sociedade, mas, na verdade, estão desabando dentro de si, sofrendo de uma ansiedade enorme somente para passar uma imagem de competência.'
    }
]