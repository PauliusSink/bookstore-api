# Test task for the backend

> Backend API for books store

---

### Table of contents

-   [Description](#description)
-   [Technologies](#technologies)
-   [How to use](#how-to-use)

---

## Description

The owner of books store wants to allow clients to read, and leave reviews about books on his store. For this reason I created API witch allows clients to create, read, and update reviews about books in the store.

---

## Technologies

For this project, following technologies were used:

-   Typescript
-   GraphQL
-   MongoDB with mongoose
-   Express server
-   Apollo server

---

## How to use

### **Setup**

After cloning repository use command `npm install` to download all required packages.

Start MongoDB instance. You can do this by using `Docker`. Execute following command on the terminal:

```
docker run -d -p 27017:27017 --name bookstore mongo
```

The above command will run the container in the background. It will also allow to access database from host machine.

Use command `npm start` to start apllication.

### **API**

You can interact with API using following resolvers:

### Mutations:

#### Add book

```
addBook(name)
```

#### Sample call

```javascript
  mutation {
    addBook(name: "Animal Farm"){
      id
      name
      createdAt
      updatedAt
    }
  }
```

#### Update book

```
updateBook(name, newName)
```

#### Sample call

```javascript
  mutation {
    updateBook(name: "Animal Farm", newName: "The Art of War"){
      id
      name
      createdAt
      updatedAt
    }
  }
```

#### Add a review

```
addReview(bookId, review, author)
```

#### Sample call

```javascript
mutation {
  addReview(
    bookId: "603551cc77b66432d894546d"
    review: "Briliant book"
    author: "Alex White"
  ){
    id
    bookId
    review
    author
    createdAt
    updatedAt
  }
}
```

If author is not provided, then default value of **Anonymous** will be used.

#### Update review

```
updateReview(bookId, review, newReview)
```

#### Sample call

```javascript
mutation
{
  updateReview(
		bookId: "603551cc77b66432d894546d"
    review: "Briliant book"
    newReview: "Amazing"
  ){
    id
    bookId
    review
    author
    createdAt
    updatedAt
  }
}
```

### Queries

#### Fetch all books

```
books
```

#### Sample call

```javascript
{
  books {
    id
    name
    createdAt
    updatedAt
  }
}
```

#### Fetch book by ID

```
book(bookId)
```

#### Sample call

```javascript
{
  book(id: "603551cc77b66432d894546d") {
    id
    name
    createdAt
    updatedAt
  }
}
```

#### Check reviews using bookId

```
reviews(bookId)
```

#### Sample call

```javascript
{
  reviews(bookId:"603551cc77b66432d894546d") {
    id
    bookId
    review
    author
    createdAt
    updatedAt
  }
}
```

#### Fetch review by its ID

```
review(reviewID)
```

#### Sample call

```javascript
{
  review(reviwId: "6035532c77b66432d894546e") {
    id
    bookId
    review
    author
    createdAt
    updatedAt
  }
}
```

#### Find all authors of reviews

```
authors
```

#### Sample call

```javascript
{
    authors
}
```

> NOTE: By default you are able to acces GraphQL playground on http://localhost:3000/graphql
