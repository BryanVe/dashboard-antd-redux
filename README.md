# dashboard-antd-redux

## Intructions:
### Server:
  - MongoDB:
    - You must have [`mongodb`](https://www.mongodb.com/) installed.
    - Open a console and run `mongod`.
  - Repo:
    - Open another console and run the next commands:
      - `cd Desktop`
      - `git clone https://github.com/BryanVe/dashboard-antd-redux.git`
      - `cd dashboard-antd-redux`
      - `cd server`
    - If you have VSCode run `code .`, otherwise open your editor code:
      - Then create inside server folder a `.env` file.
      - And create a enviroment variable called `SECRET` and give it a string value (for example SECRET=secret_key).
    - Finally run:
      - `npm install`
      - `npm run dev`
### Client:
  - Repo:
    - Open another console and run the next commands:
      - `cd Desktop`
      - `cd dashboard-antd-redux`
      - `cd client`
      - `npm install`
      - `npm start`