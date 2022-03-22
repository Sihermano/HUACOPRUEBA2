import * as React from 'react'
import imagenes from '../components/imagenes'

const Vista3 = () => {
    return (
        <div className='mt-[64px] lg:mt-[200px] mx-[20px] lg:px-[96px]'>
            <div className='text-white text-[40px] font-sans font-[700] -tracking-[.02em] lg:text-[80px]'>
                Roadmap
            </div>

            <div className='text-white text-[15px] font-sans font-[550] opacity-60    lg:text-[16px]'>
                Genesis Collection
            </div>

            <div className='flex flex-col  mt-[48px]  lg:flex-row lg:mt-[112px] '>
                <div className='order-1 mb-[48px] lg:order-2 lg:basis-1/2 lg:mt-[50px]'>
                    <img
                        className='w-auto lg:ml-auto lg:w-full lg:h-[1000px] '
                        alt="foto"
                        src={imagenes.img3}/>
                </div>
                <div className='order-2 lg:order-1 lg:basis-1/2'>
                    <div>
                        <div className='text-white text-[40px] font-sans font-[700] -tracking-[.02em] opacity-30 lg:text-[80px]'>1</div>
                        <div className='text-white text-[26px] font-sans font-[450] -tracking-[.02em] lg:text-[32px] lg:w-[360px]'>Una vez lleguemos al 50% de la venta</div>
                        <div className='text-white text-[15px] font-sans font-[550] -tracking-[.02em] opacity-60 lg:text-[16px] lg:w-[420px]'>Organizaremos una búsqueda del tesoro escondiendo 2 ítems del wakoverso en diferentes locaciones en la ciudad de Lima.</div>
                    </div>
                    <div className='pt-[64px] lg:pt-[112px]'>
                        <div className='text-white text-[40px] font-sans font-[700] -tracking-[.02em] opacity-30 lg:text-[80px]'>2</div>
                        <div className='text-white text-[26px] font-sans font-[450] -tracking-[.02em] lg:text-[32px] lg:w-[360px]'>Cuando lleguemos al 100% de las ventas</div>
                        <div className='text-white text-[15px] font-sans font-[550] -tracking-[.02em] opacity-60 lg:text-[16px] lg:w-[420px]'>Distribuiremos esculturas de los wakos a los colecionistas.  Haremos una rifa entre los 10 coleccionistas con más wakos, donde podrán ganas una experiencia inmersiva en la costa, sierra o selva del Perú dependiendo de las caraterísticas de sus wakos.  A parte de ello, todos los coleccionistas tendrán acceso a cursos y webinars sobre el metaverso.</div>
                    </div>
                    <div className='pt-[64px] lg:pt-[112px]'>
                        <div className='text-white text-[40px] font-sans font-[700] -tracking-[.02em] opacity-30 lg:text-[80px]'>3</div>
                        <div className='text-white text-[26px] font-sans font-[450] -tracking-[.02em] lg:text-[32px]'>Nueva colección: Wakos 3D</div>
                        <div className='text-white text-[15px] font-sans font-[550] -tracking-[.02em] opacity-60 lg:text-[16px] lg:w-[420px]'>Nuestros coleccionistas tendrán  early access a la nueva colección de wakos 3D. Queremos que todos participen activamente de la comunidad y propongan nuevas ideas para ella, por esto el miembro con la mejor idea se ganará un wako storyteller y su idea será reflejada en aquella colección. </div>
                    </div>
                </div>
            </div>

            <div className=' pt-[72px] lg:pt-[122px]'>
                <svg class="w-[35px] h-[45px] text-white lg:w-[50px] lg:h-[50px]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>

        
            
       </div>
    )

}
  export default Vista3