import * as React from 'react'
import imagenes from '../components/imagenes'

const Vista2 = () => {
    return (
        <div className='bg-white'  id='acercade'>
            <div className='pt-[64px] pb-[40px] mx-[20px] lg:pt-[144px] lg:px-[96px] lg:pb-[10px]'>
                <div>
                    <p className='text-[#00010D] text-[40px] font-sans font-[700] -tracking-[.02em] lg:text-[80px]'>Nuestra historia</p>
                </div>

                <div className='mt-[7px] '>
                    <p className='text-[#00010D] text-[16px] font-sans font-[850] -tracking-[.02em] opacity-[0.55] lg:text-[16px]'>Se  parte  de  la  historia  del  wakoverso</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:mt-[110px] '>

                    <div className='mt-[48px] lg:max-w-[250px] xl:max-w-[320px] 2xl:max-w-[410px] lg:mt-[0px] lg:basis-1/3 lg:mr-auto'>
                        <img
                            className='w-auto pb-auto lg:w-auto lg:pb-auto'
                            alt="foto"
                            src={imagenes.img5}
                        />
                        <div className='mt-[16px] lg:mt-[40px]'>
                            <p className='text-[#00010D] text-[16px] leading-[20px] font-sans font-[850] -tracking-[.02em] lg:text-[16px]'>WAKOS o wacti magicus-evolutionis posibilitus. <span className='opacity-[0.55]'>Familia de entes mágicos reales ficticios, de crecimiento y desarrollo cognitivo-evolutivo lineal y explosivo. De acuerdo a Roitman, Chambi y Aoki (Boston, 2010), son descendientes curvos de la familia andino-kawaii-pop, post revolucionaria, y de la generación primaria global milénica.</span></p>
                        </div>
                    </div>

                    <div className='mt-[48px] lg:max-w-[250px] xl:max-w-[320px] 2xl:max-w-[410px] lg:mt-[0px] lg:basis-1/3 lg:ml-auto lg:mr-auto'>
                        <img
                            className='w-auto pb-auto lg:w-auto lg:pb-auto'
                            alt="foto"
                            src={imagenes.img6}
                            />
                        <div className='mt-[16px] lg:mt-[40px]'>
                            <p className='text-[#00010D] text-[16px] leading-[20px] font-sans font-[850] -tracking-[.02em] lg:text-[16px]'>WAKO Realitus. <span className='opacity-[0.55]'>Mutación al físico por contacto del ideatus con el bosón de Higgs (1964). Proliferación descontrolada en cromatizaciones, especies y subespecies. Las más frecuentes han sido categorizadas por Botazzi, Gregory (1978) en “Sobre la extensión del pop existencialismo real maravilloso a lo largo del imaginario latinoamericano” (Aleph, Ed. XVII,2020, Madrid).</span></p>
                        </div>
                    </div>

                    <div className='mt-[48px] lg:max-w-[250px] xl:max-w-[320px] 2xl:max-w-[410px] lg:mt-[0px] lg:basis-1/3 lg:ml-auto'>
                        <img
                            className='w-auto pb-auto lg:w-auto lg:pb-auto'
                            alt="foto"
                            src={imagenes.img7}
                        />
                        <div className='mt-[16px] lg:mt-[40px]'>
                            <p className='text-[#00010D] text-[16px] leading-[20px] font-sans font-[850] -tracking-[.02em] lg:text-[16px]'>WAKO Cryto (Digi-limitus). <span className='opacity-[0.55]'>Expansión consecuente al metaverso de la especie debido al crecimiento exponencial del algoritmo de Veerhman (2022). En este continuo emerge el narratio-mythus que ha sido compilado y traducido por Julio Rieche en su monumental WAKOthology Initzia, (Ediciones Arkeo, primera edición, Milán, 2022).</span></p>
                        </div>
                    </div>

                </div>
                
                <div className='mt-[144px] lg:mt-[240px]'>
                    <p className='text-[#00010D] text-[40px] font-sans font-[700] -tracking-[.02em] lg:text-[80px]'>Rafael Lafranco</p>
                </div>

                <div>
                    <p className='text-[#00010D] text-[16px] font-sans font-[850] -tracking-[.02em] w-3/4 opacity-[0.55] lg:text-[16px]'>Socio y fundador peruano del estudio, 4D2 Studio.</p>
                </div>

                <div className='flex flex-col mt-[48px] mb-[64px]  lg:flex-row lg:space-x-[74px] lg:mt-[90px] lg:mb-[130px]'>

                    <div className='lg:basis-1/2'>
                        <div>
                            <p className='text-[#00010D] text-[26px] font-sans font-[550] -tracking-[.02em] lg:w-[600px]'>Artista, ilustrador y escultor</p>
                        </div>
                        <div className='mt-[16px]'>
                            <p className='text-[#00010D] text-[16px] leading-[20px] font-sans font-[850] -tracking-[.02em] opacity-[0.45] lg:text-[16px] lg:w-[570px]'>Maestría en Comunicación en la Universidad de Boston y una beca Fulbright del Departamento de Estado Norteamericano. Ha expuesto su trabajo en la ciudad de Lima y fuera del país, incluyendo Miami, Tokio, Singapur, Londres, Santiago, Sao Paolo, entre otras. Trabaja con las Galerías Eugene Gallery y DKarte Gallery (Seoul y Tokio), y Eduardo Lira Art Gallery (Miami y Santiago) Arteria Gallery (Quebec) así como la Galería Indigo (Lima) y Cuatro en un Baúl (Lima), Caotics (Madrid).</p>
                        </div>
                        <div className='flex flex-row content-center gap-x-[12.5px] mt-[50px] lg:mt-[18px]'>
                            <p className='btn text-[#00010D] opacity-[0.3] font-[850] text-[15px] leading-[17px]'>Ver más</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className='btn w-[20px] h-[20px] fill-[#00010D] opacity-[0.35]' version="1.1" viewBox="0 0 700 700">
                                    <path d="m576.15 63.316c-1.7852-4.2891-5.1797-7.6836-9.4688-9.4688-2.1328-0.89453-4.4102-1.3477-6.6836-1.3477h-280c-9.6602 0-17.5 7.8242-17.5 17.5s7.8398 17.5 17.5 17.5h237.75l-390.12 390.13c-6.8438 6.8438-6.8438 17.902 0 24.746 3.4102 3.4102 7.8906 5.125 12.371 5.125s8.9609-1.7148 12.371-5.1289l390.13-390.12v237.75c0 9.6758 7.8398 17.5 17.5 17.5s17.5-7.8242 17.5-17.5v-280c0-2.2734-0.45312-4.5508-1.3477-6.6836z"/>
                            </svg>
                        </div>
                    </div>

                    <div className='mt-[50px] lg:basis-1/2 lg:mt-0'>
                        <img
                            className='w-auto pb-auto lg:w-auto lg:h-[400px] lg:ml-auto xl:h-[450px]'
                            alt="foto"
                            src={imagenes.img8}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
  }
  
  export default Vista2