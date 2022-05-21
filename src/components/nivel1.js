import * as React from 'react'
import Volver from '../components/volver'

const Nivel1 = () => {
    return (
        <div className='pt-[64px] pb-[40px] mx-[20px] lg:pt-[144px] lg:px-[96px] lg:pb-[10px]'>
            <volver></volver>
            <div className='text-white leading-[48px] text-[47px] font-sans font-[650] -tracking-[.02em] lg:text-[80px] lg:leading-[82px]'>Génesis Collection</div>
            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>En este documento detallaremos los WAKO.Benefits a los cuales estarán sujetos todos los holders del proyecto.</p>
            </div>
            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>Los beneficios están separados en 2 niveles, estos serán desbloqueados en la primera etapa del proyecto con el fin de maximizar el beneficio de los early supporters, a continuación el detalle:</p>
            </div>
            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>Nivel 0:</p>
            </div>
            
            <table className="">
                <tr>
                    <td className=''>ID</td>
                    <td className=''>Nivel</td>
                    <td className=''>Frecuencia</td>
                    <td className=''>Descripción</td>
                </tr>
                <tr>
                    <td className=''>0</td>
                    <td className=''>0</td>
                    <td className=''>Lifetime</td>
                    <td className=''>Acceso temprano a futuras colecciones</td>
                </tr>
            </table>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 0: Todos los holders tendrán acceso temprano a las futuras colecciones de Rafael Lanfranco.</p>
            </div>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>Nivel 1:</p>
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
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 1: Los Q & A con Rafael Lanfranco serán sesiones en vivo a través de nuestro Discord, donde todos los holders podrán ingresar a una charla dirigida por Rafael, cada charla tendrá un tema diferente y los participantes podrán realizar todas las preguntas que quieran. Se prevé que de inicio se manejarán 6 sesiones de Q & A, si vemos que la comunidad responde positivamente se puede extender el beneficio.</p>
            </div>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 2: Una vez al mes los holders podrán inscribirse a una visita guiada al estudio de Rafael, en esta visita Rafael les mostrará su espacio de trabajo y les irá contando el concepto detrás de la obra que verán en vivo. Se han planificado 6 visitas guiadas en grupos, si vemos que a la comunidad le interesa este evento se extenderá el tiempo.</p>
            </div>

            <div>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>ID 3: Todos los holders obtendrán descuentos especiales en el arte que ofrezca Rafael Lanfranco. En el Discord se publicarán ofertas super especiales solo para NFT holders, como por ejemplo, piezas seleccionadas con 50% de descuento.</p>
            </div>
        </div>
    )
  }
  
  export default Nivel1