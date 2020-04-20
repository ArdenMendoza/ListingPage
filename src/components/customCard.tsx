import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { itemDetails } from '../feed/model';

interface props {
    itemDetails: itemDetails;
}

export const customCard = ({ itemDetails }: props) => {
    const thumb = require('../assets/' + itemDetails.thumb);

    return <Card style={{ height: '450px' }}>
        <div className="cardImage" style={{ flex: 1, overflow: 'hidden', height: '500px' }}>
            <img src={thumb} style={{ height: '100%' }} />
        </div>
        <div className="cardTitle">
            {itemDetails.title_long}
        </div>
        <Link to={{ pathname: `/itemDetails/${itemDetails.id}`, state: { id: itemDetails.id } }}>
            <span className="cardLink">View Case Study</span>
        </Link>
    </Card>
}

export default customCard;
