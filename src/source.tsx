
export interface News {
    link: string,
    title: string,
    image: string,
    content: string,
    releaseDate: string
}
export interface Service {
    title: string;
    subtitle: string;
    content: string;
    link: string;
    advantage: ServiceAdvantage[]
}

export interface ServiceAdvantage {
    icon: string;
    title: string;
    content: string;
}

interface BusinessMetrics {
    clientRevenue: string;
    growthPercentage: string;
    peopleImpacted: string;
}

export const news: News[] = Array.from({ length: 20 }, (_, index) => ({
    link: `noticia-${index + 1}`,
    title: `Título da Notícia ${index + 1}`,
    image: 'caminho-da-imagem',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus. In metus vulputate eu scelerisque felis imperdiet proin. Et malesuada fames ac turpis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Sed cras ornare arcu dui vivamus arcu felis. Viverra mauris in aliquam sem fringilla ut. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisi vitae suscipit tellus mauris a diam maecenas sed. Sed risus ultricies tristique nulla aliquet enim. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Leo integer malesuada nunc vel risus commodo viverra maecenas.`,
    releaseDate: '01 janeiro 2024',
}));

export const services: Service[] = Array.from({ length: 3 }, (_, index) => ({
    link: `servicio-${index + 1}`,
    subtitle: `Solucao de ${index + 1}`,
    title: `Título do Servico ${index + 1}`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus.`,
    advantage: Array.from({ length: 6 }, (_, index) => ({
        icon: `servicio-${index + 1}`,
        title: `Vantagem ${index + 1}`,
        content: `Dignissim enim sit amet venenatis urna cursus. In metus vulputate eu scelerisque felis imperdiet proin.`,
    }))
}));

export const metrics: BusinessMetrics = {
    clientRevenue: "32.223.321",
    growthPercentage: "53",
    peopleImpacted: "982",
};

// export const news: News[] = [
//     {
//         link: 'string',
//         title: 'Empresas contrataram 32% vezes consultoria nos ultimos 3 anos',
//         image: 'string',
//         content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus. In metus vulputate eu scelerisque felis imperdiet proin. Et malesuada fames ac turpis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Sed cras ornare arcu dui vivamus arcu felis. Viverra mauris in aliquam sem fringilla ut. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisi vitae suscipit tellus mauris a diam maecenas sed. Sed risus ultricies tristique nulla aliquet enim. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Leo integer malesuada nunc vel risus commodo viverra maecenas.`,
//         releaseDate: '23 dezembro 2023'
//     }
// ]


