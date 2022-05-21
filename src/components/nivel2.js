import * as React from 'react'
import Volver from '../components/volver'

const Nivel1 = () => {
    return (
        <div className='pt-[64px] pb-[40px] mx-[20px] lg:pt-[144px] lg:px-[96px] lg:pb-[10px]'>
            <volver></volver>
            <div className='text-white leading-[48px] text-[47px] font-sans font-[650] -tracking-[.02em] lg:text-[80px] lg:leading-[82px]'>WAKO.Benefits nivel 2</div>
            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>En este documento detallaremos los WAKO.Benefits a los cuales estarán sujetos todos los holders del proyecto.</p>
            </div>
            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>Los beneficios están separados en 2 niveles, estos serán desbloqueados en la primera etapa del proyecto con el fin de maximizar el beneficio de los early supporters, a continuación el detalle:</p>
            </div>
            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>Nivel 2:</p>
            </div>
            
            <table className="">
                <tr>
                    <td className=''>ID</td>
                    <td className=''>Nivel</td>
                    <td className=''>Frecuencia</td>
                    <td className=''>Descripción</td>
                </tr>
                <tr>
                    <td className=''>1</td>
                    <td className=''>1</td>
                    <td className=''>Cada dos semanas</td>
                    <td className=''>Q&A con Rafael Lanfranco</td>
                </tr>
                <tr>
                    <td className=''>2</td>
                    <td className=''>1</td>
                    <td className=''>Una vez al mes</td>
                    <td className=''>Holders podrán programar visitas guiadas al estudio de Rafael Lanfranco</td>
                </tr>
                <tr>
                    <td className=''>3</td>
                    <td className=''>1</td>
                    <td className=''>Lifetime</td>
                    <td className=''>Descuentos especiales en cuadros, grabados, esculturas y cerámicas de Rafael Lanfranco</td>
                </tr>
            </table>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 4: A partir del segundo nivel de WAKO.Benefits, se comenzarán a programar webinars acerca de temas Web3 (NFTs, Crypto, DEFI, Gaming, ETC). Se han planificado 6 sesiones de webinars, los temas a tratar y cantidad de sesiones pueden variar si se observa que la comunidad tiene una preferencia marcada.</p>
            </div>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 5: De manera mensual Rafael estará sacando un nuevo capítulo de “Wakoverse & Wakothology" en nuestro servidor de Discord. No puedes perderte de esta experiencia.</p>
            </div>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 6: Finalmente Rafael lanzará una master class grabada acerca de algún tema relacionado al arte, el tema se pondrá en votación para la comunidad.</p>
            </div>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>*Disclaimer: La duración y periodicidad de los beneficios está sujeta a la aceptación de la comunidad.</p>
            </div>
        </div>
    )
  }
  
  export default Nivel1