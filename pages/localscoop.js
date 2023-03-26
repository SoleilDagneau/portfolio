import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/nav'
import { useRouter } from 'next/router';


export default function Home() {
    const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image className={styles.logo} onClick={() => router.push('/')} src='/logo.png' width='200' height='100'/>
        <Nav/>

        <div className={styles.titlecont1}>
            <div className={styles.projecttitle}> LocalScoop</div>
        <div className={styles.projectlongdesc}>LocalScoop is a marketplace app for small local businesses. There are two sides to the app, one for the small business and one for the consumers. The business side of the app allows small businesses to set up a shop profile and sell their products directly to local consumers. The consumer side of the app allows users to discover small businesses local to them and purchase products directly from the business. </div>
       
        </div>
         <div className={styles.line}></div>
            <div className={styles.infocont}>
            <div className={styles.itemcont}> 
                    <div> Year </div>  <div className={styles.info1}> 2022 </div>
                </div>
                
                <div className={styles.itemcont}> 
                    <div> Tools </div>  <div className={styles.info}> Figma, Photoshop, Illustrator </div>
                </div>
                <div className={styles.itemcont}> 
                    <div> Project Types </div>  <div className={styles.info}> Product Design, Mobile Design, Visual Design, UX/UI Design</div>
                </div>
                <div className={styles.itemcont}> 
                    <div> Roles </div>  <div className={styles.info}> UX/UI Designer, Graphic Designer </div>
                </div>
            </div>
        <Image className={styles.mainpicture} src='/localscoopmock.jpg' width='800' height='600'/>
        <div className={styles.num}>01</div>
        <div className={styles.title3}> The Problem</div>
        
        <div className={styles.desc1}> 
        At the tail-end of the pandemic, small businesses in the greater Vancouver area were still recovering financially. Nearly 16% of small businesses in Canada. Roughly 100,000 business in Canada closed due to the pandemic, and the ones that are still running struggle with costs and demand.
         </div>

        
        <div className={styles.num3}>02</div>  
        <div className={styles.title4}> The Solution </div>

     
      
        <div className={styles.desc1}> 
        LocalScoop aims to connect local buyers with small businesses in their area to promote growth and awareness.
        <br></br>
        <div className={styles.infotitle}> TRENDING </div>
        <br></br>
        <div className={styles.info2}>
        The home page highlights trending shops to put them in the spotlight and encourage users to check them out
         </div>
         <br></br>
        <div className={styles.infotitle}> ETHICAL </div>
        <br></br>
        <div className={styles.info2}>
        Small businesses are much better for the environment and economy. Users can chose from ethical companies near them
         </div>
         <br></br>
        <div className={styles.infotitle}> OPPORTUNITY</div>
        <br></br>
        <div className={styles.info2}>
        Entrepreneurs can use this app as an opportunity to start up their small business and get their brand out there
         </div>


        </div>



            <div className={styles.num1}>03</div>  
        <div className={styles.title4}> The Design </div>

        <div className={styles.desc1}> 
        Before designing high-fidelity prototypes, we built a styleguide to ensure
         that multiple designers are able to design the app in a clear and united way. 
        </div>

        <div className={styles.colortitle}> COLORS</div>

        <div className={styles.colorcont}>  
 <div className={styles.color11}>#E3974F</div>
 <div className={styles.color12}>#D4E6B5</div>
 <div className={styles.color13}>#F7F7F3</div>
        </div>

        <div className={styles.colortitle1}> NEUTRALS</div>
        <div className={styles.colorcont}>  
 <div className={styles.color6}>#0A0908</div>
 <div className={styles.color7}>#2D2D2A</div>
 <div className={styles.color8}>#B5B5B5</div>
 <div className={styles.color9}>#E1E1E1</div>
 <div className={styles.color10}>#F7F5F3</div>
        </div>
       
       
        <div className={styles.colortitle1}> TYPOGRAPHY</div>
        <Image className={styles.fontimg} src='/LSfonts.png' width='500' height='500' />

        <div className={styles.colortitle1}> INTERACTIVE ELEMENTS</div>
        <div className={styles.colortitle2}> BUTTONS</div>
        <Image className={styles.fontimg} src='/LSbuttons.png' width='550' height='300' />

        <div className={styles.colortitle2}> TABS</div>
        <Image className={styles.fontimg} src='/LStabs.png' width='300' height='200' />
       
        
        <div className={styles.colortitle2}> FILTERS</div>
        <Image className={styles.fontimg} src='/LSfilters.png' width='500' height='180' />

        <div className={styles.colortitle1}> IMAGES </div>

        <div className={styles.imagegrid}>
        <Image className={styles.fontimg1} src='/LocalScooppics/2.png' width='263' height='394' />
        <Image className={styles.fontimg1} src='/LocalScooppics/4.png' width='243' height='282' />
<Image className={styles.fontimg1} src='/LocalScooppics/6.png' width='243' height='365' />
        <Image className={styles.fontimg1} src='/LocalScooppics/7.png' width='263' height='376' />

            <Image className={styles.fontimg} src='/LocalScooppics/1.png' width='476' height='476' />
        
        <Image className={styles.fontimg1} src='/LocalScooppics/3.png' width='472' height='318' />
       
        <Image className={styles.fontimg1} src='/LocalScooppics/5.png' width='370' height='232' />
        
        <Image className={styles.fontimg1} src='/LocalScooppics/8.png' width='476' height='317' />
        <Image className={styles.fontimg1} src='/LocalScooppics/9.png' width='476' height='317' />
        <Image className={styles.fontimg1} src='/LocalScooppics/10.png' width='243' height='253' />

             </div>
        
        <div className={styles.colortitle1}> LOGO DESIGN </div>
        <div className={styles.logodesigncont}>
            <Image className={styles.fontimg} src='/LocalScooplogo/LSwordmark.png' width='500' height='220' />
        <Image className={styles.fontimg} src='/LocalScooplogo/LSlogo.png' width='320' height='380' />
        <Image className={styles.fontimg} src='/LocalScooplogo/LSlogo1.png' width='320' height='380' />

        </div>
        
        <div className={styles.num}>04</div>  
        <div className={styles.title4}> Final Design </div>
        <div className={styles.colortitle1}> HIGH FIDELITY PROTOTYPE</div>
        <div className={styles.desc1}> With the result of the user testing and the style guide, 
            we built our high-fidelity prototypes and made sure the overall 
            user experience is intuitive. The final prototype shows a complete 
            idea of ​​how the LocalScoop app will look like in the final result.</div>

<div  className={styles.vidcont} >
     <video className={styles.vid} src="/localscoop.mp4" controls width={640} height={360} />

      
    </div>
           
      </main>
    </>
  )
}
