import { Facebook, Instagram, LinkedIn, Phone, Send, X } from "@mui/icons-material";
import styles from "./Contact.module.css";
import { useRef } from "react";

const iconSx = {
    textDecoration:"none",
    fontSize:"30px",
    marginRight:"15px",
    color:"#ababab",
    display:"inline-block",
    transition:"transform 0.5s",
    "&:hover":{
        color: "#ff004f",
        transform: "translateY(-5px)"
    }
};

export default function Contact(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxy_BVFs2oWpt9SsxBK--xRv0W8541YH5JWJ95Icspj5TZqutdGTAe_Mpikw_4RaNmX/exec'

    const successMsg = useRef();
    const errorMsg = useRef();
    const submitBtn = useRef();
    const loader = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        submitBtn.current.style.setProperty("display","none");
        loader.current.style.setProperty("display","block");
        fetch(scriptURL, { method: 'POST', body: new FormData(e.target)})
            .then(handleSuccess)
            .catch(handleError)
    }

    const handleSuccess = () => {
        loader.current.style.setProperty("display","none");
        successMsg.current.style.setProperty("display","block");
    }

    const handleError = () => {
        loader.current.style.setProperty("display","none");
        errorMsg.current.style.setProperty("display","block");
    }

    return(
        <div id="contact" className={styles.container}>
            <div className={styles.row}>
                <div className={styles.contactLeft}>
                    <h1>Contact Me</h1>
                    <p><Send sx={{color: "#ff004f",marginRight: "15px",fontSize: "25px"}}/>drasonguo00@gmail.com</p>
                    <p><Phone sx={{color: "#ff004f",marginRight: "15px",fontSize: "25px"}}/>+64 2108535620</p>
                    <div>
                        <a href="https://www.linkedin.com/in/drason-guo-aa811b224/" target="_blank"><LinkedIn sx={iconSx}/></a>
                    </div>
                    <a href="/assets/SoftwareCV.pdf" download className={styles.btn}>Download CV</a>
                </div>
                <div className={styles.contactRight}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message" style={{resize:"none"}}/>
                        <button ref={submitBtn} className={styles.btn} type="submit">Submit</button>
                        <div ref={loader} className={styles.loader}/>
                        <span ref={successMsg} className={styles.success}>Message successfully sent!</span>
                        <span ref={errorMsg} className={styles.error}>An error occured!</span>
                    </form>
                </div>
            </div>
        </div>
    )
}