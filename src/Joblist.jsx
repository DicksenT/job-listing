function Joblist(props){
    const {data, width, addSearch, search} = props
       
    return(
        <article className={`job_list ${data.featured ? 'new_border': ''}`}>
            <div className="job_details">
                <img src={data.logo} alt="" className="job_profile" />
                <div className="job_description">
                    <div className="company_status">
                        <p className="company_name">
                        {data.company}
                        </p>
                        {data.new ? <p className="new">new!</p> : ''}
                        {data.featured ? <p className="featured">featured</p>:
                        ""}
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
                <p onClick={() => addSearch(data.role)} className={search.includes(data.role) ? 'active' : ''}>{data.role}</p>
                <p onClick={() => addSearch(data.level)} className={search.includes(data.level) ? 'active' : ''}>{data.level}</p>
                {data.languages.map((dl) =>(
                    <p key={dl} onClick={() => addSearch(dl) } className={search.includes(dl) ? 'active' : ''}>{dl}</p>
                ))}
                {data.tools.map((dt)=>(
                    <p key={dt} onClick={() => addSearch(dt)} className={search.includes(dt) ? 'active' : ''}>{dt}</p>
                ))}
            </div>
        </article>
    )
}
export default Joblist
