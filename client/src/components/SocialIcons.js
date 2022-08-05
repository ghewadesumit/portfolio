import linkedIn from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import stackoverflow from "../assets/img/stack-overflow.svg";

export const SocialIcons = ()=>{

    return(
    <div className="social-icon">
        <a href="https://www.linkedin.com/in/sumit-ghewade/" target="blank"><img src={linkedIn} alt=""/></a>
        <a href="https://github.com/ghewadesumit" target="blank"><img src={github} alt=""/></a>
        <a href="https://stackoverflow.com/users/6328636/sumit-ghewade" target="blank"><img src={stackoverflow} alt=""/></a>
    </div>)
}