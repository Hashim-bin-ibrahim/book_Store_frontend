import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import Carousel from "react-material-ui-carousel";
import PulseLoader from "react-spinners/PulseLoader";
import author from "./authors";

import bg1 from "./images/bg_01.jpg";
import bg2 from "./images/bg_02.jpg";
import bg3 from "./images/bg_03.jpg";
import bg4 from "./images/bg_04.jpg";
import bg5 from "./images/bg_05.jpg";
import banner1 from "./images/big_img1.jpg";
import medical_banner from "./images/MedicalWeb.jpg";

import banner2 from "./images/big_img2.jpg";

export default function Home_Body({ user }) {
  const bgImages = [bg1, bg2, bg3, bg4, bg5];

  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log(author);
    getBooks();
  }, []);

  const getBooks = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getDetails`
    );
    setBooks(data);
  };

  console.log("books", books);

  return (
    <div>
      {/* main carousel effect  */}
      <div className="home__container">
        <Carousel
          autoPlay={true}
          indicators={false}
          className="home__carousel"
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {bgImages.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`Background ${i}`}
              className="home__image"
            />
          ))}
        </Carousel>
      </div>

      <div className="books">
        <h1>Best Sellers</h1>
        <div className="example">
          {books == "" ? (
            <div className="loader">
              <PulseLoader color="black" size={5} />
            </div>
          ) : (
            books.map((book) => (
              <div className="booksList" key={book.primary_isbn10}>
                <img src={book.book_image} alt={book.title} />
                <div className="book_details">
                  <h2>{book.title}</h2>
                  <p>by {book.author}</p>
                  <span style={{ color: "red" }}>&#x20B9; {book.price}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="books">
        <h1>New Arrivals</h1>
        <div className="example">
          {books.map((book) => (
            <div className="booksList" key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <div>
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="books">
        <div className="Middle_banner">
          <div className="left_banner">
            <h1>Fiction Books</h1>
            <img src={banner1} alt="" />
          </div>
          <div className="right_banner">
            <h1>Manga Mania Best Seller</h1>
            <img src={banner2} alt="" />
          </div>
        </div>
      </div>

      <div className="books">
        <h1>Internatinal Best Sellers</h1>
        <div className="example">
          {books.map((book) => (
            <div className="booksList" key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <div>
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="books">
        <h1>Award Winners</h1>
        <div className="example">
          {books.map((book) => (
            <div className="booksList" key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <div>
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="books">
        <div className="singleBanner">
          <img src={medical_banner} alt="" />
        </div>
      </div>

      <div className="books">
        <h1>BW Top 100 Books</h1>
        <div className="example">
          {books.map((book) => (
            <div className="booksList" key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <div>
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="books">
        <h1>Minimum 40% Discount and Above</h1>
        <div className="example">
          {books.map((book) => (
            <div className="booksList" key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <div>
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="books">
        <h1>Upto 45% Discount</h1>
        <div className="example">
          {books.map((book) => (
            <div className="booksList" key={book.primary_isbn10}>
              <img src={book.book_image} alt={book.title} />
              <div className="book_details">
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
                <span style={{ color: "red" }}>&#x20B9; {book.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="author_wrapper">
        <div className="authors">
          <div className="autors_header">
            <h1>Featured Author</h1>
          </div>
          <div className="authors_wrap">
            {author.map((item) => {
              return (
                <div className="authors_details">
                  <img
                    src={item.img}
                    width={80}
                    style={{ borderRadius: "50%" }}
                  />
                  <h1> {item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
