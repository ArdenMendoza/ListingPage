import React from 'react';
import { ReactComponent as AdrenalinLogo } from '../assets/adrenalin.svg';
import { Link } from 'react-router-dom';

export class Logo extends React.Component {
    render() {
        return <Link to='/'>
            <AdrenalinLogo />
        </Link>
    }
}

export default Logo;