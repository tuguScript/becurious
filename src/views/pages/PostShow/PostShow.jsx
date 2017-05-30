import React, { Component } from "react";
import { API_BASE_URL } from "../../../core/constants.js";
import { Parallax, Background } from "react-parallax";
import "./PostShow.css";

export default class PostShow extends Component {
  state = {};
  async componentDidMount() {
    let _id = this.props.params.id;
    const res = await fetch(
      API_BASE_URL + "/wp-json/wp/v2/posts/" + _id + "?_embed"
    );
    const post = await res.json();
    this.setState({ post });
    console.log("postshow state: ", this.state);
  }
  createMarkup() {
    return { __html: "First &middot <br />; Second" };
  }
  render() {
    return (
      <div className="postShow">
        <div className="header">
          <Parallax strength={300} bgStyle={{ width: "100%", height: "200px" }}>
            <Background>
              <img
              style={{width: '100%'}}
                src={
                  this.state.post
                    ? this.state.post.better_featured_image
                        ? this.state.post.better_featured_image.source_url
                        : null
                    : null
                }
                alt=""
              />
            </Background>
            <div className="heroText">
              <div
                style={{ color: "white", textShadow: "2px 2px 4px #000000" }}
                className="date md-caption"
              >
                {this.state.post ? this.state.post.date.slice(0, 10) : null}
              </div>
              <div
                style={{ color: "white", textShadow: "2px 2px 4px #000000" }}
                className="title md-display-1 md-text-center"
              >
                {this.state.post ? this.state.post.title.rendered : null}
              </div>
            </div>
          </Parallax>
        </div>
        <div className="postContent">
          <div className="postShowAuthor">
            <img
              src={this.state.post
                  ? this.state.post._embedded.author[0].avatar_urls[96]
                  : null}
              alt=""
              height="80"
              width="80"
              style={{ borderRadius: "50%" }}
            />
            <div style={{ padding: "0px 0px 0px 10px", margin: "auto 0px" }}>
              <div style={{ fontSize: "20px" }}>
                {this.state.post
                  ? this.state.post._embedded.author[0].name
                  : null}
              </div>
              <div>{this.state.post
                  ? this.state.post._embedded.author[0].description
                  : null}</div>
            </div>
          </div>
          <div className="md-subheading-2 md-text-justify">
            {this.state.post
              ? <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: this.state.post.content.rendered
                  }}
                />
              : <h1>loading</h1>}
          </div>
        </div>
      </div>
    );
  }
}
