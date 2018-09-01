import React, { Component } from 'react';
import { colors } from '../styleVariables';

export default class Badge extends Component {
    render() {
        return (
            <div style={styles.container}>
                <img 
                    style={styles.badgeImage}
                    src={this.props.imageSource}
                    alt=""/>
                <h1 style={styles.light}>{this.props.name}</h1>
                <span style={styles.labelLight}>{this.props.status}</span>
            </div>
        )
    }
}
//src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-768x512.jpg" 
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        background: colors.orange,
        padding: '32px 0px'
    },
    light: {
        color: colors.white,

    },
    labelLight: {
        color: colors.white,
        opacity: 0.7,
        fontSize: 12,
    },
    
    badgeImage: {
        width: 70,
        height: 70,
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '15px',
    }

}
