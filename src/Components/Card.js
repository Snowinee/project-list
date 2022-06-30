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
            <img src={props.coverImg} alt='Project Cover'/>
            <div className='cardContent'>
                <div className='cardHeader'>
                    <a href={props.url} target="_blank">{props.name}</a>
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