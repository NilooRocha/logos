import Image from "next/image";
import chessPic from '../../../../public/chess.jpg';
import { News, news } from "@/source";
import Navigation, { NavigationProps } from "@/components/Navigation";
import { redirect } from "next/navigation";


export default function News({ params }: { params: { slug: string } }) {

    const selectedNews: News | undefined = news.find(({ link }: News) => link === params.slug);
    if (!selectedNews) {
        redirect('/news')
    }

    let navigationInfo: NavigationProps[] = []

    if (selectedNews) {
        (navigationInfo = [
            { link: '/news', title: 'Noticias' },
            { link: selectedNews?.link, title: selectedNews?.title }
        ])
    }


    return (<>

        {navigationInfo.length > 0 && <Navigation navigationProps={navigationInfo} />}
        <div className="md:container flex flex-col  " >
            <div>
                <p className="  mx-5 mb-2 mt-1 md:mx-28 font-semibold" >{selectedNews?.releaseDate}</p>
                <h1 className=" text-3xl md:text-4xl font-bold text-slate-700 mx-5 md:mx-28 mb-2" >{selectedNews?.title}</h1>
            </div>
            <div className="mx-5" >
                <Image

                    src={chessPic}
                    alt="Jogando chadrez"
                />
            </div>
            <p className="md:text-xl md:mx-32 mx-6 my-5" >
                {selectedNews?.content}
            </p>
        </div>

    </>)
}
