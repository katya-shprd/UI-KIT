import React, { Component } from 'react';

import Badge from './Badge';
import Number from './Number';
import Card from './Card';

const articles = [
    {
        imageSource: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b798852e2af382a7dcaba528c2ea45ae&auto=format&fit=crop&w=634&q=80",
        title: "NASA goes to Mars: Austronauts could land on Red Planet by 2039",
        newsSource: "SPACE.com",
        topic: "science",
    },
    {
        imageSource: "https://images.unsplash.com/photo-1533134957610-83185986f38b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b7339cf658125119e20ac303b516e80&auto=format&fit=crop&w=1050&q=80",
        title: "Artic sea ice hits lowest winter maximum on record",
        newsSource: "CNN",
        topic: "science",
    },
    {
        imageSource: "https://images.unsplash.com/photo-1526048598645-62b31f82b8f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52e5962b9b38fd48875435c67b5f8b36&auto=format&fit=crop&w=1534&q=80",
        title: "The ballons that could fly tourists to the edge of space",
        newsSource: "CNN",
        topic: "hobbies",
    }
]

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Badge 
                    imageSource="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-768x512.jpg"
                    name="Anna Henrietta"
                    status="Photographer"
                />
                <div style={styles.row}>
                    <Number 
                        number={26}
                        label="Comments"
                    />
                    <Number 
                        number={7}
                        label="Channels"
                    />
                    <Number 
                        number={48}
                        label="Bookmarks"
                    />
                </div>
                
                {articles.map(item => (
                    <Card 
                    imageSource={item.imageSource}
                    title={item.title}
                    topic={item.topic}
                    newsSource={item.newsSource}
                    />) ) 
                }
            </div>
        )
    }
}
const styles = {
    row: {
        display: 'flex',
    }
}