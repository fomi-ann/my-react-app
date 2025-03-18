import profileImg from './assets/vivid-blurred-colorful-background_58702-2545.avif'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profileImg} alt="Profile picture" />
            <h2 className='card-title'>Anna Fomina</h2>
            <p className='card-text'>I code fun project, do HIIT and play D&D on the weekends.</p>
        </div>
    )
}

export default Card