import React, { Component } from 'react'

export default class NewsItem extends Component {
    

    render() {
     let {title,description,imageUrl,newsUrl}= this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://media.zenfs.com/en/quartz.com/8884929e4009cfec010fce1c0af25316":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div> 
                </div>
            </div>
        )
    }
}

