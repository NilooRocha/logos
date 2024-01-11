import { Service, ServiceAdvantage, services } from "@/source";
import Navigation, { NavigationProps } from "@/components/Navigation";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";
import Icon from "@/components/ui/icon";


export default function Service({ params }: { params: { slug: string } }) {

    const selectedService: Service | undefined = services.find(({ link }: Service) => link === params.slug);
    if (!selectedService) {
        redirect('/')
    }

    let navigationInfo: NavigationProps[] = []

    if (selectedService) {
        (navigationInfo = [
            { link: selectedService?.link, title: selectedService?.title }
        ])
    }


    return (<>

        {navigationInfo.length > 0 && <Navigation navigationProps={navigationInfo} />}
        <div className="md:container flex flex-col  " >
            <div>
                <h1 className=" text-3xl md:text-4xl font-bold text-slate-700 mx-5 md:mx-28" >{selectedService?.title}</h1>
            </div>
            <p className="md:text-2xl text-xl text-slate-700 font-light  md:mx-32 mx-6 my-5" >
                {selectedService?.content}
            </p>
            {selectedService?.contentExtra &&
                <p className="md:text-2xl text-xl text-slate-700 font-light  md:mx-32 mx-6 my-5" >
                    {selectedService?.contentExtra}
                </p>
            }



            <h1 className="text-slate-700 font-bold text-3xl ml-2 ">Vantagens</h1>
            <Separator className="mt-2" />

            <div className="flex flex-wrap mt-2 mb-2 items-center justify-center" >



                {selectedService.advantage.length > 0 &&
                    selectedService.advantage.map(({ content, title, icon }: ServiceAdvantage, index: number) => (
                        <div key={index} className="w-80 h-96  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] m-2" >
                            <Icon name={icon} size={60} className="text-blue-600 my-5 ml-7 font-light" />
                            <h1 className="text-2xl text-slate-800 font-bold ml-6 mb-3" >{title}</h1>
                            <p className="text-slate-700 font-light text-lg mx-6" >{content}</p>

                        </div>
                    ))
                }
            </div>

        </div >

    </>)
}
