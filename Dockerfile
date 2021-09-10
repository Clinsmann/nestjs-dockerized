FROM node:14-alpine

# WORKDIR /usr/src/app

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

# EXPOSE 8000

# CMD ["node", "dist/main"]
# the above for starting properly

EXPOSE 8000

# CMD ["node", "dist/main"]

# CMD ["yarn", "start:prod"]

# CMD ["yarn", "start"]

CMD ["yarn", "start:dev"]
