import "./styles.css";
import { useState } from "react";

var genreList = {
  javascript: [
    "4/5 Eloquent JavaScript: Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications",
    "3.5/5 You don't know JS: Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes.",
    "3/5 A Smarter Way to Learn JavaScript: JavaScript was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances, such as complex values, primitive values, scope, inheritance, the head object, and more",
    "4/5 JavaScript: The Good Parts: Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined ",
    "3.5/5 JavaScript: The Definitive Guide: JavaScript is a simple programming language from Netscape that can be embedded in your HTML Web pages. It allows you to control the behavior of the Web browser, add dynamically created text to your Web pages,  "
  ],
  fiction: [
    "5/5 Shiva Trilogy: The Immortals of Meluha is the first book of Amish Tripathi, first book of Amishverse, and also the first book of Shiva Trilogy",
    "4/5 Harry Potter and the Socerer's Stone: Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
    "5/5 Game of thrones: Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.",
    "5/5 House of the dragon: The story of the Targaryen civil war that took place about 200 years before events portrayed in `Game of Thrones.'",
    "5/5 Sherlock: Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases."
  ],
  business: [
    "3.5/5 Never split the difference: A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home",
    "5/5 Loonshots: * Instant WSJ bestseller * Translated into 18 languages* #1 Most Recommended Book of the year (Bloomberg annual survey of CEOs and entrepreneurs)*",
    "4/5 The Intelligent Investor: The Intelligent Investor by Benjamin Graham, first published in 1949, is a widely acclaimed book on value investing.",
    "5/5 Shoe Dog: A Memoir by the Creator of Nike: Shoe Dog is a memoir by Nike co-founder Phil Knight. The memoir chronicles the history of Nike from its founding as Blue Ribbon Sports and its early challenges to its evolution into one of the world's most recognized and profitable companies",
    "5/5 Rich Dad, Poor Dad: Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence."
  ]
};

export default function App() {
  var [bookList, setBookState] = useState("");

  var arrBookList = []; // new array declared to store food list

  //this makes a new array to traverse with map
  for (var i = 0; i < bookList.length; i++) {
    arrBookList[i] = bookList[i];
  }

  function buttonClickHandler(state) {
    var userClick = state.target.value;
    var foodList = genreList[userClick];
    setBookState(foodList);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <h2>Checkout my favourite books. Select a genre to get started.</h2>
      <button onClick={buttonClickHandler} value="javascript">
        JavaScript
      </button>
      <button onClick={buttonClickHandler} value="fiction">
        Fiction
      </button>
      <button onClick={buttonClickHandler} value="business">
        Business
      </button>

      <hr className="style-two" />
      <div>
        {arrBookList.map((book) => {
          return <p key={book}>{book}</p>;
        })}
      </div>
    </div>
  );
}
