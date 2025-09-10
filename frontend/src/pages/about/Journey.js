import './Journey.scss'

const Journey = (props) => {
    return(
        <div className='journey-item'>
            <p>
                {props.journey}
            </p>
        </div>
    )
}

export default Journey