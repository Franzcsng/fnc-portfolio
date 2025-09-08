import './GridTiles.scss'

const GridTiles = (props) => {

    const generateTiles = () => {
        let boxes = []
        let className
        for (let i = 0; i < 81; i++) {
        i%2 === 0 ? className = "even" : className = "odd" 
        boxes.push(<div key={i} className={`box-item ${className}`}></div>);
        }
        return boxes
    }

    return(
        <div className='grid-tiles-main'>
            {generateTiles()}

        {props.displayImage && (
            <>
            <div className='image-container'>
                
            </div>

            <img src={props.displayImage} ></img>
            </>
        )
        
        }
            
        </div>
    )
}

export default GridTiles