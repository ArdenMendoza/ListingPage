import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../feed/data.json';
import CustomCard from '../components/customCard';

export class ItemList extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      items: data,
    };
  }

  render() {
    return <div style={{height: "100%"}}>
      <div style={{ height: "100%", margin: '0px auto', maxWidth: '1000px',  }}>
        {
          data.map(m => {
            return <CustomCard itemDetails={m} />
          })
        }
      </div>
    </div>
  }
}

export default ItemList;
