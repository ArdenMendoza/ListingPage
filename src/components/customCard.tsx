import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { item } from '../feed/model';

interface props {
    itemDetails: item;
}

export const customCard = ({ itemDetails }: props) => {
    const thumb = 'url(' + require('../assets/' + itemDetails.thumb) + ')';

    return <Card style={{ height: '521px', backgroundColor: '#f5f5f5' }}>
        <div className="cardImage" style={{
            flex: 1, overflow: 'hidden',
            backgroundImage: thumb,
            backgroundSize: 'cover',
            height: '350px',
        }}>
            <div className={'cardImageOverlay'}></div>
            <div className={'photoTag'}>{itemDetails.tag}</div>
        </div>
        <div style={{
            fontWeight: 'bold',
            fontSize: '24px',
            fontFamily: 'Arial',
            padding: '20px 0px 20px 0px'
        }}>
            {itemDetails.title_long}
        </div>
        <Link to={{ pathname: `/itemDetails/${itemDetails.id}`, state: { id: itemDetails.id } }}>
            <span className="cardLink">View Case Study</span>
        </Link>
    </Card >
}

export default customCard;
