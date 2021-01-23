# This assumes that webpack was already run to build the project
# and place the artifacts in the dist folder

FROM node
WORKDIR /app

# Let's see what is in the /app 
RUN ls -alt

COPY package.json .

# We want to only install production dependencies because the development
# dependencies are used only by webpack to build the artifacts
RUN npm install --production=true

RUN npm i -g http-server

# Copy artifacts from dist folder to dist folder in the container
COPY ./dist ./dist/

# Let's see eveything under /app 
RUN ls -altR

ARG PORT=10000
ENTRYPOINT [ "http-server", "/app/dist", "-p" ]

CMD [ "10000" ]

