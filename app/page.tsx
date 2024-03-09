import Link from "next/link"
import logo from "../assets/logo.svg"
import landingImage from "../assets/main.svg"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <Image src={logo} alt='logo' />
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            Job <span className='text-primary'>tracking</span> app
          </h1>
          <p className='leading-loose max-w-md mt-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, sed
            dolores quod quo voluptate quae, iusto tempore cumque labore animi
            quos ex corrupti? Blanditiis repellat, dolore illum quo vero est!
          </p>
          <Button asChild className='mt-4'>
            <Link href={"/add-job"}>Get Started</Link>
          </Button>
        </div>
        <Image src={landingImage} alt='landing' className='hidden lg:block' />
      </section>
    </main>
  )
}
