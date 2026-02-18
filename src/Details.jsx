import { Apple, Code, Crop, Handyman, School, WorkHistory } from "@mui/icons-material";
import styles from "./Details.module.css"
import { useRef, useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Details() {

    const [tabval,setTabval] = useState(0);

    const handleChange = (newValue) => {
        setTabval(newValue);
    }

    const sxProps = {marginRight:"10px",fontSize:"40px",verticalAlign: "middle",color:"pink"};

    return(
        <div className={styles.content} id="details">
            <div>
                <div className={styles.tabTitles}>
                    <div>
                        <div style={tabval==0 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(0)}>
                            <h2><Handyman sx={sxProps}/><span>Skills</span></h2>
                        </div>
                    </div>
                    <div>
                        <div style={tabval==1 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(1)}>
                            <h2><WorkHistory sx={sxProps}/><span>Experience</span></h2>
                        </div>
                    </div>
                    <div>
                        <div style={tabval==2 ? {backgroundColor:"#444444"} : null} onClick={(e)=>handleChange(2)}>
                            <h2><School sx={sxProps}/><span>Education</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.tabContents}>
                <ul className={`${styles.tab} ${tabval==0 && styles.activeTab}`}>
                    <li><h3>C# .NET</h3>Developed RESTful APIs using C# and .NET for backend services.</li>
                    <li><h3>Java</h3>Object-Oriented Progamming concepts are understood and applied. </li>
                    <li><h3>MERN stack</h3>SPA development</li>
                    <li><h3>JavaScript</h3>Used in addition to the MERN stack</li>
                    <li><h3>SQL</h3>Writing queries and creating tables, views, stored procedures, functions etc.</li>
                    <li><h3>Python</h3>Used socket programming and PyQt to make a simple messaging app.<br/>Also delved into regression and classification machine learning.</li>
                    <li><h3>C</h3>Basic understanding of memory allocation.</li>
                    <li><h3>Linux Bash</h3>Created a bash script that functions as a spelling game</li>
                </ul>
                <ul className={`${styles.tab} ${tabval==1 && styles.activeTab}`}>
                    <li><h3>Front of House | Ajisen Ramen Restaurant | Feb 2022 - Nov 2022</h3>Front-of-house position that involved greeting customers and seating them, taking their 
orders, delivering food and water to tables and ensure that it was a clean environment</li>
                    <li><h3>Software Developer Intern | Unleashed Software | Nov 2022 - Feb 2023</h3>Engaged in Agile scrum methodogy, involving daily stand ups, sprint planning, and sprint reviews.
                    Understood the importances of good git practice, with proper naming conventions and branching strategies. Jira tickets were used to assign tasks, resulting in usages of ReactJS to make front-end changes</li>
                    <li><h3>Technology Solutions Graduate | FNZ Group | Sep 2024 - May 2025</h3>Graduate program where we rotated through software development, software testing, and production support.
                    Learnt about the Software Development Life Cycle (SDLC) and how to conduct testing via JIRA Xray. Developed using VB, C#, and JavaScript in ASP .NET</li>
                    <li><h3>Analyst Developer | FNZ Group | May 2025 - Present</h3>Worked primarily around developing RESTful APIs using ASP .NET Core, following proper REST principles such as standard HTTP methods for CRUD operations, 
                    error handling, and being stateless. Also worked with SQL, creating tables, views, stored procedures etc, integrating these into the codebase as well as implementing efficient LINQ queries to filter and retrieve relational data</li>
                </ul>
                <ul className={`${styles.tab} ${tabval==2 && styles.activeTab}`}>
                    <li>
                        <h3>Cambridge International Education | Auckland Grammar School</h3>
                            <p> - A level Mathematics | A</p>
                            <p> - A level Chemistry | A</p>
                            <p> - AS level Physics | A</p>
                            <p> - AS level Japanese | A</p>
                    </li>
                    <li>
                        <h3>Bachelor of Engineering (Honours) | University of Auckland | Mar 2020 - Nov 2023</h3>
                        <p> - First Class Honours in Software Engineering</p>
                        <p> - Cumulative GPA: ~7.6/9.0</p>
                        <a href="/assets/Academic transcript.pdf" download className={styles.btn}>Download Academic Transcript</a>
                        <a href="/assets/Graduation certificate.pdf" download className={styles.btn}>Download Graduation Certificate</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}