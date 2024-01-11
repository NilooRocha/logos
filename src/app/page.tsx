import { Button } from "@/components/ui/button";
import Image from "next/image";
import vibingPic from '../../public/vibing.jpg';
import vrPic from '../../public/vr.jpg';
import workingPic from '../../public/working.jpg';
import techPic from '../../public/tech.jpg';
import chessPic from '../../public/chess.jpg';
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { News, Service, metrics, news, services } from "@/source";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
export default function Home() {

  const isOdd = (index: number): string | undefined => { if (index % 2 == 0) { return "md:order-2" } }

  const leatestNews = news.slice(-2)

  return (
    <>
      {/* PRIMEIRA PARTE */}
      <div id="primeira parte" >
        <div className=" relative h-[40rem] overflow-hidden">
          <video className="w-full h-full object-cover " playsInline autoPlay muted loop src="video.mp4" />
          <div className="absolute inset-0 bg-gray-600 opacity-50" />
          <div className=" absolute bottom-0 left-0 w-full md:bottom-36  text-white p-8  flex items-center justify-center" >
            <div className="md:w-[40rem] md:mr-48">
              <h1 className="text-white text-4xl md:text-5xl font-bold  mb-4">
                O futuro da sua empresa <br /> é na <span className="underline decoration-blue-600" >Logos!</span>
              </h1>
              <p className="text-white font-normal mb-4 md:text-lg">
                Nossa consultoria é feita <span className="underline decoration-blue-600" >sob medida</span> se adequando às particularidades de cada negócio, sempre com aderência à cultura organizacional.
                Nossa equipe conta com experiência em multinacionais e áreas estratégicas, vivência no exterior e bom network.
              </p>
              <Button variant={'secondary'} className='text-blue-800 font-semibold text-sm mt-1'>Quero ser cliente!</Button>

            </div>

          </div>
        </div>
      </div >


      {/* SEGUNDA PARTE */}
      <div id="segunda parte" className="md:container" >


        {services.length > 0 &&
          services.map(({ content, link, title, subtitle }: Service, index: number) => (
            <div key={index} className="flex justify-center items-center flex-col my-6 mx-3 md:flex-row " >
              <Image

                className={cn(
                  "md:w-1/2",
                  isOdd(index),
                )}
                src={vibingPic}
                alt="Mulher escutando musica e daçando"
              />
              <div className="mt-4 md:w-1/2 md:p-7" >
                <h2 className="text-slate-500 font-semibold my-1 md:text-1xl " >{subtitle.toUpperCase()}</h2>
                <h1 className="text-slate-700 font-bold text-2xl md:text-4xl md:my-3  ">{title}</h1>
                <p className="text-slate-500 md:text-2xl " >{content}</p>
                <div className="flex flex-col md:flex-row  md:mt-3" >
                  <Button asChild className=" w-[100%] md:w-[30%] mt-3 h-12 text-xl md:mr-5"   >
                    <Link href={`/services/${link}`}>Saiba mais!</Link>
                  </Button>
                  <Button variant={"outline"} className="border-blue-600 w-[100%] md:w-[30%] mt-3 h-12 text-xl text-blue-600" >Quero aderir</Button>
                </div>
              </div>
            </div>
          ))
        }
        {/* 
        <div className="flex justify-center items-center flex-col my-6 mx-3 md:flex-row " >
          <Image
            className="md:w-1/2 md:order-2"
            src={vibingPic}
            alt="Mulher escutando musica e daçando"
          />
          <div className="mt-4 md:w-1/2 md:p-7" >

            <h2 className="text-slate-500 font-semibold my-1 md:text-1xl " >SOLUCOES DE MARKETING</h2>

            <h1 className="text-slate-700 font-bold text-2xl md:text-4xl md:my-3  ">Com uma estrategia simples e eficaz para alavancar suas vendas</h1>
            <p className="text-slate-500 md:text-2xl " >Com nossa estrategia de marketing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum </p>

            <div className="flex flex-col md:flex-row  md:mt-3" >
              <Button className=" w-[100%] md:w-[30%] mt-3 h-12 text-xl md:mr-5" >Saiba mais!</Button>
              <Button variant={"outline"} className="border-blue-600 w-[100%] md:w-[30%] mt-3 h-12 text-xl text-blue-600" >Quero aderir</Button>
            </div>
          </div>
        </div>

        <div className="flex  justify-center items-center flex-col my-6 mx-3 md:flex-row " >

          <Image
            className="md:w-1/2"
            src={vrPic}
            alt="Mulher escutando musica e daçando"
          />
          <div className="mt-4 md:w-1/2 md:p-7" >

            <h2 className="text-slate-500 font-semibold my-1 md:text-1xl " >SOLUCOES DE MARKETING</h2>

            <h1 className="text-slate-700 font-bold text-2xl md:text-4xl md:my-3 ">Com uma estrategia simples e eficaz para alavancar suas vendas</h1>
            <p className="text-slate-500 md:text-2xl " >Com nossa estrategia de marketing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum </p>

            <div className="flex flex-col md:flex-row md:mt-3 " >
              <Button className=" w-[100%] md:w-[30%] mt-3 h-12 text-xl md:mr-5" >Saiba mais!</Button>
              <Button variant={"outline"} className="border-blue-600 w-[100%] md:w-[30%] mt-3 h-12 text-xl text-blue-600" >Quero aderir</Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col my-6 mx-3 md:flex-row " >
          <Image
            className="md:w-1/2 md:order-2"
            src={workingPic}
            alt=" "
          />
          <div className="mt-4 md:w-1/2 md:p-7" >

            <h2 className="text-slate-500 font-semibold my-1 md:text-1xl " >SOLUCOES DE MARKETING</h2>

            <h1 className="text-slate-700 font-bold text-2xl md:text-4xl md:my-3">Com uma estrategia simples e eficaz para alavancar suas vendas</h1>
            <p className="text-slate-500 md:text-2xl " >Com nossa estrategia de marketing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum </p>

            <div className="flex flex-col md:flex-row md:mt-3 " >
              <Button className=" w-[100%] md:w-[30%] mt-3 h-12 text-xl md:mr-5" >Saiba mais!</Button>
              <Button variant={"outline"} className="border-blue-600 w-[100%] md:w-[30%] mt-3 h-12 text-xl text-blue-600" >Quero aderir</Button>
            </div>
          </div>
        </div> */}

      </div >





      {/* TERCEIRA PARTE */}
      <div id="terceira parte" className="my-7 mx-3 md:container " >

        <div className="flex items-end justify-between " >
          <h1 className="text-slate-700 font-bold text-3xl ">Ultimas noticias</h1>
          <Link href={'/news'} className="text-slate-700 font-semiboldbold cursor-pointer " >Ver tudo →</Link>
        </div>
        <Separator className="mt-2" />

        <div className="flex flex-col md:flex-row" >
          {leatestNews.length > 0 &&
            leatestNews.map(({ link, title, releaseDate }: News, index: number) => (
              <Link key={index} href={`/news/${link}`} className="flex cursor-pointer flex-col my-6 mx-3 " >
                <Image
                  src={techPic}
                  alt="Mulher escutando musica e daçando"
                />
                <div className="mt-4" >
                  <h2 className="text-slate-500 font-semibold my-1 text-sm" >{releaseDate}</h2>
                  <h1 className="text-slate-700 font-bold text-2xl ">{title}</h1>
                </div>
              </Link>
            ))}

          {/* <a className="flex cursor-pointer  justify-center items-center flex-col my-6 mx-3 " >
            <Image
              src={techPic}
              alt="Mulher escutando musica e daçando"
            />
            <div className="mt-4" >
              <h2 className="text-slate-500 font-semibold my-1 text-sm" >27 dezembro 1999</h2>
              <h1 className="text-slate-700 font-bold text-2xl ">Como o uso da tecnologia nas nossas consultorias aumentaram os resultados</h1>
            </div>
          </a>

          <a className="flex cursor-pointer  justify-center items-center flex-col my-6 mx-3 " >
            <Image
              src={chessPic}
              alt="Mulher escutando musica e daçando"
            />
            <div className="mt-4" >
              <h2 className="text-slate-500 font-semibold my-1 text-sm" >01 dezembro 2021</h2>
              <h1 className="text-slate-700 font-bold text-2xl ">Empresas contrataram 32% vezes consultoria nos ultimos 3 anos</h1>
            </div>
          </a> */}
        </div>

      </div >

      {/* QUARTA PARTE */}
      < div id="quarta parte" className="my-7 mx-3 md:container" >

        <div className="flex items-end justify-between " >
          <h1 className="text-slate-700 font-bold text-3xl ">Nossos resultados</h1>
        </div>
        <Separator className="mt-2" />

        <div className="flex flex-col md:flex-row " >
          <div className="my-2 md:mx-5 " >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600" >R$ {metrics.clientRevenue}</h1>
            <h2 className="font-semibold" >Faturamento dos clientes</h2>
          </div>

          <div className="my-2  md:mx-5" >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600" >+{metrics.growthPercentage}%</h1>
            <h2 className="font-semibold" >Porcentagem de crescimento</h2>
          </div>

          < div className="my-2  md:mx-5" >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600" >{metrics.peopleImpacted}</h1>
            <h2 className="font-semibold" >Pessoas impactadas</h2>
          </div>
        </div>

      </div >




    </>
  );
}