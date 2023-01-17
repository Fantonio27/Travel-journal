
export default function Hero(props){
    let i = props.item.id
    i--
    console.log(i.length)
    return(
        <main>
            <div className="container-items">
                <div>
                    <img src={`./images/${props.item.images}`} />
                </div>
                <div className="container-info">
                    <p><img src="https://img.icons8.com/ios-filled/10.5/FA5252/visit.png"/>{props.item.country}<a href="https://www.google.com/maps" target="_blank">View on Google Maps</a></p>
                    <h1>{props.item.title}</h1>
                    <h6>{props.item.date}</h6>
                    <p className="p1">
                        {props.item.description}
                    </p>
                </div>
            </div>
            {<hr />}
            
        </main>
    )
}

