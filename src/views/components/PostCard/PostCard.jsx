import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardActions from "react-md/lib/Cards/CardActions";
import Avatar from "react-md/lib/Avatars";
import Button from "react-md/lib/Buttons";
import "./PostCard.css";
import { browserHistory } from "react-router";

const n = (min = 0, max = 2) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default class PostCard extends Component {
  state = {
    color: ["green", "teal", "purple"]
  };
  render() {
    return (
      <Card style={{ marginTop: 20 }}>
        <div
          className={"tint " + this.state.color[n(0, 3)]}
          onClick={() => browserHistory.push("/post/" + this.props.post.id)}
        >
          <div className="hero-text">
            <div
              className="md-headline"
              style={{ color: "white", fontSize: "1.4vw" }}
            >
              {this.props.post.title.rendered || "loading"}
              <div>
                <div className="md-caption" style={{ color: "white" }}>
                  {this.props.post.date}
                </div>
              </div>
            </div>
            <div>
              <div><hr /></div>
              <Button flat primary label="Read More" style={{ color: "white" }}>
                navigate_next
              </Button>
            </div>
          </div>
          <img
            className="cardImage"
            src={
              this.props.post.better_featured_image
                ? this.props.post.better_featured_image.source_url
                : "http://lorempixel.com/400/300"
            }
            alt=""
            style={{ minHeight: 300 }}
          />
        </div>
        <CardTitle
          avatar={
            <Avatar
              src={this.props.post._embedded.author[0].avatar_urls[48] || null}
              role="presentation"
            />
          }
          title={this.props.post._embedded.author[0].name}
          subtitle={this.props.post._embedded.author[0].description || null}
        />
        <CardActions>
          <Button flat label="Action 1" />
          <Button flat label="Action 2" />
        </CardActions>
      </Card>
    );
  }
}
