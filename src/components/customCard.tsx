import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { itemDetails } from '../feed/model';

interface props {
    itemDetails: itemDetails;
}

export const customCard = ({ itemDetails }: props) => {
    const thumb = 'url(' + require('../assets/' + itemDetails.thumb) + ')';

    return <Card style={{ height: '450px' }}>
        <div className="cardImage" style={{
            flex: 1, overflow: 'hidden', 
            backgroundImage: thumb,
            backgroundSize: 'cover',
            height: '350px',
        }}>
        </div>
        <div className="cardTitle">
            {itemDetails.title_long}
        </div>
        <Link to={{ pathname: `/itemDetails/${itemDetails.id}`, state: { id: itemDetails.id } }}>
            <span className="cardLink">View Case Study</span>
        </Link>
    </Card >
}

export default customCard;
