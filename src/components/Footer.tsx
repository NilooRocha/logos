import { Mail, MailPlusIcon, Phone } from "lucide-react";

export default function Footer() {
    return (
        <>
            <div className=" flex flex-col items-center h-72 bg-blue-600 text-white" >

                <MailPlusIcon className="text-white mt-2" size='70' />
                <h1 className="text-2xl md:text-3xl font-semibold mx-6" >Entre em contato conosco para <span className="underline decoration-white" >alavancar</span>  seu negocio  agora mesmo!</h1>
                <div>

                    {/* <div className="mt-8 flex items-center justify-center text-lg font-semibold">
    <Phone className="mr-2" />
    +11 9 9283-12394
  </div> */}
                    <div className="mt-8 flex items-center justify-center text-lg md:text-xl font-semibold" >
                        <Mail className="mr-2" />
                        contato@logos.com
                    </div>
                    <div className="mt-8 flex items-center justify-center text-lg  md:text-xl  font-semibold mb-6" >
                        <Phone className="mr-2" />
                        numero de tel
                    </div>
                </div>


            </div>

            <div className="flex justify-center items-center h-10 bg-blue-950 text-white mt-" >
                <div className="ml-2 text-sm  " >

                    <a className="mr-5" >Privacy policy</a>
                    <a className="mr-5" >Trabalhe com a gente</a>
                    <a className="mr-5" >Nossa Equipe</a>

                </div>
            </div>
        </>

    )
}
