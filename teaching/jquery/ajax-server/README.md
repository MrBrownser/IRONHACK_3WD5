# Run the Server
##Install Ruby
According your operating system



## Install sinatra and sinatra/json gems
	gem install sinatra
	gem install sinatra-contrib

## Run the sinatra server
	ruby json.rb

# FAQ

## I can't access to the server
If you are inside a Virtual machine you need to redirect the port 3000 from host to guest.

## The javascript and css doesn't load
You need to put the files inside the *public* folder and name it in the html it without writing *public*.
