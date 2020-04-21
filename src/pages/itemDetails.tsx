import React from 'react';
import data from '../feed/data.json';
import { RouteComponentProps } from 'react-router';
import { item } from '../feed/model';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

interface state {
  itemDetails: item
}

export class ItemDetails extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemDetails: {} as item
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

    return <div style={{ height: '1200px' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, width: '50%', height: '100%' }}>
          <div style={{ height: '1107px', backgroundImage: imageUrl, backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}>
            <div className={'photoTag'}>{details.tag}</div>
          </div>
        </div>
        <div className={'itemDetailRightPanel'} style={{ flex: 1 }}>
          <div className={'ItemDetailTitle'}>{details.title}</div>
          {details.questions.map(q => {
            qCount++;
            return <div className={'itemDetailQGroup'}>
              <div style={{ fontSize: '32px', fontWeight: 1000 }}>
                Question {qCount}</div>
              <div style={{ textAlign: 'justify', fontSize: '21px', fontFamily: 'Georgia' }}>{q}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  }
}

export default ItemDetails;