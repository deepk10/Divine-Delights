import Image from 'next/image'
import Link from 'next/link'

const notFound = () => {
  return (
      <div className="bg-pink-50 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        <Image src="/404.svg" alt="Logo" width={176.5} height={80} className="w-[275px] h-auto"/>
        <Link href="/"><button className="rounded-lg bg-pink-200 text-2xl font-[450] p-3">Go Back To Home</button></Link>
      </div>
    
  )
}

export default notFound