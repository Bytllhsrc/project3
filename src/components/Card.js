
import star from "../images/star.png"

export default function Card(props) {

    

    console.log(props.data.price);
    console.log(process.env.PUBLIC_URL);
    
    let badgeText;
    if(props.data.openSpots===0){
        badgeText= "Sold Out"
    }else{
        badgeText="Online"
    }

    return (
        <>
            <div className="card">
                <div className="card-badge">{badgeText}</div>
                <img src={process.env.PUBLIC_URL + "./images/" + props.data.coverImg} alt="" className="card-img" />

                <div className="card-stats">
                    <img src={star} alt="" className="card-rating-icon" />
                    <span className="card-rating">{props.data.stats.rating}</span>
            
                    <span className="gray">({props.data.stats.reviewCount})</span>
                    <span className="gray">{props.data.location}</span>
                </div>
                <p>{props.data.title}</p>
                <p><span className="bold">From ${props.data.price} /</span>person</p>
            </div>

            

        </>
    )
}

