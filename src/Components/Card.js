import '../Styles/Card.css'
import Rating from '@mui/material/Rating';

function Card(props) {
    const tech = props.tech
    const techUsed = tech.map(item => {
        item = item.toUpperCase()
        return (
            <p key={item}>{item}</p>
        )
    })

    return (
        <div className="card">
            <div className="profiles">
                <img src={props.coverImg} alt='Project Cover'/>
                <div className='icons'>
                    <a href={props.url_repo} rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href={props.url} rel="noopener noreferrer" target="_blank"><i className="fa-solid fa-cloud"></i></a>
                </div>
            </div>
            <div className='cardContent'>
                <div className='cardHeader'>
                    <h2>{props.name}</h2>
                    <div className='difficulty'>
                        <Rating name="read-only" value={props.difficulty} size="small" readOnly />
                        <p>Difficulty</p>
                    </div>
                </div>
                    <p className='projectDesc'>{props.description}</p>
                    <div className='tech'>
                        <h3>Tech Used:</h3>
                        <div className="techList">
                            {techUsed}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;