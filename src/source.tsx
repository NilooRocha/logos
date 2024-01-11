import dynamicIconImports from "lucide-react/dynamicIconImports";

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
    contentExtra?: string;
    link: string;
    advantage: ServiceAdvantage[]
}

export interface ServiceAdvantage {
    icon: keyof typeof dynamicIconImports;
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

// export const services: Service[] = Array.from({ length: 3 }, (_, index) => ({
//     link: `servicio-${index + 1}`,
//     subtitle: `Solucao de ${index + 1}`,
//     title: `Título do Servico ${index + 1}`,
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit amet venenatis urna cursus.`,
//     advantage: Array.from({ length: 6 }, (_, index) => ({
//         icon: `servicio-${index + 1}`,
//         title: `Vantagem ${index + 1}`,
//         content: `Dignissim enim sit amet venenatis urna cursus. In metus vulputate eu scelerisque felis imperdiet proin.`,
//     }))
// }));

export const services: Service[] = [
    {
        title: 'Estratégias, Estruturação de Vendas/Marketing e Canal de Vendas',
        subtitle: 'Canal de Vendas',
        link: 'gestao-estrategica-excelencia',
        content: 'Transformamos análises de concorrentes em estratégias poderosas, gerenciamos suas finanças com precisão e criamos campanhas envolventes, incluindo jingles cativantes e motivacionais para impulsionar suas vendas e motivar sua equipe.',
        contentExtra: 'Projetos Taylormade : Projetos “sob medida”, buscando soluções através de Ferramentas e Modelos Corporativos adaptados à realidade do cliente, bem como utilização de bom Network Corporativo, em todas as regiões do Brasil. Equipe possui experiência com multinacionais, além de relacionamentos internacionais, tais como: EUA, Itália , Alemanha  e China.',
        advantage: [
            {
                icon: `line-chart`,
                title: `Análise Estratégica de Concorrentes`,
                content: `Insights precisos para antecipar e superar as tendências do mercado.`
            },
            {
                icon: `coins`,
                title: `Gestão Financeira Eficiente`,
                content: `Previsões detalhadas e planejamento estratégico para otimizar recursos financeiros.`
            },
            {
                icon: `presentation`,
                title: `Campanhas de Vendas Estratégicas`,
                content: `Desenvolvimento de estratégias de vendas envolventes para impulsionar o crescimento.`
            },
            {
                icon: `sticker`,
                title: `Campanhas Motivacionais Impactantes`,
                content: `Criação de campanhas motivacionais que inspiram e engajam sua equipe.`
            },
            {
                icon: `badge-check`,
                title: `Identidade de Marca Memorável`,
                content: `Jingles exclusivos para fortalecer a presença de sua marca de forma inesquecível.`
            },
            {
                icon: `trending-up`,
                title: `Suporte Abrangente ao Sucesso Empresarial`,
                content: `Fortalecimento dos alicerces do sucesso empresarial, conquistando mercados e inspirando equipes a atingir novos patamares.`
            },
        ]
    },

    {
        title: 'Eficiência Elevada em Gerenciamento de Projetos e Processos',
        subtitle: 'Gerenciamento de Projetos',
        link: 'gerenciamento-projetos-eficiencia',
        content: 'O serviço de Gerenciamento de Projetos e Mapeamento de Processos oferece à sua empresa uma abordagem única para aprimorar sua eficiência operacional. Ao interagir estrategicamente com sócios e diversas áreas, mapeamos procedimentos, eliminamos gargalos e apresentamos resultados gerenciais, proporcionando uma gestão fluida e transparente, com foco no sucesso continuado de sua empresa.',
        contentExtra: 'Tanto a visão e experiência comercial quanto a habilidade de Gestão/Jurídica da LOGOS, permitem nos reunirmos com nossos clientes, entendermos o momento de cada projeto e/ou necessidade da empresa, e avaliar em conjunto: soluções, prazos de entrega, condições comerciais e planejamento de médio e longo prazo. ',
        advantage: [
            {
                icon: `heart-handshake`,
                title: `Interação Estratégica`,
                content: `Fortalecimento das relações com sócios e diversas áreas para garantir alinhamento estratégico.`
            },
            {
                icon: `bar-chart-horizontal`,
                title: `Mapeamento Preciso de Processos`,
                content: `Identificação e tratamento eficaz de gargalos operacionais através de procedimentos detalhadamente mapeados.`
            },
            {
                icon: `trending-up`,
                title: `Resultados Gerenciais Transparentes`,
                content: `Estruturação e apresentação de resultados gerenciais periódicos, proporcionando visibilidade mensal, trimestral e anual do desempenho da empresa.`
            }
        ]
    },

    {
        title: 'Excelência na Gestão Estratégica Empresarial',
        subtitle: 'Gestão Estratégica',
        link: 'estrategias-vendas-marketing',
        content: 'Maximize o potencial da sua empresa com nosso serviço de Gestão Estratégica. Aplicamos estratégias eficazes, entendemos sua cultura organizacional, e interagimos de maneira ágil com recursos humanos. Desenvolvemos planos de 5 e 10 anos, apresentando-os de forma impactante a sócios, conselhos e investidores. Confiabilidade e eficiência, tudo em um só lugar para elevar a gestão estratégica da sua empresa.',
        contentExtra: 'Cultura Empresarial: Outro diferencial da Logos se encontra na habilidade de ouvir as necessidades do cliente, e ao propor soluções e/ou recomendações, avaliar junto com a liderança: caminhos e impactos pertinentes ao modelo de negócio juntamente com a Cultura Empresarial.',
        advantage: [
            {
                icon: `bot`,
                title: `Estratégias e Metodologias Aplicadas`,
                content: `Utilização de estratégias, ferramentas e metodologias comprovadas para otimizar a eficiência empresarial.`
            },
            {
                icon: `heart-handshake`,
                title: `Integração Cultural e Gestão de Recursos Humanos`,
                content: `Compreensão profunda da cultura organizacional, facilitando a interação eficaz com os recursos humanos disponíveis e necessários.`
            },
            {
                icon: `calendar-check`,
                title: `Planejamento de Longo Prazo`,
                content: `Desenvolvimento de Business Plans abrangentes para metas de 5 e 10 anos, assegurando uma visão clara e sustentável.`
            }
        ]
    }
]





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


