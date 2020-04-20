import React from 'react';
import data from '../feed/data.json';
import CustomCard from '../components/customCard';
import { item } from '../feed/model';

interface Props {
}
interface state {
  items: item[]
}
export class ItemList extends React.Component<Props, state>{
  constructor(props: any) {
    super(props);
    this.state = {
      items: data
    };
  }

  render() {
    return <div style={{height: "100%"}}>
      <div style={{ height: "100%"  }}>
        {
          this.state.items.map(m => {
            return <CustomCard itemDetails={m} />
          })
        }
      </div>
    </div>
  }
}

export default ItemList;
