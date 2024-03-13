FROM node:16 as base-image

#Env variables
ENV NODE_ENV=development
ENV MONGO_URL=mongodb://mongo1:27021,mongo2:27022,mongo3:27023/stockbroker
ENV PORT=7500

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

# Install ts-node globally for running TypeScript code
RUN npm install -g ts-node

COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE ${PORT}

# Start the app with npm run dev to show logs inside the container
CMD [ "npm", "run", "dev" ]


