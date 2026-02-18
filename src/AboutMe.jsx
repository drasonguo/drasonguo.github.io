import { useRef, useState } from "react";
import styles from "./AboutMe.module.css"
import { useParallax } from "react-scroll-parallax";

export default function AboutMe() {
    const [isOrigin, setIsOrigin] = useState(true);

    const target = useRef();
    
    const leftRef = useRef();
    const rightRef = useRef();

    const parallax = useParallax({
        onProgressChange: (progress) => {
            if(parallax.ref.current){
                if(progress < 0.5){
                    if (progress <= 0.3){
                        parallax.ref.current.style.setProperty("--progress",progress/0.3);
                        parallax.ref.current.style.setProperty("scale",(progress/3.0)+0.9);
                    }
                    if(!isOrigin){
                        leftRef.current.style.setProperty("transform",`translateX(0)`);
                        rightRef.current.style.setProperty("transform",`translateX(0)`);
                        setIsOrigin(true);
                    }
                }else{
                    parallax.ref.current.style.setProperty("--progress",(1-progress)/0.5);
                    leftRef.current.style.setProperty("transform",`translateX(${((progress-0.5)/0.5)*-50}vw)`);
                    rightRef.current.style.setProperty("transform",`translateX(${((progress-0.5)/0.5)*50}vw)`);

                    if(isOrigin){
                        setIsOrigin(false);
                    }
                }
            }
        },
        targetElement: target.current,
    });

    return(
        <>
            <div className={styles.container}>
                <div ref={parallax.ref} className={styles.content}>
                    <img ref={leftRef} style={{flexBasis:"30%",borderRadius:"50%",width:"30%"}} src="/assets/dp.jpg"/>
                    <div ref={rightRef} style={{flexBasis:"65%"}}>
                        <h3>
                            About me
                        </h3>
                        <p>
                            I am a recently graduated software engineering student from the University of Auckland. I am very enthusiastic 
                            about software development as I believe my passion for it stems from my love for complex problem solving, and I believe 
                            the diversity and constant evolution of software aligns with my eagerness to learn.
                        </p>
                        <p>
                            A big stepping stone for my interest in software stems from my hobby of video games. As a kid, I enjoyed spending my time playing
                            games, which made me curious about how exactly these games are made. Thus, at a young age, I did some research on game development
                            and created some small simple games using a game development engine known as GameMaker. Succesfully executing my design and seeing it
                            work as desired was truly a satisfying experience. This idea of brainstorming possible solutions and finally overcoming the problem obstacle
                            is exactly what I love about software development.
                        </p>
                        <p>
                            Nowadays, I still do a bit of game development on the side. However, I also try to incorporate my other hobbies such as chess into my personal projects.
                            An example of this is one of my current work-in-progress projects, where I am developing a Chess960 game but with a twist.
                        </p>
                        <p>
                            Ultimately, I would love to demonstrate my skills in an industrial environment, with an opportunity to broaden my skills and knowledge, 
                            and experience all the possiblities of modern software and technology.
                        </p>                   
                    </div>
                </div>
                <div className={styles.filler} ref={target} id="about">
                    <div className={styles.noPar}>
                <div className={styles.noParContent}>
                    <img style={{flexBasis:"30%",borderRadius:"50%",width:"30%"}} src="/assets/dp.jpg"/>
                    <div style={{flexBasis:"65%"}}>
                        <h3>
                            About me
                        </h3>
                        <p>
                            I am a recently graduated software engineering student from the University of Auckland. I am very enthusiastic 
                            about software development as I believe my passion for it stems from my love for complex problem solving, and I believe 
                            the diversity and constant evolution of software aligns with my eagerness to learn.
                        </p>
                        <p>
                            A big stepping stone for my interest in software stems from my hobby of video games. As a kid, I enjoyed spending my time playing
                            games, which made me curious about how exactly these games are made. Thus, at a young age, I did some research on game development
                            and created some small simple games using a game development engine known as GameMaker. Succesfully executing my design and seeing it
                            work as desired was truly a satisfying experience. This idea of brainstorming possible solutions and finally overcoming the problem obstacle
                            is exactly what I love about software development.
                        </p>
                        <p>
                            Nowadays, I still do a bit of game development on the side. However, I also try to incorporate my other hobbies such as chess into my personal projects.
                            An example of this is one of my current work-in-progress projects, where I am developing a Chess960 game but with a twist.
                        </p>
                        <p>
                            Ultimately, I would love to demonstrate my skills in an industrial environment, with an opportunity to broaden my skills and knowledge, 
                            and experience all the possiblities of modern software and technology.
                        </p>                   
                    </div>
                </div>
            </div>
                </div>
            </div>
            
        </>
    )
}