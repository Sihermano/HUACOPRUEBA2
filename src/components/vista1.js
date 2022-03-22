import React, {useRef} from 'react';
import imagenes from '../components/imagenes';

const Vista1 = () => {
    //referencias
    const slideshowg = useRef(null);
    const slideshow = useRef(null);

    //posiciones al cargar la página
    const cargaSite =() => {
        //posicion slide
        for(var i=0; i<slideshowg.current.children.length; i++) {
            slideshowg.current.children[i].style.transform = `translateX(-270px)`
        }
    }

    //slideshow de la pantalla pequeña
    const siguienteN = () => {
        console.log(slideshow.current.children.length)
        if (slideshow.current.children.length > 0) {
            //valores
            const primerElemento = slideshow.current.children[0]
            const cuartoElemento = slideshow.current.children[3]
            const tamanoSlide = primerElemento.offsetWidth 
            //transicion
            for(var i=0; i<slideshow.current.children.length; i++) {
                slideshow.current.children[i].style.transition = `300ms ease-out all`
                slideshow.current.children[i].style.transform = `translateX(-${tamanoSlide}px)`
            }

            //reinciamos la posicion
            const transicion = () => {
                //reiniciamos
                for(var i=0; i<slideshow.current.children.length; i++) {
                    slideshow.current.children[i].style.transition = `none`
                    slideshow.current.children[i].style.transform = `translateX(0)`
                }

                slideshow.current.appendChild(primerElemento)
                slideshow.current.appendChild(cuartoElemento)
                slideshow.current.removeEventListener(`transtionend`, transicion)
            }
            
            slideshow.current.addEventListener(`transitionend`, transicion)

        }
    } 
    const anteriorN = () => {
        if (slideshow.current.children.length > 0) {
            //valores
            const index = slideshow.current.children.length - 1
            const ultimoElemento = slideshow.current.children[index]
            const tercerElemento = slideshow.current.children[2]
            const tamanoSlide = ultimoElemento.offsetWidth

            //cambio
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)
            slideshow.current.insertBefore(tercerElemento, slideshow.current.firstChild)
            

            for(var i=0; i<slideshow.current.children.length; i++) {
                slideshow.current.children[i].style.transition = `none`
                slideshow.current.children[i].style.transform = `translateX(-${tamanoSlide}px)`                  
            }

            setTimeout(() => {
                for(var i=0; i<slideshow.current.children.length; i++) {
                    slideshow.current.children[i].style.transition = `300ms ease-out all`;
                    slideshow.current.children[i].style.transform = `translateX(0)`; 
                }
            }, 30);
        }
    }

    //slideshow de la pantalla grande
    const siguiente = () => {
        if (slideshowg.current.children.length > 0) {
            //valores
            const primerElemento = slideshowg.current.children[0]
            const tamanoSlide = primerElemento.offsetWidth + 20 + 270
            //transicion
            for(var i=0; i<slideshowg.current.children.length; i++) {
                slideshowg.current.children[i].style.transition = `300ms ease-out all`
                slideshowg.current.children[i].style.transform = `translateX(-${tamanoSlide}px)`
            }

            //reinciamos la posicion
            const transicion = () => {
                //reiniciamos
                for(var i=0; i<slideshowg.current.children.length; i++) {
                    slideshowg.current.children[i].style.transition = `none`
                    slideshowg.current.children[i].style.transform = `translateX(-270px)`
                }

                slideshowg.current.appendChild(primerElemento)
                slideshowg.current.removeEventListener(`transtionend`, transicion)
            }
            
            slideshowg.current.addEventListener(`transitionend`, transicion)
        }
    }
    
    const anterior = () => {
        if (slideshowg.current.children.length > 0) {
            //valores
            const index = slideshowg.current.children.length - 1
            const ultimoElemento = slideshowg.current.children[index]
            const tamanoSlide = ultimoElemento.offsetWidth + 20 + 270

            //cambio
            slideshowg.current.insertBefore(ultimoElemento, slideshowg.current.firstChild)

            for(var i=0; i<slideshowg.current.children.length; i++) {
                slideshowg.current.children[i].style.transition = `none`
                slideshowg.current.children[i].style.transform = `translateX(-${tamanoSlide}px)`                  
            }

            setTimeout(() => {
                for(var i=0; i<slideshowg.current.children.length; i++) {
                    slideshowg.current.children[i].style.transition = `300ms ease-out all`;
                    slideshowg.current.children[i].style.transform = `translateX(-270px)`; 
                }
            }, 30);
        }
    }
    return (
        <div className='' onLoad={cargaSite}>
            
            <div className='flex flex-row pt-[16px] mx-[20px] lg:px-[96px]  lg:pt-[24px]' >
                <div className='basis-2/5 grid content-center lg:basis-1/5'>
                    <p className='text-white text-[18px] font-sans font-[780] lg:text-[20px]'>WAKOVERSO</p>
                </div>
                <div className='invisible w-0 basis-2/5 flex flex-row lg:w-auto lg:basis-3/5 lg:visible lg:gap-x-[64px]'>
                    
                    <div className='btn text-0 h-0 text-white font-sans font-[400] -tracking-[.02em] opacity-60 lg:text-[18px] lg:h-[22px] lg:ml-auto'><a href='#acercade'>Acerca de</a></div>
                    
                    
                        <div className='btn text-0 h-0 text-white font-sans font-[400] -tracking-[.02em] opacity-60 lg:text-[18px] lg:h-[22px]'><a href='#nuestroequipo'>Nuestro equipo</a></div>
                    
                    
                        <div className='btn text-0 h-0 text-white font-sans font-[400] -tracking-[.02em] opacity-60 lg:text-[18px] lg:h-[22px] lg:mr-auto'><a href='#comunidad'>Comunidad</a></div>
                    
                </div>
                <div className='basis-1/5 flex flex-row-reverse'>
                    <a className='grid content-center place-items-center h-[32px] w-[32px] ml-[8px] border-white border-solid border-[1px] rounded-full lg:w-[48px] lg:h-[48px]' href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                        <svg
                            class="w-[0.96rem] h-[0.84rem] text-white fill-current lg:w-[22px] lg:h-[19px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                            />
                        </svg>
                    </a>
                    <a className='grid content-center justify-items-center h-[32px] w-[32px] mr-[8px] border-white border-solid border-[1px] rounded-full lg:w-[48px] lg:h-[48px]' href='https://discord.gg/SAZ5mdsV' target="_blank" rel="noopener noreferrer">
                       <svg
                            class="w-[0.96rem] h-[0.84rem] text-white fill-current lg:w-[23px] lg:h-[20px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 71 55">
                            <path
                                d="M 60.1045 4.8978 C 55.5792 2.8214 50.7265 1.2916 45.6527 0.41542 C 45.5603 0.39851 45.468 0.440769 45.4204 0.525289 C 44.7963 1.6353 44.105 3.0834 43.6209 4.2216 C 38.1637 3.4046 32.7345 3.4046 27.3892 4.2216 C 26.905 3.0581 26.1886 1.6353 25.5617 0.525289 C 25.5141 0.443589 25.4218 0.40133 25.3294 0.41542 C 20.2584 1.2888 15.4057 2.8186 10.8776 4.8978 C 10.8384 4.9147 10.8048 4.9429 10.7825 4.9795 C 1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914 C 0.299005 45.4562 0.335386 45.5182 0.385761 45.5576 C 6.45866 50.0174 12.3413 52.7249 18.1147 54.5195 C 18.2071 54.5477 18.305 54.5139 18.3638 54.4378 C 19.7295 52.5728 20.9469 50.6063 21.9907 48.5383 C 22.0523 48.4172 21.9935 48.2735 21.8676 48.2256 C 19.9366 47.4931 18.0979 46.6 16.3292 45.5858 C 16.1893 45.5041 16.1781 45.304 16.3068 45.2082 C 16.679 44.9293 17.0513 44.6391 17.4067 44.3461 C 17.471 44.2926 17.5606 44.2813 17.6362 44.3151 C 29.2558 49.6202 41.8354 49.6202 53.3179 44.3151 C 53.3935 44.2785 53.4831 44.2898 53.5502 44.3433 C 53.9057 44.6363 54.2779 44.9293 54.6529 45.2082 C 54.7816 45.304 54.7732 45.5041 54.6333 45.5858 C 52.8646 46.6197 51.0259 47.4931 49.0921 48.2228 C 48.9662 48.2707 48.9102 48.4172 48.9718 48.5383 C 50.038 50.6034 51.2554 52.5699 52.5959 54.435 C 52.6519 54.5139 52.7526 54.5477 52.845 54.5195 C 58.6464 52.7249 64.529 50.0174 70.6019 45.5576 C 70.6551 45.5182 70.6887 45.459 70.6943 45.3942 C 72.1747 30.0791 68.2147 16.7757 60.1968 4.9823 C 60.1772 4.9429 60.1437 4.9147 60.1045 4.8978 Z M 23.7259 37.3253 C 20.2276 37.3253 17.3451 34.1136 17.3451 30.1693 C 17.3451 26.225 20.1717 23.0133 23.7259 23.0133 C 27.308 23.0133 30.1626 26.2532 30.1066 30.1693 C 30.1066 34.1136 27.28 37.3253 23.7259 37.3253 Z M 47.3178 37.3253 C 43.8196 37.3253 40.9371 34.1136 40.9371 30.1693 C 40.9371 26.225 43.7636 23.0133 47.3178 23.0133 C 50.9 23.0133 53.7545 26.2532 53.6986 30.1693 C 53.6986 34.1136 50.9 37.3253 47.3178 37.3253 Z"
                            />
                        </svg>
                    </a>
                </div>   

            </div>

            <div className='flex flex-col  mt-[58px] mx-[20px] lg:px-[96px] lg:flex-row  lg:mt-[128px]'>
                <div className='order-2 lg:order-1 mt-[48px] lg:basis-1/2 lg:mt-0'>
                    <div className='text-white leading-[48px] text-[40px] font-sans font-[700] -tracking-[.02em] lg:text-[80px] lg:leading-[82px]'>Arte de<hr className='border-0'/>latinoamerica<hr className='border-0'/>hecho NFT</div>
                    
                    <div className='text-white text-[15px] font-sans font-[450] opacity-[.6] leading-[20px] mt-[16px] lg:text-[16px] lg:leading-[20px]'>Un universo nacido de dos orbes, resultados<br/>de la vida y obra de Rafael Lanfranco.</div>
    
                    <div className='mt-[25px] pl-[5px] lg:px-[10px] lg:mt-[96px]'>
                        <svg class="w-[35px] h-[45px] text-white lg:w-[50px] lg:h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </div>
                <img
                        className='w-auto pb-auto order-1 flex lg:order-2 lg:ml-auto lg:w-[350px] xl:w-[600px]'
                        alt="foto"
                        src={imagenes.img4}
                    />
            </div>
            <div className='flex flex-row  pt-[121px] mx-[20px] lg:px-[96px]  lg:pt-[255px]'>
                <div className='text-white leading-[0px] text-[0px] font-sans font-[700] -tracking-[.02em] lg:text-[80px] lg:leading-[82px]'>Génesis Collection</div>
                <div className='text-white leading-[48px] text-[47px] font-sans font-[650] -tracking-[.02em] lg:invisible lg:text-[0px] lg:leading-[0px]'>Génesis<br/>Collection</div>
            </div>
            
            
            <div className='flex  mt-[6px] mx-[20px] lg:px-[96px] lg:mt-[14px] '>
                <p className='text-white text-[0px] font-sans font-[450] opacity-[.6] lg:text-[16px]'>300 wakos fundadores de la orbe.</p>
                <p className='text-white text-[15px] font-sans font-[450] opacity-[.6] lg:text-[0px]'>Veamos a nuestros fundadores de la orbe.</p>
            </div>

            <div className='contenedorSlide noScroll relative h-[350px] mt-[48px] mx-[20px] sm:h-[900px] lg:w-0 lg:h-0 lg:invisible lg:mt-0'  ref={slideshow}>
                    <img
                        className='absolute top-0 left-0 w-1/2 h-1/2 p-[5px] lg:w-0 lg:h-0'
                        alt="foto"
                        src={imagenes.img9}/>
                    <img
                        className='absolute top-0 left-[50%] w-1/2 h-1/2 p-[5px] lg:w-0 lg:h-0'
                        alt="foto"
                        src={imagenes.img10}/>
                    <img
                        className='absolute top-0 left-[100%] w-1/2 h-1/2 p-[5px] lg:w-0 lg:h-0'
                        alt="foto"
                        src={imagenes.img11}/>
                    <img
                        className='absolute top-[50%] left-0 w-1/2 h-1/2 p-[5px] lg:w-0 lg:h-0'
                        alt="foto"
                        src={imagenes.img12}/>
                    <img
                        className='absolute top-[50%] left-[50%] w-1/2 h-1/2 p-[5px] lg:w-0 lg:h-0'
                        alt="foto"
                        src={imagenes.img13}/>
                    <img
                        className='absolute top-[50%] left-[100%] w-1/2 h-1/2 p-[5px] lg:w-0 lg:h-0'
                        alt="foto"
                        src={imagenes.img14}/> 
            </div>
            <div className='contenedorSlide noScroll lg:space-x-5 lg:mt-[98px]'  ref={slideshowg}>
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img9}
                                />
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img10}
                                />
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img11}
                                />
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img12}
                                />
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img13}
                                />
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img14}
                                />
                    <img
                    className='w-0 h-0 lg:w-[365px] lg:h-[365px]'
                    alt="foto"
                    src={imagenes.img15}
                                />
            </div>
            <div className='grid grid-rows-2 mt-[18px] mb-[110px] mx-[20px] lg:px-[96px] lg:flex lg:justify-between lg:mt-[54px] lg:mb-[120px]'> 
                <div className='order-1 flex flex-row lg:basis-[14%]'>
                    <svg onClick={anterior} class="ml-[10px] h-0 w-0 text-white order-1 lg:h-[50px] lg:w-[40px] lg:ml-[15px] btn"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <svg onClick={siguiente} class="mr-[10px] ml-auto h-0 w-0 text-white order-last lg:h-[50px] lg:w-[40px] btn"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                    <svg onClick={anteriorN} class="ml-[10px] h-[45px] w-[30px] text-white order-1 lg:h-0 lg:w-0 lg:ml-[15px] btn"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <svg onClick={siguienteN} class="mr-[10px] ml-auto h-[45px] w-[30px] text-white order-last lg:h-0 lg:w-0 btn"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
                <div className='order-last mt-[22px] lg:basis-[366px] lg:mt-0'>
                    <button class="w-full h-[55px] bg-white rounded-full lg:ml-auto" type='button'> 
                        <a href='https://opensea.io/collection/wakoverse' target="_blank" rel="noopener noreferrer" className="text-[#00010D] text-[20px] font-sans font-[750] lg:text-[20px]">
                            Ver toda la colección
                        </a>
                    </button>
                </div>
            </div>
        </div>
        
    )
  }
  
  export default Vista1