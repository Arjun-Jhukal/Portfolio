// import { useState, useEffect } from "react";
import "./_BlogDetail.scss";
// import image01 from "../../assets/img/blog/05.jpg";

import { AiOutlineUser, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { BlogItems } from "../../data";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const currentItem = BlogItems[id];
  const descriptionArray = currentItem.description;
  return (
    <div className="blog section_gap">
      <div className="blog__image">
        <img src={`${[currentItem.image]}`} alt={`${[currentItem.title]}`} />
      </div>
      <div className="blog__header">
        <h1 className="md_heading">{`${[currentItem.title]}`}</h1>
        <ul className="blog__header__info">
          <li>
            <AiOutlineUser size={20} />
            <span>{`${[currentItem.author]}`}</span>
          </li>
          <li>
            <AiOutlineHeart size={20} />
            <span>{`${[currentItem.like]}`}</span>
          </li>
        </ul>
      </div>

      {/* <div className="blog__text">
        <p>{`${[currentItem.intro[0]]}`}</p>

        <p>{`${[currentItem.intro[1]]}`} </p>

        <img src={`${[currentItem.image_01]}`} alt={`${[currentItem.title]}`} />

        <em>{`${[currentItem.em]}`}</em>

        <h4>{`${[currentItem.activities.title]}`}</h4>

        <ul>
          {activityListArray.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        <h4>{`${[currentItem.wishes.title]}`}</h4>

        <ul>
          {wishListArray.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div> */}
      <div className="blog__text">
        {descriptionArray.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>

      <div className="blog__author">
        <h1 className="sm_heading">By {`${[BlogItems[id].author]}`}</h1>
        <em>{`${[BlogItems[id].authorMessage]}`}</em>
      </div>

      <div className="blog__share">
        <h1 className="sm_heading">Share:</h1>
        <ul className="socials">
          <li>
            <a href="#" title="Share on Facebook">
              <BsFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="#" title="Share on Twitter">
              <BsTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="#" title="Share on Instagram">
              <BsInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="#" title="Copy Link">
              <BiCopy size={20} />
            </a>
          </li>
        </ul>
      </div>

      <ul className="blog__nav">
        <li>
          <span>Prev Post</span>
          <a href="#" className="sm_heading">
            Tips on Minimalist
          </a>
        </li>
        <li>
          <span>Next Post</span>
          <a href="#" className="sm_heading">
            Less is More
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogDetail;
