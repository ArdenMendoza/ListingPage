import React from 'react';
import data from '../feed/data.json';
import { RouteComponentProps } from 'react-router';
import { itemDetails } from '../feed/model';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

interface state {
  itemDetails: itemDetails
}

export class ItemDetails extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemDetails: {} as itemDetails
    };
  }
  componentWillMount() {
    const id = parseInt(this.props.match.params.id);
    this.setState({
      itemDetails: data.filter(f => f.id == id)[0]
    });
  }

  render() {
    const details = this.state.itemDetails;
    const imageUrl = 'url(' + require('../assets/' + details.image) + ')';
    let qCount: number = 0;

    return <div style={{ height: "100%" }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, width: '50%', height: '100%' }}>
          <div style={{ height: '100%', backgroundImage: imageUrl, backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}>
          </div>
        </div>
        <div className={'itemDetailRightPanel'} style={{ flex: 1 }}>
          <div className={'ItemDetailTitle'}>{details.title}</div>
          {details.questions.map(q => {
            qCount++;
            return <div className={'itemDetailQGroup'}>
              <div className={'itemDetailQLabel'} >Question {qCount}</div>
              <div style={{textAlign: 'justify'}}>{q}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  }
}

export default ItemDetails;