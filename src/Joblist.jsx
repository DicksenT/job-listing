function Joblist(props){
    const {data, width} = props   
    return(
        <article className={`job_list ${data.featured ? 'new_border': ''}`}>
            <div className="job_details">
                <img src={data.logo} alt="" className="job_profile" />
                <div className="job_description">
                    <div className="company_status">
                        <p className="company_name">
                        {data.company}
                        </p>
                        <p className="new">

                        </p>
                        <p className="featured">
                            
                        </p>
                    </div>
                    <h4 className="job_title">
                        {data.position}
                    </h4>  
                    <div className="job_status">
                        <p className="post_data">{data.postedAt}</p>
                        •	
                        <p className="work_time">{data.contract}</p>
                        •	
                        <p className="location">{data.location}</p>
                    </div>
                </div>
            </div>
            <div className={`requirement ${width < 1024 ? 'requirement_border' : ''}`}>
                <p>{data.role}</p>
                <p>{data.level}</p>
                {data.languages.map((dl) =>(
                    <p>{dl}</p>
                ))}
                {data.tools.map((dt)=>(
                    <p>{dt}</p>
                ))}
            </div>
        </article>
    )
}
export default Joblist
