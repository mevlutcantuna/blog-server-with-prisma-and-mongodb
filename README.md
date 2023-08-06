## BLOG SERVER WITH PRISMA AND MONGODB

```
    Development URL = http://localhost:8080/
    Production URL = https://blog-server-with-prisma-and-mongodb-mct.vercel.app/
```

### Available Routes

#### **POST** `/login`

-   Used for logining in a user. Accepts `email`, and `password` to logining in. Returns user inforomations and Token.

#### **POST** `/signup`

-   Used for signing up a user. Accepts `fullname`, `email`, and `password` to create a user.

#### **GET** `/user`

-   Used for getting user informations. Accepts Barear Token which comes with logining in.

#### **POST** `/post`

-   Used for creating a post. Accepts `imageUrl`, `authorId`, `title` and `description`.

#### **GET** `/posts`

-   Used for getting all posts.

#### **GET** `/post/{id}`

-   Used for getting a detail of a post. `id` is post's id.

#### **DELETE** `/post/{id}`

-   Used for deleting a post. Accepts Bareer Token which comes with loging in. `id` is post's id.

#### **GET** `/lastest-post`

-   Used for getting lastest three posts.
