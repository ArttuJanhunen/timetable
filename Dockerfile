FROM node:10.15.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install

RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "-l", "3000", "build"]
