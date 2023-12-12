import { ChevronRight } from "lucide-react"
import Link from "next/link"

export type NavigationProps = {
    title: string;
    link: string;
}

export default function Navigation({ navigationProps }: { navigationProps: NavigationProps[] }) {
    return (
        <>
            <div className="md:container md:mt-8 mt-1 ml-4 mb-4 flex flex-wrap items-center flex-shrink-0 space-x-1 text-base text-muted-foreground">
                <Link href={'/'} className="overflow-hidden text-ellipsis whitespace-nowrap">Home</Link>
                <ChevronRight />
                {navigationProps.length > 0 &&
                    navigationProps.map(({ link, title }: NavigationProps, index: number) => (
                        <div key={link} className="flex flex-row">
                            <Link
                                href={link}
                                className={navigationProps.length - 1 !== index ? "overflow-hidden text-ellipsis whitespace-nowrap" : "font-medium text-foreground"}
                            >
                                {title}
                            </Link>
                            {navigationProps.length - 1 !== index && <ChevronRight />}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
