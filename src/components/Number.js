import React, { Component } from 'react';
import { colors } from '../styleVariables';
export default class Number extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.number}>
                    {this.props.number}
                </span>
                <span style={styles.label}>
                    {this.props.label}
                </span>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        flex: 1,
        padding: '16px 0px',
    },

    number: {
        flexDirection: 'column',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.orange
    },

    label: {
        fontSize: 12,
        fontWeight: 'bold',
    }
}