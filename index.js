let text = document.getElementById("quotes");
let author = document.getElementById("author");
const NewQuote = async () => {
  var url = "https://type.fit/api/quotes";
  const data = await fetch(url);
//   console.log( typeof data);
  const alldata = await data.json();
  const newdata = Math.floor(Math.random() * alldata.length);
  const Nextquote = alldata[newdata].text;
  text.innerHTML = Nextquote;
  const authorName = alldata[newdata].author;
  author.innerHTML = " ~ " + authorName;
};
NewQuote();
