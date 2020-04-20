import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../feed/data.json';

export class ItemList extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      items: data,
    };
  }

  componentDidMount() {

  }
  handleEvent() {
    console.log(this.props);
  }

  render() {
    return <div style={{height: "100%"}}>
      {
        data.map(m => {
          const thumb = require('../assets/' + m.thumb);
          return <Card style={{ height: '450px' }}>
            <div className="cardImage" style={{ flex: 1, overflow: 'hidden' }}>
              <img src={thumb} style={{ height: '100%' }} />
            </div>
            <div className="cardTitle" style={{ height: '30px' }}>
              {m.title}
            </div>
            <Link to={`/itemDetails/${m.id}`}>
              <span className="cardLink">View Case Study</span>
            </Link>
          </Card>
        })
      }
    </div>
  }
}

export default ItemList;
