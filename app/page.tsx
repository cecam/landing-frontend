import Form from '@/components/SocialMedia/Form';
import Box from '@/components/SocialMedia/Box';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="max-h-[480px] grid grid-col place-items-center gap-3 p-5">
        <img src="/logo.png" alt="cecam logo" className="w-[200px] h-[200px] rounded-full ring-4 ring-gray-300" />

        <h1 className="text-3xl font-bold text-[#333]">Celso Cárdenas</h1>
        <p className=" text-lg tracking-wide text-center text-[#4e4e4e]">Hola soy Cecam, la leyenda del código y distraído profesional</p>
        <Form />
      </div>

      <div>
        <Box />
      </div>
    </section>
  )
}
