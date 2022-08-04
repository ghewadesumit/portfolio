export const SkillPercetage = ({percentage,skillName})=>{

    return(  
        <div className="item">           
            <div className="box">
                <div className="percent">
                    <svg >
                        <circle  cx="70" cy="70" r="70"></circle>
                        <circle  cx="70" rx="5" ry="5" x="0" y="0" cy="70" r="70" style={{strokeDashoffset:`calc(440 - (440 * 87)/ 100)` }} ></circle>
                    </svg>
                    <div className="number">
                        <h2>{percentage}<span>%</span></h2>
                    </div>
                </div>
            </div>
            <h5 className="text">{skillName}</h5>
        </div>);
}