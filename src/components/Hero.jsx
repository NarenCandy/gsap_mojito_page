import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useMediaQuery } from 'react-responsive'
gsap.registerPlugin(SplitText)

const Hero = () => {
    const videoRef = useRef();
    const isMobile= useMediaQuery({maxWidth:767});
    useGSAP(()=>{
        const heroSplit = new SplitText('.title',
            {
                type:'chars,words'
            });
        const paragraphSplit = new SplitText('.subtitle',{
            type:'lines'
        });

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
        });
        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
            delay:1
        });

        gsap.timeline({scrollTrigger:{
            trigger:'#hero',
            start:'top top',
            end:'bottom top',
            scrub:true,
        }
    }).to('.right-leaf',{y:200},0).to('.left-leaf',{y:-200},0)

    const startValue= isMobile? 'top 50%' :'center 60%';
    const endValue= isMobile? '120% top' :'bottom top';
    // Video Animation
    //video becomes choppy because keyframes issue 
    //because in scrub we need keyframes of video
    //so we have to use a software called ffmpeg to convert the video to a keyframe video
    //or we can use a video that is already a keyframe video which is output folder
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'video',
            start:startValue,
            end:endValue,
            scrub:true,
            pin:true,
            
        }
        
    })
    videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current,{
            currentTime: videoRef.current.duration,

        })

    }



    },[]);
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>
        <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf' />
        <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf' />
        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crisp. Classic.</p>
                    <p className='subtitle'>Sip the spirit <br/> of the summer</p>
                </div>
                <div className='view-cocktails'>
                    <p className='subtitle'>
                        Every sip of our Mojito is a refreshing journey through the vibrant flavors of mint, lime, and rum.
                    </p>
                    <a href='#cocktails'>View Cocktails</a>
                </div>
            </div>
        </div>
    </section>
    <div className='video absolute inset-0'>
        <video
        ref={videoRef}
            src="videos/output.mp4"
            muted
            playsInline
            preload='auto'
        />    
    </div>
    </>
  )
}

export default Hero