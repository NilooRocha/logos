import Navigation, { NavigationProps } from "@/components/Navigation"
import { News, news } from "@/source"
import Image from "next/image"
import Link from "next/link"
import chessPic from '../../../public/chess.jpg';


export default function AllNews() {

    let navigationInfo: NavigationProps[] = [{ link: '/news', title: 'Noticias' }]



    return (
        <>
            {navigationInfo.length > 0 && <Navigation navigationProps={navigationInfo} />}



            <div className="md:container " >

                <h1 className=" text-3xl md:text-4xl font-bold text-slate-700 mx-5 md:mx-28 mb-2" >Noticias</h1>

                <div className="flex flex-wrap items-center justify-center " >

                    {news.map(({ title, link, releaseDate }: News, index: number) => {
                        return (
                            <div key={index} className="w-72 h-80 m-5" >
                                <Link href={`/news/${link}`} >
                                    <Image

                                        src={chessPic}
                                        alt="Jogando chadrez"
                                    />
                                    <div className="my-4" >
                                        <p className="text-sm font-semibold text-slate-500 " >{releaseDate}</p>
                                        <h1 className="text-xl text-slate-700 font-bold " > {title}</h1>
                                        <h2 className="font-bold text-blue-600 " >LER →</h2>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}