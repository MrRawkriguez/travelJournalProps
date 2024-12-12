import MapMarker from '../images/path.png'
import './Entry.css'

function Entry (props) {
    console.log(props)
    return(
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src={props.img.src} alt={props.img.alt} />
            </div>
            <div className='info-container'>
                <div className='info-flex'>
                    <img className='marker' src={MapMarker} alt="map marker icon"/>
                    <span className='country'>Japan</span>
                    <a className='map-link' href={props.mapLink}>View on Google Maps</a>
                </div>
            <div className='entry-title'>{props.country}</div>
            <div className='trip-date'><p>{props.dates}</p></div>
            <div className='entry-text'><p>{props.text}</p></div>
            </div>

        </article>
    )
}

export default Entry