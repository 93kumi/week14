import BookCard from "./components/BookCard";

const books = [
  {
    id: 1,
    title: "子供おじさん入門編ー究極のおじさんへの道ー",
    author: "Tanaka こざさぶろう",
    rating: "★★★★☆",
    comment: "基礎からていねいで、最初の1冊によかった。美しいおじさんになれた気がする。僕はまだまだ小汚いおじさんだったんだ。",
  },
  {
    id: 2,
    title: "ポチ🐶",
    author: "ぐしゅう たかし ボレロ",
    rating: "★★★★★",
    comment: "心の中のポチが騒いだ。感動物語で、涙とよだれが止まらない。この本を読んでそそられた食欲と感動が入り混じって、読後はお腹が空いてしまった。",
  },
  {
    id: 3,
    title: "絶対に離さない💕💗ー（読者含む）きみへ捧げるこの思いー",
    author: "鈴木 一郎次郎",
    rating: "☆☆☆☆☆",
    comment: "執着心が強いきついきもおじの本です。ちょくちょくおじさん構文が混ざっていて好きな人は好きかも。辞書として手元に置きたい。",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold text-shadow-pink-500">
          わたしの本棚
        </h1>

        <div className="space-y-4 rounded-lg bg-pink-300 p-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
