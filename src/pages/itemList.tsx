import React from 'react';
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
      <div style={{ height: "100%"  }}>
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
