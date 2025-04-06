import './styles.css';
import create from './assets/images/Create.png';
import read from './assets/images/Read.png';
import update from './assets/images/Update.png';
import del from './assets/images/Delete.png';
import adv from './assets/images/Advanced.png';

function App() {
  return (
    <div className="App">
      <h1>MongoDB Exercise Task</h1>
      <div className='create'>
        <h2>Create Operation in MongoDB</h2>
        <p>
          The Create operation in MongoDB is used to insert new documents into a
          collection.
        </p>
        <p>
        ⦁ insertOne() – Inserts a single document.<br />
        ⦁ insertMany() – Inserts multiple documents at once.
        </p>
        <pre>{`
          use library
          db.createCollection("books")
          db.books.insertOne({
            title: "Deep Work",
            author: "Cal Newport",
            published_year: 2016
          })
        `}</pre>
        <h3>Explanation:</h3>
        <p>
          {[
            "➤➤ use library → Switch to or create the library database.",
            "➤➤ db.createCollection('books') → Create a collection named books.",
            "➤➤ db.books.insertOne({...}) → Insert a book document into the books collection."
          ].map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </p>
        <h3>Screenshot:</h3>
        <img src={create} alt="create" />
      </div>



      <div className='read'>
        <h2>Read Operation in MongoDB</h2>
        <p>
          The Read operation in MongoDB is used to retrieve documents from a collection.
        </p>
        <p>
        ⦁ findOne() – Retrieves a single document that matches the query.<br />
        ⦁ find() – Retrieves multiple documents based on the query.
        </p>
        <pre>{`
          db.books.find()
          db.books.find({author: "Cal Newport"})
          db.books.find().sort({ published_year: 1 }).limit(1)
        `}</pre>
        <h3>Explanation:</h3>
        <p>
          {[
            "➤➤ db.books.find() -→ Retrieve all documents from books.",
            "➤➤ db.books.find({author: 'Cal Newport'}) -→ Find books by author Cal Newport.",
            "➤➤ db.books.find().sort({ published_year: 1 }).limit(1) -→ Get the earliest published book."
          ].map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </p>
        <h3>Screenshot:</h3>
        <img src={read} alt="read" />
      </div>


      <div className='update'>
        <h2>Update Operation in MongoDB</h2>
        <p>
          The Update operation in MongoDB is used to modify existing documents in a collection.
        </p>
        <p>
        ⦁ updateOne() – Updates a single document that matches the filter.<br />
        ⦁ updateMany() – Updates multiple documents that match the filter.<br />
        ⦁ replaceOne() – Replaces an entire document with a new one.
        </p>
        <pre>{`
          db.books.updateOne({title: "Deep Work"}, {$set: {published_year: 2016}})
          db.books.updateMany({}, {$set: {genre: "Productivity, Self-Help, Business"}})
        `}</pre>
        <h3>Explanation:</h3>
        <p>
          {[
            "➤➤ db.books.updateOne({...}) -→ Update one document by title.",
            "➤➤ db.books.updateMany({...}) -→ Add a genre field to all books."
          ].map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </p>
        <h3>Screenshot:</h3>
        <img src={update} alt="update" />
      </div>


      <div className='delete'>
        <h2>Delete Operation in MongoDB</h2>
        <p>
        The Delete operation in MongoDB is used to remove documents from a collection.
        </p>
        <p>
        ⦁ deleteOne() – Deletes a single document that matches the filter.<br/>
        ⦁ deleteMany() – Deletes multiple documents that match the filter.
        </p>
        <pre>{`
          db.books.deleteOne({ title: "1984" })
          db.books.deleteMany({ published_year: { $lt: 2000 } })
        `}</pre>
        <h3>Explanation:</h3>
        <p>
          {[
            "➤➤ db.books.deleteOne({...}) -→ Remove a single book titled '1984'.",
            "➤➤ db.books.deleteMany({...}) -→ Delete books published before 2000."
          ].map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </p>
        <h3>Screenshot:</h3>
        <img src={del} alt="del" />
      </div>


      <div className='advanced'>
        <h2> Advanced MongoDB CRUD Operations</h2>
        <p>
        MongoDB provides powerful features beyond basic CRUD operations, such as upserts, projections, aggregation, and transactions.
        </p>
        <p>
          
        </p>
        <pre>{`
          db.books.find().sort({published_year: -1}).limit(3)
          db.books.find({title: {$regex: "MongoDB|NoSQL", $options: "i"}})
        `}</pre>
        <h3>Explanation:</h3>
        <p>
          {[
            "➤➤ db.books.find().sort({published_year: -1}).limit(3) -→ Get latest 3 books.",
            "➤➤ db.books.find({title: {$regex: 'MongoDB|NoSQL', $options: 'i'}}) -→ Search books with MongoDB/NoSQL in the title."
          ].map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </p>
        <h3>Screenshot:</h3>
        <img src={adv} alt="adv" />
      </div>
    </div>
  );
}

export default App;
