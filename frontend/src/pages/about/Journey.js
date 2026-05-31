import './Journey.scss'

const Journey = (props) => {
    return(
        <a href={`#${props.journey}`} className='journey-item'>
            <p>
                {props.journey}
            </p>
        </a>
    )
}

export default Journey