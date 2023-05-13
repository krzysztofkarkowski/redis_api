# redis_api instruction

Step 1:
  
  In docker, create a new container and set it to port 6379:6379 for example in the command line:

    docker run -d --name <CONTAINER_NAME> -p 127.0.0.1:6379:6379 redis

  You can test the connection by command line (make sure the container is running):

    docker exec -it <CONTAINER_NAME> sh
    # redis-cli
    ping
  
Step 2:

  Open project by code editor.

  Find terminal and navigate to project path

  Run npm init

  Run npm run dev

  View data by browser http://localhost:3000/get_data/key where key is a name of database key
  
  Set data by browser http://localhost:3000/set_data?key=name&value=Johnw where key is where key is a name of database key
