require 'sinatra'      # gem install sinatra
require "sinatra/json" # gem install sinatra-contrib

set :port, 3000
set :bind, '0.0.0.0'

get '/' do
  send_file 'exercise.html'
end

get '/hello/:name' do
	"Hello #{params[:name]}! This is a server response"
end

get '/exchange/*' do
	change = { "euro" => 1, "dollar" => 1.25, "pound" => 0.8, "yen" => 145 }
	amountInEuro = params[:amount].to_f / change[params[:currency]]

	result = {}
	change.each { |k, v| result[k] = (v * amountInEuro).round(2) }
	json result
end

post '/add' do
	expectedParams = ['age-range', 'color', 'love', 'name']
	missingParams = expectedParams - params.keys.sort
	if !(missingParams).empty?
		status 400
		json missingParams
    else
        "Saved correctly"
	end
end

get '/sleep' do
	sleep(2.0)
	rnd = rand()

	if (rnd >= 0.5)
		status 400
	else
		"OK"
	end
end


