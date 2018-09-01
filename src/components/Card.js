import React, { Component } from 'react';
import { colors } from '../styleVariables';

const icon = require('../assets/source.png');

export default class Card extends Component {
    render() {
        return (
            <div style={styles.container}> 
                <img 
                style={styles.image} 
                src={this.props.imageSource}
                alt=""/>
                <div style={styles.description}>
                    <h2>{this.props.title}</h2>
                    <div style={styles.rowSpread}>
                        <div>
                            <img style={styles.icon} src={icon} alt="source icon" />
                            <span style={styles.sourceLabel}>{this.props.newsSource}</span>
                        </div>    
                        <span style={styles.topicLabel}>{this.props.topic}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        border: `1px solid ${colors.gray}`,
        padding: '18px 15px'
    },
    rowSpread: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        height: 16,
        opacity: 0.3,
    },
    sourceLabel: {
        fontSize: 12,
        paddingLeft: 16,
    },
    topicLabel: {
        fontSize: 12,
        textTransform: 'uppercase',
    },
    image: {
        width: 102,
        height: 127,
        objectFit: 'cover',
    }

}